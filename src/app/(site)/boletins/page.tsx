import { FileText, ExternalLink } from "lucide-react";
import { getBoletins, formatarData } from "@/lib/content";

export default function BoletinsPage() {
  const boletins = getBoletins();
  const anos = [...new Set(boletins.map((b) => b.ano))].sort((a, b) => b - a);

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Boletins Internos</h1>
      <p className="text-sm text-[#737373] mb-6">
        {boletins.length} boletins publicados. Os PDFs abrem na intranet antiga
        (acessível apenas na rede da AEB).
      </p>

      {anos.map((ano) => {
        const doAno = boletins.filter((b) => b.ano === ano);
        return (
          <section key={ano} className="mb-8">
            <h2 className="text-lg font-bold text-[#1e3a5f] mb-3">
              {ano} <span className="text-sm font-normal text-[#737373]">({doAno.length})</span>
            </h2>
            <div className="grid gap-3">
              {doAno.map((b) => (
                <a
                  key={b.id}
                  href={b.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl p-5 border border-[#e5e5e0] hover:shadow-lg transition flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#f0f0eb] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#737373]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#1a1a1a] truncate group-hover:text-[#1e3a5f] transition">{b.titulo}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${b.tipo === "Suplementar" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"}`}>{b.tipo}</span>
                      <span className="text-xs text-[#737373]">{formatarData(b.data)}</span>
                    </div>
                  </div>
                  <span className="w-10 h-10 bg-[#f0f0eb] rounded-xl flex items-center justify-center group-hover:bg-[#1e3a5f] group-hover:text-white transition flex-shrink-0">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </a>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
