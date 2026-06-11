import { GraduationCap, ArrowRight, BookOpen, Monitor, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

const trilhas = [
  {
    id: 1,
    tag: "TRILHA",
    titulo: "Estratégia, Governança e Gestão em Organizações alinhado à Cultura Data Driven",
    descricao: "Inicie com enfoque técnico e prático para desenvolver habilidades essenciais em nossa agência.",
    imagem: "gestao",
    link: "#",
  },
  {
    id: 2,
    tag: "TRILHA",
    titulo: "Tecnologias Aplicadas a Processos Sustentado por Inteligência de Dados",
    descricao: "Trilha direcionada para líderes que buscam integrar uma visão estratégica orientada a dados.",
    imagem: "dados",
    link: "#",
  },
];

const treinamentos = [
  {
    id: 1,
    tag: "TREINAMENTO",
    titulo: "Microsoft 365",
    descricao: "Treinamento completo de ferramentas Microsoft 365.",
    icone: Monitor,
    cor: "from-purple-500 to-indigo-600",
    link: "#",
  },
  {
    id: 2,
    tag: "TREINAMENTO",
    titulo: "SEI 4.0",
    descricao: "Materiais de apoio para o uso do SEI 4.0.",
    icone: Shield,
    cor: "from-blue-500 to-cyan-600",
    link: "#",
  },
  {
    id: 3,
    tag: "TREINAMENTO",
    titulo: "Nova Intranet",
    descricao: "Treinamento completo da nova Intranet.",
    icone: Sparkles,
    cor: "from-emerald-500 to-teal-600",
    link: "#",
  },
];

export default function PortalAprendizado() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1e3a5f] to-[#2d4a73] min-h-[220px] flex items-end p-8">
        <div className="absolute inset-0 opacity-10">
          <GraduationCap className="w-full h-full text-white" strokeWidth={0.3} />
        </div>
        <div className="relative z-10">
          <span className="inline-block bg-blue-400 text-white text-[10px] font-bold px-2 py-1 rounded mb-3">CTI</span>
          <h1 className="text-2xl font-bold text-white mb-1">Portal de Aprendizado</h1>
          <p className="text-sm text-white/70">Coordenação de Tecnologia da Informação</p>
        </div>
      </div>

      {/* Saudação */}
      <div className="text-center py-4">
        <p className="text-sm text-[#737373]">Bem-vindo ao Portal de Aprendizado da CTI</p>
        <h2 className="text-xl font-bold text-[#1a1a1a] mt-1">Sua jornada de aprendizado começa aqui!</h2>
      </div>

      {/* Trilhas */}
      <div className="space-y-4">
        {trilhas.map((t) => (
          <div
            key={t.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#3b4db5] rounded-3xl overflow-hidden"
          >
            <div className="p-8 flex flex-col justify-center text-white">
              <span className="inline-block w-fit bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded mb-4">
                {t.tag}
              </span>
              <h3 className="text-lg font-bold mb-3 leading-snug">{t.titulo}</h3>
              <p className="text-sm text-white/80 mb-6">{t.descricao}</p>
              <Link
                href={t.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition w-fit"
              >
                Ir para a página <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-[#2d3a8c] flex items-center justify-center min-h-[200px]">
              <BookOpen className="w-20 h-20 text-white/20" />
            </div>
          </div>
        ))}
      </div>

      {/* Treinamentos */}
      <h3 className="text-lg font-bold text-[#1a1a1a] mt-8">Treinamentos Disponíveis</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {treinamentos.map((tr) => {
          const Icon = tr.icone;
          return (
            <div
              key={tr.id}
              className="bg-[#3b4db5] rounded-3xl overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className={`bg-gradient-to-br ${tr.cor} flex items-center justify-center min-h-[160px]`}>
                  <Icon className="w-16 h-16 text-white/30" />
                </div>
                <div className="p-6 flex flex-col justify-center text-white">
                  <span className="inline-block w-fit bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded mb-3">
                    {tr.tag}
                  </span>
                  <h4 className="text-base font-bold mb-2">{tr.titulo}</h4>
                  <p className="text-sm text-white/80 mb-4">{tr.descricao}</p>
                  <Link
                    href={tr.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition w-fit"
                  >
                    Ir para a página <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sobre o Portal */}
      <div className="bg-white rounded-3xl p-8 border border-[#e5e5e0] mt-8">
        <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">Portal de Aprendizado da CTI</h3>
        <p className="text-sm text-[#737373] leading-relaxed mb-4">
          O Portal de Aprendizado da Coordenação de Tecnologia da Informação (CTI) da Agência Espacial
          Brasileira (AEB) foi desenvolvido para servir como um hub de capacitação para servidores e
          colaboradores. Aqui, você encontrará uma variedade de treinamentos promovidos pela CTI e seus
          parceiros estratégicos, abordando desde temas ligados à transformação digital e inovação até
          conteúdos técnicos voltados ao uso eficiente das ferramentas corporativas.
        </p>
        <p className="text-sm text-[#737373] leading-relaxed mb-4">
          Entre os conteúdos disponíveis, estão os materiais produzidos no âmbito do Projeto de
          Inteligência Corporativa, realizado em parceria com a Fundação de Estudos e Pesquisas
          Socioeconômicas (FEPESE). Agora, o portal amplia seu escopo, reunindo também outras iniciativas
          voltadas ao desenvolvimento contínuo da equipe da AEB diante dos desafios
          tecnológicos da administração pública.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-[#e5e5e0]">
          <div className="text-sm font-bold text-[#1a1a1a]">FEPESE</div>
          <div className="text-sm font-bold text-[#1a1a1a]">CTI-DPOA</div>
          <div className="text-sm font-bold text-[#1e3a5f]">AEB</div>
          <div className="text-sm font-bold text-[#1a1a1a]">MINISTÉRIO DA CIÊNCIA, TECNOLOGIA E INOVAÇÃO</div>
        </div>
      </div>
    </div>
  );
}
