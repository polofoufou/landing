import { Metadata } from 'next'
import { CVTimeline } from '@/components/cv/CVTimeline'
import { CVSkills } from '@/components/cv/CVSkills'
import { CVDownload } from '@/components/cv/CVDownload'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { interests, languages, talks } from '@/lib/data'

export const metadata: Metadata = {
  title: 'CV',
  description:
    'Curriculum Vitae de Paul Pacheco — CTO & AI Practitioner. 17 ans d\'expérience, ex-CTO Les Sherpas et PHENIX. Expertise TypeScript, React, AWS, IA.',
  openGraph: {
    title: 'CV — Paul Pacheco',
    description: 'Parcours professionnel complet, compétences et formations.',
  },
}

export default function CVPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#060e1a] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header CV */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-12 print:mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Paul Pacheco</h1>
              <p className="text-xl text-white/70 mb-1">CTO · IA praticien · Bâtisseur de produits à impact</p>
              <div className="flex flex-wrap gap-4 text-white/50 text-sm mt-3">
                <span>📍 Paris, France</span>
                <a
                  href="mailto:polo.pacheco@gmail.com"
                  className="hover:text-white transition-colors"
                  aria-label="Envoyer un email à Paul Pacheco"
                >
                  ✉️ polo.pacheco@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/pacheco-paul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn (nouvel onglet)"
                >
                  🔗 LinkedIn
                </a>
                <a
                  href="https://github.com/polofoufou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub (nouvel onglet)"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
            <div className="print:hidden">
              <CVDownload />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main col */}
            <div className="lg:col-span-2 space-y-12">
              <CVTimeline />
            </div>

            {/* Side col */}
            <div className="space-y-10">
              <CVSkills />

              {/* Languages */}
              <section aria-label="Langues">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span aria-hidden="true">🌍</span>
                  Langues
                </h2>
                <div className="space-y-2">
                  {languages.map((l) => (
                    <div key={l.lang} className="flex items-center justify-between p-3 rounded-lg bg-white/3 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span aria-hidden="true">{l.code}</span>
                        <span className="text-white text-sm">{l.lang}</span>
                      </div>
                      <span className="text-white/50 text-xs">{l.level}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Talks */}
              <section aria-label="Interventions publiques">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span aria-hidden="true">🎤</span>
                  Talks & Interventions
                </h2>
                <div className="space-y-2">
                  {talks.map((t) => (
                    <div key={t.id} className="p-3 rounded-lg bg-white/3 border border-white/10">
                      <div className="text-white text-sm font-medium">{t.event}</div>
                      <div className="text-white/40 text-xs">{t.year}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Interests */}
              <section aria-label="Centres d'intérêt">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span aria-hidden="true">⭐</span>
                  Centres d'intérêt
                </h2>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span key={interest.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white/70">
                      <span aria-hidden="true">{interest.icon}</span>
                      {interest.label}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
