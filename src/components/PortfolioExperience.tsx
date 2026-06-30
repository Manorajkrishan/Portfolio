'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { GridBackground } from '@/components/background/GridBackground'
import { Footer } from '@/components/layout/Footer'
import { Marquee } from '@/components/layout/Marquee'
import { Navbar } from '@/components/layout/Navbar'
import { PageLoader } from '@/components/layout/PageLoader'
import { SmoothScrollProvider } from '@/components/layout/SmoothScroll'
import { AboutSection } from '@/components/sections/AboutSection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { AISection } from '@/components/sections/AISection'
import { ContactSection } from '@/components/sections/ContactSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

export function PortfolioExperience() {
  const [loading, setLoading] = useState(true)

  return (
    <SmoothScrollProvider>
      <AnimatePresence>{loading && <PageLoader onComplete={() => setLoading(false)} />}</AnimatePresence>
      <GridBackground />
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AISection />
        <ExperienceSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
