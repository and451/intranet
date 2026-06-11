import noticiasData from "@/content/noticias.json";
import boletinsData from "@/content/boletins.json";

export interface Noticia {
  id: number;
  slug: string;
  titulo: string;
  data: string;
  categorias: string[];
  resumo: string;
  conteudoHtml: string;
  imagem: string | null;
  linkOriginal: string;
}

export interface Boletim {
  id: number;
  titulo: string;
  tipo: "Suplementar" | "Ordinário";
  data: string;
  ano: number;
  pdfUrl: string;
}

const noticias = noticiasData as Noticia[];
const boletins = boletinsData as Boletim[];

export function getNoticias(): Noticia[] {
  return noticias;
}

export function getNoticia(slug: string): Noticia | undefined {
  return noticias.find((n) => n.slug === slug);
}

export function getNoticiasRecentes(quantidade: number, comImagem = false): Noticia[] {
  const fonte = comImagem ? noticias.filter((n) => n.imagem) : noticias;
  return fonte.slice(0, quantidade);
}

export function getBoletins(): Boletim[] {
  return boletins;
}

export function getBoletinsRecentes(quantidade: number): Boletim[] {
  return boletins.slice(0, quantidade);
}

export function formatarData(iso: string): string {
  const [ano, mes, dia] = iso.slice(0, 10).split("-");
  return `${dia}/${mes}/${ano}`;
}
