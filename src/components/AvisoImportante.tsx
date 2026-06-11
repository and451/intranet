"use client";

import { Megaphone, X } from "lucide-react";
import { useState } from "react";

export default function AvisoImportante() {
  const [fechado, setFechado] = useState(false);

  if (fechado) return null;

  return (
    <div className="bg-[#FFF9C4] border border-[#FBC02D] rounded p-4 relative">
      <button
        onClick={() => setFechado(true)}
        className="absolute top-3 right-3 text-[#F9A825] hover:text-[#F57F17] transition"
        aria-label="Fechar aviso"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-[#FFF3CD] rounded flex items-center justify-center flex-shrink-0">
          <Megaphone className="w-4 h-4 text-[#F57F17]" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#6A1B9A] mb-1">Aviso Importante</h4>
          <p className="text-xs text-[#424242] leading-relaxed">
            Prezados colaboradores,
            <br />
            A partir de hoje acessamos todo o conteudo institucional do Gov.Br atraves do link na barra superior.
            Siga as orientacoes do atendimento.
            <br />
            Aguardamos a colaboracao de todos.
          </p>
        </div>
      </div>
    </div>
  );
}
