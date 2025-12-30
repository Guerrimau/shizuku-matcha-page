import { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = {
  title: 'Matcha Hermosillo | Matcha Ceremonial Hermosillo | Shizuku Matcha Studio',
  description: 'Matcha japonés auténtico y matcha ceremonial en Hermosillo, Sonora. Primera cosecha de Shizuoka, Japón. Bolsas de 40g y 150g. Entregas GRATIS los sábados en Hermosillo. Pick-up disponible toda la semana. Compra por Instagram DM.',
  keywords: 'matcha hermosillo, matcha ceremonial hermosillo, matcha sonora, matcha japonés hermosillo, matcha auténtico hermosillo, matcha ceremonial sonora, té matcha hermosillo, matcha premium hermosillo, matcha ceremonial premium hermosillo, matcha shizuoka hermosillo, matcha 40g hermosillo, matcha 150g hermosillo, entregas gratis hermosillo, compra matcha instagram hermosillo, matcha japonés sonora, matcha hermosillo sonora, donde comprar matcha hermosillo',
  openGraph: {
    type: 'website',
    title: 'Matcha Hermosillo | Matcha Ceremonial Hermosillo | Shizuku Matcha Studio',
    description: 'Matcha japonés auténtico y matcha ceremonial en Hermosillo, Sonora. Primera cosecha de Shizuoka. Entregas GRATIS los sábados.',
    locale: 'es_MX',
    siteName: 'Shizuku Matcha Studio',
    images: [
      {
        url: '/MatchaMix.png',
        width: 1200,
        height: 630,
        alt: 'Matcha japonés premium y ceremonial disponible en Hermosillo, Sonora',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matcha Hermosillo | Matcha Ceremonial Hermosillo',
    description: 'Matcha japonés auténtico de primera cosecha de Shizuoka. Disponible en Hermosillo, Sonora.',
    images: ['/MatchaMix.png'],
  },
  alternates: {
    canonical: '/',
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