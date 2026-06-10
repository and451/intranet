import { FileText, ExternalLink } from "lucide-react";

const boletins = [
  { id: 1, numero: "SUPLEMENTAR Nº 64/2025", data: "20/05/2025", tipo: "Suplementar" as const },
  { id: 2, numero: "SUPLEMENTAR Nº 63/2025", data: "15/05/2025", tipo: "Suplementar" as const },
  { id: 3, numero: "SUPLEMENTAR Nº 62/2025", data: "10/05/2025", tipo: "Suplementar" as const },
  { id: 4, numero: "SUPLEMENTAR Nº 61/2025", data: "05/05/2025", tipo: "Suplementar" as const },
  { id: 5, numero: "Nº 05/2024", data: "10/03/2024", tipo: "Ordinário" as const },
  { id: 6, numero: "Nº 04/2024", data: "05/02/2024", tipo: "Ordinário" as const },
];

export default function BoletinsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6">Boletins Internos</h1>
      <div className="grid gap-3">
        {boletins.map((b) => (
          <div key={b.id} className="bg-white rounded-3xl p-5 border border-[#e5e5e0] hover:shadow-lg transition flex items-center gap-4 group">
            <div className="w-12 h-12 bg-[#f0f0eb] rounded-2xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-[#737373]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#1a1a1a] truncate">Boletim Interno {b.numero}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${b.tipo === 'Suplementar' ? 'bg-purple-50 text-purple-700' : 'bg-blue-50 text-blue-700'}`}>{b.tipo}</span>
                <span className="text-xs text-[#737373]">{b.data}</span>
              </div>
            </div>
            <a href="#" className="w-10 h-10 bg-[#f0f0eb] rounded-xl flex items-center justify-center hover:bg-[#1e3a5f] hover:text-white transition flex-shrink-0">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
