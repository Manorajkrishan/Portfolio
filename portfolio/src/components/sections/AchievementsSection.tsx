'use client'

import { Award } from 'lucide-react'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { Reveal } from '@/components/animations/Reveal'
import { portfolio } from '@/data'

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell relative mx-auto max-w-6xl">
      <Reveal>
        <p className="section-eyebrow">Achievements</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Impact in numbers</h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.globalStats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <div className="rounded-2xl p-6 glass-panel">
              <div className="text-4xl font-semibold text-gradient">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {portfolio.certifications.items.map((cert, index) => (
          <Reveal key={cert.title} delay={index * 0.04}>
            <article className="flex gap-4 rounded-2xl p-5 glass-panel">
              <div className="rounded-xl bg-violet-500/10 p-3 text-violet-300">
                <Award size={20} />
              </div>
              <div>
                <h3 className="font-medium">{cert.title}</h3>
                <p className="mt-1 text-sm text-blue-300">{cert.issuer}</p>
                <p className="mt-1 text-xs text-muted-foreground">{cert.date}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-slate-300">
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
