"use client";

import { Star, ExternalLink } from "lucide-react";

const favoritos = [
  { id: 1, titulo: "Portal do Servidor", url: "https://portal.servidor.gov.br" },
  { id: 2, titulo: "Sigepe", url: "https://sigepe.servidor.gov.br" },
  { id: 3, titulo: "SEI", url: "https://sei.eb.gov.br" },
  { id: 4, titulo: "Sistema de Frequência", url: "#" },
  { id: 5, titulo: "Página AEB (externa)", url: "https://www.gov.br/aeb" },
];

export default function MeusFavoritos() {
  return (
    <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[#1a1a1a]">Meus Favoritos</h3>
        <Star className="w-4 h-4 text-[#737373]" />
      </div>
      <div className="space-y-1">
        {favoritos.map((f) => (
          <a
            key={f.id}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-[#f8f8f5] transition group"
          >
            <div className="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Star className="w-3.5 h-3.5 text-amber-500" />
            </div>
            <span className="text-xs font-medium text-[#1a1a1a] flex-1 truncate group-hover:text-[#1e3a5f] transition">
              {f.titulo}
            </span>
            <ExternalLink className="w-3 h-3 text-[#737373] opacity-0 group-hover:opacity-100 transition" />
          </a>
        ))}
      </div>
    </div>
  );
}
