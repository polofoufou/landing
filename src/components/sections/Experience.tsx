'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/lib/data'
import type { Experience } from '@/types'

const filters = ['Tout', 'CTO', 'Dev', 'Management'] as const
type FilterType = typeof filters[number]

export function Experience() {
  const [expanded, setExpanded] = useState<string | null>('sherpas')
  const [filter, setFilter] = useState<FilterType>('Tout')

  const filtered = experiences.filter(
    (e) => filter === 'Tout' || e.type === filter
  )

  return (
    <section id="experience" className="py-24 bg-[#060e1a]" aria-label="Expériences professionnelles">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12">
          <SectionHeading
            label="Parcours"
            title="17 ans à construire, scaler, impacter"
            description="De développeur .NET à CTO, en passant par la gestion de projet et le management d'équipes pluridisciplinaires."
          />
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={0.1} className="mb-10">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par type de poste">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === f
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />

          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {filtered.map((exp, i) => (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  index={i}
                  isExpanded={expanded === exp.id}
                  onToggle={() => setExpanded(expanded === exp.id ? null : exp.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  experience: exp,
  index,
  isExpanded,
  onToggle,
}: {
  experience: Experience
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="relative pl-12 md:pl-16"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-3 md:left-5 top-5 w-3 h-3 rounded-full border-2 border-[#060e1a] shadow-lg"
        style={{ backgroundColor: exp.color }}
        aria-hidden="true"
      />

      <div
        className={`rounded-2xl border transition-all duration-300 cursor-pointer ${
          isExpanded ? 'border-white/20 bg-white/5' : 'border-white/10 bg-white/3 hover:border-white/15 hover:bg-white/5'
        }`}
      >
        <button
          className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={`exp-${exp.id}`}
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-white font-bold text-lg">{exp.company}</h3>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
              >
                {exp.type}
              </span>
            </div>
            <p className="text-white/70 font-medium mb-2">{exp.role}</p>
            <div className="flex flex-wrap items-center gap-3 text-white/40 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" aria-hidden="true" />
                {exp.period} · {exp.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" aria-hidden="true" />
                {exp.location}
              </span>
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-white/40 shrink-0 transition-transform mt-1 ${isExpanded ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              id={`exp-${exp.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-white/10 pt-4 space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((desc, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="text-blue-400 mt-1 shrink-0" aria-hidden="true">→</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {exp.impact && (
                  <div>
                    <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">Impact</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.impact.map((imp) => (
                        <Badge key={imp} variant="glow">{imp}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
