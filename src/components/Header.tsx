"use client";

import { Search, Bell, Menu, ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const menuSuperior = [
  { label: "Sobre Nós", href: "/sobre-nos" },
  { label: "Biblioteca", href: "/biblioteca" },
  { label: "Área do Servidor", href: "/portal-aprendizado" },
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [maisOpen, setMaisOpen] = useState(false);
  const { data: session, status } = useSession();

  const userName = session?.user?.name || "Servidor";
  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <header className="px-6 md:px-8 py-4 space-y-4">
      {/* Linha superior — Menu institucional */}
      <div className="flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-1">
          {menuSuperior.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-[#737373] hover:text-[#1a1a1a] px-3 py-1.5 rounded-lg hover:bg-white/50 transition"
            >
              {item.label}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={() => setMaisOpen(!maisOpen)}
              className="flex items-center gap-1 text-xs font-medium text-[#737373] hover:text-[#1a1a1a] px-3 py-1.5 rounded-lg hover:bg-white/50 transition"
            >
              Mais Opções <ChevronDown className="w-3 h-3" />
            </button>
            {maisOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-[#e5e5e0] rounded-xl shadow-lg py-1 min-w-[180px] z-50">
                <Link href="/diretorias" className="block px-4 py-2 text-xs text-[#1a1a1a] hover:bg-[#f8f8f5] transition">Diretorias</Link>
                <Link href="/comissoes" className="block px-4 py-2 text-xs text-[#1a1a1a] hover:bg-[#f8f8f5] transition">Comissões</Link>
                <Link href="/comites" className="block px-4 py-2 text-xs text-[#1a1a1a] hover:bg-[#f8f8f5] transition">Comitês</Link>
                <Link href="/grupos-trabalho" className="block px-4 py-2 text-xs text-[#1a1a1a] hover:bg-[#f8f8f5] transition">Grupos de Trabalho</Link>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3 ml-auto">
          <div className={`flex items-center bg-white rounded-2xl border border-[#e5e5e0] px-4 py-2.5 transition-all duration-300 ${searchOpen ? "w-64" : "w-44"}`}>
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Buscar na intranet..."
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
              className="bg-transparent text-sm outline-none w-full text-[#1a1a1a] placeholder:text-gray-400"
            />
          </div>
          <button className="relative w-10 h-10 bg-white rounded-2xl border border-[#e5e5e0] flex items-center justify-center hover:shadow-md transition">
            <Bell className="w-4 h-4 text-[#1a1a1a]" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {status === "authenticated" ? (
            <div className="flex items-center gap-2">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-xs font-semibold text-[#1a1a1a]">{userName}</span>
                <span className="text-[10px] text-[#737373]">{session.user?.email}</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-xs font-bold">
                {userInitials}
              </div>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="w-10 h-10 bg-white rounded-2xl border border-[#e5e5e0] flex items-center justify-center hover:shadow-md transition"
                title="Sair"
              >
                <LogOut className="w-4 h-4 text-[#737373]" />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-[#e5e5e0] hover:shadow-md transition text-xs font-semibold text-[#1a1a1a]"
            >
              Entrar
            </Link>
          )}

          <button className="md:hidden w-10 h-10 bg-white rounded-2xl border border-[#e5e5e0] flex items-center justify-center">
            <Menu className="w-4 h-4 text-[#1a1a1a]" />
          </button>
        </div>
      </div>

      {/* Linha inferior — Saudação */}
      <div>
        <h2 className="text-2xl font-bold text-[#1a1a1a]">Bem-vindo de volta, {userName.split(" ")[0]}</h2>
        <p className="text-sm text-[#737373] mt-0.5">Veja o que está acontecendo na AEB hoje</p>
      </div>
    </header>
  );
}
