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
        <SectionHeader index="03" label="Work" title="Selected builds & product experiments" description={projects.subtitle} />
      </Reveal>

      <div className="mb-6 flex flex-wrap gap-2">
        {projects.categories.slice(0, 6).map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={cn(
              'border-2 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em]',
              activeCategory === category.key
                ? 'border-border bg-accent text-accent-foreground shadow-[3px_3px_0_var(--shadow-color)]'
                : 'border-border bg-card text-muted-foreground'
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="project-rail -mx-4 px-4">
        {filtered.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.04}>
            <article className="studio-card flex h-full flex-col overflow-hidden">
              <div className="relative h-44 border-b-2 border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="420px"
                />
                <span className="absolute top-3 left-3 border-2 border-border bg-background px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em]">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-display text-lg font-bold leading-tight">{project.title}</h3>
                <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="studio-btn flex-1 !px-3 !py-2 !text-xs"
                  >
                    <Github size={14} /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="studio-btn studio-btn-ghost flex-1 !px-3 !py-2 !text-xs"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <a
          href={projects.allProjectsCta.url}
          target="_blank"
          rel="noreferrer"
          className="studio-btn studio-btn-ghost"
        >
          {projects.allProjectsCta.label}
        </a>
      </Reveal>
    </section>
  )
}
