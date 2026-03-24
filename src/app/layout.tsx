import type { Metadata } from 'next'
import { Sora, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/constants'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Paul Pacheco',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'CTO', 'AI', 'Intelligence Artificielle', 'Tech for Good', 'EdTech',
    'Engineering Manager', 'Lead Produit IA', 'React', 'Next.js', 'TypeScript',
    'AWS', 'Paul Pacheco', 'startup', 'économie circulaire', 'architecture scalable',
    'Scrum Master',
  ],
  authors: [{ name: 'Paul Pacheco' }],
  creator: 'Paul Pacheco',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Paul Pacheco',
    title: SITE_TITLE,
    description: 'CTO passionné de code, d\'IA et d\'impact positif. Je transforme des idées en produits qui changent des vies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Paul Pacheco — CTO & AI Practitioner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: 'CTO passionné de code, d\'IA et d\'impact positif.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Paul Pacheco',
  jobTitle: 'Chief Technology Officer & AI Practitioner',
  url: SITE_URL,
  sameAs: [
    'https://www.linkedin.com/in/pacheco-paul/',
    'https://github.com/polofoufou',
  ],
  knowsAbout: [
    'Artificial Intelligence', 'EdTech', 'Tech for Good',
    'React', 'Next.js', 'TypeScript', 'AWS', 'Engineering Management',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Disponible — Avr. 2026',
  },
  alumniOf: [
    { '@type': 'Organization', name: 'Les Sherpas' },
    { '@type': 'Organization', name: 'PHENIX' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${sora.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#060e1a] text-white antialiased selection:bg-blue-500/30 selection:text-blue-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
