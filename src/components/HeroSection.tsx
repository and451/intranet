"use client";

import Link from "next/link";

const destaques = [
  { id: 1, titulo: "Semana do Espaco 2026: programacao confirmada", subtitulo: "CCS — Comunicacao Social", grande: true },
  { id: 2, titulo: "Curso de Astronautica: inscricoes abertas", subtitulo: "", grande: false },
  { id: 3, titulo: "Observatorio do Setor Espacial e atualizado", subtitulo: "", grande: false },
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
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8ECF2] to-[#F2F5F9] flex items-center justify-center">
              <span className="font-mono text-[11px] text-[#8895A7] bg-white/85 px-2.5 py-1 rounded">foto institucional</span>
            </div>
            <div className="relative z-10 w-full p-4 bg-gradient-to-t from-[rgba(7,29,65,0.85)] to-transparent text-white">
              <strong className={`block ${d.grande ? "text-[15px]" : "text-[13px]"} font-semibold`}>{d.titulo}</strong>
              {d.subtitulo && <span className="text-[11.5px] opacity-85">{d.subtitulo}</span>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
