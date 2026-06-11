"use client";

import Link from "next/link";

const documentos = [
  { id: 1, titulo: "Boletim Interno Suplementar n 26/2026", tipo: "Boletim", unidade: "CGP", data: "10/06/2026" },
  { id: 2, titulo: "Portaria AEB n 145/2026 — Programa de Gestao", tipo: "Portaria", unidade: "Gabinete", data: "09/06/2026" },
  { id: 3, titulo: "Instrucao Normativa n 12/2026 — Diarias e passagens", tipo: "IN", unidade: "DPOA", data: "05/06/2026" },
  { id: 4, titulo: "Boletim Interno Suplementar n 25/2026", tipo: "Boletim", unidade: "CGP", data: "03/06/2026" },
];

const badgeStyle: Record<string, string> = {
  Boletim: "bg-[#FFF3CD] text-[#7A5C00]",
  Portaria: "bg-[#E7EFFB] text-[#0B4DA2]",
  IN: "bg-[#E7EFFB] text-[#0B4DA2]",
};

export default function NormasBoletins() {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-3.5">
        <h2 className="text-xl font-semibold text-[#242424]">Normas e Boletins recentes</h2>
        <Link href="/boletins" className="text-xs font-semibold text-[#0B4DA2] hover:underline">Ver lista completa</Link>
      </div>
      <div className="bg-white rounded shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] overflow-hidden">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr>
              <th className="text-left text-xs font-semibold text-[#616161] px-4 py-2.5 border-b border-[#E1E1E1]">Documento</th>
              <th className="text-left text-xs font-semibold text-[#616161] px-4 py-2.5 border-b border-[#E1E1E1]">Tipo</th>
              <th className="text-left text-xs font-semibold text-[#616161] px-4 py-2.5 border-b border-[#E1E1E1]">Unidade</th>
              <th className="text-left text-xs font-semibold text-[#616161] px-4 py-2.5 border-b border-[#E1E1E1]">Publicacao</th>
            </tr>
          </thead>
          <tbody>
            {documentos.map((doc) => (
              <tr key={doc.id} className="hover:bg-[#F8FAFD]">
                <td className="px-4 py-3 border-b border-[#F5F5F5]">
                  <Link href="#" className="text-[#0B4DA2] font-semibold hover:underline">{doc.titulo}</Link>
                </td>
                <td className="px-4 py-3 border-b border-[#F5F5F5]">
                  <span className={`text-[10.5px] font-bold px-2 py-0.5 rounded-[10px] whitespace-nowrap ${badgeStyle[doc.tipo]}`}>{doc.tipo}</span>
                </td>
                <td className="px-4 py-3 border-b border-[#F5F5F5] text-[#242424]">{doc.unidade}</td>
                <td className="px-4 py-3 border-b border-[#F5F5F5] text-[#242424]">{doc.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
