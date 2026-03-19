import { MetadataRoute } from 'next'
import { products, filters } from '@/data/products'
import { articles } from '@/data/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shizukumatchastudio.com'

  // Generate product URLs dynamically from products data
  const productUrls: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/productos/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: product.category === 'matcha' ? 0.9 : 0.8,
  }))

  // Generate category URLs dynamically from filters
  const categoryUrls: MetadataRoute.Sitemap = filters
    .filter((f) => f.id !== 'all')
    .map((filter) => ({
      url: `${baseUrl}/productos/categoria/${filter.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }))

  // Generate article URLs dynamically from articles data
  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/aprende/${article.slug}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: 'monthly' as const,
    priority: article.featured ? 0.9 : 0.8,
  }))

  return [
    // Core pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // E-commerce: Product catalog
    {
      url: `${baseUrl}/productos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Category pages (dynamically generated)
    ...categoryUrls,
    // Individual product pages (dynamically generated)
    ...productUrls,

    // Local SEO: Hermosillo
    {
      url: `${baseUrl}/talleres`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mayoreo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Education: SEO content engine
    {
      url: `${baseUrl}/aprende`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Article pages (dynamically generated)
    ...articleUrls,
  ]
}

