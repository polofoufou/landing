'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/lib/data'

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort()
const filterOptions = ['Tous', ...allTags]

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const filtered =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <div>
      {/* Filter bar */}
      <div
        className="flex flex-wrap gap-2 mb-10"
        role="group"
        aria-label="Filtrer les projets"
      >
        {filterOptions.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeFilter === tag
                ? 'bg-blue-600 text-white'
                : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
            aria-pressed={activeFilter === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-white/40">
          Aucun projet pour ce filtre.
        </div>
      )}
    </div>
  )
}
