import { GitCommit, ChevronRight } from "lucide-react";

const comites = [
  { id: 1, nome: "Comitê de Governança de TI", sigla: "CGTI", descricao: "Definição de estratégias e políticas de tecnologia da informação.", membros: 6 },
  { id: 2, nome: "Comitê de Inovação", sigla: "CI-AEB", descricao: "Fomento à cultura de inovação e pesquisa espacial.", membros: 8 },
  { id: 3, nome: "Comitê de Segurança da Informação", sigla: "CSI", descricao: "Políticas e diretrizes de segurança cibernética.", membros: 5 },
  { id: 4, nome: "Comitê de Sustentabilidade", sigla: "CSUST", descricao: "Ações voltadas à sustentabilidade ambiental e social.", membros: 4 },
];

export default function Comites() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
          <GitCommit className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#1a1a1a]">Comitês</h1>
          <p className="text-sm text-[#737373]">Comitês técnicos e estratégicos da AEB</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {comites.map((c) => (
          <div key={c.id} className="bg-white rounded-3xl p-6 border border-[#e5e5e0] hover:shadow-lg transition group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-wider">{c.sigla}</span>
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
