import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          
          {/* Brand Column */}
          <div className="space-y-5 lg:col-span-1">
            <div className="space-y-2">
              <h3 
                className="font-serif text-xl tracking-tight text-white"
                style={{ letterSpacing: '-0.02em' }}
              >
                Shizuku Matcha Studio
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Matcha de especialidad importado directamente de Shizuoka, Japón.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/shizukumatchastudio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all duration-300 rounded-sm"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a 
                href="mailto:hola@shizukumatchastudio.com"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/5 transition-all duration-300 rounded-sm"
                aria-label="Email"
              >
                <Mail size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-5">
            <p 
              className="font-mono text-[9px] uppercase text-white/40"
              style={{ letterSpacing: '0.2em' }}
            >
              Navegación
            </p>
            <nav className="flex flex-col gap-3">
              <Link href="/productos" className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-light">
                Productos
              </Link>
              <Link href="/talleres" className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-light">
                Talleres
              </Link>
              <Link href="/aprende" className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-light">
                Aprende
              </Link>
              <Link href="/nosotros" className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-light">
                Nosotros
              </Link>
              <Link href="/mayoreo" className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-light">
                Mayoreo
              </Link>
            </nav>
          </div>

          {/* Location Column */}
          <div className="space-y-5">
            <p 
              className="font-mono text-[9px] uppercase text-white/40"
              style={{ letterSpacing: '0.2em' }}
            >
              Ubicación
            </p>
            <div className="space-y-3">
              <p className="text-sm text-white/70 font-light">
                Hermosillo, Sonora
              </p>
              <p 
                className="font-mono text-[10px] text-white/50"
                style={{ letterSpacing: '0.08em' }}
              >
                29.0729° N, 110.9559° O
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <p 
              className="font-mono text-[9px] uppercase text-white/40"
              style={{ letterSpacing: '0.2em' }}
            >
              Contacto
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:hola@shizukumatchastudio.com"
                className="block text-sm text-white/70 hover:text-white transition-colors duration-200 font-light"
              >
                hola@shizukumatchastudio.com
              </a>
              <a 
                href="https://www.instagram.com/shizukumatchastudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/70 hover:text-white transition-colors duration-200 font-light"
              >
                @shizukumatchastudio
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40">
            <p 
              className="font-mono text-[9px] uppercase"
              style={{ letterSpacing: '0.12em' }}
            >
              © 2026 Shizuku Matcha Studio
            </p>
            <p 
              className="font-mono text-[9px] uppercase"
              style={{ letterSpacing: '0.12em' }}
            >
              Shizuoka → Hermosillo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
