"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSplit = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.1;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-88px)] overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════════════════════
          BACKGROUND — Full-width video
      ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            poster="/hero_placeholder.jpg"
          >
            <source src="/hero_video_studio.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          FLOATING CARD — Right-aligned, matches Navbar container
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-88px)] flex items-center">
        {/* Same max-w-7xl as Navbar for alignment */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-end">
            {/* Card — soft premium shadow, aligned with ORDENA button */}
            <div
              className="bg-white p-8 sm:p-10 lg:p-12 xl:p-14 w-full max-w-lg sm:max-w-xl lg:max-w-lg xl:max-w-xl rounded-sm"
              style={{
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.03), 0 20px 60px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Location pre-header — darker grey for accessibility */}
              <p 
                className="font-mono text-[10px] sm:text-[11px] uppercase text-neutral-500 mb-6 lg:mb-8"
                style={{ letterSpacing: '0.18em' }}
              >
                Hermosillo, MX — 29.07° N
              </p>

              {/* Main headline */}
              <h1
                id="hero-heading"
                className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.75rem] font-serif font-medium text-neutral-900 leading-[1.08] mb-5 lg:mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                El cuerpo del{" "}
                <span className="text-[#2d5a3d]">Matcha Latte</span> perfecto.
              </h1>

              {/* Body text */}
              <p className="text-[15px] sm:text-base lg:text-base xl:text-lg text-neutral-600 font-light leading-[1.7] mb-8 lg:mb-10">
                Matcha de especialidad cultivar Okumidori. Importado directamente
                de Shizuoka a Sonora. Sin etiquetas &apos;ceremoniales&apos;
                pretenciosas, solo trazabilidad.
              </p>

              {/* CTAs — refined buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center bg-neutral-900 text-white px-7 sm:px-8 py-4 font-mono text-[10px] sm:text-[11px] uppercase hover:bg-neutral-800 transition-all duration-300 rounded-sm"
                  style={{ letterSpacing: '0.08em' }}
                >
                  Explorar Cosecha
                </Link>
                <Link
                  href="/talleres"
                  className="inline-flex items-center justify-center text-neutral-700 px-7 sm:px-8 py-4 font-mono text-[10px] sm:text-[11px] uppercase hover:text-neutral-900 hover:border-neutral-900 transition-all duration-300 rounded-sm"
                  style={{ 
                    letterSpacing: '0.08em',
                    border: '1.5px solid rgb(212 212 212)',
                  }}
                >
                  Ver Talleres
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          ACCENTS — Kanji and coordinates
      ═══════════════════════════════════════════════════════════════ */}
      
      {/* Shizuoka kanji — bottom left */}
      <div className="absolute bottom-12 left-8 lg:left-12 z-20">
        <span
          className="font-script text-3xl lg:text-4xl text-white/25"
          style={{ writingMode: "vertical-rl" }}
        >
          静岡
        </span>
      </div>

      {/* Coordinates — bottom right, within container */}
      <div className="absolute bottom-12 right-8 lg:right-12 hidden lg:flex items-center gap-3 z-20">
        <span className="font-mono text-[9px] text-white/40" style={{ letterSpacing: '0.08em' }}>
          29.0729° N, 110.9559° O
        </span>
        <div className="w-6 h-px bg-white/25" />
      </div>
    </section>
  );
};

export default HeroSplit;
