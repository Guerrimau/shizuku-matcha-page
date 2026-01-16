'use client';

import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isCafeteriasPage = pathname === '/matcha-cafeterias';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (pathname !== '/') {
      window.location.href = '/';
    } else {
      scrollToSection('home');
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-washi-bg/95 backdrop-blur-subtle shadow-sm border-b border-charcoal/5' 
        : 'bg-transparent backdrop-blur-subtle'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-5 md:py-6">
          
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 transition-colors duration-500 group"
          >
            <Image 
              src="/ShizukuIcon.png" 
              alt="Shizuku Matcha Studio" 
              width={48} 
              height={48}
              className="transition-opacity duration-500"
            />
            <div className="flex flex-col items-start">
              <span className="text-2xl md:text-3xl font-serif font-medium text-washi-text transition-colors duration-500 tracking-[0.08em]">
                Shizuku
              </span>
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-charcoal-light transition-colors duration-500">
                Matcha Studio
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {pathname === '/' && (
              <>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="font-mono text-xs uppercase tracking-[0.15em] text-charcoal-light hover:text-forest-green transition-colors duration-300"
                >
                  productos
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="font-mono text-xs uppercase tracking-[0.15em] text-charcoal-light hover:text-forest-green transition-colors duration-300"
                >
                  experiencia
                </button>
                <button 
                  onClick={() => scrollToSection('how-to-order')}
                  className="font-mono text-xs uppercase tracking-[0.15em] text-charcoal-light hover:text-forest-green transition-colors duration-300"
                >
                  ordenar
                </button>
                <button 
                  onClick={() => scrollToSection('story')}
                  className="font-mono text-xs uppercase tracking-[0.15em] text-charcoal-light hover:text-forest-green transition-colors duration-300"
                >
                  historia
                </button>
              </>
            )}
            <Link 
              href="/matcha-cafeterias"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-charcoal-light hover:text-forest-green transition-colors duration-300"
            >
              <Building2 size={14} />
              cafeterías
            </Link>
            <a 
              href="https://www.instagram.com/shizukumatchastudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-forest-green text-forest-green px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] hover:bg-forest-green hover:text-washi-bg transition-all duration-500"
            >
              <Instagram size={14} />
              orden
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-washi-text transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-washi-bg/98 backdrop-blur-subtle border-t border-charcoal/10">
            <div className="flex flex-col py-6 space-y-1">
              {pathname === '/' && (
                <>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-charcoal-light hover:text-forest-green transition-colors text-left"
                  >
                    productos
                  </button>
                  <button 
                    onClick={() => scrollToSection('experience')}
                    className="px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-charcoal-light hover:text-forest-green transition-colors text-left"
                  >
                    experiencia
                  </button>
                  <button 
                    onClick={() => scrollToSection('how-to-order')}
                    className="px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-charcoal-light hover:text-forest-green transition-colors text-left"
                  >
                    ordenar
                  </button>
                  <button 
                    onClick={() => scrollToSection('story')}
                    className="px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-charcoal-light hover:text-forest-green transition-colors text-left"
                  >
                    historia
                  </button>
                </>
              )}
              <Link 
                href="/matcha-cafeterias"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-charcoal-light hover:text-forest-green transition-colors text-left flex items-center gap-2"
              >
                <Building2 size={14} />
                cafeterías
              </Link>
              <div className="px-4 pt-4">
                <a 
                  href="https://www.instagram.com/shizukumatchastudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-forest-green text-forest-green px-4 py-2 w-full justify-center font-mono text-xs uppercase tracking-[0.15em] hover:bg-forest-green hover:text-washi-bg transition-all duration-500"
                >
                  <Instagram size={14} />
                  orden
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Location Detail - Bottom Right Corner */}
      <div className="absolute bottom-0 right-6 md:right-12 pb-2 hidden md:block">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-charcoal-light/60">
          Hermosillo, MX — 29.07° N
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
