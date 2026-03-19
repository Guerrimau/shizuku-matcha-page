import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  articles,
  getFeaturedArticles,
  articleCategories,
} from "@/data/articles";

export const metadata: Metadata = {
  title: "Aprende — Guías Técnicas sobre Matcha y Té Japonés",
  description:
    "Guías detalladas: preparación de matcha, grados y calidades, historia del té japonés, y técnicas de infusión. Información verificada, sin marketing.",
  openGraph: {
    title: "Aprende — Guías Técnicas sobre Matcha y Té Japonés",
    description:
      "Guías detalladas: preparación de matcha, grados y calidades, historia del té japonés, y técnicas de infusión. Información verificada, sin marketing.",
    url: "https://shizukumatchastudio.com/aprende",
    type: "website",
    locale: "es_MX",
    siteName: "Shizuku Matcha Studio",
    images: [
      {
        url: "https://shizukumatchastudio.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Guías sobre matcha y té japonés — Shizuku Matcha Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprende — Guías Técnicas sobre Matcha y Té Japonés",
    description:
      "Guías detalladas: preparación de matcha, grados, historia del té japonés y técnicas de infusión.",
    images: ["https://shizukumatchastudio.com/og.jpg"],
  },
  alternates: {
    canonical: "https://shizukumatchastudio.com/aprende",
  },
};

export default function AprendePage() {
  const featuredArticles = getFeaturedArticles();
  const allArticles = articles;

  return (
    <div className="min-h-screen bg-washi-bg">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p
                className="font-mono text-[9px] uppercase text-neutral-400 mb-6"
                style={{ letterSpacing: "0.25em" }}
              >
                Centro de Aprendizaje
              </p>
              <h1
                className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.75rem] font-serif font-medium text-neutral-900 leading-[1.08] mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                Aprende sobre matcha
              </h1>
              <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.8] max-w-2xl">
                Guías técnicas sin marketing. Información verificada sobre
                preparación, grados de calidad, cultivares y la cultura del té
                japonés.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <h2
                className="font-mono text-[9px] uppercase text-neutral-400 mb-8"
                style={{ letterSpacing: "0.25em" }}
              >
                Guías Destacadas
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {featuredArticles.map((article) => {
                  const categoryLabel =
                    articleCategories.find((c) => c.id === article.category)
                      ?.label || article.category;

                  return (
                    <Link
                      key={article.slug}
                      href={`/aprende/${article.slug}`}
                      className="group"
                    >
                      <article>
                        <div className="aspect-[16/10] bg-neutral-100 mb-6 overflow-hidden relative rounded-sm">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="font-mono text-[9px] uppercase text-neutral-500 px-2 py-1 bg-neutral-100 rounded-sm"
                            style={{ letterSpacing: "0.1em" }}
                          >
                            {categoryLabel}
                          </span>
                          <span
                            className="font-mono text-[9px] uppercase text-neutral-400"
                            style={{ letterSpacing: "0.1em" }}
                          >
                            {article.readingTime} min
                          </span>
                        </div>

                        <h3
                          className="text-lg lg:text-xl font-serif font-light text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors"
                          style={{ letterSpacing: "-0.01em" }}
                        >
                          {article.title}
                        </h3>

                        <p className="text-base text-neutral-600 font-light leading-[1.7] mb-4">
                          {article.excerpt}
                        </p>

                        <span
                          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-neutral-500 group-hover:text-neutral-900 transition-colors duration-300"
                          style={{ letterSpacing: "0.1em" }}
                        >
                          Leer guía
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </span>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-16 md:py-24 bg-neutral-50/60 border-t border-neutral-200/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2
              className="font-mono text-[9px] uppercase text-neutral-400 mb-8"
              style={{ letterSpacing: "0.25em" }}
            >
              Todos los Artículos
            </h2>

            <div className="max-w-4xl">
              <div className="divide-y divide-neutral-200">
                {allArticles.map((article) => {
                  const categoryLabel =
                    articleCategories.find((c) => c.id === article.category)
                      ?.label || article.category;

                  return (
                    <Link
                      key={article.slug}
                      href={`/aprende/${article.slug}`}
                      className="group block py-8 first:pt-0 last:pb-0"
                    >
                      <article className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-shrink-0 w-full md:w-48 aspect-[16/10] md:aspect-square bg-neutral-100 overflow-hidden relative rounded-sm">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, 192px"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span
                              className="font-mono text-[9px] uppercase text-neutral-500 px-2 py-1 bg-white rounded-sm"
                              style={{ letterSpacing: "0.1em" }}
                            >
                              {categoryLabel}
                            </span>
                            <span
                              className="font-mono text-[9px] uppercase text-neutral-400"
                              style={{ letterSpacing: "0.1em" }}
                            >
                              {article.readingTime} min lectura
                            </span>
                          </div>

                          <h3
                            className="text-lg font-serif font-light text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors"
                            style={{ letterSpacing: "-0.01em" }}
                          >
                            {article.title}
                          </h3>

                          <p className="text-sm text-neutral-600 font-light leading-[1.7]">
                            {article.excerpt}
                          </p>

                          <p
                            className="font-mono text-[9px] uppercase text-neutral-400 mt-4"
                            style={{ letterSpacing: "0.1em" }}
                          >
                            Actualizado:{" "}
                            {new Date(article.dateModified).toLocaleDateString(
                              "es-MX",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Topics / Categories */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2
              className="font-mono text-[9px] uppercase text-neutral-400 mb-8"
              style={{ letterSpacing: "0.25em" }}
            >
              Explora por Tema
            </h2>

            <div className="flex flex-wrap gap-3">
              {articleCategories
                .filter((cat) => cat.id !== "all")
                .map((category) => {
                  const count = articles.filter(
                    (a) => a.category === category.id
                  ).length;

                  return (
                    <div
                      key={category.id}
                      className="px-5 py-3 bg-white border border-neutral-200 rounded-sm hover:border-neutral-400 transition-colors cursor-default"
                    >
                      <span
                        className="font-mono text-[10px] uppercase text-neutral-700"
                        style={{ letterSpacing: "0.08em" }}
                      >
                        {category.label}
                      </span>
                      <span className="font-mono text-[9px] text-neutral-400 ml-2">
                        ({count})
                      </span>
                    </div>
                  );
                })}
            </div>

            <p className="text-sm text-neutral-500 font-light mt-8">
              Más guías próximamente. Estamos preparando contenido sobre
              historia del té, cultivares específicos, y técnicas avanzadas de
              preparación.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="text-[1.75rem] md:text-[2.25rem] font-serif font-light text-white leading-[1.12] mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                Aprende con nosotros
              </h2>
              <p className="text-base md:text-lg text-neutral-400 font-light leading-[1.8] mb-10">
                Además de estas guías, ofrecemos talleres presenciales donde
                aprenderás técnicas de preparación con práctica guiada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/talleres"
                  className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 px-7 sm:px-8 py-4 font-mono text-[10px] sm:text-[11px] uppercase hover:bg-neutral-100 transition-all duration-300 rounded-sm"
                  style={{ letterSpacing: "0.08em" }}
                >
                  Ver Talleres
                </Link>
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center gap-2 text-white px-7 sm:px-8 py-4 font-mono text-[10px] sm:text-[11px] uppercase hover:text-neutral-300 transition-all duration-300 rounded-sm"
                  style={{
                    letterSpacing: "0.08em",
                    border: "1.5px solid rgb(64 64 64)",
                  }}
                >
                  Explorar Productos
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
