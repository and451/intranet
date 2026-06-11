import { Scale, MonitorCog, ExternalLink } from "lucide-react";
import BoletinsExplorer from "@/components/BoletinsExplorer";
import { getBoletins } from "@/lib/content";

export const metadata = { title: "Normas e Boletins — INTRAEB" };

// Páginas completas na intranet antiga (rede da AEB); PDFs principais locais
const normas = [
  {
    titulo: "Atos Normativos",
    descricao:
      "Resoluções, portarias e demais atos normativos da AEB, com ementa, status de vigência e link para o Diário Oficial.",
    url: "https://intranet-old.aeb.gov.br/atos-normativos/",
    Icone: Scale,
    pdfs: [{ label: "Lista consolidada (PDF)", href: "/docs/normas/lista-atos-normativos.pdf" }],
  },
  {
    titulo: "Políticas e Normativos de TIC",
    descricao:
      "PGTIC, PETIC, PDTIC, Plano de Dados Abertos e demais políticas que orientam o uso de tecnologia da informação na AEB.",
    url: "https://intranet-old.aeb.gov.br/politicas-e-normativos-de-tic/",
    Icone: MonitorCog,
    pdfs: [
      { label: "PGTIC (PDF)", href: "/docs/normas/pgtic.pdf" },
      { label: "PDTIC 2020–2021 (PDF)", href: "/docs/normas/pdtic-2020-2021.pdf" },
    ],
  },
];

export default function BoletinsPage() {
  const boletins = getBoletins();

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Normas e Boletins</h1>
      <p className="text-sm text-[#737373] mb-6 max-w-[760px]">
        Boletins internos publicados pela CGP e normativos da Agência. Os
        documentos abrem na intranet antiga, acessível apenas na rede da AEB.
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-[#242424] mb-3">Normas</h2>
        <div className="grid grid-cols-2 gap-4">
          {normas.map(({ titulo, descricao, url, Icone, pdfs }) => (
            <div
              key={titulo}
              className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] p-5 flex gap-4"
            >
              <div className="w-11 h-11 bg-[#E7EFFB] rounded-lg flex items-center justify-center flex-shrink-0">
                <Icone className="w-5 h-5 text-[#0B4DA2]" />
              </div>
              <div className="flex-1 min-w-0">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14.5px] font-semibold text-[#242424] hover:text-[#0B4DA2] transition inline-flex items-center gap-1.5 group"
                >
                  {titulo}
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                </a>
                <p className="text-[12.5px] text-[#616161] leading-relaxed mt-1">{descricao}</p>
                <p className="flex gap-3 flex-wrap mt-2">
                  {pdfs.map((pdf) => (
                    <a
                      key={pdf.href}
                      href={pdf.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#0B4DA2] hover:underline"
                    >
                      {pdf.label}
                    </a>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-[#242424] mb-3">Boletins Internos</h2>
        <BoletinsExplorer boletins={boletins} />
      </section>
    </div>
  );
}
