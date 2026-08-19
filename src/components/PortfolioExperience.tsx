'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { GradientBackground } from '@/components/background/GradientBackground'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { PageLoader, TopProgressBar } from '@/components/layout/PageLoader'
import { SmoothScrollProvider } from '@/components/layout/SmoothScroll'
import { AboutSection } from '@/components/sections/AboutSection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'

export function PortfolioExperience() {
  const [loading, setLoading] = useState(true)

  return (
    <SmoothScrollProvider>
      <AnimatePresence>{loading && <PageLoader onComplete={() => setLoading(false)} />}</AnimatePresence>
      {!loading && <TopProgressBar />}
      <GradientBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
