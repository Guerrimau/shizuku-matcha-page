import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import {
  workshops,
  workshopsFaqItems,
  formatWorkshopDate,
  formatShortDate,
  getNextWorkshop,
  getPastWorkshops,
} from "@/data/workshops";

export const metadata: Metadata = {
  title: "Talleres de Matcha en Hermosillo — Clases Presenciales",
  description:
    "Talleres presenciales en Hermosillo: origen e historia del matcha, degustación de usucha, matcha latte y hojicha. Grupos reducidos. Reserva tu lugar.",
  openGraph: {
    title: "Talleres de Matcha en Hermosillo — Clases Presenciales",
    description:
      "Talleres presenciales en Hermosillo: origen e historia del matcha, degustación de usucha, matcha latte y hojicha. Grupos reducidos.",
    url: "https://shizukumatchastudio.com/talleres",
    type: "website",
    locale: "es_MX",
    siteName: "Shizuku Matcha Studio",
    images: [
      {
        url: "https://shizukumatchastudio.com/workshops/matcha_workshop.jpg",
        width: 1200,
        height: 630,
        alt: "Taller de preparación de matcha — Shizuku Matcha Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talleres de Matcha en Hermosillo — Clases Presenciales",
    description:
      "Talleres presenciales en Hermosillo: origen, degustación y preparación de matcha. Grupos reducidos.",
    images: ["https://shizukumatchastudio.com/workshops/matcha_workshop.jpg"],
  },
  alternates: {
    canonical: "https://shizukumatchastudio.com/talleres",
  },
};

export default function TalleresPage() {
  const nextWorkshop = getNextWorkshop();
  const pastWorkshops = getPastWorkshops();

  const baseUrl = "https://shizukumatchastudio.com";
  const now = new Date();
  const upcomingWorkshops = workshops.filter(
    (w) => new Date(`${w.date}T${w.time}:00`) > now
  );

  const workshopEventsSchema =
    upcomingWorkshops.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: upcomingWorkshops.map((workshop, index) => {
            const startDate = `${workshop.date}T${workshop.time}:00`;
            const [h, m] = workshop.time.split(":").map(Number);
            const endMins = h * 60 + m + 90;
            const endDate = `${workshop.date}T${String(Math.floor(endMins / 60)).padStart(2, "0")}:${String(endMins % 60).padStart(2, "0")}:00`;
            return {
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Event",
                name: `${workshop.name} — ${workshop.subtitle}`,
                description: workshop.description,
                startDate,
                endDate,
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode:
                  "https://schema.org/OfflineEventAttendanceMode",
                ...(workshop.image && {
                  image: `${baseUrl}${workshop.image}`,
                }),
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
                offers: {
                  "@type": "Offer",
                  price: workshop.price,
                  priceCurrency: "MXN",
                  availability:
                    workshop.spotsAvailable != null
                      ? "https://schema.org/LimitedAvailability"
                      : "https://schema.org/InStock",
                  url: `${baseUrl}/talleres`,
                },
              },
            };
          }),
        }
      : null;

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

      {workshopEventsSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(workshopEventsSchema),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main>
        {/* Hero Section - Next Workshop Spotlight */}
        {nextWorkshop ? (
          <section
            aria-labelledby="next-workshop-heading"
            className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end"
          >
            <div className="absolute inset-0">
              {nextWorkshop.image && (
                <Image
                  src={nextWorkshop.image}
                  alt={`${nextWorkshop.name} en Shizuku Matcha Studio`}
                  fill
                  className="object-cover"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/500 to-neutral-900/20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 lg:pb-20 w-full">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-[#2d5a3d] px-3 py-1.5 rounded-sm mb-6">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  <span
                    className="font-mono text-[9px] uppercase text-white"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    Próximo taller
                  </span>
                </div>

                <p
                  className="font-mono text-[12px] uppercase text-white/60 mb-3"
                  style={{ letterSpacing: "0.25em" }}
                >
                  {formatWorkshopDate(nextWorkshop.date)} · {nextWorkshop.time}{" "}
                  hrs
                </p>

                <h1
                  id="next-workshop-heading"
                  className="font-serif text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] text-white font-light leading-[1.08]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {nextWorkshop.name}
                  {nextWorkshop.kanji && (
                    <span className="text-white/30 ml-3 text-[0.5em]">
                      {nextWorkshop.kanji}
                    </span>
                  )}
                </h1>

                <p
                  className="font-mono text-[10px] uppercase text-white/50 mt-2"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {nextWorkshop.subtitle}
                </p>

                <p className="text-white/80 mt-6 text-base lg:text-lg font-light leading-relaxed max-w-xl">
                  {nextWorkshop.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-white/60">
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    {nextWorkshop.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
                      />
                    </svg>
                    {nextWorkshop.skillLevel}
                  </span>
                  <span className="text-white/80 font-serif text-lg">
                    ${nextWorkshop.price} MXN
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/shizukumatchastudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-neutral-900 px-7 py-4 font-mono text-[10px] uppercase hover:bg-neutral-100 transition-all duration-300 rounded-sm"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Reservar lugar
                  </a>
                  {nextWorkshop.spotsAvailable &&
                    nextWorkshop.spotsAvailable > 0 && (
                      <span className="inline-flex items-center px-4 py-4 text-white/60 text-sm">
                        {nextWorkshop.spotsAvailable} lugares disponibles
                      </span>
                    )}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section
            aria-labelledby="workshops-heading"
            className="relative min-h-[50vh] flex items-end bg-neutral-900"
          >
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 lg:pb-20 w-full">
              <p
                className="font-mono text-[9px] uppercase text-white/60 mb-4"
                style={{ letterSpacing: "0.25em" }}
              >
                Hermosillo, Sonora
              </p>
              <h1
                id="workshops-heading"
                className="font-serif text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white max-w-2xl font-light leading-[1.1]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Talleres de Matcha
              </h1>
              <p className="text-white/60 mt-4 max-w-xl text-base font-light">
                Próximamente anunciaremos nuevas fechas. Síguenos en Instagram
                para enterarte primero.
              </p>
            </div>
          </section>
        )}

        {/* What's Included Section */}
        {nextWorkshop && (
          <section className="py-16 md:py-20 border-b border-neutral-200/40">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="max-w-3xl">
                <span
                  className="font-mono text-[9px] uppercase text-neutral-400"
                  style={{ letterSpacing: "0.25em" }}
                >
                  Incluye
                </span>
                <h2
                  className="mt-4 text-[1.25rem] md:text-[1.5rem] font-serif font-light text-neutral-900"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  ¿Qué incluye el taller?
                </h2>

                <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                  {nextWorkshop.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#2d5a3d]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-[#2d5a3d]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span className="text-neutral-700 font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Past Workshops Section */}
        {pastWorkshops.length > 0 && (
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
                          alt={workshop.name}
                          fill
                          className="object-cover grayscale-[30%] opacity-90"
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
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <p
                className="font-mono text-[9px] uppercase text-white/50 mb-4"
                style={{ letterSpacing: "0.25em" }}
              >
                No te pierdas el próximo
              </p>
              <h2
                className="text-[1.75rem] md:text-[2.25rem] font-serif font-light text-white leading-[1.12]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Síguenos para nuevas fechas
              </h2>
              <p className="text-base text-white/60 font-light leading-relaxed mt-4">
                Anunciamos nuevos talleres en Instagram. Grupos reducidos para
                atención personalizada.
              </p>

              <a
                href="https://www.instagram.com/shizukumatchastudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-neutral-900 px-8 py-4 font-mono text-[10px] uppercase hover:bg-neutral-100 transition-all duration-300 rounded-sm mt-8"
                style={{ letterSpacing: "0.08em" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Seguir en Instagram
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordion
          items={workshopsFaqItems}
          title="Preguntas sobre talleres"
          label="FAQ"
        />
      </main>
      <Footer />
    </div>
  );
}
