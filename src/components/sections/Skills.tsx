'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { skills } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#080f1e]" aria-label="Compétences">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12">
          <SectionHeading
            label="Compétences"
            title="Conception produit · Architecture · Delivery"
            description="De la définition des fonctionnalités à l'infrastructure qui tient — je couvre toute la chaîne, avec une vision produit en fil rouge."
          />
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className={`rounded-2xl border border-white/10 bg-white/3 p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 ${
                skill.featured ? 'lg:col-span-1 border-white/15 bg-white/5' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: `${skill.color}20`, border: `1px solid ${skill.color}30` }}
                  aria-hidden="true"
                >
                  {skill.icon}
                </div>
                <h3 className="text-white font-semibold">{skill.category}</h3>
                {skill.featured && (
                  <span className="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full font-medium">
                    Core
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge key={item} variant="default" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
