"use client";

import { Cake } from "lucide-react";

const aniversariantes = [
  { id: 1, iniciais: "GF", nome: "Gustavo Ferreira", data: "27 Junho", area: "DGEP" },
  { id: 2, iniciais: "AV", nome: "Ana Valéria", data: "27 Junho", area: "DIEN" },
  { id: 3, iniciais: "DS", nome: "Daniel Souza", data: "28 Junho", area: "DGSE" },
  { id: 4, iniciais: "LC", nome: "Luciana Costa", data: "29 Junho", area: "DPOA" },
  { id: 5, iniciais: "PG", nome: "Paulo Gomes", data: "30 Junho", area: "Comunicação" },
  { id: 6, iniciais: "CV", nome: "Cláudia Vieira", data: "01 Julho", area: "CGP" },
  { id: 7, iniciais: "SD", nome: "Sérgio Dias", data: "02 Julho", area: "TI" },
  { id: 8, iniciais: "DA", nome: "Diana Almeida", data: "03 Julho", area: "DGEP" },
  { id: 9, iniciais: "MC", nome: "Marcos Castro", data: "04 Julho", area: "DIEN" },
  { id: 10, iniciais: "RR", nome: "Ricardo Rocha", data: "05 Julho", area: "DGSE" },
];

export default function Aniversariantes() {
  return (
    <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[#1a1a1a]">Aniversariantes</h3>
        <Cake className="w-4 h-4 text-[#737373]" />
      </div>
      <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
        {aniversariantes.map((a) => (
          <div
            key={a.id}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#f8f8f5] transition cursor-pointer group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
              {a.iniciais}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#1a1a1a] truncate group-hover:text-[#1e3a5f] transition">
                {a.nome}
              </p>
              <p className="text-[10px] text-[#737373]">{a.data} · {a.area}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-3 text-[10px] font-medium text-[#737373] hover:text-[#1a1a1a] transition text-center">
        Ver todos
      </button>
    </div>
  );
}
