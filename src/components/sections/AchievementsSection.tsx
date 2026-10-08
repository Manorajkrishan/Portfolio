'use client'

import { Award, Brain, Sparkles } from 'lucide-react'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { Reveal } from '@/components/animations/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { portfolio } from '@/data'

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader
          title="Certificates & Highlights"
          subtitle="Professional courses and milestones that shaped my engineering journey"
        />
      </Reveal>

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.globalStats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.04}>
            <div className="stat-card">
              <p className="text-3xl font-bold text-gradient">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="glass-card mb-10 rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-br from-indigo-500/20 to-teal-400/20 p-3 text-primary">
            <Brain size={22} />
          </div>
          <div>
            <p className="text-display font-bold">AI & Research Focus</p>
            <p className="text-sm text-muted-foreground">Applied ML across fraud detection, compliance, forecasting & adaptive systems</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {portfolio.aiPipelineSteps.map((step) => (
            <span key={step.label} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
              {step.label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.certifications.items.map((cert, index) => (
          <Reveal key={cert.title} delay={index * 0.03}>
            <article className="glass-card flex gap-4 rounded-2xl p-5 transition hover:-translate-y-1">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-teal-400/20">
                <Award size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold">{cert.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium">
                      <Sparkles size={10} /> {tag}
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
