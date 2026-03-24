'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { skills, education } from '@/lib/data'

export function CVSkills() {
  return (
    <div className="space-y-10">
      {/* Skills */}
      <section aria-label="Compétences">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span aria-hidden="true">⚡</span>
          Compétences
        </h2>
        <div className="space-y-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-wrap items-start gap-3"
            >
              <div className="w-32 shrink-0 flex items-center gap-2 pt-0.5">
                <span aria-hidden="true">{skill.icon}</span>
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wide leading-tight">{skill.category}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <Badge key={item} variant="default" className="text-xs">{item}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section aria-label="Formation">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span aria-hidden="true">🎓</span>
          Formation & Certifications
        </h2>
        <div className="space-y-3">
          {education.map((edu, i) => (
            <motion.div
              key={`${edu.school}-${edu.year}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/3"
            >
              <div className="text-white/30 text-xs font-mono mt-0.5 w-10 shrink-0">{edu.year}</div>
              <div>
                <div className="text-white font-medium text-sm">{edu.degree}</div>
                <div className="text-white/50 text-xs">{edu.school}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
