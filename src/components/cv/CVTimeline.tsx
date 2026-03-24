'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { experiences } from '@/lib/data'

export function CVTimeline() {
  return (
    <section aria-label="Parcours professionnel">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">💼</span>
        Expériences professionnelles
      </h2>

      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-1.5 top-5 w-3 h-3 rounded-full border-2 border-[#0A1628]"
                style={{ backgroundColor: exp.color }}
                aria-hidden="true"
              />

              <div className="rounded-xl border border-white/10 bg-white/3 p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg">{exp.company}</h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
                  >
                    {exp.type}
                  </span>
                </div>

                <p className="text-white/70 font-medium mb-2">{exp.role}</p>

                <div className="flex flex-wrap gap-3 text-white/40 text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" aria-hidden="true" />
                    {exp.period} ({exp.duration})
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" aria-hidden="true" />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-3">
                  {exp.description.map((desc, j) => (
                    <li key={j} className="text-white/60 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 shrink-0" aria-hidden="true">→</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {exp.impact && (
                  <div className="mb-3">
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Impact : </span>
                    <span className="text-emerald-400/70 text-xs">{exp.impact.join(' · ')}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
