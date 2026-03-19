import Link from "next/link";
import Image from "next/image";
import { Article, articleCategories } from "@/data/articles";

interface ArticleCarouselProps {
  articles: Article[];
  title?: string;
  label?: string;
  showViewAll?: boolean;
}

export default function ArticleCarousel({
  articles,
  title = "Aprende más",
  label = "Guías Relacionadas",
  showViewAll = true,
}: ArticleCarouselProps) {
  if (articles.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-neutral-50/60 border-t border-neutral-200/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p
              className="font-mono text-[9px] uppercase text-neutral-400 mb-3"
              style={{ letterSpacing: "0.25em" }}
            >
              {label}
            </p>
            <h2
              className="text-[1.5rem] md:text-[1.75rem] font-serif font-light text-neutral-900 leading-[1.12]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {title}
            </h2>
          </div>
          {showViewAll && (
            <Link
              href="/aprende"
              className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] uppercase text-neutral-500 hover:text-neutral-900 transition-colors"
              style={{ letterSpacing: "0.1em" }}
            >
              Ver todas
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
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article) => {
            const categoryLabel =
              articleCategories.find((c) => c.id === article.category)?.label ||
              article.category;

            return (
              <Link
                key={article.slug}
                href={`/aprende/${article.slug}`}
                className="group"
              >
                <article>
                  <div className="aspect-[16/10] bg-neutral-100 mb-5 overflow-hidden relative rounded-sm">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

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
                      {article.readingTime} min
                    </span>
                  </div>

                  <h3
                    className="text-base lg:text-lg font-serif font-light text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {article.title}
                  </h3>

                  <p className="text-sm text-neutral-500 font-light leading-[1.6] line-clamp-2">
                    {article.excerpt}
                  </p>
                </article>
              </Link>
            );
          })}
        </div>

        {showViewAll && (
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/aprende"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-neutral-500 hover:text-neutral-900 transition-colors"
              style={{ letterSpacing: "0.1em" }}
            >
              Ver todas las guías
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
        )}
      </div>
    </section>
  );
}
