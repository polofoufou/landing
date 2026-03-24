'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6, rotateX: 1 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className="group relative rounded-2xl border border-white/10 bg-white/3 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Top accent */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}00)` }}
        aria-hidden="true"
      />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
            style={{ backgroundColor: `${project.color}15`, border: `1px solid ${project.color}25` }}
            aria-hidden="true"
          >
            {project.icon}
          </div>
          <span
            className="text-xs px-2.5 py-1 rounded-full font-medium mt-1"
            style={{
              backgroundColor: `${project.color}15`,
              color: project.color,
              border: `1px solid ${project.color}25`,
            }}
          >
            {project.company}
          </span>
        </div>

        <h3 className="text-white font-bold text-xl mb-3 leading-tight">{project.title}</h3>

        <p className="text-white/60 text-sm leading-relaxed mb-5">{project.longDescription}</p>

        {project.impact && (
          <div className="mb-5 px-4 py-3 rounded-xl bg-emerald-500/8 border border-emerald-500/15">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-sm" aria-hidden="true">📈</span>
              <span className="text-emerald-400 text-sm font-semibold">{project.impact}</span>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}06 0%, transparent 60%)` }}
        aria-hidden="true"
      />
    </motion.article>
  )
}
