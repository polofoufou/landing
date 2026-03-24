import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Impact } from '@/components/sections/Impact'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { WhyMe } from '@/components/sections/WhyMe'
import { Projects } from '@/components/sections/Projects'
import { Talks } from '@/components/sections/Talks'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Impact />
        <About />
        <Experience />
        <Skills />
        <WhyMe />
        <Projects />
        <Talks />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
