import { Metadata } from 'next'
import CafeteriasPageClient from './CafeteriasPageClient'

export const metadata: Metadata = {
  title: 'Matcha para Cafeterías en Hermosillo | Shizuku Matcha Studio',
  description: 'Matcha premium japonés para cafeterías y negocios en Hermosillo. Precios mayoristas, soporte especializado y productos de primera cosecha de Shizuoka, Japón.',
  keywords: 'matcha para cafeterías, matcha mayorista hermosillo, té japonés para negocios, matcha b2b, productos para cafeterías hermosillo',
  openGraph: {
    title: 'Matcha Premium para Cafeterías en Hermosillo',
    description: 'Eleva tu menú con matcha japonés auténtico. Precios mayoristas y soporte especializado.',
  },
}

export default function CafeteriasPage() {
  return <CafeteriasPageClient />
}
