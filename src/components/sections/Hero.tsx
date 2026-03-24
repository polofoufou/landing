'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Code2, ExternalLink, Mail } from 'lucide-react'
import { GradientText } from '@/components/ui/GradientText'
import { Badge } from '@/components/ui/Badge'
import { GITHUB_URL, LINKEDIN_URL, CONTACT_EMAIL } from '@/lib/constants'

const badges = ['EdTech', 'Tech for Good', 'IA', 'Économie Circulaire', 'Impact']

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#060e1a]" aria-hidden="true">
        {/* Gradient mesh */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium tracking-wide">
                Disponible pour de nouveaux défis — Avr. 2026
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              <GradientText>Paul Pacheco</GradientText>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/70 font-medium mb-2"
            >
              CTO · IA praticien · Bâtisseur de produits à impact
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/50 mb-8 max-w-lg"
            >
              Je transforme des idées en produits qui changent des vies.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {badges.map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                >
                  <Badge variant="glow">{badge}</Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all shadow-lg shadow-blue-600/25"
              >
                Découvrir mon parcours
                <ArrowDown className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border border-white/20 hover:border-white/40 text-white hover:bg-white/5 rounded-xl transition-all"
              >
                Me contacter
                <Mail className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn (nouvel onglet)"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="GitHub (nouvel onglet)"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white/40 hover:text-emerald-400 transition-colors"
                aria-label="Envoyer un email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <span className="text-white/20 text-sm">Paris, France</span>
            </motion.div>
          </div>

          {/* Visual — avatar + geometric decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-blue-500/20"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ margin: '-20px' }}
              />
              {/* Middle ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-emerald-500/15"
                animate={{ scale: [1, 1.03, 1], rotate: [360, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                style={{ margin: '-40px' }}
              />

              {/* Avatar */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-600/30 to-emerald-600/20 border border-white/10 flex items-center justify-center overflow-hidden relative">
                <div className="text-center">
                  <div className="text-7xl font-bold bg-gradient-to-br from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    PP
                  </div>
                  <div className="text-white/30 text-sm mt-2">Paul Pacheco</div>
                </div>
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full" />
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'TypeScript', top: '10%', right: '-20%', delay: 1 },
                { label: 'Next.js', bottom: '20%', left: '-20%', delay: 1.3 },
                { label: 'AWS', top: '50%', right: '-25%', delay: 1.6 },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="absolute px-3 py-1.5 bg-[#0A1628] border border-white/10 rounded-lg text-xs font-mono text-white/70 shadow-xl"
                  style={{ top: item.top, right: item.right, bottom: item.bottom, left: item.left }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: item.delay, type: 'spring' }}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          aria-hidden="true"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
