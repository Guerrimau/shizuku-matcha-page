import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { b2bFaqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Mayoreo para Cafeterías — Matcha B2B en Hermosillo",
  description:
    "Matcha de Shizuoka para cafeterías en Hermosillo — mejor que ceremonial: cultivar Okumidori, precio directo de importador, sin pedido mínimo.",
  openGraph: {
    title: "Mayoreo para Cafeterías — Matcha B2B en Hermosillo",
    description:
      "Matcha de especialidad de Shizuoka para cafeterías en Hermosillo y México. Cultivar Okumidori, precio directo de importador, sin pedido mínimo.",
    url: "https://shizukumatchastudio.com/mayoreo",
    type: "website",
    locale: "es_MX",
    siteName: "Shizuku Matcha Studio",
    images: [
      {
        url: "https://shizukumatchastudio.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Shizuku Matcha Studio — Matcha B2B para cafeterías",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayoreo para Cafeterías — Matcha B2B",
    description:
      "Matcha de especialidad de Shizuoka para cafeterías. Precio directo de importador, sin pedido mínimo.",
    images: ["https://shizukumatchastudio.com/og.jpg"],
  },
  alternates: {
    canonical: "https://shizukumatchastudio.com/mayoreo",
  },
};

const benefits = [
  {
    label: "Precio",
    title: "Directo de importador",
    description:
      "Sin intermediarios entre Shizuoka y tu cafetería. El precio refleja el origen, no el marketing.",
  },
  {
    label: "Perfil técnico",
    title: "Solubilidad en leche",
    description:
      "Cultivar Okumidori seleccionado por su capacidad de mantener estructura y color en preparaciones lácteas.",
  },
  {
    label: "Consistencia",
    title: "Perfil lote a lote",
    description:
      "Primera cosecha, misma región, mismo cultivar. El perfil sensorial es predecible y reproducible.",
  },
  {
    label: "Soporte",
    title: "Asesoría técnica incluida",
    description:
      "Guías de proporción, temperatura y técnica de batido adaptadas a tu equipo de trabajo.",
  },
];

const products = [
  {
    name: "Matcha Shizu no Midori",
    kanji: "抹茶",
    label: "Primera cosecha · Okumidori",
    image: "/WISK.jpg",
    specs: [
      { key: "Cultivar", value: "Okumidori" },
      { key: "Origen", value: "Shizuoka, Japón" },
      { key: "Proceso", value: "Tencha molido en piedra" },
      { key: "Perfil", value: "Umami moderado, amargor bajo" },
    ],
    note: "Seleccionado para bebidas con leche. Alta solubilidad, color verde estable.",
  },
  {
    name: "Hojicha en Polvo",
    kanji: "焙じ茶",
    label: "Tostado · Bajo en cafeína",
    image: "/MATCHA_LATTE_HOT.jpg",
    specs: [
      { key: "Tipo", value: "Hojicha en polvo" },
      { key: "Origen", value: "Japón" },
      { key: "Proceso", value: "Tostado lento" },
      { key: "Perfil", value: "Ahumado suave, sin amargor" },
    ],
    note: "Ideal para lattes de tarde y noche. Perfil diferenciador en la carta.",
  },
  {
    name: "Sencha Fukamushi",
    kanji: "煎茶",
    label: "Hoja suelta · Premium",
    image: "/sencha_loose_leaf.jpg",
    specs: [
      { key: "Tipo", value: "Sencha loose leaf" },
      { key: "Origen", value: "Shizuoka, Japón" },
      { key: "Proceso", value: "Al vapor (Fukamushi)" },
      { key: "Perfil", value: "Fresco, vegetal, umami" },
    ],
    note: "Complementa la oferta de tés calientes e iced teas.",
  },
];

export default function MayoreoPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: b2bFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-washi-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <p
                    className="font-mono text-[9px] uppercase text-neutral-400 mb-4"
                    style={{ letterSpacing: "0.25em" }}
                  >
                    Para cafeterías de especialidad
                  </p>
                  <h1
                    className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-serif font-medium text-neutral-900 leading-[1.08] mb-6"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Matcha de especialidad para tu carta
                  </h1>
                  <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.8] max-w-lg">
                    Blend estacional de Shizuoka, cultivar Okumidori. Mejor
                    que matcha ceremonial: precio directo de importador, sin
                    intermediarios. Perfil consistente lote a lote.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="flex flex-wrap gap-8 py-6 border-y border-neutral-200">
                  <div>
                    <p
                      className="font-mono text-[9px] uppercase text-[#2d5a3d] mb-1"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      Precio
                    </p>
                    <p className="text-sm text-neutral-700 font-light">
                      Directo de importador
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-mono text-[9px] uppercase text-[#2d5a3d] mb-1"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      Pedido mínimo
                    </p>
                    <p className="text-sm text-neutral-700 font-light">
                      Sin mínimo
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-mono text-[9px] uppercase text-[#2d5a3d] mb-1"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      Asesoría
                    </p>
                    <p className="text-sm text-neutral-700 font-light">
                      Incluida
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="https://www.instagram.com/shizukumatchastudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-neutral-900 text-white px-7 py-4 font-mono text-[10px] uppercase hover:bg-neutral-800 transition-all duration-300 rounded-sm"
                  style={{ letterSpacing: "0.08em" }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Solicitar cotización
                </a>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
                  <Image
                    src="/MATCHA_LATTE_HOT.jpg"
                    alt="Matcha latte de especialidad para cafeterías en Hermosillo — Shizuku Matcha Studio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 max-w-xs rounded-sm shadow-lg">
                  <p
                    className="font-mono text-[9px] uppercase text-[#2d5a3d] mb-2"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    Origen
                  </p>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    Shizuoka, Japón. Cultivar Okumidori. Alta solubilidad en
                    leche, color verde estable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-neutral-50/60 border-t border-neutral-200/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12 lg:mb-16">
              <p
                className="font-mono text-[9px] uppercase text-neutral-400 mb-4"
                style={{ letterSpacing: "0.25em" }}
              >
                Por qué Shizuku
              </p>
              <h2
                className="text-[1.5rem] md:text-[1.75rem] font-serif font-light text-neutral-900"
                style={{ letterSpacing: "-0.02em" }}
              >
                Matcha con el mismo rigor que tu café
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white p-6 lg:p-8 rounded-sm border border-neutral-100"
                >
                  <p
                    className="font-mono text-[9px] uppercase text-[#2d5a3d] mb-2"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    {benefit.label}
                  </p>
                  <h3
                    className="text-lg font-serif font-light text-neutral-900 mb-3"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12 lg:mb-16">
              <p
                className="font-mono text-[9px] uppercase text-neutral-400 mb-4"
                style={{ letterSpacing: "0.25em" }}
              >
                Productos B2B
              </p>
              <h2
                className="text-[1.5rem] md:text-[1.75rem] font-serif font-light text-neutral-900 mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Tés japoneses de origen
              </h2>
              <p className="text-base text-neutral-600 font-light max-w-xl mx-auto">
                Importados de Shizuoka. Presentaciones para volumen disponibles
                bajo pedido.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {products.map((product) => (
                <div key={product.name} className="space-y-5">
                  <div className="aspect-[4/5] relative overflow-hidden bg-neutral-100 rounded-sm">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p
                        className="font-mono text-[9px] uppercase text-neutral-500 mb-1"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        {product.label}
                      </p>
                      <h3
                        className="text-xl font-serif font-light text-neutral-900"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {product.name}
                        <span className="font-script text-base text-neutral-400 ml-2">
                          {product.kanji}
                        </span>
                      </h3>
                    </div>

                    <div className="space-y-2 border-t border-neutral-100 pt-4">
                      {product.specs.map(({ key, value }) => (
                        <div
                          key={key}
                          className="flex justify-between items-baseline"
                        >
                          <span
                            className="font-mono text-[9px] uppercase text-neutral-400"
                            style={{ letterSpacing: "0.1em" }}
                          >
                            {key}
                          </span>
                          <span className="text-sm text-neutral-600 font-light">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-neutral-500 italic border-l-2 border-[#2d5a3d]/30 pl-4 font-light">
                      {product.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordion
          items={b2bFaqItems}
          title="Información técnica"
          label="FAQ B2B"
        />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <p
                  className="font-mono text-[9px] uppercase text-white/50"
                  style={{ letterSpacing: "0.25em" }}
                >
                  Cotización B2B
                </p>
                <h2
                  className="text-[1.75rem] md:text-[2.25rem] font-serif font-light text-white leading-[1.12]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  ¿Listo para agregar matcha de especialidad a tu carta?
                </h2>
                <p className="text-base text-white/60 font-light leading-[1.8]">
                  Escríbenos por Instagram. Te respondemos con precios,
                  presentaciones y especificaciones técnicas. Sin mínimo, sin
                  compromisos.
                </p>

                <ul className="space-y-3 pt-4">
                  {[
                    "Precio directo de importador",
                    "Blend estacional, cultivar Okumidori",
                    "Asesoría técnica incluida",
                    "Entrega en Hermosillo y envíos nacionales",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3d]" />
                      <span className="text-sm text-white/70 font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.instagram.com/shizukumatchastudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-neutral-900 px-7 py-4 font-mono text-[10px] uppercase hover:bg-neutral-100 transition-all duration-300 rounded-sm mt-4"
                  style={{ letterSpacing: "0.08em" }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Solicitar cotización
                </a>
              </div>

              <div className="relative hidden lg:block">
                <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
                  <Image
                    src="/MATCHA_BAG.jpg"
                    alt="Matcha Okumidori de Shizuoka — presentación mayoreo para cafeterías en Hermosillo"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p
                      className="font-mono text-[9px] uppercase text-white/70 mb-1"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      Shizuoka → Hermosillo
                    </p>
                    <p className="font-serif text-2xl text-white font-light">
                      Shizu no Midori
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
