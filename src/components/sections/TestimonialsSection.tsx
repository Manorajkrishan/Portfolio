'use client'

import { Reveal } from '@/components/animations/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { portfolio } from '@/data'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader title="What People Say" subtitle="Feedback from teams and mentors I've worked with" />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {portfolio.testimonials.map((item, index) => (
          <Reveal key={item.author} delay={index * 0.06}>
            <blockquote className="glass-card flex h-full flex-col rounded-2xl p-6 transition hover:-translate-y-1">
              <p className="text-3xl leading-none text-primary">&ldquo;</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.quote}</p>
              <footer className="mt-5 border-t border-border pt-4">
                <p className="font-bold">{item.author}</p>
                <p className="text-xs text-muted-foreground">{item.role} · {item.company}</p>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
