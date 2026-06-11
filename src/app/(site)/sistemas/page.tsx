import { ExternalLink, BookOpen } from "lucide-react";
import sistemasData from "@/content/sistemas.json";

export const metadata = { title: "Sistemas — INTRAEB" };

interface Sistema {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  url: string | null;
  manual: string | null;
  responsavel: string;
}

const sistemas = sistemasData as Sistema[];

export default function SistemasPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Todos os Sistemas</h1>
      <p className="text-sm text-[#737373] mb-6 max-w-[760px]">
        Sistemas e ferramentas utilizados na AEB, com acesso direto e manual de
        utilização quando disponível. Alguns manuais abrem na intranet antiga
        (rede da AEB).
      </p>

      <div className="grid grid-cols-3 gap-4">
        {sistemas.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] p-5 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src={s.icone} alt="" className="w-9 h-9 object-contain" />
              </div>
              <div className="min-w-0">
                <h2 className="text-[14.5px] font-semibold text-[#242424] leading-snug">{s.nome}</h2>
                <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-[10px] bg-[#E7EFFB] text-[#0B4DA2] inline-block mt-1">
                  {s.responsavel}
                </span>
              </div>
            </div>

            <p className="text-[12.5px] text-[#616161] leading-relaxed flex-1 line-clamp-4">{s.descricao}</p>

            <div className="flex items-center gap-2 mt-4">
              {s.url && (
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#1e3a5f] hover:bg-[#2d4a73] text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition"
                >
                  Acessar <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {s.manual && (
                <a
                  href={s.manual}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-[#E1E1E1] text-[#242424] hover:bg-[#F5F5F5] text-xs font-semibold px-3.5 py-2 rounded-lg transition"
                >
                  <BookOpen className="w-3 h-3" /> Manual
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
