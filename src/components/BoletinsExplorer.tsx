"use client";

import { useMemo, useState } from "react";
import { FileText, ExternalLink, Search } from "lucide-react";
import type { Boletim } from "@/lib/content";
import { formatarData } from "@/lib/content";

const POR_PAGINA = 30;

export default function BoletinsExplorer({ boletins }: { boletins: Boletim[] }) {
  const [busca, setBusca] = useState("");
  const [tipo, setTipo] = useState<"todos" | "Ordinário" | "Suplementar">("todos");
  const [ano, setAno] = useState<number | "todos">("todos");
  const [pagina, setPagina] = useState(1);

  const anos = useMemo(
    () => [...new Set(boletins.map((b) => b.ano))].sort((a, b) => b - a),
    [boletins]
  );

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return boletins.filter(
      (b) =>
        (tipo === "todos" || b.tipo === tipo) &&
        (ano === "todos" || b.ano === ano) &&
        (!termo || b.titulo.toLowerCase().includes(termo))
    );
  }, [boletins, busca, tipo, ano]);

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / POR_PAGINA));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const visiveis = filtrados.slice((paginaAtual - 1) * POR_PAGINA, paginaAtual * POR_PAGINA);

  const aoFiltrar = (fn: () => void) => {
    fn();
    setPagina(1);
  };

  return (
    <div>
      <div className="flex gap-2.5 flex-wrap mb-4">
        <div className="flex items-center gap-2 bg-white border border-[#E1E1E1] rounded-lg px-3 py-2 flex-1 min-w-[220px]">
          <Search className="w-3.5 h-3.5 text-[#616161] flex-shrink-0" />
          <input
            type="text"
            value={busca}
            onChange={(e) => aoFiltrar(() => setBusca(e.target.value))}
            placeholder="Buscar boletim (ex.: 64/2025)"
            className="bg-transparent text-[13px] outline-none w-full text-[#242424] placeholder:text-[#9b9b9b]"
          />
        </div>
        <select
          value={tipo}
          onChange={(e) => aoFiltrar(() => setTipo(e.target.value as typeof tipo))}
          className="text-[13px] bg-white border border-[#E1E1E1] rounded-lg px-3 py-2"
        >
          <option value="todos">Todos os tipos</option>
          <option value="Ordinário">Ordinário</option>
          <option value="Suplementar">Suplementar</option>
        </select>
        <select
          value={ano}
          onChange={(e) => aoFiltrar(() => setAno(e.target.value === "todos" ? "todos" : Number(e.target.value)))}
          className="text-[13px] bg-white border border-[#E1E1E1] rounded-lg px-3 py-2"
        >
          <option value="todos">Todos os anos</option>
          {anos.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      <p className="text-xs text-[#737373] mb-3">{filtrados.length} boletins encontrados</p>

      <div className="grid gap-2.5">
        {visiveis.map((b) => (
          <a
            key={b.id}
            href={b.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] p-4 flex items-center gap-3.5 group hover:shadow-md transition"
          >
            <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-4.5 h-4.5 text-[#616161]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13.5px] font-semibold text-[#242424] truncate group-hover:text-[#0B4DA2] transition">
                {b.titulo}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[10px] ${b.tipo === "Suplementar" ? "bg-[#FFF3CD] text-[#7A5C00]" : "bg-[#E7EFFB] text-[#0B4DA2]"}`}>
                  {b.tipo}
                </span>
                <span className="text-xs text-[#616161]">CGP · {formatarData(b.data)}</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#616161] opacity-0 group-hover:opacity-100 transition flex-shrink-0" />
          </a>
        ))}
      </div>

      {totalPaginas > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            disabled={paginaAtual === 1}
            onClick={() => setPagina(paginaAtual - 1)}
            className="px-4 py-2 text-xs font-semibold bg-white border border-[#E1E1E1] rounded hover:bg-[#F5F5F5] transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <span className="text-xs text-[#737373] px-3">
            Página {paginaAtual} de {totalPaginas}
          </span>
          <button
            disabled={paginaAtual === totalPaginas}
            onClick={() => setPagina(paginaAtual + 1)}
            className="px-4 py-2 text-xs font-semibold bg-white border border-[#E1E1E1] rounded hover:bg-[#F5F5F5] transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}
