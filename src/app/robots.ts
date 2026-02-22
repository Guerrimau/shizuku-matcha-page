import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://www.shizukumatchastudio.com/sitemap.xml',
    host: 'https://www.shizukumatchastudio.com',
  }
}

