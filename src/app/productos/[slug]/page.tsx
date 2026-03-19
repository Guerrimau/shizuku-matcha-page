import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetail from "./ProductDetail";
import ArticleCarousel from "@/components/ArticleCarousel";
import { products, getProductBySlug } from "@/data/products";
import { getArticlesByProductSlug } from "@/data/articles";

// Generate static params for all products at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic metadata for each product
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Producto no encontrado | Shizuku Matcha Studio",
    };
  }

  const price = product.sizes[0]?.price || 0;

  return {
    title: `${product.name} | Shizuku Matcha Studio`,
    description: product.description,
    openGraph: {
      title: `${product.name} ${product.kanji} | Shizuku Matcha Studio`,
      description: product.description,
      url: `https://shizukumatchastudio.com/productos/${product.slug}`,
      images: [
        {
          url: `https://shizukumatchastudio.com${product.images[0]}`,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Shizuku Matcha Studio`,
      description: product.description,
      images: [`https://shizukumatchastudio.com${product.images[0]}`],
    },
    alternates: {
      canonical: `https://shizukumatchastudio.com/productos/${product.slug}`,
    },
    other: {
      "product:price:amount": price.toString(),
      "product:price:currency": "MXN",
    },
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedArticles = getArticlesByProductSlug(product.slug);
  const baseUrl = "https://shizukumatchastudio.com";

  // Schema: Product — Rich snippets with price, availability
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `${baseUrl}${img}`),
    brand: {
      "@type": "Brand",
      name: "Shizuku Matcha Studio",
    },
    offers: product.sizes.map((size) => ({
      "@type": "Offer",
      name: size.label,
      price: size.price.toString(),
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/productos/${product.slug}`,
      seller: {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#business`,
      },
    })),
    ...(product.specs.type === "tea" && {
      additionalProperty: [
        { "@type": "PropertyValue", name: "Tipo", value: product.specs.tipo },
        { "@type": "PropertyValue", name: "Origen", value: product.specs.origen },
        { "@type": "PropertyValue", name: "Proceso", value: product.specs.proceso },
      ],
    }),
  };

  // Schema: BreadcrumbList — Navigation signals
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Productos",
        item: `${baseUrl}/productos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${baseUrl}/productos/${product.slug}`,
      },
    ],
  };

  // Schema: WebPage — Page-level entity
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${product.name} | Shizuku Matcha Studio`,
    description: product.description,
    url: `${baseUrl}/productos/${product.slug}`,
    inLanguage: "es-MX",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@type": "Product",
      name: product.name,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Navbar />
      <main>
        <ProductDetail product={product} />
        
        {relatedArticles.length > 0 && (
          <ArticleCarousel
            articles={relatedArticles}
            title="Aprende a prepararlo"
            label="Para después de tu compra"
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
