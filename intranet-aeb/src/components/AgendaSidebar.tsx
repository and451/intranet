"use client";

import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const eventosHoje = [
  { id: 1, titulo: "Reunião DGEP", hora: "09:00", duracao: "1h", tipo: "teams" },
  { id: 2, titulo: "Almoço com DIEN", hora: "12:30", duracao: "1h", tipo: "outlook" },
  { id: 3, titulo: "Planejamento Estratégico", hora: "15:00", duracao: "2h", tipo: "teams" },
];

export default function AgendaSidebar() {
  const hoje = new Date();
  const [mesAtual] = useState(hoje.getMonth());
  const [anoAtual] = useState(hoje.getFullYear());
  const diaHoje = hoje.getDate();

  const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();
  const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

  const meses = [
    "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
  ];

  const dias = [];
  for (let i = 0; i < primeiroDia; i++) dias.push(null);
  for (let i = 1; i <= diasNoMes; i++) dias.push(i);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mt-2">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Minha Agenda</h3>
        <div className="flex gap-1">
          <button className="w-5 h-5 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
            <ChevronLeft className="w-3 h-3 text-gray-400" />
          </button>
          <button className="w-5 h-5 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
            <ChevronRight className="w-3 h-3 text-gray-400" />
          </button>
        </div>
      </div>

      <p className="text-sm font-medium text-white mb-2">{meses[mesAtual]} {anoAtual}</p>

      <div className="grid grid-cols-7 gap-1 mb-3">
        {diasSemana.map((d) => (
          <div key={d} className="text-[10px] text-gray-500 text-center font-medium">{d}</div>
        ))}
        {dias.map((d, i) => (
          <div
            key={i}
            className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-medium ${
              d === diaHoje
                ? "bg-blue-500 text-white"
                : d
                ? "text-gray-300 hover:bg-white/10 cursor-pointer"
                : ""
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-3 space-y-2">
        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
          {eventosHoje.length} eventos hoje
        </p>
        {eventosHoje.map((e) => (
          <div key={e.id} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 transition cursor-pointer group">
            <div className={`w-1.5 h-8 rounded-full flex-shrink-0 ${e.tipo === "teams" ? "bg-purple-400" : "bg-blue-400"}`} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate group-hover:text-blue-300 transition">{e.titulo}</p>
              <p className="text-[10px] text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {e.hora} · {e.duracao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
