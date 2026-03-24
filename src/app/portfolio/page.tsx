import { Metadata } from 'next'
import { ProjectGrid } from '@/components/portfolio/ProjectGrid'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Projets majeurs de Paul Pacheco : IA pédagogique, marketplace, migration cloud, app mobile. Voir les réalisations techniques à fort impact.',
  openGraph: {
    title: 'Portfolio — Paul Pacheco',
    description: 'Projets à fort impact : EdTech, Tech for Good, IA appliquée, Cloud.',
  },
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#060e1a] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3">
              <span className="w-8 h-px bg-emerald-400" />
              Portfolio
              <span className="w-8 h-px bg-emerald-400" />
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Projets qui ont eu un impact réel
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              De la conception à la mise en production — des produits qui ont changé la vie d'utilisateurs et contribué à un monde meilleur.
            </p>
          </div>
          <ProjectGrid />
        </div>
      </main>
      <Footer />
    </>
  )
}
