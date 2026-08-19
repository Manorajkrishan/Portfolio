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
        <SectionHeader title="About Me" subtitle="Get to know me better" />
      </Reveal>

      <div className="glass-card rounded-3xl p-8 md:p-10">
        <StaggerContainer className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <motion.p key={paragraph} variants={staggerItem} className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {paragraph}
            </motion.p>
          ))}
        </StaggerContainer>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {about.stats.map((stat, index) => {
            const numeric = Number.parseInt(stat.value, 10)
            const hasCounter = !Number.isNaN(numeric)
            return (
              <Reveal key={stat.label} delay={index * 0.05}>
                <div className="stat-card">
                  <p className="text-3xl font-bold text-gradient">
                    {hasCounter ? (
                      <AnimatedCounter value={numeric} suffix={stat.value.replace(String(numeric), '')} />
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {about.features.map((feature, index) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Code
          return (
            <Reveal key={feature.title} delay={index * 0.05}>
              <div className="glass-card rounded-2xl p-5 transition hover:-translate-y-1">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-indigo-500/15 to-teal-400/15 p-3 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
