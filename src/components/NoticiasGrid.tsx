"use client";

import Link from "next/link";

const noticias = [
  {
    id: 1,
    titulo: "Observatorio do Setor Espacial ganha novas funcionalidades",
    descricao: "Plataforma agora permite consulta a series historicas de investimento e analise comparativa entre regioes.",
    meta: "CCS · hoje",
    bg: "from-[#071D41] to-[#1351B4]",
  },
  {
    id: 2,
    titulo: "AEB Escola abre inscricoes para curso de Astronautica",
    descricao: "Curso gratuito para servidores e publico externo. Inscricoes ate 25/06. Turma limitada a 40 vagas.",
    meta: "AEB Escola · ontem",
    bg: "from-[#1351B4] to-[#2670E8]",
  },
  {
    id: 3,
    titulo: "Workshop de Pequenos Satelites reune unidades regionais",
    descricao: "URMA, URRN e URSJC participam da edicao de julho em Brasilia.",
    meta: "DGEP · 06/06",
    bg: "from-[#0F7B0F] to-[#168821]",
  },
];

export default function NoticiasGrid() {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-3.5">
        <h2 className="text-xl font-semibold text-[#242424]">Noticias</h2>
        <Link href="/noticias" className="text-xs font-semibold text-[#0B4DA2] hover:underline">Ver tudo</Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {noticias.map((n) => (
          <Link
            key={n.id}
            href="#"
            className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] overflow-hidden flex flex-col"
          >
            <div className={`relative h-[130px] bg-gradient-to-br ${n.bg} flex items-center justify-center`}>
              <span className="text-white/40 text-4xl font-bold">AEB</span>
            </div>
            <div className="p-4 flex flex-col gap-1.5">
              <h3 className="text-sm font-semibold text-[#242424] leading-snug">{n.titulo}</h3>
              <p className="text-xs text-[#616161] leading-relaxed">{n.descricao}</p>
              <span className="text-[11.5px] text-[#616161] mt-1">{n.meta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
