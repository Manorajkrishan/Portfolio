'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Users, Zap } from 'lucide-react'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { Reveal, StaggerContainer, staggerItem } from '@/components/animations/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { portfolio } from '@/data'

const iconMap = { Code, Palette, Zap, Users }

export function AboutSection() {
  const { about } = portfolio

  return (
    <section id="about" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader index="01" label="About" title={about.heading} />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-2">
        <StaggerContainer className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <motion.p key={paragraph} variants={staggerItem} className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {paragraph}
            </motion.p>
          ))}
        </StaggerContainer>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {about.stats.map((stat, index) => {
            const numeric = Number.parseInt(stat.value, 10)
            const hasCounter = !Number.isNaN(numeric)

            return (
              <Reveal key={stat.label} delay={index * 0.05}>
                <div className="studio-card p-5">
                  <p className="text-display text-3xl font-extrabold text-accent">
                    {hasCounter ? (
                      <AnimatedCounter value={numeric} suffix={stat.value.replace(String(numeric), '')} />
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {about.features.map((feature, index) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Code
          return (
            <Reveal key={feature.title} delay={index * 0.05}>
              <article className="studio-card flex gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-border bg-secondary text-accent">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-display text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
