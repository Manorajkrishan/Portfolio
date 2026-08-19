'use client'

import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Reveal } from '@/components/animations/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { portfolio } from '@/data'
import { cn } from '@/lib/utils'

const featuredIds = [24, 1, 2, 4, 6, 10, 23, 20]

export function ProjectsSection() {
  const { projects } = portfolio
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    const featured = projects.items.filter((item) => featuredIds.includes(item.id))
    if (activeCategory === 'all') return featured
    return featured.filter((item) => item.category === activeCategory)
  }, [activeCategory, projects.items])

  return (
    <section id="projects" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader title="My Projects" subtitle={projects.subtitle} />
      </Reveal>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {projects.categories.slice(0, 6).map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={cn('chip', activeCategory === category.key && 'chip-active')}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.04}>
            <article className="glass-card group overflow-hidden rounded-2xl transition hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 capitalize">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-display text-xl font-bold">{project.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline flex-1 !py-2 !text-xs"
                  >
                    <Github size={14} /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary flex-1 !py-2 !text-xs"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a href={projects.allProjectsCta.url} target="_blank" rel="noreferrer" className="btn-outline">
          {projects.allProjectsCta.label}
        </a>
      </Reveal>
    </section>
  )
}
