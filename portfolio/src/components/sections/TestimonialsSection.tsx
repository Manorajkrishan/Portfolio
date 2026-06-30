'use client'

import { Reveal } from '@/components/animations/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { portfolio } from '@/data'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader index="07" label="Testimonials" title="What collaborators say" />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {portfolio.testimonials.map((item, index) => (
          <Reveal key={item.author} delay={index * 0.05}>
            <blockquote className="studio-card flex h-full flex-col p-6">
              <p className="text-display text-5xl leading-none text-accent">&ldquo;</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.quote}</p>
              <footer className="mt-6 border-t-2 border-border pt-4">
                <p className="text-sm font-bold">{item.author}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.role} · {item.company}
                </p>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
