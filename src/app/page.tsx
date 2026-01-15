import { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = {
  title: 'Shizuku Matcha Studio — Matcha premium en Hermosillo',
  description: 'Matcha japonés premium de primera cosecha de Shizuoka. Disponible en Hermosillo, Sonora. The art of stillness.',
  keywords: 'matcha premium hermosillo, matcha japonés hermosillo, matcha shizuoka, té japonés premium, matcha sonora, stone-ground matcha mexico',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://shizukumatchastudio.com',
    siteName: 'Shizuku Matcha Studio',
    title: 'Shizuku Matcha Studio — The art of stillness',
    description: 'Matcha japonés premium de primera cosecha de Shizuoka. Hermosillo, Sonora.',
    images: [
      {
        url: '/BowlWithMatcha.png',
        width: 1200,
        height: 630,
        alt: 'Shizuku Matcha Studio — Matcha premium ritual preparation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shizuku Matcha Studio — Matcha premium en Hermosillo',
    description: 'Matcha japonés premium de primera cosecha de Shizuoka. Hermosillo, Sonora.',
    images: ['/BowlWithMatcha.png'],
  },
  alternates: {
    canonical: 'https://shizukumatchastudio.com',
  },
  other: {
    'geo.region': 'MX-SON',
    'geo.placename': 'Hermosillo',
    'geo.position': '29.0729;-110.9559',
    'ICBM': '29.0729, -110.9559',
  },
}

export default function Home() {
  return <HomePageClient />
}