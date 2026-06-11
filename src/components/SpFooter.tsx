import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

// Rodapé institucional padrão gov.br (navy), conforme o Claude Design (IntraFooter)
const colunas = [
  {
    titulo: "Institucional",
    links: [
      { label: "Agência Espacial Brasileira", href: "https://www.gov.br/aeb/pt-br", externo: true },
      { label: "Sobre a INTRAEB", href: "/sobre-nos", externo: false },
      { label: "Contato", href: "/contato", externo: false },
    ],
  },
  {
    titulo: "Conteúdo",
    links: [
      { label: "Notícias", href: "/noticias", externo: false },
      { label: "Normas e Boletins", href: "/boletins", externo: false },
      { label: "AEB Escola", href: "/aeb-escola", externo: false },
    ],
  },
  {
    titulo: "Sistemas",
    links: [
      { label: "Todos os sistemas", href: "/sistemas", externo: false },
      { label: "SEI", href: "https://sei.aeb.gov.br/", externo: true },
      { label: "PETRVS (PGD)", href: "https://pgd-petrvs.aeb.gov.br/", externo: true },
    ],
  },
];

const redes = [
  { titulo: "LinkedIn", href: "https://www.linkedin.com/company/agencia-espacial-brasileira-oficial/", Icone: Linkedin },
  { titulo: "Instagram", href: "https://www.instagram.com/agenciaespacialbrasileira/", Icone: Instagram },
  { titulo: "Facebook", href: "https://www.facebook.com/agenciaespacialbrasileira/", Icone: Facebook },
  { titulo: "YouTube", href: "https://www.youtube.com/@AEBoficial", Icone: Youtube },
];

export default function SpFooter() {
  return (
    <footer className="bg-[#071D41] text-white/80 mt-8">
      <div className="max-w-[1204px] mx-auto px-6 py-8">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
          <div>
            <strong className="text-white text-base">INTRAEB</strong>
            <p className="text-xs leading-relaxed mt-2">
              Intranet corporativa da Agência Espacial Brasileira — o ponto de
              chegada do seu dia de trabalho.
            </p>
            <p className="text-[11px] text-white/60 leading-relaxed mt-3">
              Setor Policial, Área 5, Quadra 3, Bloco A — Brasília/DF
              <br />
              adm_intranet@aeb.gov.br · +55 (61) 2033-4000
            </p>
            <div className="flex gap-2 mt-4">
              {redes.map(({ titulo, href, Icone }) => (
                <a
                  key={titulo}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={titulo}
                  className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition"
                >
                  <Icone className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {colunas.map((c) => (
            <div key={c.titulo} className="flex flex-col gap-2">
              <strong className="text-white text-xs uppercase tracking-wider mb-1">{c.titulo}</strong>
              {c.links.map((l) =>
                l.externo ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/70 hover:text-white hover:underline"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-xs text-white/70 hover:text-white hover:underline"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap border-t border-white/15 mt-7 pt-4 text-[11px] text-white/60">
          <span>Todo o conteúdo deste sítio está sob licença aberta, salvo indicação em contrário.</span>
          <span className="font-semibold text-white/80">Governo Federal · gov.br</span>
        </div>
      </div>
    </footer>
  );
}
