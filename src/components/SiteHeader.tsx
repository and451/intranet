"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "/", ativo: true },
  { label: "Noticias", href: "/noticias" },
  { label: "Normas e Boletins", href: "/boletins" },
  { label: "Diretorias", href: "/diretorias" },
  { label: "AEB Escola", href: "/aeb-escola" },
  { label: "Contato", href: "/contato" },
];

export default function SiteHeader() {
  const [ativo, setAtivo] = useState("Inicio");

  return (
    <header className="bg-white border-b border-[#E1E1E1]">
      <div className="max-w-[1204px] mx-auto px-6 pt-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded bg-[#071D41] text-white font-bold text-sm flex items-center justify-center">
            AEB
          </div>
          <div>
            <h1 className="text-xl font-semibold text-[#242424]">INTRAEB — Intranet AEB</h1>
            <span className="text-xs text-[#616161]">Site de comunicacao · Hub: Agencia Espacial Brasileira</span>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="text-xs font-semibold border border-[#E1E1E1] bg-white rounded px-3 py-1.5 text-[#242424] hover:bg-[#F5F5F5]">Seguir</button>
            <button className="text-xs font-semibold border border-[#E1E1E1] bg-white rounded px-3 py-1.5 text-[#242424] hover:bg-[#F5F5F5]">Compartilhar</button>
          </div>
        </div>
        <nav className="flex gap-1 mt-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setAtivo(item.label)}
              className={`text-[13.5px] px-3 py-2 border-b-[2.5px] transition-colors hover:bg-[#F5F5F5] ${
                ativo === item.label
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
