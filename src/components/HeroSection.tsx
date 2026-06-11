"use client";

import Link from "next/link";

const destaques = [
  {
    id: 1,
    titulo: "Semana do Espaco 2026: programacao confirmada",
    subtitulo: "CCS — Comunicacao Social",
    grande: true,
    bg: "from-[#071D41] to-[#0B4DA2]",
  },
  {
    id: 2,
    titulo: "Curso de Astronautica: inscricoes abertas",
    subtitulo: "AEB Escola",
    grande: false,
    bg: "from-[#1351B4] to-[#2670E8]",
  },
  {
    id: 3,
    titulo: "Observatorio do Setor Espacial e atualizado",
    subtitulo: "DIEN",
    grande: false,
    bg: "from-[#0B4DA2] to-[#1351B4]",
  },
];

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-[2fr_1fr] grid-rows-[150px_150px] gap-2">
        {destaques.map((d) => (
          <Link
            key={d.id}
            href="#"
            className={`relative rounded overflow-hidden flex items-end shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] ${
              d.grande ? "row-span-2" : ""
            } bg-gradient-to-br ${d.bg}`}
          >
            <div className="relative z-10 w-full p-4">
              <strong className={`block ${d.grande ? "text-[15px]" : "text-[13px]"} font-semibold text-white leading-snug`}>
                {d.titulo}
              </strong>
              <span className="text-[11.5px] text-white/80">{d.subtitulo}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
