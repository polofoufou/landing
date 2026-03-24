'use client'

import { useEffect, useState, useRef } from 'react'

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  isInView: boolean
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2000,
  suffix = '',
  prefix = '',
  isInView,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const range = to - from

    const easeOutQuad = (t: number) => t * (2 - t)

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuad(progress)
      setCount(Math.round(from + range * easedProgress))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, from, to, duration])

  const formatCount = (n: number): string => {
    if (n >= 1_000_000) return `${Math.round(n / 1_000_000)}M`
    if (n >= 1_000) return `${Math.round(n / 1_000)}k`
    return n.toString()
  }

  return (
    <span>
      {prefix}{formatCount(count)}{suffix}
    </span>
  )
}
