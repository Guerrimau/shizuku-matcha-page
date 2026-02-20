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
  title: 'Shizuku Matcha Studio | Matcha Hermosillo',
  description: 'Premium grade matcha from Shizuoka, to Hermosillo, Sonora. Tés japoneses premium importados directamente de Shizuoka.',
  keywords: 'matcha ceremonial, matcha hermosillo, matcha sonora, té japonés premium, matcha shizuoka, ceremonial matcha mexico, japanese tea hermosillo',
  metadataBase: new URL('https://shizukumatchastudio.com'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://shizukumatchastudio.com',
    siteName: 'Shizuku Matcha Studio',
    title: 'Shizuku Matcha Studio | Matcha de Especialidad',
    description: 'Specialty grade matcha from Shizuoka. Okumidori cultivar. Balanced profile for lattes.',
    images: [
      {
        url: '/HERO.jpg',
        width: 1200,
        height: 630,
        alt: 'Shizuku Matcha Studio — Matcha de especialidad Shizu no Midori',
      },
      {
        url: '/MATCHA_LATTE_HOT.jpg',
        width: 1200,
        height: 630,
        alt: 'Matcha de especialidad importado de Shizuoka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shizuku Matcha Studio | Matcha de Especialidad',
    description: 'Specialty grade matcha from Shizuoka. Okumidori cultivar. First harvest.',
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
              "description": "Specialty grade matcha from Shizuoka, Japan. First harvest Okumidori cultivar. Balanced profile for lattes. Local dispatch in Hermosillo, national shipping.",
              "url": "https://shizukumatchastudio.com",
              "image": "https://shizukumatchastudio.com/BowlWithMatcha.png",
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
              "areaServed": {
                "@type": "City",
                "name": "Hermosillo",
                "addressRegion": "Sonora",
                "addressCountry": "MX"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
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
      </head>
      <body className="font-sans bg-washi-bg text-washi-text">
        {children}
      </body>
    </html>
  )
}