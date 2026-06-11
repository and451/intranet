import Link from "next/link";
import type { Boletim } from "@/lib/content";
import { formatarData } from "@/lib/content";

const badgeStyle: Record<string, string> = {
  Suplementar: "bg-[#FFF3CD] text-[#7A5C00]",
  "Ordinário": "bg-[#E7EFFB] text-[#0B4DA2]",
};

export default function NormasBoletins({ boletins }: { boletins: Boletim[] }) {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-3.5">
        <h2 className="text-xl font-semibold text-[#242424]">Boletins Internos Recentes</h2>
        <Link href="/boletins" className="text-xs font-semibold text-[#0B4DA2] hover:underline">Ver lista completa</Link>
      </div>
      <div className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] overflow-hidden">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr>
              <th className="text-left text-xs font-semibold text-[#616161] px-4 py-2.5 border-b border-[#E1E1E1]">Documento</th>
              <th className="text-left text-xs font-semibold text-[#616161] px-4 py-2.5 border-b border-[#E1E1E1]">Tipo</th>
              <th className="text-left text-xs font-semibold text-[#616161] px-4 py-2.5 border-b border-[#E1E1E1]">Unidade</th>
              <th className="text-left text-xs font-semibold text-[#616161] px-4 py-2.5 border-b border-[#E1E1E1]">Publicação</th>
            </tr>
          </thead>
          <tbody>
            {boletins.map((b) => (
              <tr key={b.id} className="hover:bg-[#F8FAFD]">
                <td className="px-4 py-3 border-b border-[#F5F5F5]">
                  <a
                    href={b.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0B4DA2] font-semibold hover:underline text-[13px]"
                  >
                    {b.titulo}
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-[#F5F5F5]">
                  <span className={`text-[10.5px] font-bold px-2 py-0.5 rounded-[10px] whitespace-nowrap ${badgeStyle[b.tipo]}`}>{b.tipo}</span>
                </td>
                <td className="px-4 py-3 border-b border-[#F5F5F5] text-[#242424]">CGP</td>
                <td className="px-4 py-3 border-b border-[#F5F5F5] text-[#242424]">{formatarData(b.data)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
