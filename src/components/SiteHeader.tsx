"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Search, Bell } from "lucide-react";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Notícias", href: "/noticias" },
  { label: "Normas e Boletins", href: "/boletins" },
  { label: "Sistemas", href: "/sistemas" },
  { label: "Diretorias", href: "/diretorias" },
  { label: "AEB Escola", href: "/aeb-escola" },
  { label: "Contato", href: "/contato" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const iniciais =
    session?.user?.name
      ?.split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]!.toUpperCase())
      .join("") ?? "AEB";

  const ativo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="bg-white border-b border-[#E1E1E1]">
      <div className="max-w-[1204px] mx-auto px-6 pt-4">
        <div className="flex items-center gap-3.5">
          <Link href="/" className="flex items-center gap-3.5">
            <img src="/images/logo-aeb.png" alt="AEB — Agência Espacial Brasileira" className="h-10 w-auto" />
            <span className="w-px h-8 bg-[#E1E1E1]" />
            <span className="flex flex-col">
              <strong className="text-lg font-semibold text-[#242424] leading-tight">INTRAEB</strong>
              <span className="text-xs text-[#616161]">Intranet corporativa</span>
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-2.5">
            <div className="flex items-center gap-2 bg-[#F5F5F5] border border-[#E1E1E1] rounded-full px-3.5 py-2 w-[260px]">
              <Search className="w-3.5 h-3.5 text-[#616161] flex-shrink-0" />
              <input
                type="text"
                placeholder="Buscar na intranet"
                className="bg-transparent text-[13px] outline-none w-full text-[#242424] placeholder:text-[#9b9b9b]"
              />
            </div>
            <button
              className="relative w-9 h-9 rounded-full border border-[#E1E1E1] flex items-center justify-center text-[#616161] hover:bg-[#F5F5F5] transition"
              title="Notificações"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-[#E52207] rounded-full" />
            </button>
            <div
              className="w-9 h-9 rounded-full bg-[#1e3a5f] text-white text-xs font-bold flex items-center justify-center"
              title={session?.user?.name ?? "Visitante"}
            >
              {iniciais}
            </div>
          </div>
        </div>

        <nav className="flex gap-1 mt-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[13.5px] px-3 py-2 border-b-[2.5px] transition-colors hover:bg-[#F5F5F5] ${
                ativo(item.href)
                  ? "font-semibold border-b-[#0B4DA2] text-[#0B4DA2]"
                  : "font-normal border-b-transparent text-[#242424]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
