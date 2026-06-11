import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getNoticia, getNoticias, formatarData } from "@/lib/content";

export function generateStaticParams() {
  return getNoticias().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const noticia = getNoticia(slug);
  return { title: noticia ? `${noticia.titulo} — INTRAEB` : "Notícia — INTRAEB" };
}

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const noticia = getNoticia(slug);
  if (!noticia) notFound();

  return (
    <article>
      <Link
        href="/noticias"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B4DA2] hover:underline mb-5"
      >
        <ArrowLeft className="w-4 h-4" /> Todas as notícias
      </Link>

      <div className="bg-white rounded-3xl border border-[#e5e5e0] overflow-hidden">
        {noticia.imagem && (
          <img src={noticia.imagem} alt="" className="w-full max-h-[380px] object-cover" />
        )}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {noticia.categorias.map((c) => (
              <span key={c} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                {c}
              </span>
            ))}
            <span className="text-xs text-[#737373]">{formatarData(noticia.data)}</span>
          </div>
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-5">{noticia.titulo}</h1>
          <div
            className="conteudo-noticia text-[15px] leading-relaxed text-[#333]"
            dangerouslySetInnerHTML={{ __html: noticia.conteudoHtml }}
          />
        </div>
      </div>
    </article>
  );
}
