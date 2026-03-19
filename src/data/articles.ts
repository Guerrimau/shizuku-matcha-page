// ═══════════════════════════════════════════════════════════════
// Article Types
// ═══════════════════════════════════════════════════════════════

export type ArticleCategory =
  | "preparacion"
  | "grados"
  | "historia"
  | "cultivo"
  | "salud";

export interface ArticleStep {
  title: string;
  description: string;
}

export interface HowToSchema {
  totalTime: string;
  steps: ArticleStep[];
  tools?: string[];
  supplies?: string[];
}

export interface RelatedLink {
  type: "article" | "product";
  slug: string;
  title: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: ArticleCategory;
  tags: string[];
  image: string;
  datePublished: string;
  dateModified: string;
  readingTime: number;
  featured: boolean;
  howTo?: HowToSchema;
  relatedLinks: RelatedLink[];
  relatedProductSlugs: string[];
}

// ═══════════════════════════════════════════════════════════════
// Article Data
// ═══════════════════════════════════════════════════════════════

export const articles: Article[] = [
  {
    slug: "guia-preparacion-matcha",
    title: "Guía de Preparación de Matcha",
    metaTitle: "Guía de Preparación de Matcha — Técnica Correcta Paso a Paso",
    metaDescription:
      "Guía técnica completa: sifting, temperatura del agua (55-65°C), técnica de batido en W, ratios para matcha latte. Con parámetros exactos.",
    excerpt:
      "Técnica correcta paso a paso: temperatura, ratio, y batido. Con parámetros exactos para matcha latte.",
    category: "preparacion",
    tags: ["técnica", "latte", "chasen", "principiante"],
    image: "/MATCHA_WISK.jpg",
    datePublished: "2025-01-01",
    dateModified: "2026-03-18",
    readingTime: 8,
    featured: true,
    howTo: {
      totalTime: "PT5M",
      steps: [
        {
          title: "Siftar el matcha",
          description:
            "Pasar 3-4g de matcha por un tamiz fino para eliminar grumos.",
        },
        {
          title: "Pre-disolver",
          description: "Añadir 15ml de agua a 55°C y mezclar suavemente.",
        },
        {
          title: "Agregar agua y batir",
          description: "Verter 25ml de agua a 65°C sobre el matcha y batir con chasen en movimiento de W hasta formar espuma uniforme.",
        },
        {
          title: "Preparar latte",
          description:
            "Añadir 180ml de leche fría, una pizca de sal y opcionalmente 2ml de jarabe de agave.",
        },
      ],
      tools: [
        "Chasen (batidor de bambú)",
        "Chawan (bowl)",
        "Furui (tamiz)",
        "Chashaku (cuchara de bambú)",
      ],
      supplies: ["Matcha (3-4g)", "Agua caliente (40ml a 55-65°C)", "Leche (180ml)"],
    },
    relatedLinks: [
      {
        type: "article",
        slug: "verdad-matcha-ceremonial",
        title: "La Verdad sobre el Matcha Ceremonial",
        description:
          'Qué significa realmente "ceremonial" y cómo elegir matcha de calidad',
      },
      {
        type: "product",
        slug: "matcha_okumidori_seasonal_blend_latte_30g",
        title: "Matcha Shizu no Midori — Cultivar Okumidori",
        description:
          "Nuestro matcha de especialidad perfecto para practicar tu técnica",
      },
    ],
    relatedProductSlugs: [
      "matcha_okumidori_seasonal_blend_latte_30g",
      "kit_matcha_ritual_starter_chasen_chawan",
    ],
  },
  {
    slug: "verdad-matcha-ceremonial",
    title: "La Verdad sobre el Matcha Ceremonial",
    metaTitle: "La Verdad sobre el Matcha Ceremonial — Grados y Marketing",
    metaDescription:
      "Análisis técnico de los grados de matcha: qué significa 'ceremonial', cómo se clasifican en Japón vs. marketing occidental, y qué buscar al comprar.",
    excerpt:
      'Por qué "grado ceremonial" no significa nada y qué buscar realmente al comprar matcha de calidad.',
    category: "grados",
    tags: ["calidad", "ceremonial", "marketing", "compra", "intermedio"],
    image: "/WISK.jpg",
    datePublished: "2025-01-01",
    dateModified: "2026-03-16",
    readingTime: 10,
    featured: true,
    relatedLinks: [
      {
        type: "article",
        slug: "guia-preparacion-matcha",
        title: "Guía de Preparación de Matcha",
        description: "Técnica correcta paso a paso: temperatura, ratio, y batido",
      },
      {
        type: "product",
        slug: "matcha_okumidori_seasonal_blend_latte_30g",
        title: 'Matcha Shizu no Midori — Sin Etiquetas "Ceremoniales"',
        description: "Cultivar Okumidori de Shizuoka con trazabilidad completa",
      },
    ],
    relatedProductSlugs: [
      "matcha_okumidori_seasonal_blend_latte_30g",
      "hojicha_polvo_roasted_latte_30g",
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// Category Filters
// ═══════════════════════════════════════════════════════════════

export const articleCategories: { id: ArticleCategory | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "preparacion", label: "Preparación" },
  { id: "grados", label: "Grados y Calidad" },
  { id: "historia", label: "Historia" },
  { id: "cultivo", label: "Cultivo" },
  { id: "salud", label: "Salud" },
];

// ═══════════════════════════════════════════════════════════════
// Helper Functions
// ═══════════════════════════════════════════════════════════════

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(
  category: ArticleCategory | "all"
): Article[] {
  if (category === "all") return articles;
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getRelatedArticles(
  currentSlug: string,
  limit: number = 3
): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return [];

  return articles
    .filter((a) => a.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getArticlesByProductSlug(productSlug: string): Article[] {
  return articles.filter((a) => a.relatedProductSlugs.includes(productSlug));
}

// ═══════════════════════════════════════════════════════════════
// Schema Generators
// ═══════════════════════════════════════════════════════════════

const BASE_URL = "https://shizukumatchastudio.com";

export function generateArticleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.metaTitle,
    description: article.metaDescription,
    url: `${BASE_URL}/aprende/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: "es-MX",
    author: {
      "@type": "Organization",
      name: "Shizuku Matcha Studio",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Shizuku Matcha Studio",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicons/favicon-512x512.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/aprende/${article.slug}`,
    },
    image: `${BASE_URL}${article.image}`,
  };
}

export function generateBreadcrumbSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Aprende",
        item: `${BASE_URL}/aprende`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${BASE_URL}/aprende/${article.slug}`,
      },
    ],
  };
}

export function generateHowToSchema(article: Article) {
  if (!article.howTo) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: article.title,
    description: article.metaDescription,
    totalTime: article.howTo.totalTime,
    step: article.howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
    tool: article.howTo.tools?.map((tool) => ({
      "@type": "HowToTool",
      name: tool,
    })),
    supply: article.howTo.supplies?.map((supply) => ({
      "@type": "HowToSupply",
      name: supply,
    })),
  };
}
