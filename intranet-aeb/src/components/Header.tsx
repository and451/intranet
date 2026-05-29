"use client";

import { Search, Bell, Menu, LogOut } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 md:px-8 py-5">
      <div>
        <h2 className="text-2xl font-bold text-[#1a1a1a]">Bem-vindo de volta, Anderson</h2>
        <p className="text-sm text-[#737373] mt-0.5">Veja o que está acontecendo na AEB hoje</p>
      </div>

      <div className="flex items-center gap-3">
        <div className={`flex items-center bg-white rounded-2xl border border-[#e5e5e0] px-4 py-2.5 transition-all duration-300 ${searchOpen ? 'w-64' : 'w-44'}`}>
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
        <Link
          href="/login"
          className="hidden md:flex items-center gap-2 w-10 h-10 bg-white rounded-2xl border border-[#e5e5e0] hover:shadow-md transition overflow-hidden"
          title="Sair / Login"
        >
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs font-bold">
            AM
          </div>
        </Link>
        <button className="md:hidden w-10 h-10 bg-white rounded-2xl border border-[#e5e5e0] flex items-center justify-center">
          <Menu className="w-4 h-4 text-[#1a1a1a]" />
        </button>
      </div>
    </header>
  );
}
