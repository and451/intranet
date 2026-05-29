const diretorias = [
  { sigla: "DPOA", nome: "Diretoria de Planejamento e Orçamento Aeroespacial", descricao: "Responsável pelo planejamento estratégico e orçamento da AEB." },
  { sigla: "DGEP", nome: "Diretoria de Gestão de Portfolio", descricao: "Gestão do portfólio de projetos espaciais e aeroespaciais." },
  { sigla: "DIEN", nome: "Diretoria de Inovação e Engenharia", descricao: "Fomento à inovação e engenharia espacial." },
  { sigla: "DGSE", nome: "Diretoria de Gestão de Satélites e Engenharia", descricao: "Operações e engenharia de satélites." },
];

export default function DiretoriasPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Diretorias</h1>
      <div className="grid gap-4">
        {diretorias.map((d) => (
          <div key={d.sigla} className="border rounded-lg p-4 hover:shadow-md transition">
            <h2 className="text-lg font-bold text-blue-800">{d.sigla}</h2>
            <p className="font-medium text-gray-700">{d.nome}</p>
            <p className="text-gray-600 mt-1">{d.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
