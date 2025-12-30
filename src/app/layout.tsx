import type { Metadata } from 'next'
import { Playfair_Display, Montserrat, Noto_Serif_JP } from 'next/font/google'
import '@/app/globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shizuku Matcha Studio – Matcha Japonés Auténtico',
  description: 'Una selección curada de productos que celebran la esencia del matcha japonés: pureza, calidad y estilo. Descubre la tradición del té en México.',
  keywords: 'matcha japonés, té premium, matcha auténtico, ceremonia del té, productos japoneses, mindfulness',
  openGraph: {
    type: 'website',
    title: 'Shizuku Matcha Studio – Matcha Japonés Auténtico',
    description: 'Una selección curada de productos que celebran la esencia del matcha japonés: pureza, calidad y estilo.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable} ${notoSerifJP.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Shizuku Matcha Studio",
              "description": "Matcha japonés auténtico de primera cosecha de Shizuoka, Japón. Disponible en Hermosillo, Sonora. Entregas gratis los sábados.",
              "url": "https://shizukumatchastudio.com",
              "image": "https://shizukumatchastudio.com/MatchaMix.png",
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
      <body className="font-sans bg-cream text-charcoal">
        {children}
      </body>
    </html>
  )
}