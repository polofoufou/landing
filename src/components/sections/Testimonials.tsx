import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Testimonials() {
  // Placeholder section — to be populated with real testimonials from LinkedIn
  return (
    <section id="testimonials" className="py-16 bg-[#060e1a]" aria-label="Recommandations">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <SectionHeading
            label="Recommandations"
            title="Ce qu'ils disent"
            centered
          />
          <p className="mt-4 text-white/40 text-sm">
            Retrouvez les recommandations complètes sur{' '}
            <a
              href="https://www.linkedin.com/in/pacheco-paul/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
              aria-label="LinkedIn de Paul Pacheco (nouvel onglet)"
            >
              LinkedIn
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
