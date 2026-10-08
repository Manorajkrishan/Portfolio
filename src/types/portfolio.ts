export interface NavItem {
  id: string
  label: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveUrl: string | null
  githubUrl: string
  metrics?: {
    accuracy?: string
    stack?: string
    impact?: string
  }
}

export interface ExperienceItem {
  type: 'work' | 'education'
  title: string
  org: string
  date: string
  bullets: string[]
}

export interface Skill {
  name: string
  icon: string
  color: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Certification {
  title: string
  issuer: string
  date: string
  url: string | null
  tags: string[]
}

export interface Stat {
  value: string
  label: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}
