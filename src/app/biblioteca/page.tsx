import { FolderOpen, FileText, ChevronRight, Search } from "lucide-react";
import Link from "next/link";

const documentos = [
  { id: 1, titulo: "Apresentação do Organograma AEB", tipo: "PDF", tamanho: "1.2 MB", data: "15/05/2026" },
  { id: 2, titulo: "Documento Técnico DGEP", tipo: "PDF", tamanho: "856 KB", data: "10/05/2026" },
  { id: 3, titulo: "Manual de Segurança da Informação", tipo: "PDF", tamanho: "2.4 MB", data: "28/04/2026" },
  { id: 4, titulo: "Normas de Conduta AEB", tipo: "PDF", tamanho: "340 KB", data: "20/04/2026" },
];

const pastas = [
  { id: "normativos", nome: "NORMATIVOS", quantidade: 24 },
  { id: "2026", nome: "2026", quantidade: 12 },
  { id: "dgep", nome: "DGEP", quantidade: 8 },
  { id: "dien", nome: "DIEN", quantidade: 6 },
  { id: "dgse", nome: "DGSE", quantidade: 5 },
  { id: "dpa", nome: "DPOA", quantidade: 4 },
];

export default function Biblioteca() {
  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-[#0f0f1a] aspect-[4/1] min-h-[180px] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <FolderOpen className="w-full h-full text-white" strokeWidth={0.5} />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest">CENTRAL DE</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest">DOCUMENTOS</h1>
        </div>
      </div>

      <h2 className="text-lg font-bold text-[#1a1a1a]">Central de Documentos</h2>

      {/* Grid: pastas + documentos */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Pastas */}
        <div className="lg:col-span-1 space-y-2">
          <div className="bg-[#0f0f1a] text-white rounded-xl p-3 flex items-center gap-2">
            <FolderOpen className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">PASTAS</span>
          </div>
          {pastas.map((p) => (
            <button
              key={p.id}
              className="w-full flex items-center justify-between p-3 bg-white border border-[#e5e5e0] rounded-xl hover:bg-[#f8f8f5] transition text-left"
            >
              <span className="text-xs font-semibold text-[#1a1a1a]">{p.nome}</span>
              <span className="text-[10px] text-[#737373] bg-[#f0f0eb] px-2 py-0.5 rounded-full">{p.quantidade}</span>
            </button>
          ))}
        </div>

        {/* Lista de documentos */}
        <div className="lg:col-span-3 space-y-3">
          <div className="bg-[#e8f4f8] rounded-xl p-3 flex items-center gap-2">
            <span className="text-xs font-bold text-[#1e3a5f] uppercase tracking-wider">Documentos recentes</span>
          </div>

          <div className="space-y-2">
            {documentos.map((d) => (
              <div
                key={d.id}
                className="flex items-center gap-4 p-4 bg-white border border-[#e5e5e0] rounded-xl hover:shadow-sm transition"
              >
                <div className="w-12 h-16 bg-[#f0f0eb] rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#737373]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#1a1a1a] truncate">{d.titulo}</p>
                  <p className="text-[10px] text-[#737373]">{d.tipo} · {d.tamanho} · {d.data}</p>
                </div>
                <button className="w-8 h-8 bg-[#1e3a5f] hover:bg-[#2d4a73] rounded-lg flex items-center justify-center transition flex-shrink-0">
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
