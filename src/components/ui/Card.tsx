import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  glow?: boolean
  glowColor?: string
}

export function Card({ className, hover = false, glow = false, glowColor = '#3B82F6', children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm',
        hover && 'transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:-translate-y-1',
        glow && 'hover:shadow-lg',
        className
      )}
      style={glow ? { '--glow-color': glowColor } as React.CSSProperties : undefined}
      {...props}
    >
      {children}
    </div>
  )
}
