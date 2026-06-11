"use client";

import { Link2, ExternalLink } from "lucide-react";

// Links reais da intranet atual (Vindula) e do gov.br
const links = [
  { id: 1, titulo: "AEB (site institucional)", url: "https://www.gov.br/aeb/pt-br" },
  { id: 2, titulo: "Ramais — Colaboradores", url: "https://colaboradores.aeb.gov.br/" },
  { id: 3, titulo: "PETRVS (PGD)", url: "https://pgd-petrvs.aeb.gov.br/" },
  { id: 4, titulo: "Gov.Br", url: "https://www.gov.br" },
];

export default function LinksUteis() {
  return (
    <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[#1a1a1a]">Links Úteis</h3>
        <Link2 className="w-4 h-4 text-[#737373]" />
      </div>
      <div className="space-y-1">
        {links.map((l) => (
          <a
            key={l.id}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-[#f8f8f5] transition group"
          >
            <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Link2 className="w-3.5 h-3.5 text-blue-600" />
            </div>
            <span className="text-xs font-medium text-[#1a1a1a] flex-1 truncate group-hover:text-[#1e3a5f] transition">
              {l.titulo}
            </span>
            <ExternalLink className="w-3 h-3 text-[#737373] opacity-0 group-hover:opacity-100 transition" />
          </a>
        ))}
      </div>
    </div>
  );
}
