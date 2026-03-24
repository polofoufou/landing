'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { whyMeItems } from '@/lib/data'

export function WhyMe() {
  return (
    <section id="why-me" className="py-24 bg-[#060e1a]" aria-label="Pourquoi travailler avec moi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 text-center">
          <SectionHeading
            label="Valeur ajoutée"
            title="Pourquoi travailler avec moi ?"
            description="Ce qui me distingue, c'est la combinaison rare d'un CTO qui reste dans le code tout en pilotant la stratégie et en fédérant des équipes."
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyMeItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/6 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${item.color}10 0%, transparent 60%)`,
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                    style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}25` }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg leading-tight pt-1">{item.title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
