"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroDestaque {
  id: number;
  titulo: string;
  subtitulo: string;
  imagem: string;
  link: string;
}

function TileLateral({ destaque }: { destaque: HeroDestaque }) {
  return (
    <Link
      href={destaque.link}
      className="relative rounded overflow-hidden flex items-end shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] group"
    >
      <img
        src={destaque.imagem}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="relative z-[2] w-full px-4 py-3.5 bg-gradient-to-t from-[rgba(7,29,65,0.85)] to-transparent text-white">
        <strong className="text-[13px] font-semibold block leading-snug line-clamp-2">
          {destaque.titulo}
        </strong>
      </div>
    </Link>
  );
}

export default function HeroDestaques({
  carrossel,
  laterais,
}: {
  carrossel: HeroDestaque[];
  laterais: HeroDestaque[];
}) {
  const [atual, setAtual] = useState(0);

  const proximo = useCallback(() => {
    setAtual((prev) => (prev + 1) % carrossel.length);
  }, [carrossel.length]);

  const anterior = useCallback(() => {
    setAtual((prev) => (prev - 1 + carrossel.length) % carrossel.length);
  }, [carrossel.length]);

  useEffect(() => {
    const timer = setInterval(proximo, 6000);
    return () => clearInterval(timer);
  }, [proximo]);

  if (carrossel.length === 0) return null;

  return (
    <section className="grid grid-cols-[2fr_1fr] grid-rows-[150px_150px] gap-2">
      {/* Tile grande: carrossel */}
      <div className="relative row-span-2 rounded overflow-hidden shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)] group">
        {carrossel.map((slide, index) => (
          <Link
            key={slide.id}
            href={slide.link}
            className={`absolute inset-0 flex items-end transition-opacity duration-500 ${
              index === atual ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.imagem}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-[2] w-full px-4 py-3.5 bg-gradient-to-t from-[rgba(7,29,65,0.85)] to-transparent text-white">
              <strong className="text-[15px] font-semibold block leading-snug">
                {slide.titulo}
              </strong>
              <span className="text-[11.5px] opacity-85">{slide.subtitulo}</span>
            </div>
          </Link>
        ))}

        <button
          onClick={anterior}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-[3] w-8 h-8 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white transition opacity-0 group-hover:opacity-100"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={proximo}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-[3] w-8 h-8 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white transition opacity-0 group-hover:opacity-100"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute top-3 right-3 z-[3] flex gap-1.5">
          {carrossel.map((_, index) => (
            <button
              key={index}
              onClick={() => setAtual(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === atual ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Tiles laterais fixos */}
      {laterais.slice(0, 2).map((d) => (
        <TileLateral key={d.id} destaque={d} />
      ))}
    </section>
  );
}
