import Link from "next/link";

const noticiasDestaque = [
  { id: 1, titulo: "Reunião Planejamento Estratégico", data: "28/05/2026", categoria: "DGEP" },
  { id: 2, titulo: "Entrega de novas funcionalidades no Observatório do Setor Espacial Brasileiro", data: "27/05/2026", categoria: "Tecnologia" },
  { id: 3, titulo: "Novo curso do AEB Escola aborda conceitos de astronáutica", data: "26/05/2026", categoria: "AEB Escola" },
];

const boletinsRecentes = [
  { id: 1, numero: "SUPLEMENTAR Nº 64/2025", data: "20/05/2025" },
  { id: 2, numero: "SUPLEMENTAR Nº 63/2025", data: "15/05/2025" },
  { id: 3, numero: "Nº 05/2024", data: "10/03/2024" },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Acontece na AEB</h1>
        <div className="grid gap-4">
          {noticiasDestaque.map((n) => (
            <article key={n.id} className="border rounded-lg p-4 hover:shadow-md transition">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{n.categoria}</span>
                <span>{n.data}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{n.titulo}</h3>
            </article>
          ))}
        </div>
        <Link href="/noticias" className="inline-block mt-4 text-blue-700 hover:underline">Ver todas as notícias &rarr;</Link>
      </section>

      <section>
        <h2 className="text-xl font-bold text-blue-900 mb-4">Boletins Internos Recentes</h2>
        <ul className="divide-y">
          {boletinsRecentes.map((b) => (
            <li key={b.id} className="py-3 flex justify-between items-center">
              <span className="font-medium text-gray-700">Boletim Interno {b.numero}</span>
              <span className="text-sm text-gray-500">{b.data}</span>
            </li>
          ))}
        </ul>
        <Link href="/boletins" className="inline-block mt-4 text-blue-700 hover:underline">Ver todos os boletins &rarr;</Link>
      </section>

      <section>
        <h2 className="text-xl font-bold text-blue-900 mb-4">Links Úteis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="#" className="block p-4 border rounded-lg hover:bg-blue-50 transition">
            <h3 className="font-semibold text-blue-900">Dicas de segurança em viagens</h3>
            <p className="text-sm text-gray-600 mt-1">Orientações para viagens nacionais e internacionais.</p>
          </a>
          <a href="#" className="block p-4 border rounded-lg hover:bg-blue-50 transition">
            <h3 className="font-semibold text-blue-900">AEB Escola</h3>
            <p className="text-sm text-gray-600 mt-1">Cursos, workshops e capacitações.</p>
          </a>
        </div>
      </section>
    </div>
  );
}
