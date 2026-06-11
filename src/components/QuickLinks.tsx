"use client";

import Link from "next/link";

const links = [
  { sigla: "SEI", nome: "SEI", bg: "#1351B4" },
  { sigla: "SG", nome: "SIGEPE", bg: "#168821" },
  { sigla: "SF", nome: "SIAFI", bg: "#9C6F00" },
  { sigla: "SV", nome: "SouGov", bg: "#2670E8" },
  { sigla: "T", nome: "Teams", bg: "#6264A7" },
  { sigla: "O", nome: "Outlook", bg: "#0F6CBD" },
  { sigla: "W", nome: "Word", bg: "#185ABD" },
  { sigla: "X", nome: "Excel", bg: "#107C41" },
];

export default function QuickLinks() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[#242424] mb-3.5">Sistemas e ferramentas</h2>
      <div className="grid grid-cols-8 gap-2.5">
        {links.map((l) => (
          <Link key={l.sigla} href="#" className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] p-4 flex flex-col items-center gap-1.5 transition-transform hover:-translate-y-0.5">
            <span className="w-9 h-9 rounded-md text-white text-xs font-bold flex items-center justify-center" style={{ background: l.bg }}>
              {l.sigla}
            </span>
            <span className="text-xs font-semibold text-[#242424]">{l.nome}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
