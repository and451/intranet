import Link from "next/link";
import { Newspaper, FileText, Rocket, Calendar, ChevronRight, TrendingUp, Heart, MessageCircle, Send } from "lucide-react";
import AvisoImportante from "@/components/AvisoImportante";
import Aniversariantes from "@/components/Aniversariantes";
import ReservaSala from "@/components/ReservaSala";
import MeusFavoritos from "@/components/MeusFavoritos";
import LinksUteis from "@/components/LinksUteis";
import SuporteTI from "@/components/SuporteTI";
import TeamsOutlookPanel from "@/components/TeamsOutlookPanel";

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

const feedPosts = [
  {
    id: 1,
    autor: "CGP — Coordenação de Gestão de Pessoas",
    data: "25 de maio às 14:01",
    tipo: "boletim",
    titulo: "BOLETIM INTERNO SUPLEMENTAR Nº 26/2026",
    descricao: "Para acessar o conteúdo completo deste boletim, clique aqui.",
    imagem: true,
    curtidas: 2,
    comentarios: 0,
  },
  {
    id: 2,
    autor: "CGP — Coordenação de Gestão de Pessoas",
    data: "20 de maio às 09:30",
    tipo: "boletim",
    titulo: "BOLETIM INTERNO SUPLEMENTAR Nº 25/2026",
    descricao: "Para acessar o conteúdo completo deste boletim, clique aqui.",
    imagem: true,
    curtidas: 1,
    comentarios: 0,
  },
  {
    id: 3,
    autor: "CGP — Coordenação de Gestão de Pessoas",
    data: "15 de maio às 16:45",
    tipo: "capacitacao",
    titulo: "Ciclo de Capacitação Interna",
    descricao: "Convidamos todos os colaboradores a participarem do Ciclo de Capacitação Interna, promovido pela CGP. As inscrições podem ser realizadas por meio do formulário disponível no link abaixo.",
    imagem: true,
    curtidas: 5,
    comentarios: 2,
  },
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

      {/* Grid principal: 3 colunas (esquerda, centro, direita) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Coluna esquerda — Avisos */}
        <div className="lg:col-span-3 space-y-6">
          <AvisoImportante />

          {/* Mini boletins */}
          <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-[#1a1a1a]">Boletins Recentes</h3>
              <Link href="/boletins" className="text-[10px] font-medium text-[#737373] hover:text-[#1a1a1a] flex items-center gap-1 transition">
                Todos <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-2">
              {boletinsRecentes.map((b) => (
                <div key={b.id} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#f8f8f5] transition cursor-pointer">
                  <div className="w-8 h-8 bg-[#f0f0eb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-3.5 h-3.5 text-[#737373]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-[#1a1a1a] truncate">{b.numero}</p>
                    <p className="text-[9px] text-[#737373]">{b.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eventos rápidos */}
          <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-[#1a1a1a]">Eventos</h3>
              <Calendar className="w-4 h-4 text-[#737373]" />
            </div>
            <div className="space-y-3">
              {eventosProximos.map((e) => (
                <div key={e.id} className="flex gap-2.5">
                  <div className="w-10 h-10 bg-[#f0f0eb] rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-[9px] font-bold text-[#737373] uppercase">{e.data.split('/')[1]}</span>
                    <span className="text-xs font-bold text-[#1a1a1a]">{e.data.split('/')[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#1a1a1a] line-clamp-1">{e.titulo}</p>
                    <p className="text-[10px] text-[#737373]">{e.hora}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna central — Feed */}
        <div className="lg:col-span-5 space-y-6">
          {/* Banner AEB Escola */}
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

          {/* Feed de posts estilo timeline */}
          <div className="space-y-5">
            {feedPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl p-5 border border-[#e5e5e0]">
                {/* Cabeçalho do post */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {post.autor.split(" ")[0].substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1a1a1a]">{post.autor}</p>
                    <p className="text-[10px] text-[#737373]">{post.data}</p>
                  </div>
                </div>

                {/* Conteúdo */}
                <h4 className="text-sm font-bold text-[#1a1a1a] mb-2">{post.titulo}</h4>
                <p className="text-xs text-[#737373] mb-4 leading-relaxed">{post.descricao}</p>

                {/* Imagem placeholder */}
                {post.imagem && (
                  <div className="rounded-2xl bg-[#f0f0eb] aspect-video mb-4 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <FileText className="w-10 h-10 text-[#737373] mx-auto mb-2 opacity-40" />
                      <span className="text-xs text-[#737373] font-semibold opacity-60">BOLETIM INTERNO</span>
                    </div>
                  </div>
                )}

                {/* Interações */}
                <div className="flex items-center gap-4 pt-3 border-t border-[#e5e5e0]">
                  <button className="flex items-center gap-1.5 text-[11px] text-[#737373] hover:text-red-500 transition">
                    <Heart className="w-3.5 h-3.5" /> {post.curtidas}
                  </button>
                  <button className="flex items-center gap-1.5 text-[11px] text-[#737373] hover:text-blue-600 transition">
                    <MessageCircle className="w-3.5 h-3.5" /> {post.comentarios}
                  </button>
                </div>

                {/* Campo de comentário */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-[8px] font-bold text-white">
                    AM
                  </div>
                  <div className="flex-1 flex items-center bg-[#f8f8f5] rounded-xl px-3 py-2">
                    <input
                      type="text"
                      placeholder="Escreva o seu comentário..."
                      className="bg-transparent text-[11px] outline-none w-full text-[#1a1a1a] placeholder:text-gray-400"
                    />
                    <button className="w-6 h-6 bg-emerald-500 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition flex-shrink-0">
                      <Send className="w-3 h-3 text-white" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Paginação */}
          <div className="flex items-center justify-center gap-3">
            <button className="px-4 py-2 bg-white border border-[#e5e5e0] rounded-xl text-xs font-medium text-[#737373] hover:text-[#1a1a1a] hover:shadow-sm transition">
              Anterior
            </button>
            <button className="px-4 py-2 bg-white border border-[#e5e5e0] rounded-xl text-xs font-medium text-[#737373] hover:text-[#1a1a1a] hover:shadow-sm transition">
              Próximo
            </button>
          </div>
        </div>

        {/* Coluna direita — Widgets */}
        <div className="lg:col-span-4 space-y-6">
          <TeamsOutlookPanel />
          <ReservaSala />
          <Aniversariantes />
          <MeusFavoritos />
          <LinksUteis />
          <SuporteTI />
        </div>
      </div>
    </div>
  );
}
