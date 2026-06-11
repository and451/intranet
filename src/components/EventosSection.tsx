"use client";

const eventos = [
  { dia: "02", mes: "jul", titulo: "Workshop de CubeSats", local: "Auditorio da sede · 9h" },
  { dia: "14", mes: "jul", titulo: "Semana do Espaco — abertura", local: "Brasilia/DF" },
];

export default function EventosSection() {
  return (
    <section>
      <h2 className="text-[17px] font-semibold text-[#242424] mb-3.5">Proximos eventos</h2>
      <div className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] p-4 flex flex-col gap-2.5">
        {eventos.map((e, i) => (
          <div key={i} className="flex gap-3 items-center py-1.5 border-b border-[#F5F5F5] last:border-b-0">
            <div className="w-11 h-11 border border-[#E1E1E1] rounded flex flex-col items-center justify-center flex-shrink-0">
              <strong className="text-[15px] text-[#0B4DA2] leading-none">{e.dia}</strong>
              <span className="text-[9.5px] text-[#616161] uppercase font-bold">{e.mes}</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#242424] leading-snug">{e.titulo}</p>
              <span className="text-[11.5px] text-[#616161]">{e.local}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
