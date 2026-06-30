// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { portfolio as rawPortfolio } from './portfolio.js'
import { aiPipelineSteps, globalStats, testimonials } from './extras'

export const portfolio = {
  ...rawPortfolio,
  nav: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'ai', label: 'AI' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ],
  testimonials,
  aiPipelineSteps,
  globalStats,
}

export type PortfolioData = typeof portfolio
