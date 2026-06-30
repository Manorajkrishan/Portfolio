'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Reveal } from '@/components/animations/Reveal'
import { portfolio } from '@/data'
import { cn } from '@/lib/utils'

const featuredIds = [24, 1, 2, 4, 6, 10, 23, 20]

export function ProjectsSection() {
  const { projects } = portfolio
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filtered = useMemo(() => {
    const featured = projects.items.filter((item) => featuredIds.includes(item.id))
    if (activeCategory === 'all') return featured
    return featured.filter((item) => item.category === activeCategory)
  }, [activeCategory, projects.items])

  return (
    <section id="projects" className="section-shell relative mx-auto max-w-6xl">
      <Reveal>
        <p className="section-eyebrow">Featured Projects</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Premium product showcases</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{projects.subtitle}</p>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2">
        {projects.categories.slice(0, 6).map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={cn(
              'rounded-full px-4 py-2 text-sm transition',
              activeCategory === category.key
                ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white'
                : 'border border-white/10 text-muted-foreground hover:text-foreground'
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {filtered.map((project, index) => {
          const expanded = expandedId === project.id
          return (
            <Reveal key={project.id} delay={index * 0.05}>
              <motion.article
                layout
                onClick={() => setExpandedId(expanded ? null : project.id)}
                onMouseMove={(event) => {
                  const card = event.currentTarget
                  const rect = card.getBoundingClientRect()
                  const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -8
                  const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 8
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                }}
                className={cn(
                  'group cursor-pointer overflow-hidden rounded-3xl transition-transform duration-300 glass-panel',
                  expanded && 'lg:col-span-2'
                )}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-blue-200">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className={cn('mt-3 text-sm leading-relaxed text-muted-foreground', !expanded && 'line-clamp-3')}>
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, expanded ? undefined : 5).map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-5 grid gap-3 sm:grid-cols-3"
                    >
                      {[
                        { label: 'Architecture', value: project.technologies.slice(0, 3).join(' · ') },
                        { label: 'Category', value: project.category },
                        { label: 'Delivery', value: project.liveUrl ? 'Live demo available' : 'GitHub repository' },
                      ].map((metric) => (
                        <div key={metric.label} className="rounded-xl bg-white/5 p-3">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-blue-300">{metric.label}</p>
                          <p className="mt-1 text-sm text-foreground">{metric.value}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-blue-400/40"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm text-white"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-10 text-center">
        <a
          href={projects.allProjectsCta.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm transition hover:border-blue-400/40"
        >
          {projects.allProjectsCta.label}
        </a>
      </Reveal>
    </section>
  )
}
