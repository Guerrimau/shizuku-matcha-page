import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
  articleCategories,
} from "@/data/articles";
import { getProductBySlug } from "@/data/products";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Artículo no encontrado | Shizuku Matcha Studio",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://shizukumatchastudio.com/aprende/${article.slug}`,
      images: [
        {
          url: `https://shizukumatchastudio.com${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [`https://shizukumatchastudio.com${article.image}`],
    },
    alternates: {
      canonical: `https://shizukumatchastudio.com/aprende/${article.slug}`,
    },
  };
}

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 2);
  const categoryLabel =
    articleCategories.find((c) => c.id === article.category)?.label ||
    article.category;

  const relatedProducts = article.relatedProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p) => p !== undefined);

  const articleSchema = generateArticleSchema(article);
  const breadcrumbSchema = generateBreadcrumbSchema(article);
  const howToSchema = generateHowToSchema(article);

  return (
    <div className="min-h-screen bg-washi-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link
                href="/"
                className="text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                Inicio
              </Link>
              <span className="text-neutral-300">/</span>
              <Link
                href="/aprende"
                className="text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                Aprende
              </Link>
              <span className="text-neutral-300">/</span>
              <span className="text-neutral-600 font-light">{article.title}</span>
            </nav>

            <div className="max-w-3xl">
              {/* Category & Reading Time */}
              <div className="flex items-center gap-4 mb-6">
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
                  {article.readingTime} min lectura
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.75rem] font-serif font-medium text-neutral-900 leading-[1.08] mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-base md:text-lg text-neutral-600 font-light leading-[1.8]">
                {article.excerpt}
              </p>

              {/* Date */}
              <p
                className="font-mono text-[9px] uppercase text-neutral-400 mt-6"
                style={{ letterSpacing: "0.1em" }}
              >
                Actualizado:{" "}
                {new Date(article.dateModified).toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <div className="aspect-[16/9] relative bg-neutral-100 overflow-hidden rounded-sm">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content Placeholder */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              {/* HowTo Steps (if applicable) */}
              {article.howTo && (
                <div className="mb-16">
                  <h2
                    className="text-[1.5rem] md:text-[1.75rem] font-serif font-light text-neutral-900 leading-[1.12] mb-8"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Pasos
                  </h2>

                  {article.howTo.tools && (
                    <div className="mb-8 p-6 bg-neutral-50 rounded-sm">
                      <h3
                        className="font-mono text-[9px] uppercase text-neutral-500 mb-4"
                        style={{ letterSpacing: "0.15em" }}
                      >
                        Herramientas necesarias
                      </h3>
                      <ul className="space-y-2">
                        {article.howTo.tools.map((tool, idx) => (
                          <li
                            key={idx}
                            className="text-base text-neutral-600 font-light"
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <ol className="space-y-8">
                    {article.howTo.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-6">
                        <span
                          className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-neutral-900 text-white font-mono text-[11px] rounded-full"
                          style={{ letterSpacing: "0.05em" }}
                        >
                          {idx + 1}
                        </span>
                        <div className="pt-1">
                          <h3
                            className="text-lg font-serif font-light text-neutral-900 mb-2"
                            style={{ letterSpacing: "-0.01em" }}
                          >
                            {step.title}
                          </h3>
                          <p className="text-base text-neutral-600 font-light leading-[1.8]">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-8 border-t border-neutral-200">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] uppercase text-neutral-400 px-3 py-1.5 border border-neutral-200 rounded-sm"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 md:py-24 bg-washi-bg">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <p
                    className="font-mono text-[9px] uppercase text-neutral-400 mb-3"
                    style={{ letterSpacing: "0.25em" }}
                  >
                    Productos Relacionados
                  </p>
                  <h2
                    className="text-[1.5rem] md:text-[1.75rem] font-serif font-light text-neutral-900 leading-[1.12]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Lo que necesitas
                  </h2>
                </div>
                <Link
                  href="/productos"
                  className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] uppercase text-neutral-500 hover:text-neutral-900 transition-colors"
                  style={{ letterSpacing: "0.1em" }}
                >
                  Ver todos
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
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.slice(0, 3).map((product) => (
                  <Link
                    key={product.slug}
                    href={`/productos/${product.slug}`}
                    className="group"
                  >
                    <article>
                      <div className="aspect-square bg-neutral-100 mb-5 overflow-hidden relative rounded-sm">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.labels.slice(0, 2).map((label) => (
                          <span
                            key={label}
                            className="font-mono text-[9px] uppercase text-neutral-500 px-2 py-1 bg-neutral-100 rounded-sm"
                            style={{ letterSpacing: "0.1em" }}
                          >
                            {label}
                          </span>
                        ))}
                      </div>

                      <h3
                        className="text-base lg:text-lg font-serif font-light text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {product.name}
                        {product.kanji && (
                          <span className="font-script text-sm text-neutral-400 ml-2">
                            {product.kanji}
                          </span>
                        )}
                      </h3>

                      <p className="text-base text-neutral-600 font-light">
                        ${product.sizes[0]?.price}{" "}
                        <span className="text-neutral-400 text-sm">MXN</span>
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Content */}
        <section className="py-16 md:py-24 bg-neutral-50/60 border-t border-neutral-200/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <h2
                className="font-mono text-[9px] uppercase text-neutral-400 mb-8"
                style={{ letterSpacing: "0.25em" }}
              >
                Sigue Aprendiendo
              </h2>

              <div className="space-y-4">
                {article.relatedLinks.map((link) => (
                  <Link
                    key={link.slug}
                    href={
                      link.type === "article"
                        ? `/aprende/${link.slug}`
                        : `/productos/${link.slug}`
                    }
                    className="block p-6 bg-white border border-neutral-100 rounded-sm hover:border-neutral-300 transition-colors"
                  >
                    <span
                      className="font-mono text-[9px] uppercase text-neutral-400 mb-2 block"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      {link.type === "article" ? "Artículo" : "Producto"}
                    </span>
                    <span
                      className="text-lg font-serif font-light text-neutral-900 block mb-1"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {link.title}
                    </span>
                    <p className="text-sm text-neutral-500 font-light">
                      {link.description}
                    </p>
                  </Link>
                ))}

                {relatedArticles.length > 0 && (
                  <div className="pt-4">
                    <p
                      className="font-mono text-[9px] uppercase text-neutral-400 mb-4"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      Más artículos
                    </p>
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/aprende/${related.slug}`}
                        className="block py-3 border-b border-neutral-100 last:border-0 hover:text-neutral-600 transition-colors"
                      >
                        <span className="text-base text-neutral-900 font-light">
                          {related.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  href="/aprende"
                  className="inline-flex items-center gap-2 mt-6 font-mono text-[10px] uppercase text-neutral-500 hover:text-neutral-900 transition-colors"
                  style={{ letterSpacing: "0.1em" }}
                >
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
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  Ver todas las guías
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
