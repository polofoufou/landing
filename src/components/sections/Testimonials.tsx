'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/lib/data'
import { LINKEDIN_URL } from '@/lib/constants'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#080f1e]" aria-label="Recommandations">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 text-center">
          <SectionHeading
            label="Recommandations"
            title="Ce qu'ils disent"
            centered
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative flex flex-col p-6 rounded-2xl border border-white/10 bg-white/3 hover:border-white/20 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote
                className="w-6 h-6 mb-4 shrink-0"
                style={{ color: `${t.color}80` }}
                aria-hidden="true"
              />

              {/* Quote text */}
              <p className="text-white/70 text-sm leading-relaxed flex-1 italic mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ backgroundColor: `${t.color}25`, border: `1px solid ${t.color}40` }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm truncate">{t.name}</div>
                  <div className="text-white/40 text-xs truncate">{t.role} · {t.company}</div>
                </div>
              </div>

              {/* Colored accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-30"
                style={{ backgroundColor: t.color }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>

        <ScrollReveal className="mt-8 text-center">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-blue-400 text-sm transition-colors"
            aria-label="Voir toutes les recommandations sur LinkedIn (nouvel onglet)"
          >
            Voir toutes les recommandations sur LinkedIn →
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
