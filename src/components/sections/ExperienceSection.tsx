'use client'

import { Briefcase } from 'lucide-react'
import { Reveal } from '@/components/animations/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { portfolio } from '@/data'

export function ExperienceSection() {
  const { experience } = portfolio

  return (
    <section id="experience" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader title="Work Experience" subtitle={experience.subtitle} />
      </Reveal>

      <div className="space-y-5">
        {experience.items.slice(0, 6).map((item, index) => (
          <Reveal key={`${item.title}-${item.date}`} delay={index * 0.04}>
            <article className="glass-card rounded-2xl p-6 transition hover:-translate-y-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-teal-400/20 text-primary">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-display text-lg font-bold">{item.title}</h3>
                    <p className="mt-1 font-semibold text-primary">{item.org}</p>
                  </div>
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">{item.date}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
