'use client'

import { GradientBackground } from '@/components/background/GradientBackground'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { TopProgressBar } from '@/components/layout/PageLoader'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { SmoothScrollProvider } from '@/components/layout/SmoothScroll'
import { AboutSection } from '@/components/sections/AboutSection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

export function PortfolioExperience() {
  return (
    <SmoothScrollProvider>
      <a href="#main-content" className="skip-link btn-primary">Skip to content</a>
      <TopProgressBar />
      <GradientBackground />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </SmoothScrollProvider>
  )
}
