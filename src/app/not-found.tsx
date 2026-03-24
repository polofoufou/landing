import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-[#060e1a] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Page introuvable</h1>
          <p className="text-white/60 mb-8">
            Cette page n'existe pas ou a été déplacée. Retournez à l'accueil.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
