import { Briefcase, ChevronRight } from "lucide-react";

const grupos = [
  { id: 1, nome: "GT — Transformação Digital", sigla: "GT-TD", descricao: "Estratégias de modernização e digitalização de processos.", membros: 7 },
  { id: 2, nome: "GT — Pequenos Satélites", sigla: "GT-PS", descricao: "Desenvolvimento e aplicação de CubeSats e satélites de pequeno porte.", membros: 12 },
  { id: 3, nome: "GT — Dados Abertos", sigla: "GT-DA", descricao: "Políticas e publicação de dados abertos da AEB.", membros: 5 },
  { id: 4, nome: "GT — Cultura Organizacional", sigla: "GT-CO", descricao: "Iniciativas de engajamento e bem-estar dos colaboradores.", membros: 6 },
];

export default function GruposTrabalho() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#1a1a1a]">Grupos de Trabalho</h1>
          <p className="text-sm text-[#737373]">Grupos de trabalho temáticos da AEB</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {grupos.map((g) => (
          <div key={g.id} className="bg-white rounded-3xl p-6 border border-[#e5e5e0] hover:shadow-lg transition group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full uppercase tracking-wider">{g.sigla}</span>
              <span className="text-[10px] text-[#737373]">{g.membros} membros</span>
            </div>
            <h3 className="text-sm font-bold text-[#1a1a1a] mb-2">{g.nome}</h3>
            <p className="text-xs text-[#737373] mb-4">{g.descricao}</p>
            <button className="flex items-center gap-1 text-xs font-medium text-[#1e3a5f] group-hover:text-[#2d4a73] transition">
              Ver membros <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
