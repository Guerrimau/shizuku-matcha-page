'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const parallaxOffset = scrollY * 0.3;

  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-washi-bg"
    >
      {/* Asymmetrical Grid Layout */}
      <div className="container-custom relative z-10 w-full py-24 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen md:min-h-0">
          
          {/* Left Side - Minimal Text Content */}
          <div className="order-2 md:order-1 space-y-10 md:space-y-12 max-w-lg">
            
            {/* Small Label */}
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
                Hermosillo, MX
              </p>
              <div className="w-16 h-px bg-forest-green"></div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-tight text-washi-text leading-[1.1]">
              The art of<br />stillness.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-charcoal-light leading-relaxed font-light max-w-md">
              Ceremonial grade matcha from Shizuoka, curated for the modern ritual in Hermosillo, Sonora.
            </p>
            
            {/* Ghost CTA - Lowercase for modern studio feel */}
            <div className="pt-4">
              <button 
                onClick={scrollToProducts}
                className="group inline-flex items-center gap-3 text-sm lowercase tracking-wide text-washi-text transition-all duration-500 hover:gap-5"
              >
                <span>explore the collection</span>
                <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Side - Ritual-Focused Lifestyle Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
              <img 
                src="/BowlWithMatcha.png" 
                alt="Matcha ritual - ceremonial preparation" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                style={{
                  transform: `translateY(${parallaxOffset * 0.5}px)`,
                  willChange: 'transform',
                }}
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-washi-bg/20 to-transparent"></div>
            </div>

            {/* Floating Detail Element */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-washi-bg border border-forest-green/20 p-6 md:p-8 max-w-xs shadow-lg">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-forest-green mb-2">
                From Shizuoka
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed font-light">
                Stone-ground, first harvest matcha from traditional tea gardens.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-texture opacity-40 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
