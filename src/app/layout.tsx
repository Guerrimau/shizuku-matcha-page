import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Space_Mono, Noto_Serif_JP } from 'next/font/google'
import '@/app/globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shizuku Matcha Studio | Matcha Latte Hermosillo | Matcha de Especialidad',
  description: 'Matcha de primera cosecha importado de Shizuoka, Japón. Cultivar Okumidori, molido en piedra. Disponible en Hermosillo con envíos a todo México.',
  keywords: 'matcha latte hermosillo, donde comprar matcha hermosillo, matcha hermosillo, matcha shizuoka méxico, matcha primera cosecha méxico, matcha para cafeterías hermosillo, matcha mayoreo hermosillo, qué es el matcha, matcha vs ceremonial',
  metadataBase: new URL('https://shizukumatchastudio.com'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://shizukumatchastudio.com',
    siteName: 'Shizuku Matcha Studio',
    title: 'Shizuku Matcha Studio | Matcha de Especialidad en Hermosillo',
    description: 'Matcha de origen en Shizuoka. Importado a Hermosillo. Primera cosecha, cultivar Okumidori. Envíos a todo México.',
    images: [
      {
        url: '/HERO.jpg',
        width: 1200,
        height: 630,
        alt: 'Matcha latte preparado con Shizu no Midori en Hermosillo',
      },
      {
        url: '/MATCHA_LATTE_HOT.jpg',
        width: 1200,
        height: 630,
        alt: 'Matcha de especialidad Shizuoka importado a Hermosillo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shizuku Matcha Studio | Matcha Hermosillo',
    description: 'Matcha de origen en Shizuoka, Japón. Importado a Hermosillo. Primera cosecha. Envíos nacionales.',
    images: ['/MATCHA_LATTE_HOT.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} ${spaceMono.variable} ${notoSerifJP.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/ShizukuIcon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Shizuku Matcha Studio",
              "description": "Matcha de origen en Shizuoka, Japón. Importado a Hermosillo. Primera cosecha, cultivar Okumidori. Envíos a todo México.",
              "url": "https://shizukumatchastudio.com",
              "image": "https://shizukumatchastudio.com/MATCHA_LATTE_HOT.jpg",
              "priceRange": "$$",
              "servesCuisine": "Japanese Tea",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hermosillo",
                "addressRegion": "Sonora",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "29.0729",
                "longitude": "-110.9559"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Hermosillo",
                  "addressRegion": "Sonora",
                  "addressCountry": "MX"
                },
                {
                  "@type": "Country",
                  "name": "México"
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/shizukumatchastudio/"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Matcha Shizu no Midori",
              "description": "Matcha de especialidad de primera cosecha. Cultivar Okumidori de Shizuoka, Japón. Molido en piedra. Perfil balanceado para lattes.",
              "image": "https://shizukumatchastudio.com/SHIZUNOMIDORI/PRODUCT.jpg",
              "brand": {
                "@type": "Brand",
                "name": "Shizuku Matcha Studio"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "MXN",
                "priceRange": "$$",
                "areaServed": {
                  "@type": "Country",
                  "name": "México"
                },
                "seller": {
                  "@type": "LocalBusiness",
                  "name": "Shizuku Matcha Studio",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Hermosillo",
                    "addressRegion": "Sonora",
                    "addressCountry": "MX"
                  }
                }
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Origen",
                  "value": "Shizuoka, Japón"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Cultivar",
                  "value": "Okumidori"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Cosecha",
                  "value": "Primera cosecha (Ichibancha)"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Proceso",
                  "value": "Molido en piedra"
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans bg-washi-bg text-washi-text">
        {children}
      </body>
    </html>
  )
}