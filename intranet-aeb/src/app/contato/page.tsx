export default function ContatoPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Contato</h1>
      <div className="space-y-4 text-gray-700">
        <p>
          <strong>Agência Espacial Brasileira — AEB</strong>
        </p>
        <p>
          Setor Policial — SPO, Área 5, Quadra 3, Bloco A<br />
          Brasília/DF — CEP 70610-200
        </p>
        <p>
          <strong>Telefone:</strong> (61) 2028-7000
        </p>
        <p>
          <strong>Site:</strong>{" "}
          <a href="https://www.gov.br/aeb" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
            www.gov.br/aeb
          </a>
        </p>
      </div>
    </div>
  );
}
