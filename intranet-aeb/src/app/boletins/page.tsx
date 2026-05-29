const boletins = [
  { id: 1, numero: "SUPLEMENTAR Nº 64/2025", data: "20/05/2025", tipo: "suplementar" as const },
  { id: 2, numero: "SUPLEMENTAR Nº 63/2025", data: "15/05/2025", tipo: "suplementar" as const },
  { id: 3, numero: "SUPLEMENTAR Nº 62/2025", data: "10/05/2025", tipo: "suplementar" as const },
  { id: 4, numero: "SUPLEMENTAR Nº 61/2025", data: "05/05/2025", tipo: "suplementar" as const },
  { id: 5, numero: "Nº 05/2024", data: "10/03/2024", tipo: "ordinario" as const },
  { id: 6, numero: "Nº 04/2024", data: "05/02/2024", tipo: "ordinario" as const },
];

export default function BoletinsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Boletins Internos</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-50 text-left">
            <th className="p-3 border-b font-semibold text-blue-900">Número</th>
            <th className="p-3 border-b font-semibold text-blue-900">Tipo</th>
            <th className="p-3 border-b font-semibold text-blue-900">Data</th>
            <th className="p-3 border-b font-semibold text-blue-900">Ação</th>
          </tr>
        </thead>
        <tbody>
          {boletins.map((b) => (
            <tr key={b.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">Boletim Interno {b.numero}</td>
              <td className="p-3 border-b capitalize">{b.tipo === "suplementar" ? "Suplementar" : "Ordinário"}</td>
              <td className="p-3 border-b">{b.data}</td>
              <td className="p-3 border-b">
                <a href="#" className="text-blue-700 hover:underline">Visualizar</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
