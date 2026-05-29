import Link from "next/link";
import { Newspaper, FileText, Rocket, Calendar, ChevronRight, TrendingUp } from "lucide-react";

const noticiasDestaque = [
  { id: 1, titulo: "Reunião Planejamento Estratégico", data: "28/05/2026", categoria: "DGEP", cor: "bg-blue-50 text-blue-700" },
  { id: 2, titulo: "Novas funcionalidades no Observatório do Setor Espacial", data: "27/05/2026", categoria: "Tecnologia", cor: "bg-emerald-50 text-emerald-700" },
  { id: 3, titulo: "Curso de Astronáutica — AEB Escola", data: "26/05/2026", categoria: "Educação", cor: "bg-amber-50 text-amber-700" },
];

const boletinsRecentes = [
  { id: 1, numero: "SUPLEMENTAR Nº 64/2025", data: "20/05/2025", tipo: "Suplementar" },
  { id: 2, numero: "SUPLEMENTAR Nº 63/2025", data: "15/05/2025", tipo: "Suplementar" },
  { id: 3, numero: "Nº 05/2024", data: "10/03/2024", tipo: "Ordinário" },
];

const eventosProximos = [
  { id: 1, titulo: "Visita ao Planetário de Brasília", data: "30/05/2026", hora: "14:00" },
  { id: 2, titulo: "Workshop de Pequenos Satélites", data: "02/06/2026", hora: "09:00" },
  { id: 3, titulo: "Reunião DIEN — Inovação", data: "05/06/2026", hora: "10:00" },
];

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Cards estatísticos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0] hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[#737373] uppercase tracking-wider">Boletins</span>
            <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center">
              <FileText className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#1a1a1a]">64</p>
          <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +3 este mês
          </p>
        </div>
        <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0] hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[#737373] uppercase tracking-wider">Notícias</span>
            <div className="w-8 h-8 bg-amber-50 rounded-xl flex items-center justify-center">
              <Newspaper className="w-4 h-4 text-amber-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#1a1a1a]">12</p>
          <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +5 esta semana
          </p>
        </div>
        <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0] hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[#737373] uppercase tracking-wider">Cursos Ativos</span>
            <div className="w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Rocket className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#1a1a1a]">3</p>
          <p className="text-xs text-[#737373] mt-1">AEB Escola</p>
        </div>
        <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0] hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[#737373] uppercase tracking-wider">Eventos</span>
            <div className="w-8 h-8 bg-purple-50 rounded-xl flex items-center justify-center">
              <Calendar className="w-4 h-4 text-purple-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#1a1a1a]">5</p>
          <p className="text-xs text-[#737373] mt-1">Próximos 30 dias</p>
        </div>
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coluna principal — Notícias */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-[#e5e5e0]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-[#1a1a1a]">Acontece na AEB</h3>
              <Link href="/noticias" className="text-xs font-medium text-[#737373] hover:text-[#1a1a1a] flex items-center gap-1 transition">
                Ver todas <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-3">
              {noticiasDestaque.map((n) => (
                <article key={n.id} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-[#f8f8f5] transition cursor-pointer">
                  <div className="w-12 h-12 bg-[#f0f0eb] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-5 h-5 text-[#737373]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${n.cor}`}>{n.categoria}</span>
                      <span className="text-xs text-[#737373]">{n.data}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#1e3a5f] transition line-clamp-2">{n.titulo}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a73] rounded-3xl p-6 text-white">
            <h3 className="text-lg font-bold mb-2">AEB Escola</h3>
            <p className="text-sm text-white/70 mb-4">Novo curso gratuito sobre conceitos de astronáutica. Inscrições abertas para servidores e público externo.</p>
            <div className="flex items-center gap-3">
              <Link href="/aeb-escola" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition">
                Inscrever-se
              </Link>
              <span className="text-xs text-white/50">Vagas limitadas</span>
            </div>
          </div>
        </div>

        {/* Coluna lateral */}
        <div className="space-y-6">
          {/* Boletins */}
          <div className="bg-white rounded-3xl p-6 border border-[#e5e5e0]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-[#1a1a1a]">Boletins</h3>
              <Link href="/boletins" className="text-xs font-medium text-[#737373] hover:text-[#1a1a1a] flex items-center gap-1 transition">
                Todos <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-3">
              {boletinsRecentes.map((b) => (
                <div key={b.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f8f8f5] transition">
                  <div className="w-10 h-10 bg-[#f0f0eb] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-[#737373]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#1a1a1a] truncate">{b.numero}</p>
                    <p className="text-[10px] text-[#737373]">{b.data} · {b.tipo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eventos */}
          <div className="bg-white rounded-3xl p-6 border border-[#e5e5e0]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-[#1a1a1a]">Próximos Eventos</h3>
              <Calendar className="w-4 h-4 text-[#737373]" />
            </div>
            <div className="space-y-4">
              {eventosProximos.map((e) => (
                <div key={e.id} className="flex gap-3">
                  <div className="w-12 h-12 bg-[#f0f0eb] rounded-2xl flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-[#737373] uppercase">{e.data.split('/')[1]}</span>
                    <span className="text-sm font-bold text-[#1a1a1a]">{e.data.split('/')[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#1a1a1a] line-clamp-1">{e.titulo}</p>
                    <p className="text-xs text-[#737373]">{e.hora}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div className="bg-white rounded-3xl p-6 border border-[#e5e5e0]">
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">Links Úteis</h3>
            <div className="space-y-2">
              {[
                { label: "Dicas de segurança em viagens", href: "#" },
                { label: "Observatório do Setor Espacial", href: "#" },
                { label: "Portal da AEB", href: "https://www.gov.br/aeb" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f8f8f5] transition group"
                >
                  <span className="text-sm font-medium text-[#1a1a1a]">{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#737373] group-hover:text-[#1a1a1a] transition" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
