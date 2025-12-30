import { Metadata } from 'next'
import CafeteriasPageClient from './CafeteriasPageClient'

export const metadata: Metadata = {
  title: 'Matcha para Cafeterías de Especialidad | Shizuku Matcha Studio',
  description: 'Matcha premium japonés para cafeterías de especialidad. ~50% más barato que el mercado, sin consumo mínimo, con asesoramiento profesional. Primera cosecha de Shizuoka, Japón.',
  keywords: 'matcha para cafeterías de especialidad, matcha premium cafeterías, matcha hermosillo cafeterías, matcha b2b, matcha mayorista, matcha para lattes, matcha premium vs ceremonial',
  openGraph: {
    title: 'Matcha para Cafeterías de Especialidad | Shizuku Matcha Studio',
    description: 'Si te tomas en serio el café de especialidad, tómate en serio el matcha premium. Precio competitivo, sin consumo mínimo.',
  },
}

export default function CafeteriasPage() {
  return <CafeteriasPageClient />
}
