import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'outline' | 'glow'
  className?: string
  color?: string
}

export function Badge({ children, variant = 'default', className, color }: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-white/80 border border-white/10',
    accent: 'bg-blue-600/20 text-blue-300 border border-blue-500/30',
    outline: 'border border-emerald-500/50 text-emerald-400',
    glow: 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
      style={color ? { borderColor: `${color}40`, color, backgroundColor: `${color}15` } : undefined}
    >
      {children}
    </span>
  )
}
