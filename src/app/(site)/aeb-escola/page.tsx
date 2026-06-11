import { GraduationCap, Clock, Users } from "lucide-react";

const cursos = [
  { id: 1, titulo: "Conceitos de Astronáutica", status: "Em andamento", inscricoes: "Abertas", vagas: 45 },
  { id: 2, titulo: "Cientista Cidadão", status: "Próxima turma", inscricoes: "Em breve", vagas: 30 },
  { id: 3, titulo: "Workshop Sobre Pequenos Satélites Educacionais", status: "Agendado", inscricoes: "Abertas", vagas: 20 },
];

export default function AebEscolaPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">AEB Escola</h1>
      <p className="text-sm text-[#737373] mb-6 max-w-2xl">
        Cursos, workshops e capacitações nas áreas espacial e astronáutica para servidores e público externo.
      </p>

      <div className="grid gap-4">
        {cursos.map((c) => (
          <div key={c.id} className="bg-white rounded-3xl p-6 border border-[#e5e5e0] hover:shadow-lg transition">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">{c.titulo}</h3>
                  <div className="flex items-center gap-3 text-xs text-[#737373]">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {c.status}</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {c.vagas} vagas</span>
                  </div>
                </div>
              </div>
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0 ${c.inscricoes === "Abertas" ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-600"}`}>
                {c.inscricoes}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
