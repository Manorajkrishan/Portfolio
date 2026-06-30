'use client'

import { Reveal } from '@/components/animations/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { portfolio } from '@/data'

export function ExperienceSection() {
  const { experience } = portfolio

  return (
    <section id="experience" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader index="05" label="Experience" title="Where I've built and shipped" description={experience.subtitle} />
      </Reveal>

      <div className="space-y-4">
        {experience.items.slice(0, 6).map((item, index) => (
          <Reveal key={`${item.title}-${item.date}`} delay={index * 0.04}>
            <article className="studio-card grid gap-4 border-l-8 border-l-primary p-6 md:grid-cols-[220px_1fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{item.type}</p>
                <p className="mt-2 text-sm font-semibold text-muted-foreground">{item.date}</p>
              </div>
              <div>
                <h3 className="text-display text-xl font-bold">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold">{item.org}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
