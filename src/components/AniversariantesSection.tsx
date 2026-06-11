"use client";

const nivers = [
  { iniciais: "LC", nome: "Luciana Campos", unidade: "CGP", quando: "hoje", hoje: true },
  { iniciais: "MT", nome: "Marcos Tavares", unidade: "DGSE", quando: "12/06", hoje: false },
  { iniciais: "RI", nome: "Renata Ibrahim", unidade: "URSJC", quando: "14/06", hoje: false },
];

export default function AniversariantesSection() {
  return (
    <section>
      <h2 className="text-[17px] font-semibold text-[#242424] mb-3.5">Aniversariantes</h2>
      <div className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] p-4 flex flex-col gap-2">
        {nivers.map((n, i) => (
          <div key={i} className="flex items-center gap-2.5 py-1">
            <div className="w-[30px] h-[30px] rounded-full bg-[#E5EAF2] text-[#41506B] text-[11px] font-bold flex items-center justify-center flex-shrink-0">
              {n.iniciais}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#242424]">{n.nome}</p>
              <span className="text-[11px] text-[#616161]">{n.unidade}</span>
            </div>
            <span className={`text-[11px] font-bold ${n.hoje ? "text-[#0F7B0F]" : "text-[#616161]"}`}>
              {n.quando}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
