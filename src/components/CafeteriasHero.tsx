'use client';

import React from 'react';
import { Instagram, Building2 } from 'lucide-react';
import Link from 'next/link';

const CafeteriasHero = () => {
  return (
    <section id="cafeterias-hero" className="min-h-screen bg-gradient-to-br from-cream to-matcha-pale flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/90 to-matcha-pale/90"></div>
      <div className="absolute inset-0">
        <img 
          src="/MatchaLatte.png" 
          alt="Matcha preparation" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/80 to-matcha-pale/80"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Business Badge */}
            <div className="inline-flex items-center gap-2 bg-matcha text-white px-4 py-2 text-sm font-medium">
              <Building2 size={16} />
              Para Cafeterías de Especialidad
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-tight">
              Matcha para cafeterías de especialidad
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-charcoal-light leading-relaxed max-w-xl">
              Si te tomas en serio el café de especialidad, tómate en serio el matcha. 
              Matcha japonés auténtico de primera cosecha, precio competitivo y asesoría profesional.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="https://www.instagram.com/shizukumatchastudio/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-matcha text-white px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-matcha-dark flex items-center justify-center gap-3"
              >
                <Instagram size={20} />
                Solicitar cotización
              </a>
              
              <Link 
                href="/#products"
                className="group bg-white text-charcoal border-2 border-charcoal px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-charcoal hover:text-white flex items-center justify-center gap-3"
              >
                Ver productos individuales
              </Link>
            </div>

            {/* Business Info */}
            <div className="flex flex-wrap gap-4 text-sm text-charcoal-light">
              <span className="font-medium text-matcha">~50% más barato que el mercado</span>
              <span>•</span>
              <span>Sin consumo mínimo</span>
              <span>•</span>
              <span>Asesoría de preparación</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden md:block relative">
            <div className="relative">
              <img 
                src="/MatchaLatte.png" 
                alt="Matcha para cafeterías" 
                className="w-full h-auto object-cover shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeteriasHero;

