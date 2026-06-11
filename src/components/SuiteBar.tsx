"use client";

import { Search, Bell, Settings } from "lucide-react";
import { useSession } from "next-auth/react";

export default function SuiteBar() {
  const { data: session } = useSession();
  const userName = session?.user?.name || "Servidor";
  const initials = userName.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();

  return (
    <div className="bg-[#1B1A19] text-white h-12 flex items-center px-4 gap-4 sticky top-0 z-50">
      <div className="grid grid-cols-3 gap-[3px] p-2 cursor-pointer">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="w-1 h-1 bg-white rounded-[1px]" />
        ))}
      </div>
      <span className="text-[15px] font-semibold">INTRAEB</span>
      <div className="flex-1 max-w-[560px] mx-auto bg-white rounded h-8 flex items-center px-3 gap-2 text-[#616161] text-[13px]">
        <Search className="w-3.5 h-3.5" />
        <span>Pesquisar neste site</span>
      </div>
      <div className="flex items-center gap-3.5 ml-auto">
        <Bell className="w-5 h-5 opacity-90" />
        <Settings className="w-5 h-5 opacity-90" />
        <div className="w-[30px] h-[30px] rounded-full bg-[#0B4DA2] text-white text-xs font-semibold flex items-center justify-center">
          {initials}
        </div>
      </div>
    </div>
  );
}
