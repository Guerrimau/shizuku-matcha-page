import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSplit from "@/components/HeroSplit";
import FadeIn from "@/components/FadeIn";
import ArticleCarousel from "@/components/ArticleCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import { getFeaturedArticles } from "@/data/articles";
import { homeFaqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Shizuku Matcha Studio | El cuerpo del Matcha Latte perfecto",
  description:
    "Importamos directamente de Shizuoka, Japón. Matcha cultivar Okumidori seleccionado para el latte perfecto. Trazabilidad y honestidad técnica en Hermosillo, Sonora.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Shizuku Matcha Studio",
    url: "https://shizukumatchastudio.com",
    title: "Shizuku Matcha Studio | El cuerpo del Matcha Latte perfecto",
    description:
      "Importamos directamente de Shizuoka, Japón. Matcha cultivar Okumidori seleccionado para el latte perfecto. Trazabilidad y honestidad técnica en Hermosillo, Sonora.",
    images: [
      {
        url: "https://shizukumatchastudio.com/matcha-latte-hermosillo-1-1.jpg",
        width: 800,
        height: 800,
        alt: "Matcha latte preparado con Shizu no Midori - Matcha Hermosillo",
      },
      {
        url: "https://shizukumatchastudio.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Matcha latte preparado con Shizu no Midori — Shizuku Matcha Studio Hermosillo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shizuku Matcha Studio | El cuerpo del Matcha Latte perfecto",
    description:
      "Importamos directamente de Shizuoka, Japón. Matcha cultivar Okumidori seleccionado para el latte perfecto. Trazabilidad y honestidad técnica en Hermosillo, Sonora.",
    images: ["https://shizukumatchastudio.com/og.jpg"],
  },
  alternates: {
    canonical: "https://shizukumatchastudio.com",
  },
  other: {
    "geo.region": "MX-SON",
    "geo.placename": "Hermosillo",
    "geo.position": "29.0729;-110.9559",
    ICBM: "29.0729, -110.9559",
  },
};

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  // Schema: FAQPage — Critical for AI Overviews (3.2× more likely to appear)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Dónde comprar matcha en Hermosillo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shizuku Matcha Studio es la tienda de matcha de especialidad en Hermosillo, Sonora. Importamos directamente de Shizuoka, Japón, sin intermediarios. Puedes comprar en línea con envío a todo México o visitarnos en nuestros talleres presenciales en Hermosillo. Ofrecemos matcha cultivar Okumidori con trazabilidad completa.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es el matcha y en qué se diferencia del té verde?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El matcha es té verde japonés molido en polvo fino. A diferencia del té verde de hoja suelta donde se infusiona y descarta la hoja, con el matcha consumes la hoja entera disuelta en agua. Las plantas de té se sombrean 20+ días antes de la cosecha, aumentando la clorofila y L-teanina. Esto produce su color verde vibrante y sabor umami característico.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo preparar matcha correctamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para preparar matcha: (1) Tamiza 3-4g de matcha para eliminar grumos. (2) Calienta agua a 55-65°C — nunca hirviendo. (3) Pre-disuelve con 15ml de agua a 55°C, luego añade 25ml a 65°C. (4) Bate con un chasen (batidor de bambú) en movimiento de W durante 15-20 segundos hasta formar una espuma uniforme. Para matcha latte, añade 180ml de leche fría y una pizca de sal.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué significa matcha ceremonial o grado ceremonial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Matcha ceremonial es un término de marketing occidental sin definición estandarizada. En Japón, el matcha se clasifica por competencias regionales y calidad del tencha (hoja base), no por grados ceremoniales. Lo que realmente importa es: el cultivar (variedad de planta), el tiempo de sombreado, la cosecha (primera vs. segunda), y el proceso de molido. En Shizuku preferimos hablar de trazabilidad: origen exacto, cultivar, y proceso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los beneficios del matcha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El matcha contiene L-teanina, un aminoácido que promueve concentración calmada sin el nerviosismo del café. Al consumir la hoja entera, obtienes más antioxidantes (catequinas) que con té verde infusionado. La cafeína del matcha se libera gradualmente por la L-teanina, proporcionando energía sostenida durante 4-6 horas. Una porción de matcha (2g) contiene aproximadamente 70mg de cafeína.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es el hojicha y en qué se diferencia del matcha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El hojicha es té verde japonés tostado. El proceso de tostado le da un color marrón rojizo y notas de caramelo, nuez y madera. Tiene significativamente menos cafeína que el matcha (aproximadamente 20mg por taza vs. 70mg), haciéndolo ideal para las tardes o noches. En Shizuku ofrecemos hojicha en polvo para lattes y hojicha de hoja suelta para infusión tradicional.",
        },
      },
    ],
  };

  // priceValidUntil: 1 year from now
  const priceValidUntil = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Matcha | Matcha Shizu no Midori",
    description:
      "Matcha de especialidad. Cultivar Okumidori de Shizuoka, Japón. Blend estacional, molido en piedra. Perfil balanceado para lattes y preparación tradicional.",
    image: [
      "https://shizukumatchastudio.com/MATCHA/PRODUCT.jpg",
      "https://shizukumatchastudio.com/MATCHA/BAG.jpg",
      "https://shizukumatchastudio.com/MATCHA/FULL.jpg",
    ],
    brand: {
      "@type": "Brand",
      name: "Shizuku Matcha Studio",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Lata 30g",
        price: "350",
        priceCurrency: "MXN",
        availability: "https://schema.org/InStock",
        priceValidUntil,
        url: "https://shizukumatchastudio.com/productos/matcha_okumidori_seasonal_blend_latte_30g",
        seller: {
          "@type": "LocalBusiness",
          "@id": "https://shizukumatchastudio.com/#business",
        },
      },
      {
        "@type": "Offer",
        name: "Lata 100g",
        price: "950",
        priceCurrency: "MXN",
        availability: "https://schema.org/InStock",
        priceValidUntil,
        url: "https://shizukumatchastudio.com/productos/matcha_okumidori_seasonal_blend_latte_30g",
        seller: {
          "@type": "LocalBusiness",
          "@id": "https://shizukumatchastudio.com/#business",
        },
      },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Origen",
        value: "Shizuoka, Japón",
      },
      {
        "@type": "PropertyValue",
        name: "Cultivar",
        value: "Okumidori",
      },
      {
        "@type": "PropertyValue",
        name: "Cosecha",
        value: "Blend estacional (primera y segunda cosecha)",
      },
      {
        "@type": "PropertyValue",
        name: "Proceso",
        value: "Molido en piedra",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-washi-bg">
      {/* FAQPage Schema for AI Overviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Product Schema for Google Shopping rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Navbar />

      <main>
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1: HERO — Split Layout with Video
        ═══════════════════════════════════════════════════════════════ */}
        <HeroSplit />

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2: HONESTY & DIFFERENTIATION — Text-heavy, centered
        ═══════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="honesty-heading"
          className="py-24 md:py-32 lg:py-40 bg-washi-bg border-t border-neutral-200/40"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <span
                  className="font-script text-sm text-neutral-400"
                  style={{ letterSpacing: "0.25em" }}
                >
                  静岡
                </span>

                <h2
                  id="honesty-heading"
                  className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-serif font-light text-neutral-900 leading-[1.12]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  No es &apos;Ceremonial&apos;. Es mejor:{" "}
                  <span className="text-[#2d5a3d]">Es Trazable.</span>
                </h2>

                <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.8] max-w-2xl mx-auto">
                  El término &apos;ceremonial&apos; es una invención occidental.
                  En Shizuku, hablamos de cultivares, cosechas y productores.
                  Shizu no Midori es un blend estacional de Shizuoka,
                  seleccionado por su nivel correcto de astringencia para
                  resaltar en preparaciones con leche.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3: FICHA TÉCNICA — Clean Grid, 4 columns
        ═══════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="specs-heading"
          className="py-16 md:py-20 bg-neutral-50/60"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 id="specs-heading" className="sr-only">
              Especificaciones técnicas del matcha
            </h2>

            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
                {/* Spec 1: Origen */}
                <article className="py-6 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">
                  <span
                    className="font-mono text-[9px] uppercase text-neutral-400"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    Origen
                  </span>
                  <p className="mt-3 text-base md:text-lg text-neutral-900 font-light">
                    Shizuoka, Japón
                    <span className="block text-sm text-neutral-500 mt-1">
                      210m sobre el nivel del mar
                    </span>
                  </p>
                </article>

                {/* Spec 2: Cultivar */}
                <article className="py-6 md:py-0 md:px-8">
                  <span
                    className="font-mono text-[9px] uppercase text-neutral-400"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    Cultivar
                  </span>
                  <p className="mt-3 text-base md:text-lg text-neutral-900 font-light">
                    100% Okumidori
                    <span className="block text-sm text-neutral-500 mt-1">
                      Single cultivar
                    </span>
                  </p>
                </article>

                {/* Spec 3: Proceso */}
                <article className="py-6 md:py-0 md:px-8">
                  <span
                    className="font-mono text-[9px] uppercase text-neutral-400"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    Proceso
                  </span>
                  <p className="mt-3 text-base md:text-lg text-neutral-900 font-light">
                    Sombreado 20+ días
                    <span className="block text-sm text-neutral-500 mt-1">
                      Molido lento en piedra
                    </span>
                  </p>
                </article>

                {/* Spec 4: Notas */}
                <article className="py-6 md:py-0 md:px-8 last:md:pr-0">
                  <span
                    className="font-mono text-[9px] uppercase text-neutral-400"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    Notas de cata
                  </span>
                  <p className="mt-3 text-base md:text-lg text-neutral-900 font-light">
                    Dulzor vegetal, umami
                    <span className="block text-sm text-neutral-500 mt-1">
                      Cuerpo cremoso
                    </span>
                  </p>
                </article>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4: COLLECTIONS SHOWCASE — 3-column grid
        ═══════════════════════════════════════════════════════════════ */}
        <section
          id="products"
          aria-labelledby="collections-heading"
          className="py-24 md:py-32 lg:py-40 bg-washi-bg"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <FadeIn>
              <div className="text-center mb-16 lg:mb-20">
                <span
                  className="font-mono text-[9px] uppercase text-neutral-400"
                  style={{ letterSpacing: "0.25em" }}
                >
                  Colecciones
                </span>
                <h2
                  id="collections-heading"
                  className="mt-4 text-[1.75rem] md:text-[2.25rem] font-serif font-light text-neutral-900"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Productos
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Collection 1: Matcha y Hojicha Powder */}
              <FadeIn delay={0}>
                <article className="group">
                  <Link href="/productos/categoria/polvo" className="block">
                    <div className="aspect-[4/5] bg-neutral-100 mb-6 overflow-hidden relative">
                      <Image
                        src="/WISK.jpg"
                        alt="Matcha latte caliente con latte art"
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3
                      className="text-lg lg:text-xl font-serif font-light text-neutral-900 mb-3"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      Matcha y Hojicha en Polvo
                    </h3>
                    <span
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-neutral-500 group-hover:text-neutral-900 transition-colors duration-300"
                      style={{ letterSpacing: "0.12em" }}
                    >
                      Comprar
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </article>
              </FadeIn>

              {/* Collection 2: Té de Hoja Suelta */}
              <FadeIn delay={100}>
                <article className="group">
                  <Link href="/productos/categoria/hoja" className="block">
                    <div className="aspect-[4/5] bg-neutral-100 mb-6 overflow-hidden relative">
                      <Image
                        src="/sencha_loose_leaf.jpg"
                        alt="Sencha de hoja suelta de Shizuoka"
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3
                      className="text-lg lg:text-xl font-serif font-light text-neutral-900 mb-3"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      Té de Hoja Suelta
                    </h3>
                    <span
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-neutral-500 group-hover:text-neutral-900 transition-colors duration-300"
                      style={{ letterSpacing: "0.12em" }}
                    >
                      Comprar
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </article>
              </FadeIn>

              {/* Collection 3: Accesorios y Kyusu */}
              <FadeIn delay={200}>
                <article className="group">
                  <Link
                    href="/productos/categoria/accesorios"
                    className="block"
                  >
                    <div className="aspect-[4/5] bg-neutral-100 mb-6 overflow-hidden relative">
                      <Image
                        src="/products/mini-kit-matcha/FULL.jpg"
                        alt="Kit de matcha: chawan, chasen y chashaku"
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3
                      className="text-lg lg:text-xl font-serif font-light text-neutral-900 mb-3"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      Accesorios y Kyusu
                    </h3>
                    <span
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-neutral-500 group-hover:text-neutral-900 transition-colors duration-300"
                      style={{ letterSpacing: "0.12em" }}
                    >
                      Comprar
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </article>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5: LOCAL SEO — El Studio (Split layout)
        ═══════════════════════════════════════════════════════════════ */}
        <section
          id="studio"
          aria-labelledby="studio-heading"
          className="py-24 md:py-32 lg:py-40 bg-neutral-50/60 border-t border-neutral-200/40"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Image side — tighter gap */}
                <div className="aspect-[4/3] bg-neutral-100 order-2 lg:order-1 overflow-hidden relative">
                  <Image
                    src="/workshops/matcha_workshop.jpg"
                    alt="Taller de preparación de matcha en Shizuku Matcha Studio Hermosillo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Text side */}
                <div className="space-y-8 order-1 lg:order-2">
                  <div className="space-y-4">
                    <span
                      className="font-mono text-[9px] uppercase text-neutral-400"
                      style={{ letterSpacing: "0.25em" }}
                    >
                      Hermosillo, Sonora
                    </span>
                    <h2
                      id="studio-heading"
                      className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-serif font-light text-neutral-900 leading-[1.12]"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      Nuestros talleres{" "}
                      <span className="font-script text-xl md:text-2xl align-middle text-neutral-300">
                        抹茶
                      </span>
                    </h2>
                  </div>

                  <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.8] max-w-lg">
                    Llevamos la cultura técnica del té japonés al desierto.
                    Participa en nuestros talleres presenciales de preparación
                    de Usucha, Matcha Latte y Hojicha Latte.
                  </p>

                  {/* Coordinates accent */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-neutral-300" />
                    <span
                      className="font-mono text-[10px] text-neutral-400"
                      style={{ letterSpacing: "0.12em" }}
                    >
                      29.0729° N, 110.9559° O
                    </span>
                  </div>

                  <Link
                    href="/talleres"
                    className="inline-flex items-center gap-2 text-neutral-700 px-8 py-4 font-mono text-[10px] uppercase hover:text-neutral-900 hover:border-neutral-900 transition-all duration-300 rounded-sm"
                    style={{
                      letterSpacing: "0.08em",
                      border: "1.5px solid rgb(212 212 212)",
                    }}
                  >
                    Ver calendario de Talleres
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 6: LEARN — Article Carousel
        ═══════════════════════════════════════════════════════════════ */}
        <ArticleCarousel
          articles={featuredArticles}
          title="Aprende sobre matcha"
          label="Guías Técnicas"
        />

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 7: FAQ — Expandable Accordion
        ═══════════════════════════════════════════════════════════════ */}
        <FAQAccordion
          items={homeFaqItems}
          title="Todo sobre el Matcha"
          label="Preguntas Frecuentes"
        />

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 8: B2B / CAFETERÍAS — Minimalist Banner
        ═══════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="b2b-heading"
          className="py-16 md:py-20 bg-neutral-950 text-white"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <FadeIn>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="space-y-4 max-w-xl">
                  <span
                    className="font-mono text-[9px] uppercase text-white/50"
                    style={{ letterSpacing: "0.25em" }}
                  >
                    B2B · Mayoreo
                  </span>
                  <h2
                    id="b2b-heading"
                    className="text-xl md:text-2xl lg:text-[1.75rem] font-serif font-light"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Para Barras de Especialidad
                  </h2>
                  <p className="text-base text-white/60 font-light leading-[1.7]">
                    Suministramos matcha de grado superior a las mejores
                    cafeterías en Sonora. Precios competitivos y soporte
                    técnico.
                  </p>
                </div>

                <Link
                  href="/mayoreo"
                  className="inline-flex items-center justify-center gap-2 border-[1.5px] border-white text-white px-8 py-4 font-mono text-[10px] uppercase hover:bg-white hover:text-neutral-950 transition-all duration-300 whitespace-nowrap rounded-sm"
                  style={{ letterSpacing: "0.08em" }}
                >
                  Información Completa
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
