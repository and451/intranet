import { Users, ChevronRight } from "lucide-react";

const comissoes = [
  { id: 1, nome: "Comissão de Ética", sigla: "CE-AEB", descricao: "Fiscalização e orientação sobre conduta ética dos servidores.", membros: 5 },
  { id: 2, nome: "Comissão de Seleção", sigla: "CS-AEB", descricao: "Processos seletivos para contratação de pessoal.", membros: 7 },
  { id: 3, nome: "Comissão de Licitação", sigla: "CL-AEB", descricao: "Acompanhamento de processos licitatórios e contratos.", membros: 3 },
  { id: 4, nome: "Comissão de Patrimônio", sigla: "CP-AEB", descricao: "Gestão e controle do patrimônio institucional.", membros: 4 },
];

export default function Comissoes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
          <Users className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#1a1a1a]">Comissões</h1>
          <p className="text-sm text-[#737373]">Comissões permanentes e temporárias da AEB</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {comissoes.map((c) => (
          <div key={c.id} className="bg-white rounded-3xl p-6 border border-[#e5e5e0] hover:shadow-lg transition group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wider">{c.sigla}</span>
              <span className="text-[10px] text-[#737373]">{c.membros} membros</span>
            </div>
            <h3 className="text-sm font-bold text-[#1a1a1a] mb-2">{c.nome}</h3>
            <p className="text-xs text-[#737373] mb-4">{c.descricao}</p>
            <button className="flex items-center gap-1 text-xs font-medium text-[#1e3a5f] group-hover:text-[#2d4a73] transition">
              Ver membros <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
