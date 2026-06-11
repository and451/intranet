"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    titulo: "Entrega de novas funcionalidades no Observatorio do Setor Espacial Brasileiro",
    subtitulo: "Thiago Sousa · 20/02/2024",
    imagem: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&q=80",
    link: "#",
  },
  {
    id: 2,
    titulo: "Novo curso do AEB Escola aborda conceitos de astronautica",
    subtitulo: "Tania Costa · DIEN · 09/09/2022",
    imagem: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200&h=400&fit=crop&q=80",
    link: "#",
  },
  {
    id: 3,
    titulo: "Workshop Sobre Pequenos Satelites Educacionais — inscricoes abertas",
    subtitulo: "Jean Borges · DIEN · 11/11/2021",
    imagem: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&h=400&fit=crop&q=80",
    link: "#",
  },
];

export default function HeroCarousel() {
  const [atual, setAtual] = useState(0);

  const proximo = useCallback(() => {
    setAtual((prev) => (prev + 1) % slides.length);
  }, []);

  const anterior = useCallback(() => {
    setAtual((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(proximo, 6000);
    return () => clearInterval(timer);
  }, [proximo]);

  return (
    <section className="relative rounded overflow-hidden shadow-[0_1.6px_3.6px_rgba(0,0,0,0.10),0_0.3px_0.9px_rgba(0,0,0,0.07)]">
      <div className="relative h-[320px]">
        {slides.map((slide, index) => (
          <Link
            key={slide.id}
            href={slide.link}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === atual ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.imagem}
              alt={slide.titulo}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,29,65,0.85)] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <strong className="text-lg font-semibold text-white leading-snug block max-w-[700px]">
                {slide.titulo}
              </strong>
              <span className="text-[12px] text-white/80 mt-1 block">{slide.subtitulo}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Navegacao */}
      <button
        onClick={anterior}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white transition"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={proximo}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white transition"
        aria-label="Proximo slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, index) => (
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
    </section>
  );
}
