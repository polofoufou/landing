'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  activeSection: string
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-72 bg-[#0A1628] border-l border-white/10 z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="text-white font-bold text-lg">Paul Pacheco</span>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 p-6" aria-label="Navigation mobile">
              <ul className="space-y-2">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        activeSection === item.href.replace('#', '')
                          ? 'text-white bg-blue-600/20 border border-blue-500/30'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="p-6 border-t border-white/10">
              <Link
                href="#contact"
                onClick={onClose}
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors"
              >
                Me contacter
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
