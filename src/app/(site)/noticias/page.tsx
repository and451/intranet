import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getNoticias, formatarData } from "@/lib/content";

const POR_PAGINA = 20;

// Selo da fonte no estilo dos BriefingItem do Claude Design
const fontes: Record<string, { rotulo: string; fundo: string; cor: string }> = {
  "Notícia": { rotulo: "Notícia", fundo: "#E7EFFB", cor: "#0B4DA2" },
  "Últimas": { rotulo: "Últimas", fundo: "#E3F5E1", cor: "#168821" },
  "Avisos": { rotulo: "Aviso", fundo: "#FFF3CD", cor: "#7A5C00" },
  "Clipping": { rotulo: "Clipping", fundo: "#F0E6FF", cor: "#6B3FA0" },
  "Acontece": { rotulo: "Acontece", fundo: "#FCE7F3", cor: "#9D2463" },
  "HoraH": { rotulo: "Hora H", fundo: "#FFE8D9", cor: "#B3541E" },
};
const fontePadrao = { rotulo: "AEB", fundo: "#EAEAEA", cor: "#444444" };

export default async function NoticiasPage({
  searchParams,
}: {
  searchParams: Promise<{ pagina?: string }>;
}) {
  const { pagina } = await searchParams;
  const paginaAtual = Math.max(1, Number(pagina) || 1);
  const todas = getNoticias();
  const totalPaginas = Math.ceil(todas.length / POR_PAGINA);
  const noticias = todas.slice((paginaAtual - 1) * POR_PAGINA, paginaAtual * POR_PAGINA);

  return (
    <div className="max-w-[860px] mx-auto">
      <div className="flex items-baseline justify-between mb-5">
        <h1 className="text-2xl font-bold text-[#1a1a1a]">Notícias</h1>
        <span className="text-xs text-[#737373]">{todas.length} publicações</span>
      </div>

      <div className="flex flex-col gap-3">
        {noticias.map((n) => {
          const fonte = fontes[n.categorias[0] ?? ""] ?? fontePadrao;
          return (
            <article
              key={n.id}
              className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] p-4 flex gap-3.5"
            >
              <div
                className="self-start text-[10px] font-bold px-2.5 py-1 rounded whitespace-nowrap flex-shrink-0 mt-0.5"
                style={{ background: fonte.fundo, color: fonte.cor }}
              >
                {fonte.rotulo}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-[11.5px] text-[#616161] mb-1 flex-wrap">
                  <span className="font-semibold">{n.categorias[1] ?? "Agência Espacial Brasileira"}</span>
                  <span>·</span>
                  <span>{formatarData(n.data)}</span>
                </div>
                <h2 className="text-[15px] font-semibold text-[#242424] leading-snug">
                  <Link href={`/noticias/${n.slug}`} className="hover:text-[#0B4DA2] transition">
                    {n.titulo}
                  </Link>
                </h2>
                {n.resumo && (
                  <p className="text-[13px] text-[#616161] leading-relaxed mt-1 line-clamp-2">{n.resumo}</p>
                )}
                <Link
                  href={`/noticias/${n.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B4DA2] hover:underline mt-2"
                >
                  Ler notícia <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>

              {n.imagem && (
                <img
                  src={n.imagem}
                  alt=""
                  className="w-[110px] h-[78px] rounded object-cover flex-shrink-0 self-start"
                />
              )}
            </article>
          );
        })}
      </div>

      {/* Paginação */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {paginaAtual > 1 && (
          <Link
            href={`/noticias?pagina=${paginaAtual - 1}`}
            className="px-4 py-2 text-xs font-semibold bg-white border border-[#E1E1E1] rounded hover:bg-[#F5F5F5] transition"
          >
            Anterior
          </Link>
        )}
        <span className="text-xs text-[#737373] px-3">
          Página {paginaAtual} de {totalPaginas}
        </span>
        {paginaAtual < totalPaginas && (
          <Link
            href={`/noticias?pagina=${paginaAtual + 1}`}
            className="px-4 py-2 text-xs font-semibold bg-white border border-[#E1E1E1] rounded hover:bg-[#F5F5F5] transition"
          >
            Próxima
          </Link>
        )}
      </div>
    </div>
  );
}
