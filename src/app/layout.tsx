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
              "description": "Matcha japonés auténtico y productos premium para la ceremonia del té",
              "url": "https://shizukumatchastudio.com",
              "priceRange": "$$$",
              "servesCuisine": "Japanese Tea"
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