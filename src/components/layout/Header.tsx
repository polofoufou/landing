'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { NAV_ITEMS } from '@/lib/constants'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { MobileMenu } from './MobileMenu'
import { cn } from '@/lib/utils'

const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''))

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const activeSection = useScrollSpy(sectionIds)
  const { scrollY } = useScroll()

  const headerOpacity = useTransform(scrollY, [0, 100], [0.0, 1])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 12])

  useEffect(() => setMounted(true), [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Aller au contenu principal
      </a>

      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          'border-b border-white/0'
        )}
        style={{
          backgroundColor: `rgba(10, 22, 40, ${headerOpacity.get()})`,
          backdropFilter: `blur(${headerBlur.get()}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2"
              aria-label="Paul Pacheco — Accueil"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                PP
              </div>
              <span className="hidden sm:block text-white font-semibold text-sm">
                Paul Pacheco
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}

              <Link
                href="#contact"
                className="hidden md:flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all"
              >
                Contact
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Ouvrir le menu"
                aria-expanded={isMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  )
}
