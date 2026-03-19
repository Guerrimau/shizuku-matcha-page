'use client';

import React, { useState } from 'react';
import { Instagram, Menu, X, Building2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = () => {
    if (pathname !== '/') {
      window.location.href = '/';
    } else {
      const element = document.getElementById('home');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/40">
      {/* Consistent max-w-7xl container aligned with all sections */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[72px] lg:h-[80px] xl:h-[88px]">

          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center transition-opacity duration-300 hover:opacity-70"
          >
             {/* Kanji accent */}
             <div className="hidden md:flex mr-1 mb-1">
              <span
                className="font-script text-[14px] lg:text-sm xl:text-base text-[#2d5a3d]"
                style={{ writingMode: 'vertical-rl' }}
              >
                抹茶
              </span>
            </div>
            
            <div className="flex flex-col items-start">
              <span 
                className="text-[20px] lg:text-[22px] xl:text-[26px] leading-none font-serif font-medium text-neutral-900"
                style={{ letterSpacing: '-0.02em' }}
              >
                Shizuku
              </span>
              <span 
                className="font-mono text-[7px] lg:text-[8px] xl:text-[9px] uppercase text-neutral-500"
                style={{ letterSpacing: '0.15em' }}
              >
                Matcha Studio
              </span>
            </div>
            
           
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link
              href="/productos"
              className="font-mono text-[11px] xl:text-[12px] uppercase text-neutral-900 hover:text-neutral-600 transition-colors duration-200"
              style={{ letterSpacing: '-0.02em' }}
            >
              Productos
            </Link>
            <Link
              href="/talleres"
              className="font-mono text-[11px] xl:text-[12px] uppercase text-neutral-900 hover:text-neutral-600 transition-colors duration-200"
              style={{ letterSpacing: '-0.02em' }}
            >
              Talleres
            </Link>
            <Link
              href="/aprende"
              className="font-mono text-[11px] xl:text-[12px] uppercase text-neutral-900 hover:text-neutral-600 transition-colors duration-200"
              style={{ letterSpacing: '-0.02em' }}
            >
              Aprende
            </Link>
            <Link
              href="/nosotros"
              className="font-mono text-[11px] xl:text-[12px] uppercase text-neutral-900 hover:text-neutral-600 transition-colors duration-200"
              style={{ letterSpacing: '-0.02em' }}
            >
              Nosotros
            </Link>
            <Link
              href="/mayoreo"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] xl:text-[12px] uppercase text-neutral-900 hover:text-neutral-600 transition-colors duration-200"
              style={{ letterSpacing: '-0.02em' }}
            >
              <Building2 size={12} strokeWidth={1.5} className="xl:w-[14px] xl:h-[14px]" />
              Mayoreo
            </Link>
            
            {/* ORDENA Button — solid black, sharp corners */}
            <a
              href="https://www.instagram.com/shizukumatchastudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 xl:px-7 xl:py-3.5 font-mono text-[11px] xl:text-[12px] uppercase hover:bg-neutral-800 transition-colors duration-200 rounded-sm"
              style={{ letterSpacing: '-0.02em' }}
            >
              <Instagram size={14} strokeWidth={1.5} className="xl:w-4 xl:h-4" />
              Ordena
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-neutral-900 p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-neutral-100 -mx-6 sm:-mx-8 px-6 sm:px-8 pb-6">
            <div className="flex flex-col pt-4 space-y-1">
              <Link href="/productos" onClick={() => setIsOpen(false)} className="py-3.5 font-mono text-[11px] uppercase text-neutral-900">
                Productos
              </Link>
              <Link href="/talleres" onClick={() => setIsOpen(false)} className="py-3.5 font-mono text-[11px] uppercase text-neutral-900">
                Talleres
              </Link>
              <Link href="/aprende" onClick={() => setIsOpen(false)} className="py-3.5 font-mono text-[11px] uppercase text-neutral-900">
                Aprende
              </Link>
              <Link href="/nosotros" onClick={() => setIsOpen(false)} className="py-3.5 font-mono text-[11px] uppercase text-neutral-900">
                Nosotros
              </Link>
              <Link href="/mayoreo" onClick={() => setIsOpen(false)} className="py-3.5 font-mono text-[11px] uppercase text-neutral-900 flex items-center gap-2">
                <Building2 size={13} strokeWidth={1.5} />
                Mayoreo
              </Link>
              <div className="pt-4">
                <a
                  href="https://www.instagram.com/shizukumatchastudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white w-full py-4 font-mono text-[11px] uppercase rounded-sm"
                >
                  <Instagram size={14} strokeWidth={1.5} />
                  Ordena
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
