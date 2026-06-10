import { Building2, ArrowUpRight } from "lucide-react";

const diretorias = [
  { sigla: "DPOA", nome: "Diretoria de Planejamento e Orçamento Aeroespacial", descricao: "Responsável pelo planejamento estratégico e orçamento da AEB.", cor: "bg-blue-50 text-blue-700" },
  { sigla: "DGEP", nome: "Diretoria de Gestão de Portfolio", descricao: "Gestão do portfólio de projetos espaciais e aeroespaciais.", cor: "bg-emerald-50 text-emerald-700" },
  { sigla: "DIEN", nome: "Diretoria de Inovação e Engenharia", descricao: "Fomento à inovação e engenharia espacial.", cor: "bg-amber-50 text-amber-700" },
  { sigla: "DGSE", nome: "Diretoria de Gestão de Satélites e Engenharia", descricao: "Operações e engenharia de satélites.", cor: "bg-purple-50 text-purple-700" },
];

export default function DiretoriasPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6">Diretorias</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {diretorias.map((d) => (
          <div key={d.sigla} className="bg-white rounded-3xl p-6 border border-[#e5e5e0] hover:shadow-lg transition group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-[#f0f0eb] rounded-2xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#737373]" />
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${d.cor}`}>{d.sigla}</span>
            </div>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-1">{d.nome}</h2>
            <p className="text-sm text-[#737373] mb-4">{d.descricao}</p>
            <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1e3a5f] hover:underline">
              Saiba mais <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
