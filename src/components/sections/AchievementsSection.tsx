'use client'

import { Award } from 'lucide-react'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { Reveal } from '@/components/animations/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { portfolio } from '@/data'

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader index="06" label="Achievements" title="Milestones & credentials" />
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.globalStats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.04}>
            <div className="studio-card p-6">
              <p className="text-display text-4xl font-extrabold text-accent">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {portfolio.certifications.items.map((cert, index) => (
          <Reveal key={cert.title} delay={index * 0.03}>
            <article className="studio-card flex gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-border bg-secondary text-accent">
                <Award size={18} />
              </div>
              <div>
                <h3 className="font-bold">{cert.title}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{cert.issuer}</p>
                <p className="mt-1 text-xs text-muted-foreground">{cert.date}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="border border-border px-2 py-0.5 text-[10px] font-medium uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
