import type { ReactNode } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import {
  workshopsFaqItems,
  formatShortDate,
  getPastWorkshops,
} from "@/data/workshops";

const pageTitle =
  "Taller de Matcha en Hermosillo: Curso de Introducción | Shizuku Matcha Studio";
const pageDescription =
  "Taller de introducción al matcha en Hermosillo, Sonora: cata de matcha de distintas regiones y cultivares, usucha, matcha latte, hojicha y tés japoneses. Privado o en grupos pequeños.";

const instagramDmUrl = "https://ig.me/m/shizukumatchastudio";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://shizukumatchastudio.com/talleres",
    type: "website",
    locale: "es_MX",
    siteName: "Shizuku Matcha Studio",
    images: [
      {
        url: "https://shizukumatchastudio.com/taller-matcha-hermosillo-1-1.jpg",
        width: 800,
        height: 800,
        alt: "Preparación de matcha con chasen y báscula en un taller de Shizuku Matcha Studio, Hermosillo",
      },
      {
        url: "https://shizukumatchastudio.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Taller de introducción al matcha en Hermosillo — Shizuku Matcha Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://shizukumatchastudio.com/og.jpg"],
  },
  alternates: {
    canonical: "https://shizukumatchastudio.com/talleres",
  },
};

const experienceItems = [
  {
    title: "Historia y contexto cultural.",
    description:
      "De dónde viene el matcha, cómo llegó a ser parte de la cultura japonesa y por qué hoy se habla tanto de él.",
  },
  {
    title: "Cata comparativa de matcha.",
    description:
      "Pruebas usucha de distintas regiones de Japón y de diferentes cultivares, incluyendo casas de té como Ippodo y Marukyu Koyamaen, para entender cómo cambian el sabor, el dulzor y el cuerpo según el origen.",
  },
  {
    title: "Matcha con leche, bien hecho.",
    description:
      "Proporciones, temperatura, batido y textura, para que tu latte salga cremoso y balanceado.",
  },
  {
    title: "Hojicha.",
    description:
      "Conoce el té tostado, más suave y con menos cafeína, y aprende a prepararlo.",
  },
  {
    title: "Otros tés japoneses.",
    description:
      "Una degustación guiada para que descubras cuál se adapta a tus gustos.",
  },
];

const formatSpecs = [
  { label: "Duración", value: "1:30 hrs aprox." },
  { label: "Cupo", value: "Máximo 3 personas" },
  { label: "Lugar", value: "Hermosillo" },
  { label: "Precio", value: "$500 MXN por persona" },
];

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function InstagramButton({
  label,
  onDark = false,
}: {
  label: string;
  onDark?: boolean;
}) {
  const colors = onDark
    ? "bg-washi-bg text-charcoal hover:bg-white focus-visible:ring-washi-bg focus-visible:ring-offset-neutral-950"
    : "bg-charcoal text-washi-bg hover:bg-charcoal-light focus-visible:ring-charcoal focus-visible:ring-offset-washi-bg";

  return (
    <a
      href={instagramDmUrl}
      target="_blank"
      rel="noopener"
      className={`group inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 font-mono text-[11px] uppercase rounded-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${colors}`}
      style={{ letterSpacing: "0.08em" }}
    >
      <InstagramIcon />
      {label}
      <ArrowIcon />
    </a>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-mono text-[9px] uppercase text-neutral-500"
      style={{ letterSpacing: "0.25em" }}
    >
      {children}
    </span>
  );
}

export default function TalleresPage() {
  const pastWorkshops = getPastWorkshops();
  const heroImage = pastWorkshops[0]?.image ?? "/workshops/workshop.jpg";

  const baseUrl = "https://shizukumatchastudio.com";

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Taller de introducción al matcha",
    description: pageDescription,
    inLanguage: "es-MX",
    provider: {
      "@type": "Organization",
      name: "Shizuku Matcha Studio",
      url: baseUrl,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      location: {
        "@type": "Place",
        name: "Shizuku Matcha Studio",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hermosillo",
          addressRegion: "Sonora",
          addressCountry: "MX",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Shizuku Matcha Studio",
        url: baseUrl,
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: workshopsFaqItems.map((item) => ({
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
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main>
        <section
          aria-labelledby="workshops-heading"
          className="relative min-h-[70vh] flex items-end"
        >
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Participantes preparando matcha en un taller de Shizuku Matcha Studio en Hermosillo"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-neutral-950/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 lg:pb-20 pt-32 w-full">
            <div className="max-w-2xl">
              <p
                className="font-mono text-[10px] uppercase text-white/80 mb-4"
                style={{ letterSpacing: "0.25em" }}
              >
                Hermosillo, Sonora
              </p>
              <h1
                id="workshops-heading"
                className="font-serif text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] text-white font-light leading-[1.08]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Taller de introducción al matcha en Hermosillo
              </h1>
              <p className="text-white/90 mt-6 text-base lg:text-lg font-light leading-relaxed max-w-xl">
                Conoce la historia del matcha, prueba matcha de distintas
                regiones y cultivares de Japón, y aprende a prepararlo bien, con
                leche y sin grumos. Talleres privados o en grupos pequeños, para
                quien quiere disfrutarlo en casa y para quien está pensando en
                llevarlo a una barra.
              </p>
              <div className="mt-8">
                <InstagramButton label="Escríbenos por Instagram" onDark />
                <p className="mt-3 text-sm text-white/80 font-light">
                  Respondemos por mensaje directo con fechas, cupo y precio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="experience-heading"
          className="py-20 md:py-28 border-b border-neutral-200/40"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <SectionLabel>El taller</SectionLabel>
              <h2
                id="experience-heading"
                className="mt-4 text-[1.75rem] md:text-[2.25rem] font-serif font-light text-neutral-900 leading-[1.12]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Qué vas a vivir
              </h2>

              <ol className="mt-12 border-t border-neutral-200">
                {experienceItems.map((item, index) => (
                  <li
                    key={item.title}
                    className="flex gap-6 md:gap-10 py-6 border-b border-neutral-200"
                  >
                    <span
                      className="font-mono text-[11px] text-forest-green pt-1 shrink-0"
                      style={{ letterSpacing: "0.1em" }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.7]">
                      <strong className="font-medium text-neutral-900">
                        {item.title}
                      </strong>{" "}
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="format-heading"
          className="py-20 md:py-28 border-b border-neutral-200/40"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <h2
                id="format-heading"
                className="text-[1.75rem] md:text-[2.25rem] font-serif font-light text-neutral-900 leading-[1.12]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Privado o en grupo pequeño
              </h2>
              <p className="mt-6 text-base md:text-lg text-neutral-600 font-light leading-[1.8]">
                Los talleres son privados o en grupos pequeños, para que puedas
                probar, preguntar y practicar con atención personalizada. Puedes
                venir solo, con amigos, en pareja o con tu equipo de trabajo.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
              {formatSpecs.map((spec) => (
                <div key={spec.label} className="bg-washi-bg p-6">
                  <dt
                    className="font-mono text-[9px] uppercase text-neutral-500"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    {spec.label}
                  </dt>
                  <dd className="mt-2 font-serif text-lg text-neutral-900">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-2xl">
              ¿Son un equipo más grande o prefieren el taller en sus
              instalaciones?{" "}
              <a
                href={instagramDmUrl}
                target="_blank"
                rel="noopener"
                className="text-neutral-900 underline underline-offset-4 hover:text-forest-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-washi-bg rounded-sm"
              >
                Mándanos un mensaje
              </a>{" "}
              y con gusto lo organizamos.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="closing-heading"
          className="py-20 md:py-28 bg-neutral-950"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                id="closing-heading"
                className="text-[1.75rem] md:text-[2.25rem] font-serif font-light text-white leading-[1.12]"
                style={{ letterSpacing: "-0.02em" }}
              >
                 Degustaciones y colaboraciones
              </h2>
              <p className="text-base md:text-lg text-white/75 font-light leading-relaxed mt-6">
                También colaboramos con cafeterías de la ciudad en eventos de
                degustación: distintos tipos de matcha, tés japoneses,
                maridajes y más. Si tienes una cafetería y quieres organizar
                una experiencia así, escríbenos. Y si solo quieres enterarte
                cuando haya una, síguenos en Instagram.
              </p>
              <div className="mt-8">
                <InstagramButton label="Proponer una colaboración" onDark />

              </div>
            </div>
          </div>
        </section>

        {/* Past Workshops Section */}
        {/*{pastWorkshops.length > 0 && (
          <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="text-center mb-12">
                <span
                  className="font-mono text-[9px] uppercase text-neutral-400"
                  style={{ letterSpacing: "0.25em" }}
                >
                  Historial
                </span>
                <h2
                  className="mt-4 text-[1.5rem] md:text-[1.75rem] font-serif font-light text-neutral-900"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Talleres anteriores
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastWorkshops.map((workshop) => (
                  <article
                    key={workshop.id}
                    className="bg-white border border-neutral-200/60 rounded-sm overflow-hidden"
                  >
                    {workshop.image && (
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <Image
                          src={workshop.image}
                          alt={`${workshop.name} en Shizuku Matcha Studio, Hermosillo`}
                          fill
                          loading="lazy"
                          className="object-cover grayscale-[30%] opacity-90"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-neutral-900/10" />
                        <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                          <p
                            className="font-mono text-[9px] uppercase text-white/80"
                            style={{ letterSpacing: "0.1em" }}
                          >
                            {formatShortDate(workshop.date)}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="p-5">
                      <div className="flex items-baseline gap-2">
                        <h3
                          className="font-serif text-lg text-neutral-900"
                          style={{ letterSpacing: "-0.01em" }}
                        >
                          {workshop.name}
                        </h3>
                        {workshop.kanji && (
                          <span className="text-neutral-300 text-sm">
                            {workshop.kanji}
                          </span>
                        )}
                      </div>
                      <p
                        className="font-mono text-[9px] uppercase text-neutral-400 mt-1"
                        style={{ letterSpacing: "0.12em" }}
                      >
                        {workshop.subtitle}
                      </p>
                      <p className="text-neutral-500 text-sm font-light leading-relaxed mt-3 line-clamp-2">
                        {workshop.description}
                      </p>
                      <p
                        className="font-mono text-[9px] uppercase text-neutral-400 mt-4"
                        style={{ letterSpacing: "0.12em" }}
                      >
                        {workshop.name} · {formatShortDate(workshop.date)} ·{" "}
                        {workshop.attendees ?? "[N]"} asistentes
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}*/}

        <FAQAccordion
          items={workshopsFaqItems}
          title="Preguntas frecuentes"
          label="Dudas"
        />
      </main>
      <Footer />
    </div>
  );
}
