import { Target, Eye, Heart, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

const pendencias = [
  { id: 1, numero: "32/2026", tipo: "SUPLEMENTAR" },
  { id: 2, numero: "33/2026", tipo: "SUPLEMENTAR" },
  { id: 3, numero: "34/2026", tipo: "SUPLEMENTAR" },
  { id: 4, numero: "35/2026", tipo: "SUPLEMENTAR" },
  { id: 5, numero: "36/2026", tipo: "SUPLEMENTAR" },
  { id: 6, numero: "37/2026", tipo: "SUPLEMENTAR" },
  { id: 7, numero: "04/2026", tipo: "ORDINÁRIO" },
  { id: 8, numero: "38/2026", tipo: "SUPLEMENTAR" },
  { id: 9, numero: "39/2026", tipo: "SUPLEMENTAR" },
  { id: 10, numero: "40/2026", tipo: "SUPLEMENTAR" },
];

export default function SobreNos() {
  return (
    <div className="space-y-6">
      {/* Pendências */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold text-red-800">Pendências!</h3>
        </div>
        <ul className="space-y-1 max-h-40 overflow-y-auto text-xs text-red-700">
          {pendencias.map((p) => (
            <li key={p.id} className="flex items-start gap-2">
              <span className="text-red-400 mt-0.5">•</span>
              <span>
                Leitura Obrigatória: BOLETIM INTERNO {p.tipo} Nº {p.numero}.
                Para acessar o conteúdo completo deste boletim,{" "}
                <Link href="/boletins" className="underline hover:text-red-900">clique aqui</Link>.
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Busca */}
      <div className="bg-white rounded-2xl p-4 border border-[#e5e5e0] flex items-center gap-3">
        <input
          type="text"
          placeholder="O que você procura?"
          className="flex-1 bg-transparent text-sm outline-none text-[#1a1a1a] placeholder:text-gray-400"
        />
        <button className="w-9 h-9 bg-[#1e3a5f] hover:bg-[#2d4a73] rounded-xl flex items-center justify-center transition">
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Título */}
      <div className="flex items-center gap-2">
        <Star />
        <h1 className="text-xl font-bold text-[#1a1a1a]">Agência Espacial Brasileira — AEB</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-[#e5e5e0] pb-1">
        <button className="px-4 py-2 text-xs font-semibold bg-[#1e3a5f] text-white rounded-t-xl">Agência Espacial Brasileira — AEB</button>
        <button className="px-4 py-2 text-xs font-medium text-[#737373] hover:text-[#1a1a1a] transition">Organograma</button>
      </div>

      {/* Banner Missão, Visão e Valores */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a73] rounded-3xl p-8 text-white flex flex-col justify-center min-h-[280px]">
          <h2 className="text-2xl font-bold mb-2">MISSÃO,</h2>
          <h2 className="text-2xl font-bold mb-2">VISÃO E</h2>
          <h2 className="text-2xl font-bold">VALORES</h2>
        </div>

        <div className="space-y-4 text-sm text-[#1a1a1a] leading-relaxed">
          <p>
            A <strong>Missão</strong> de uma organização deve ser entendida como o seu propósito, o seu significado e a sua razão de ser.
            Deve ser sucinta e definida de forma clara e sem contradições.
          </p>
          <p>
            Ela é a principal referência para todas as atividades que acontecem na organização, sendo o direcionador dos
            esforços que buscam o alcance dos objetivos maiores da organização (KOTLER e ARMSTRONG, 1999).
          </p>
          <p>
            Por essa razão, Oliveira (2007, p.50) define que a Missão refere-se ao{" "}
            <em>"motivo central da existência da empresa, determinando quem ela atende, correspondendo, portanto, ao horizonte dentro do qual a organização atua ou pode atuar"</em>.
          </p>
          <p>
            A <strong>Visão</strong>, por sua vez, configura-se como a articulação das aspirações de uma empresa a respeito do seu futuro (HART, 1994, p.8),
            exprimindo com clareza e permanência, a natureza e essência da organização, sendo, portanto, uma idealização de um futuro desejado para a empresa.
          </p>
          <p>
            Por vislumbrar um futuro desejado, ela exerce um papel regulamentador das relações entre a instituição e os
            principais interessados. Oliveira (2007) pontua que a Visão representa que a empresa quer ser, sendo um aspecto
            que vai além da definição de missão.
          </p>
          <p>
            A Visão fornece uma perspectiva de direção para qual a organização está indo, esclarecendo tanto a vertente que a
            empresa irá seguir em longo prazo quanto sua interação estratégica (BOHLANDER et al., 2009).
          </p>
          <p>
            Nessa mesma linha, Rezende (2008) entende a Visão como a descrição do cenário ou do sonho da organização. Portanto, ela está relacionada
            à projeção de oportunidades futuras, questionando como a empresa deseja ser reconhecida. A Visão expressa a direção que a organização deve seguir,
            permite o registro e a disseminação da posição que se pretende ocupar e daquilo na qual ela pretende se tornar no futuro.
          </p>
          <p>
            Já os <strong>Valores</strong> são as crenças e os princípios estabelecidos que captam a filosofia básica da cultura da organização, indicando uma direção
            para os colaboradores. Simbolizam os parâmetros fundamentais sobre os quais a conduta que se espera dos colaboradores por meio de um conjunto
            de regras que moldam a cultura da organização.
          </p>
          <p>
            Eles estabelecem também limites sobre qual comportamento é considerado ético e aceitável (BOHLANDER e SNELL, 2009).
          </p>
          <p>
            Os Valores devem ser definidos e compartilhados com todos os membros da organização para que haja concordância e contribuição para que os mesmos sejam seguidos.
            Eles servem como um guia interno, definem a conduta que se espera dos colaboradores e orientam as decisões da organização.
          </p>
          <p>
            Por isso, Oliveira (2007, p.67) elucida que eles{" "}
            <em>"fornecem sustentação para todas as principais decisões da empresa, tendo eles forte interação com as questões éticas e morais da organização"</em>.
          </p>
        </div>
      </div>

      {/* Cards Missão, Visão, Valores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 text-white text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2">MISSÃO</h3>
          <p className="text-sm text-white/90">
            Promover e fomentar a atuação espacial brasileira, de modo nacional, regional e internacional,
            para o desenvolvimento da ciência, da tecnologia espacial e da inovação,
            e para a melhoria da qualidade de vida dos cidadãos brasileiros.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-6 text-white text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2">VISÃO</h3>
          <p className="text-sm text-white/90">
            Ser a instituição estratégica de Estado reconhecida por desenvolver e aplicar conhecimentos,
            tecnologias e serviços espaciais para o desenvolvimento do Brasil e das nações.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-6 text-white text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2">VALORES</h3>
          <p className="text-sm text-white/90">
            Autonomia tecnológica, sustentabilidade, integridade,
            transparência, cooperação internacional e inovação.
          </p>
        </div>
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
