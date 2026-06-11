import Link from "next/link";
import { Newspaper } from "lucide-react";
import { getNoticias, formatarData } from "@/lib/content";

const POR_PAGINA = 20;

const coresCategorias: Record<string, string> = {
  "Notícia": "bg-blue-50 text-blue-700",
  "Últimas": "bg-emerald-50 text-emerald-700",
  "Avisos": "bg-amber-50 text-amber-700",
  "Clipping": "bg-purple-50 text-purple-700",
  "Eventos": "bg-pink-50 text-pink-700",
};

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
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6">Notícias</h1>
      <div className="grid gap-4">
        {noticias.map((n) => (
          <Link key={n.id} href={`/noticias/${n.slug}`}>
            <article className="bg-white rounded-3xl p-5 border border-[#e5e5e0] hover:shadow-lg transition group">
              <div className="flex items-start gap-4">
                {n.imagem ? (
                  <img
                    src={n.imagem}
                    alt=""
                    className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-20 h-20 bg-[#f0f0eb] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-6 h-6 text-[#737373]" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    {n.categorias.slice(0, 2).map((c) => (
                      <span
                        key={c}
                        className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${coresCategorias[c] ?? "bg-gray-100 text-gray-700"}`}
                      >
                        {c}
                      </span>
                    ))}
                    <span className="text-xs text-[#737373]">{formatarData(n.data)}</span>
                  </div>
                  <h2 className="text-base font-semibold text-[#1a1a1a] group-hover:text-[#1e3a5f] transition line-clamp-2">{n.titulo}</h2>
                  {n.resumo && (
                    <p className="text-sm text-[#737373] mt-1.5 line-clamp-2">{n.resumo}</p>
                  )}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {paginaAtual > 1 && (
          <Link
            href={`/noticias?pagina=${paginaAtual - 1}`}
            className="px-4 py-2 text-sm font-semibold bg-white border border-[#e5e5e0] rounded-xl hover:bg-[#f0f0eb] transition"
          >
            Anterior
          </Link>
        )}
        <span className="text-sm text-[#737373] px-3">
          Página {paginaAtual} de {totalPaginas}
        </span>
        {paginaAtual < totalPaginas && (
          <Link
            href={`/noticias?pagina=${paginaAtual + 1}`}
            className="px-4 py-2 text-sm font-semibold bg-white border border-[#e5e5e0] rounded-xl hover:bg-[#f0f0eb] transition"
          >
            Próxima
          </Link>
        )}
      </div>
    </div>
  );
}
