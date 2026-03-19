import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  products,
  filters,
  type Product,
  type ProductSpecs,
  type FilterCategory,
} from "@/data/products";

// Generate static params for all categories at build time
export async function generateStaticParams() {
  return filters
    .filter((f) => f.id !== "all")
    .map((filter) => ({
      category: filter.id,
    }));
}

// Category metadata for SEO
const categoryMeta: Record<string, { title: string; description: string }> = {
  matcha: {
    title: "Matcha de Especialidad",
    description:
      "Matcha de Shizuoka, Japón. Cultivar Okumidori con trazabilidad completa. Ideal para lattes y preparación tradicional. Envío a todo México.",
  },
  polvo: {
    title: "Té en Polvo — Matcha y Hojicha",
    description:
      "Matcha y Hojicha en polvo de Shizuoka, Japón. Perfectos para lattes y preparaciones con leche. Trazabilidad completa. Envío a todo México.",
  },
  hoja: {
    title: "Té de Hoja Suelta — Sencha y Hojicha",
    description:
      "Sencha y Hojicha de hoja suelta de Shizuoka, Japón. Primera cosecha, proceso tradicional. Envío a todo México.",
  },
  accesorios: {
    title: "Accesorios para Té Japonés",
    description:
      "Chasen, chashaku, chawan, kyusu y kits de matcha. Accesorios tradicionales japoneses para la preparación de té. Envío a todo México.",
  },
};

// Generate dynamic metadata for each category
export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = params.category as FilterCategory;
  const meta = categoryMeta[category];

  if (!meta) {
    return { title: "Categoría no encontrada" };
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Shizuku Matcha Studio`,
      description: meta.description,
      url: `https://shizukumatchastudio.com/productos/categoria/${category}`,
      type: "website",
      locale: "es_MX",
      siteName: "Shizuku Matcha Studio",
      images: [
        {
          url: "https://shizukumatchastudio.com/og.jpg",
          width: 1200,
          height: 630,
          alt: `${meta.title} — Shizuku Matcha Studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | Shizuku Matcha Studio`,
      description: meta.description,
      images: ["https://shizukumatchastudio.com/og.jpg"],
    },
    alternates: {
      canonical: `https://shizukumatchastudio.com/productos/categoria/${category}`,
    },
  };
}

function SpecsTable({ specs }: { specs: ProductSpecs }) {
  if (specs.type === "tea") {
    return (
      <dl className="space-y-2">
        <SpecRow label="Tipo" value={specs.tipo} />
        <SpecRow label="Origen" value={specs.origen} />
        <SpecRow label="Proceso" value={specs.proceso} />
        <SpecRow label="Perfil" value={specs.perfil} />
      </dl>
    );
  }

  if (specs.type === "accessory") {
    return (
      <dl className="space-y-2">
        <SpecRow label="Material" value={specs.material} />
        <SpecRow label="Capacidad" value={specs.capacidad} />
        <SpecRow label="Origen" value={specs.origen} />
        <SpecRow label="Artesano" value={specs.artesano} />
      </dl>
    );
  }

  if (specs.type === "kit") {
    return (
      <dl className="space-y-2">
        <SpecRow label="Contenido" value={specs.contenido} />
        <SpecRow label="Nivel" value={specs.nivel} />
        <SpecRow label="Té Incluido" value={specs.teIncluido} />
        <SpecRow label="Perfil" value={specs.perfil} />
      </dl>
    );
  }

  return null;
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline gap-4">
      <dt
        className="font-mono text-[9px] uppercase text-neutral-400 shrink-0"
        style={{ letterSpacing: "0.15em" }}
      >
        {label}
      </dt>
      <dd className="text-[13px] text-neutral-700 font-light text-right">
        {value}
      </dd>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const startingPrice = product.sizes[0]?.price || 0;

  return (
    <article className="group">
      <Link href={`/productos/${product.slug}`} className="block">
        <div className="aspect-square bg-neutral-100 mb-6 overflow-hidden relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {product.labels.map((label, idx) => (
            <span
              key={idx}
              className="font-mono text-[9px] uppercase text-neutral-500 px-2 py-1 bg-neutral-100 rounded-sm"
              style={{ letterSpacing: "0.1em" }}
            >
              {label}
            </span>
          ))}
        </div>

        <h3
          className="text-lg lg:text-xl font-serif font-light text-neutral-900 mb-2"
          style={{ letterSpacing: "-0.01em" }}
        >
          {product.name}{" "}
          <span className="font-script text-base text-neutral-400 ml-1">
            {product.kanji}
          </span>
        </h3>

        <p className="text-base text-neutral-600 font-light mb-4">
          ${startingPrice.toLocaleString("es-MX")}{" "}
          <span className="text-neutral-400 text-sm">MXN</span>
        </p>

        <div className="border-t border-neutral-200 pt-4 mb-4">
          <SpecsTable specs={product.specs} />
        </div>

        <span
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-neutral-500 group-hover:text-neutral-900 transition-colors duration-300"
          style={{ letterSpacing: "0.1em" }}
        >
          Ver Producto
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
  );
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category as FilterCategory;
  const currentFilter = filters.find((f) => f.id === category);

  if (!currentFilter || category === "all") {
    notFound();
  }

  // Filter logic: "polvo" includes both matcha and polvo products
  const matchingProducts =
    category === "polvo"
      ? products.filter((p) => p.category === "matcha" || p.category === "polvo")
      : products.filter((p) => p.category === category);

  const otherProducts =
    category === "polvo"
      ? products.filter((p) => p.category !== "matcha" && p.category !== "polvo")
      : products.filter((p) => p.category !== category);

  const meta = categoryMeta[category];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://shizukumatchastudio.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Productos",
        item: "https://shizukumatchastudio.com/productos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: currentFilter.label,
        item: `https://shizukumatchastudio.com/productos/categoria/${category}`,
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F8F3" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <header className="text-center mb-12 lg:mb-16">
            <span
              className="font-mono text-[9px] uppercase text-neutral-400 block mb-4"
              style={{ letterSpacing: "0.25em" }}
            >
              Colecciones
            </span>
            <h1
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-light text-neutral-900"
              style={{ letterSpacing: "-0.02em" }}
            >
              {meta?.title || currentFilter.label}
            </h1>
            <p className="mt-5 text-base text-neutral-600 font-light max-w-xl mx-auto leading-relaxed">
              Té de especialidad importado directamente de Shizuoka, Japón.
              Trazabilidad completa desde el cultivar hasta tu taza.
            </p>
          </header>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 lg:mb-16">
            <Link
              href="/productos"
              className="font-mono text-[10px] uppercase px-4 py-2.5 rounded-sm transition-all duration-200 bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
              style={{ letterSpacing: "0.08em" }}
            >
              Todo
            </Link>
            {filters
              .filter((f) => f.id !== "all")
              .map((filter) => (
                <Link
                  key={filter.id}
                  href={`/productos/categoria/${filter.id}`}
                  className={`
                    font-mono text-[10px] uppercase px-4 py-2.5 rounded-sm transition-all duration-200
                    ${
                      category === filter.id
                        ? "bg-neutral-900 text-white"
                        : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                    }
                  `}
                  style={{ letterSpacing: "0.08em" }}
                >
                  {filter.label}
                </Link>
              ))}
          </div>

          {/* Matching Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {matchingProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {/* Empty State for matching */}
          {matchingProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 font-light">
                No hay productos en esta categoría.
              </p>
            </div>
          )}

          {/* Other Products Section */}
          {otherProducts.length > 0 && (
            <>
              <div className="mt-20 mb-12 text-center">
                <span
                  className="font-mono text-[9px] uppercase text-neutral-400"
                  style={{ letterSpacing: "0.25em" }}
                >
                  Otros Productos
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                {otherProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
