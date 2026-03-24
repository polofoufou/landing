'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { talks } from '@/lib/data'

const typeLabels = {
  conference: 'Conférence',
  podcast: 'Podcast',
  forum: 'Forum',
}

const typeColors = {
  conference: '#3B82F6',
  podcast: '#8B5CF6',
  forum: '#10B981',
}

export function Talks() {
  return (
    <section id="talks" className="py-24 bg-[#060e1a]" aria-label="Apparitions publiques et talks">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 text-center">
          <SectionHeading
            label="Social Proof"
            title="Partage de connaissances"
            description="Conférences, podcasts et interventions — parce que la tech se construit ensemble."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {talks.map((talk, i) => (
            <motion.article
              key={talk.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/10 bg-white/3 p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="text-4xl mb-4" aria-hidden="true">{talk.icon}</div>

              {/* Type badge */}
              <div className="mb-3 inline-flex">
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    backgroundColor: `${typeColors[talk.type]}20`,
                    color: typeColors[talk.type],
                    border: `1px solid ${typeColors[talk.type]}30`,
                  }}
                >
                  {typeLabels[talk.type]}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold mb-2 leading-tight">{talk.event}</h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-4">{talk.description}</p>

              {/* Year */}
              <span className="text-white/30 text-xs font-mono">{talk.year}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
