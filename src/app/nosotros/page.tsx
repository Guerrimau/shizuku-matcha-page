import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nosotros — Matcha Importado Directo a Hermosillo",
  description:
    "Shizuku Matcha Studio importa matcha directo del productor en Shizuoka, Japón. Sin intermediarios. Trazabilidad completa del cultivar Okumidori.",
  openGraph: {
    title: "Nosotros — Importación Directa desde Japón",
    description:
      "Shizuku Matcha Studio importa matcha directo del productor en Shizuoka, Japón. Sin intermediarios. Trazabilidad completa del cultivar Okumidori.",
    url: "https://shizukumatchastudio.com/nosotros",
    type: "website",
    locale: "es_MX",
    siteName: "Shizuku Matcha Studio",
    images: [
      {
        url: "https://shizukumatchastudio.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Shizuku Matcha Studio — Importación directa desde Japón",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros — Importación Directa desde Japón",
    description:
      "Importamos matcha directo del productor en Shizuoka, Japón. Trazabilidad completa del cultivar Okumidori.",
    images: ["https://shizukumatchastudio.com/og.jpg"],
  },
  alternates: {
    canonical: "https://shizukumatchastudio.com/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-washi-bg">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p
                className="font-mono text-[9px] uppercase text-neutral-400 mb-6"
                style={{ letterSpacing: "0.25em" }}
              >
                Nuestra Historia
              </p>
              <h1
                className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.75rem] font-serif font-medium text-neutral-900 leading-[1.08] mb-8"
                style={{ letterSpacing: "-0.02em" }}
              >
                De Shizuoka a Hermosillo
              </h1>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.8] max-w-2xl">
                Shizuku nace de una obsesión simple: que el matcha que llegue a
                tu taza tenga la misma calidad que el que se prepara en Japón.
                Sin intermediarios. Sin compromiso.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story - Main Block */}
        <section className="py-16 md:py-24 lg:py-32 bg-neutral-50/60 border-t border-neutral-200/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Feature Image */}
                <div className="aspect-[4/3] md:aspect-auto md:h-[60vh] relative bg-neutral-100">
                  <Image
                    src="/EKI.jpg"
                    alt="Matcha Shizu no Midori en Shizuoka, Japón"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-sm p-6 lg:p-8 max-w-sm">
                    <p
                      className="font-serif text-xl text-neutral-900 font-light mb-1"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      Shizuoka, Japón
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase text-neutral-500"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      Región productora de nuestro cultivar Okumidori
                    </p>
                  </div>
                </div>

                {/* Story Content */}
                <div className="bg-[#F9F8F3] p-8 lg:p-16 flex items-center">
                  <div className="space-y-6 max-w-lg">
                    <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.8]">
                      Shizuoka produce más del 40% del té de Japón. Ahí
                      seleccionamos nuestro cultivar Okumidori y conocimos a los
                      productores que preservan el proceso de sombreado y molido
                      lento en piedra.
                    </p>
                    <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.8]">
                      Hoy importamos directamente ese matcha de especialidad a
                      México, conservando los estándares de calidad del origen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Gallery */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <div className="aspect-square bg-neutral-100 overflow-hidden relative">
                    <Image
                      src="/TEA_FIELD.jpg"
                      alt="Plantación de té en Shizuoka"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3
                      className="text-lg lg:text-xl font-serif font-light text-neutral-900"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      Las plantaciones
                    </h3>
                    <p className="text-base text-neutral-600 font-light leading-[1.8]">
                      Cultivo bajo sombra durante 20+ días antes de la cosecha.
                      Este proceso incrementa la concentración de L-teanina y
                      clorofila en cada hoja.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="aspect-square bg-neutral-100 overflow-hidden relative">
                    <Image
                      src="/MATCHA_WISK.jpg"
                      alt="Preparación tradicional de matcha con chasen"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3
                      className="text-lg lg:text-xl font-serif font-light text-neutral-900"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      La preparación
                    </h3>
                    <p className="text-base text-neutral-600 font-light leading-[1.8]">
                      Las hojas de Tencha se desvenan, se secan y se muelen en
                      molinos de piedra a baja velocidad para conservar el
                      perfil aromático.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="aspect-square bg-neutral-100 overflow-hidden relative">
                    <Image
                      src="/MATCHA_BAG.jpg"
                      alt="Bolsa de matcha Okumidori importado directo de Shizuoka a Hermosillo"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3
                      className="text-lg lg:text-xl font-serif font-light text-neutral-900"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      La importación
                    </h3>
                    <p className="text-base text-neutral-600 font-light leading-[1.8]">
                      Lotes pequeños para garantizar frescura y trazabilidad
                      completa desde el productor hasta tu taza.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team/Founders Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-xl mx-auto text-center mb-16 lg:mb-20">
              <p
                className="font-mono text-[9px] uppercase text-neutral-400 mb-6"
                style={{ letterSpacing: "0.25em" }}
              >
                El Equipo
              </p>
              <h2
                className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-serif font-light text-neutral-900 leading-[1.12]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Quiénes somos
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 lg:p-12 rounded-sm border border-neutral-100">
                <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.8] mb-6">
                  Shizuku Matcha Studio nació en Hermosillo, Sonora, de la
                  frustración de no encontrar matcha de calidad real en México.
                  Después de investigar, viajar a Japón y conocer directamente a
                  productores, decidimos hacer las cosas diferentes.
                </p>
                <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.8] mb-6">
                  No somos una marca que compra matcha genérico y le pone
                  etiqueta. Seleccionamos cultivares específicos, importamos
                  directamente y nos aseguramos de que cada gramo que vendemos
                  cumpla con los estándares que aprendimos en origen.
                </p>
                <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.8]">
                  Nuestro compromiso es simple: matcha auténtico, educación
                  honesta, y cero marketing vacío.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="text-[1.75rem] md:text-[2.25rem] font-serif font-light text-white leading-[1.12] mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                Prueba la diferencia
              </h2>
              <p className="text-base md:text-lg text-neutral-400 font-light leading-[1.8] mb-10">
                Explora nuestra selección de matcha importado directamente de
                Shizuoka, o agenda un taller para aprender a prepararlo
                correctamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 px-7 sm:px-8 py-4 font-mono text-[10px] sm:text-[11px] uppercase hover:bg-neutral-100 transition-all duration-300 rounded-sm"
                  style={{ letterSpacing: "0.08em" }}
                >
                  Ver Productos
                </Link>
                <Link
                  href="/talleres"
                  className="inline-flex items-center justify-center gap-2 text-white px-7 sm:px-8 py-4 font-mono text-[10px] sm:text-[11px] uppercase hover:text-neutral-300 transition-all duration-300 rounded-sm"
                  style={{
                    letterSpacing: "0.08em",
                    border: "1.5px solid rgb(64 64 64)",
                  }}
                >
                  Explorar Talleres
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
