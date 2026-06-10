"use client";

import { Headphones, Wrench, MessageCircle } from "lucide-react";

export default function SuporteTI() {
  return (
    <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[#1a1a1a]">Suporte de TI</h3>
        <Headphones className="w-4 h-4 text-[#737373]" />
      </div>
      <div className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-[#f8f8f5] transition group"
        >
          <div className="w-7 h-7 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <span className="text-xs font-medium text-[#1a1a1a] group-hover:text-[#1e3a5f] transition">
            Abrir chamado
          </span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-[#f8f8f5] transition group"
        >
          <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <Wrench className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <span className="text-xs font-medium text-[#1a1a1a] group-hover:text-[#1e3a5f] transition">
            Setor — Colaboradores
          </span>
        </a>
      </div>
    </div>
  );
}
