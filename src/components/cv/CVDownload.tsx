'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CVDownload() {
  return (
    <a
      href="/paul-pacheco-cv.pdf"
      download="Paul-Pacheco-CV.pdf"
      aria-label="Télécharger le CV de Paul Pacheco en PDF"
    >
      <Button variant="secondary" className="gap-2">
        <Download className="w-4 h-4" />
        Télécharger le CV (PDF)
      </Button>
    </a>
  )
}
