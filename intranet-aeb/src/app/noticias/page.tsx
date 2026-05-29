import Link from "next/link";

const noticias = [
  { id: 1, titulo: "Reunião Planejamento Estratégico", data: "28/05/2026", categoria: "DGEP", resumo: "Reunião sobre o Planejamento Estratégico da AEB." },
  { id: 2, titulo: "Entrega de novas funcionalidades no Observatório do Setor Espacial Brasileiro", data: "27/05/2026", categoria: "Tecnologia", resumo: "Novas funcionalidades disponibilizadas para acompanhamento do setor espacial." },
  { id: 3, titulo: "Novo curso do AEB Escola aborda conceitos de astronáutica", data: "26/05/2026", categoria: "AEB Escola", resumo: "Curso gratuito sobre fundamentos de astronáutica." },
  { id: 4, titulo: "Visita ao Planetário de Brasília", data: "25/05/2026", categoria: "Eventos", resumo: "Visita técnica ao Planetário de Brasília." },
  { id: 5, titulo: "Inscrições abertas para Workshop Sobre Pequenos Satélites Educacionais", data: "24/05/2026", categoria: "AEB Escola", resumo: "Workshop sobre CubeSats e satélites educacionais." },
];

export default function NoticiasPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Notícias</h1>
      <div className="grid gap-4">
        {noticias.map((n) => (
          <article key={n.id} className="border rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{n.categoria}</span>
              <span>{n.data}</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">{n.titulo}</h2>
            <p className="text-gray-600 mt-1">{n.resumo}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
