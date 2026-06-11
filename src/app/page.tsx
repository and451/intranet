import SuiteBar from "@/components/SuiteBar";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import DashboardViva from "@/components/DashboardViva";
import NoticiasGrid from "@/components/NoticiasGrid";
import QuickLinks from "@/components/QuickLinks";
import NormasBoletins from "@/components/NormasBoletins";
import EventosSection from "@/components/EventosSection";
import AniversariantesSection from "@/components/AniversariantesSection";
import SpFooter from "@/components/SpFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#242424]">
      <SuiteBar />
      <SiteHeader />
      
      <main className="max-w-[1204px] mx-auto px-6 py-6 flex flex-col gap-7">
        <HeroSection />
        <DashboardViva />
        <NoticiasGrid />
        <QuickLinks />
        
        <div className="grid grid-cols-[2fr_1fr] gap-6 items-start">
          <NormasBoletins />
          <div className="flex flex-col gap-7">
            <EventosSection />
            <AniversariantesSection />
          </div>
        </div>
      </main>
      
      <SpFooter />
    </div>
  );
}
