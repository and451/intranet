import Link from "next/link";

export interface NoticiaCard {
  id: number;
  titulo: string;
  descricao: string;
  meta: string;
  imagem: string | null;
  link: string;
}

const gradientes = [
  "from-[#071D41] to-[#1351B4]",
  "from-[#1351B4] to-[#2670E8]",
  "from-[#0F7B0F] to-[#168821]",
];

export default function NoticiasGrid({ noticias }: { noticias: NoticiaCard[] }) {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-3.5">
        <h2 className="text-xl font-semibold text-[#242424]">Notícias</h2>
        <Link href="/noticias" className="text-xs font-semibold text-[#0B4DA2] hover:underline">Ver tudo</Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {noticias.map((n, i) => (
          <Link
            key={n.id}
            href={n.link}
            className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] overflow-hidden flex flex-col"
          >
            {n.imagem ? (
              <div className="relative h-[130px]">
                <img src={n.imagem} alt="" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className={`relative h-[130px] bg-gradient-to-br ${gradientes[i % gradientes.length]} flex items-center justify-center`}>
                <span className="text-white/40 text-4xl font-bold">AEB</span>
              </div>
            )}
            <div className="p-4 flex flex-col gap-1.5">
              <h3 className="text-sm font-semibold text-[#242424] leading-snug line-clamp-2">{n.titulo}</h3>
              <p className="text-xs text-[#616161] leading-relaxed line-clamp-3">{n.descricao}</p>
              <span className="text-[11.5px] text-[#616161] mt-1">{n.meta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
