import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-washi-bg flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          {/* Kanji accent */}
          <span
            className="font-script text-6xl text-neutral-200 block mb-6"
          >
            茶
          </span>
          
          {/* 404 */}
          <h1
            className="text-[4rem] md:text-[6rem] font-serif font-light text-neutral-900 leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            404
          </h1>
          
          {/* Message */}
          <p
            className="mt-4 text-lg text-neutral-600 font-light"
          >
            Esta página no existe o fue movida.
          </p>
          
          {/* Coordinates accent */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-8 h-px bg-neutral-300" />
            <span
              className="font-mono text-[10px] text-neutral-400"
              style={{ letterSpacing: "0.12em" }}
            >
              PÁGINA NO ENCONTRADA
            </span>
            <div className="w-8 h-px bg-neutral-300" />
          </div>
          
          {/* Navigation options */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 font-mono text-[10px] uppercase hover:bg-neutral-800 transition-colors duration-200 rounded-sm"
              style={{ letterSpacing: "0.1em" }}
            >
              Volver al Inicio
            </Link>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 px-8 py-4 font-mono text-[10px] uppercase hover:border-neutral-900 hover:text-neutral-900 transition-colors duration-200 rounded-sm"
              style={{ letterSpacing: "0.1em" }}
            >
              Ver Productos
            </Link>
          </div>
          
          {/* Quick links */}
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <p
              className="font-mono text-[9px] uppercase text-neutral-400 mb-4"
              style={{ letterSpacing: "0.2em" }}
            >
              Enlaces útiles
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/talleres"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Talleres
              </Link>
              <Link
                href="/aprende"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Aprende
              </Link>
              <Link
                href="/nosotros"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="/mayoreo"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Mayoreo
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
