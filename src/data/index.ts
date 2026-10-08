// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { portfolio as rawPortfolio } from './portfolio.js'
import { aiPipelineSteps, globalStats, softSkills, testimonials } from './extras'

export const portfolio = {
  ...rawPortfolio,
  nav: [
    { id: 'projects', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
  testimonials,
  softSkills,
  aiPipelineSteps,
  globalStats,
}

export type PortfolioData = typeof portfolio
