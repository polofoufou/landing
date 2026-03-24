'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#080f1e]" aria-label="Projets majeurs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeading
            label="Portfolio"
            title="Projets qui ont eu un impact réel"
            description="De la conception à la mise en production, des produits qui ont changé la vie d'utilisateurs."
          />
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors shrink-0"
          >
            Voir tout le portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, rotateX: 2 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="group relative rounded-2xl border border-white/10 bg-white/3 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl cursor-default"
            >
              {/* Top accent */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                aria-hidden="true"
              />

              <div className="p-6">
                {/* Icon + company */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${project.color}15`, border: `1px solid ${project.color}25` }}
                    aria-hidden="true"
                  >
                    {project.icon}
                  </div>
                  <span className="text-xs text-white/40 font-mono">{project.company}</span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-2 leading-tight">{project.title}</h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Impact */}
                {project.impact && (
                  <div className="mb-4 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-emerald-400 text-xs font-semibold">📈 {project.impact}</span>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 60%)`,
                }}
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
