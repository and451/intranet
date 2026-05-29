const cursos = [
  { id: 1, titulo: "Conceitos de Astronáutica", status: "Em andamento", inscricoes: "Abertas" },
  { id: 2, titulo: "Cientista Cidadão", status: "Próxima turma", inscricoes: "Em breve" },
  { id: 3, titulo: "Workshop Sobre Pequenos Satélites Educacionais", status: "Agendado", inscricoes: "Abertas" },
];

export default function AebEscolaPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900 mb-6">AEB Escola</h1>
      <p className="text-gray-600 mb-6">
        A AEB Escola oferece cursos, workshops e capacitações nas áreas espacial e astronáutica para servidores e público externo.
      </p>
      <h2 className="text-xl font-bold text-blue-900 mb-4">Cursos e Workshops</h2>
      <div className="grid gap-4">
        {cursos.map((c) => (
          <div key={c.id} className="border rounded-lg p-4 hover:shadow-md transition flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-800">{c.titulo}</h3>
              <p className="text-sm text-gray-500">Status: {c.status}</p>
            </div>
            <span className={`px-3 py-1 rounded text-sm font-medium ${c.inscricoes === "Abertas" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>
              Inscrições: {c.inscricoes}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
