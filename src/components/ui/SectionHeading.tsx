import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ label, title, description, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3">
          <span className="w-8 h-px bg-emerald-400" />
          {label}
          <span className="w-8 h-px bg-emerald-400" />
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-white/60 max-w-2xl">{description}</p>
      )}
    </div>
  )
}
