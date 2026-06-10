"use client";

import { Megaphone, X } from "lucide-react";
import { useState } from "react";

export default function AvisoImportante() {
  const [fechado, setFechado] = useState(false);

  if (fechado) return null;

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 relative">
      <button
        onClick={() => setFechado(true)}
        className="absolute top-3 right-3 text-amber-400 hover:text-amber-600 transition"
        aria-label="Fechar aviso"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <Megaphone className="w-4 h-4 text-amber-600" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-amber-800 mb-1">Aviso Importante</h4>
          <p className="text-xs text-amber-700 leading-relaxed">
            Prezados colaboradores,
            <br />
            A partir de hoje acessamos todo o conteúdo institucional do Gov.Br através do link na barra lateral.
            Siga as orientações do atendimento.
            <br />
            Aguardamos a colaboração de todos.
          </p>
        </div>
      </div>
    </div>
  );
}
