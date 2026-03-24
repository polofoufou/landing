import Link from 'next/link'
import { Code2, ExternalLink, Mail } from 'lucide-react'
import { GITHUB_URL, LINKEDIN_URL, CONTACT_EMAIL, NAV_ITEMS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#060e1a]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                PP
              </div>
              <span className="text-white font-semibold">Paul Pacheco</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              CTO · IA praticien · Bâtisseur de produits à impact.
              <br />
              Paris, France.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/80 font-semibold text-sm mb-4">Navigation</h3>
            <nav aria-label="Navigation pied de page">
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/portfolio" className="text-white/50 hover:text-white text-sm transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/cv" className="text-white/50 hover:text-white text-sm transition-colors">
                    CV
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white/80 font-semibold text-sm mb-4">Retrouvez-moi</h3>
            <div className="flex flex-col gap-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-blue-400 text-sm transition-colors"
                aria-label="LinkedIn de Paul Pacheco (nouvel onglet)"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
                aria-label="GitHub de Paul Pacheco (nouvel onglet)"
              >
                <Code2 className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-white/50 hover:text-emerald-400 text-sm transition-colors"
                aria-label="Envoyer un email à Paul Pacheco"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {currentYear} Paul Pacheco. Construit avec ❤️ et beaucoup de ☕
          </p>
          <p className="text-white/20 text-xs">
            Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
