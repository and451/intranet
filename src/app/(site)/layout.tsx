import GovBar from "@/components/GovBar";
import SuiteBar from "@/components/SuiteBar";
import SiteHeader from "@/components/SiteHeader";
import SpFooter from "@/components/SpFooter";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#242424] flex flex-col">
      <GovBar />
      <SuiteBar />
      <SiteHeader />
      <main className="flex-1 w-full max-w-[1204px] mx-auto px-6 py-6">{children}</main>
      <SpFooter />
    </div>
  );
}
