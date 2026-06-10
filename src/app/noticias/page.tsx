import { Newspaper } from "lucide-react";

const noticias = [
  { id: 1, titulo: "Reunião Planejamento Estratégico", data: "28/05/2026", categoria: "DGEP", resumo: "Reunião sobre o Planejamento Estratégico da AEB.", cor: "bg-blue-50 text-blue-700" },
  { id: 2, titulo: "Entrega de novas funcionalidades no Observatório do Setor Espacial Brasileiro", data: "27/05/2026", categoria: "Tecnologia", resumo: "Novas funcionalidades disponibilizadas para acompanhamento do setor espacial.", cor: "bg-emerald-50 text-emerald-700" },
  { id: 3, titulo: "Novo curso do AEB Escola aborda conceitos de astronáutica", data: "26/05/2026", categoria: "AEB Escola", resumo: "Curso gratuito sobre fundamentos de astronáutica.", cor: "bg-amber-50 text-amber-700" },
  { id: 4, titulo: "Visita ao Planetário de Brasília", data: "25/05/2026", categoria: "Eventos", resumo: "Visita técnica ao Planetário de Brasília.", cor: "bg-purple-50 text-purple-700" },
  { id: 5, titulo: "Inscrições abertas para Workshop Sobre Pequenos Satélites Educacionais", data: "24/05/2026", categoria: "AEB Escola", resumo: "Workshop sobre CubeSats e satélites educacionais.", cor: "bg-amber-50 text-amber-700" },
];

export default function NoticiasPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6">Notícias</h1>
      <div className="grid gap-4">
        {noticias.map((n) => (
          <article key={n.id} className="bg-white rounded-3xl p-5 border border-[#e5e5e0] hover:shadow-lg transition group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#f0f0eb] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Newspaper className="w-5 h-5 text-[#737373]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${n.cor}`}>{n.categoria}</span>
                  <span className="text-xs text-[#737373]">{n.data}</span>
                </div>
                <h2 className="text-base font-semibold text-[#1a1a1a] group-hover:text-[#1e3a5f] transition line-clamp-2">{n.titulo}</h2>
                <p className="text-sm text-[#737373] mt-1.5 line-clamp-2">{n.resumo}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
