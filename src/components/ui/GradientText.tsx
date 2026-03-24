'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export function GradientText({ children, className, animate = true }: GradientTextProps) {
  return (
    <motion.span
      className={cn(
        'bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent',
        animate && 'bg-[length:200%_auto]',
        className
      )}
      animate={animate ? { backgroundPosition: ['0% center', '200% center'] } : undefined}
      transition={animate ? { duration: 5, repeat: Infinity, ease: 'linear' } : undefined}
    >
      {children}
    </motion.span>
  )
}
