// Gera src/content/*.json e public/images/noticias/* a partir do export da
// intranet antiga em ../../inspiração/Intranet-Old (ver scripts/export-old-intranet.ps1).
// Uso: node scripts/build-content.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const intranetRoot = path.resolve(projectRoot, "..", "..");

const inspDirName = fs
  .readdirSync(intranetRoot)
  .find((n) => n.toLowerCase().startsWith("inspira"));
if (!inspDirName) throw new Error(`Pasta de inspiração não encontrada em ${intranetRoot}`);
const exportDir = path.join(intranetRoot, inspDirName, "Intranet-Old");
const jsonDir = path.join(exportDir, "json");

const contentDir = path.join(projectRoot, "src", "content");
const imgOutDir = path.join(projectRoot, "public", "images", "noticias");
fs.mkdirSync(contentDir, { recursive: true });
fs.mkdirSync(imgOutDir, { recursive: true });

const readJson = (name) =>
  JSON.parse(fs.readFileSync(path.join(jsonDir, name), "utf8"));

const posts = readJson("posts.json");
const categories = readJson("categories.json");
const catMap = new Map(categories.map((c) => [c.id, c.name]));

const decodeEntities = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&nbsp;/g, " ");

const stripHtml = (s) => decodeEntities(s.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

// Links e mídias do conteúdo apontam para o domínio antigo; o que ainda existe
// responde em intranet-old (só acessível na rede da AEB).
const fixDomains = (html) =>
  html.replaceAll("http://intranet.aeb.gov.br", "https://intranet-old.aeb.gov.br")
      .replaceAll("https://intranet.aeb.gov.br", "https://intranet-old.aeb.gov.br");

// Mapa das imagens destacadas já baixadas: <mediaId>_<arquivo>
const featuredDir = path.join(exportDir, "images", "featured");
const featuredFiles = new Map();
for (const f of fs.readdirSync(featuredDir)) {
  const id = Number(f.split("_")[0]);
  if (id) featuredFiles.set(id, f);
}

const isBoletim = (p) => /BOLETIM INTERNO/i.test(p.title.rendered);

// ---------- Notícias ----------
const noticias = [];
let copied = 0;
for (const p of posts.filter((p) => !isBoletim(p))) {
  let imagem = null;
  const src = featuredFiles.get(p.featured_media);
  if (src) {
    const ext = path.extname(src).toLowerCase() || ".jpg";
    const dest = `${p.featured_media}${ext}`;
    const destPath = path.join(imgOutDir, dest);
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(path.join(featuredDir, src), destPath);
      copied++;
    }
    imagem = `/images/noticias/${dest}`;
  }
  noticias.push({
    id: p.id,
    slug: p.slug,
    titulo: decodeEntities(p.title.rendered),
    data: p.date,
    categorias: (p.categories || [])
      .map((id) => catMap.get(id))
      .filter((n) => n && !/^\d{4}$/.test(n)),
    resumo: stripHtml(p.excerpt?.rendered || "").slice(0, 300),
    conteudoHtml: fixDomains(p.content.rendered),
    imagem,
    linkOriginal: fixDomains(p.link),
  });
}
noticias.sort((a, b) => b.data.localeCompare(a.data));
fs.writeFileSync(path.join(contentDir, "noticias.json"), JSON.stringify(noticias));
console.log(`noticias.json: ${noticias.length} notícias (${copied} imagens copiadas)`);

// ---------- Boletins ----------
const boletins = [];
for (const p of posts.filter(isBoletim)) {
  const titulo = decodeEntities(p.title.rendered).replace(/\s+/g, " ").trim();
  const pdfMatch = p.content.rendered.match(/href="([^"]+\.pdf)"/i);
  boletins.push({
    id: p.id,
    titulo,
    tipo: /SUPLEMENTAR/i.test(titulo) ? "Suplementar" : "Ordinário",
    data: p.date,
    ano: Number(p.date.slice(0, 4)),
    pdfUrl: pdfMatch ? fixDomains(pdfMatch[1]) : fixDomains(p.link),
  });
}
boletins.sort((a, b) => b.data.localeCompare(a.data));
fs.writeFileSync(path.join(contentDir, "boletins.json"), JSON.stringify(boletins));
console.log(`boletins.json: ${boletins.length} boletins`);
