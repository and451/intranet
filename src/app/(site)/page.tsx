import AvisoImportante from "@/components/AvisoImportante";
import HeroDestaques from "@/components/HeroDestaques";
import DashboardViva from "@/components/DashboardViva";
import NoticiasGrid from "@/components/NoticiasGrid";
import QuickLinks from "@/components/QuickLinks";
import DiretoriasLinks from "@/components/DiretoriasLinks";
import NormasBoletins from "@/components/NormasBoletins";
import EventosSection from "@/components/EventosSection";
import AniversariantesSection from "@/components/AniversariantesSection";
import ReservaSala from "@/components/ReservaSala";
import MeusFavoritos from "@/components/MeusFavoritos";
import LinksUteis from "@/components/LinksUteis";
import SuporteTI from "@/components/SuporteTI";
import { getNoticia, getNoticiasRecentes, getBoletinsRecentes, formatarData } from "@/lib/content";

// Tiles laterais do hero: destaques fixos da atividade finalística da AEB
// (AEB Escola, Observatório...), conforme o layout do Claude Design.
const destaquesFinalisticos = [
  "novo-curso-do-aeb-escola-aborda-conceitos-de-astronautica",
  "observatorio-do-setor-espacial-brasileiro-entrega-novas-funcionalidades",
];

export default function Home() {
  const comFoto = getNoticiasRecentes(8, true);
  const paraDestaque = (n: NonNullable<ReturnType<typeof getNoticia>>) => ({
    id: n.id,
    titulo: n.titulo,
    subtitulo: `${n.categorias[0] ?? "AEB"} · ${formatarData(n.data)}`,
    imagem: n.imagem!,
    link: `/noticias/${n.slug}`,
  });
  const carrossel = comFoto.slice(0, 5).map(paraDestaque);
  const laterais = destaquesFinalisticos
    .map((slug) => getNoticia(slug))
    .filter((n) => n !== undefined && n.imagem)
    .map((n) => paraDestaque(n!));
  const cards = comFoto.slice(5, 8).map((n) => ({
    id: n.id,
    titulo: n.titulo,
    descricao: n.resumo,
    meta: `${n.categorias[0] ?? "AEB"} · ${formatarData(n.data)}`,
    imagem: n.imagem,
    link: `/noticias/${n.slug}`,
  }));
  const boletins = getBoletinsRecentes(5);

  return (
    <div className="flex flex-col gap-7">
      <AvisoImportante />
      <HeroDestaques carrossel={carrossel} laterais={laterais} />
      <DashboardViva />
      <NoticiasGrid noticias={cards} />
      <QuickLinks />
      <DiretoriasLinks />

      <div className="grid grid-cols-[2fr_1fr] gap-6 items-start">
        <NormasBoletins boletins={boletins} />
        <div className="flex flex-col gap-6">
          <ReservaSala />
          <EventosSection />
          <AniversariantesSection />
          <MeusFavoritos />
          <LinksUteis />
          <SuporteTI />
        </div>
      </div>
    </div>
  );
}
