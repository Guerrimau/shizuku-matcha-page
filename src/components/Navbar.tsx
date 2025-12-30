'use client';

import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X, Building2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isCafeteriasPage = pathname === '/matcha-cafeterias';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-sm' 
        : isCafeteriasPage 
          ? 'bg-white/80 backdrop-blur-sm' 
          : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex flex-col items-start transition-colors duration-300"
          >
            <span className={`text-2xl md:text-3xl font-serif leading-tight transition-colors duration-300 ${
              isScrolled || isCafeteriasPage ? 'text-charcoal' : 'text-white'
            }`}>
              Shizuku
            </span>
            <span className={`text-xs md:text-sm font-sans font-normal tracking-wider uppercase transition-colors duration-300 ${
              isScrolled || isCafeteriasPage ? 'text-charcoal-light' : 'text-white/90'
            }`}>
              Matcha Studio
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {pathname === '/' && (
              <>
                <button 
                  onClick={() => scrollToSection('products')}
                  className={`transition-colors duration-300 ${
                    isScrolled || isCafeteriasPage
                      ? 'text-charcoal-light hover:text-matcha' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  Productos
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className={`transition-colors duration-300 ${
                    isScrolled || isCafeteriasPage
                      ? 'text-charcoal-light hover:text-matcha' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  Experiencia
                </button>
                <button 
                  onClick={() => scrollToSection('how-to-order')}
                  className={`transition-colors duration-300 ${
                    isScrolled || isCafeteriasPage
                      ? 'text-charcoal-light hover:text-matcha' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  Ordenar
                </button>
                <button 
                  onClick={() => scrollToSection('story')}
                  className={`transition-colors duration-300 ${
                    isScrolled || isCafeteriasPage
                      ? 'text-charcoal-light hover:text-matcha' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  Historia
                </button>
              </>
            )}
            <Link 
              href="/matcha-cafeterias"
              className={`inline-flex items-center gap-2 transition-colors duration-300 ${
                isScrolled || isCafeteriasPage
                  ? 'text-charcoal-light hover:text-matcha' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <Building2 size={16} />
              Para Cafeterías
            </Link>
            <a 
              href="https://www.instagram.com/shizukumatchastudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-matcha text-white px-4 py-2 hover:bg-matcha-dark transition-colors duration-300"
            >
              <Instagram size={16} />
              Ordenar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors duration-300 ${
              isScrolled || isCafeteriasPage ? 'text-charcoal' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="flex flex-col py-4">
              {pathname === '/' && (
                <>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="px-4 py-3 text-charcoal-light hover:text-matcha transition-colors text-left"
                  >
                    Productos
                  </button>
                  <button 
                    onClick={() => scrollToSection('experience')}
                    className="px-4 py-3 text-charcoal-light hover:text-matcha transition-colors text-left"
                  >
                    Experiencia
                  </button>
                  <button 
                    onClick={() => scrollToSection('how-to-order')}
                    className="px-4 py-3 text-charcoal-light hover:text-matcha transition-colors text-left"
                  >
                    Ordenar
                  </button>
                  <button 
                    onClick={() => scrollToSection('story')}
                    className="px-4 py-3 text-charcoal-light hover:text-matcha transition-colors text-left"
                  >
                    Historia
                  </button>
                </>
              )}
              <Link 
                href="/matcha-cafeterias"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-charcoal-light hover:text-matcha transition-colors text-left flex items-center gap-2"
              >
                <Building2 size={16} />
                Para Cafeterías
              </Link>
              <div className="px-4 py-3">
                <a 
                  href="https://www.instagram.com/shizukumatchastudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-matcha text-white px-4 py-2 w-full justify-center hover:bg-matcha-dark transition-colors"
                >
                  <Instagram size={16} />
                  Ordenar
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;