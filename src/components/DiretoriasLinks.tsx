"use client";

import Link from "next/link";
import { Building2 } from "lucide-react";

const diretorias = [
  { sigla: "DPOA", nome: "Planejamento, Orcamento e Administracao", cor: "#0B4DA2" },
  { sigla: "CGP", nome: "Coordenacao de Gestao de Pessoas", cor: "#1351B4" },
  { sigla: "DGEP", nome: "Gestao de Portfolio", cor: "#2670E8" },
  { sigla: "DIEN", nome: "Inteligencia Estrategica e Novos Negocios", cor: "#0F7B0F" },
  { sigla: "DGSE", nome: "Governanca do Setor Espacial", cor: "#168821" },
  { sigla: "CDT", nome: "Desenvolvimento de Competencias", cor: "#9C6F00" },
  { sigla: "CCS", nome: "Comunicacao Social", cor: "#6264A7" },
  { sigla: "CTI", nome: "Tecnologia da Informacao", cor: "#185ABD" },
];

export default function DiretoriasLinks() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[#242424] mb-3.5">Diretorias e Coordenacoes</h2>
      <div className="grid grid-cols-4 gap-3">
        {diretorias.map((d) => (
          <Link
            key={d.sigla}
            href="#"
            className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] p-3 flex items-center gap-3 transition-transform hover:-translate-y-0.5"
          >
            <div className="w-9 h-9 rounded-md text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0" style={{ background: d.cor }}>
              <Building2 className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold text-[#242424] block">{d.sigla}</span>
              <span className="text-[10px] text-[#616161] truncate block">{d.nome}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
