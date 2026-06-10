"use client";

import { CalendarCheck, DoorOpen, MapPin } from "lucide-react";

export default function ReservaSala() {
  return (
    <div className="bg-white rounded-3xl p-5 border border-[#e5e5e0]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[#1a1a1a]">Reserva de Sala</h3>
        <CalendarCheck className="w-4 h-4 text-[#737373]" />
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-[#f0f0eb] aspect-video mb-3">
        <div className="absolute inset-0 flex items-center justify-center">
          <DoorOpen className="w-12 h-12 text-[#737373] opacity-30" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <p className="text-xs font-semibold text-white">Sala de Reunião — 2º Andar</p>
          <p className="text-[10px] text-white/80 flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3" /> Bloco A · Disponível agora
          </p>
        </div>
      </div>

      <button className="w-full bg-[#1e3a5f] hover:bg-[#2d4a73] text-white text-xs font-medium py-2.5 rounded-xl transition">
        Reservar agora
      </button>
    </div>
  );
}
