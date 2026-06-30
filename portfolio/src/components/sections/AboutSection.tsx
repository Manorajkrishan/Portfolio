'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code, Palette, Users, Zap } from 'lucide-react'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { Reveal, StaggerContainer, staggerItem } from '@/components/animations/Reveal'
import { portfolio } from '@/data'

const iconMap = {
  Code,
  Palette,
  Zap,
  Users,
}

export function AboutSection() {
  const { about, person } = portfolio

  return (
    <section id="about" className="section-shell relative mx-auto max-w-6xl">
      <Reveal>
        <p className="section-eyebrow">Who I Am</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">{about.heading}</h2>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <StaggerContainer className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <motion.p key={paragraph} variants={staggerItem} className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {paragraph}
            </motion.p>
          ))}
        </StaggerContainer>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl p-1 glass-panel">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-blue-500/20 to-violet-500/20">
              <Image
                src={person.image.src}
                alt={person.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
                onError={(event) => {
                  const target = event.target as HTMLImageElement
                  target.src = person.image.fallback
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {about.stats.map((stat, index) => {
          const numeric = Number.parseInt(stat.value, 10)
          const hasCounter = !Number.isNaN(numeric)

          return (
            <Reveal key={stat.label} delay={index * 0.05}>
              <div className="rounded-2xl p-6 glass-panel">
                <div className="text-3xl font-semibold text-gradient">
                  {hasCounter ? (
                    <AnimatedCounter
                      value={numeric}
                      suffix={stat.value.replace(String(numeric), '')}
                    />
                  ) : (
                    stat.value
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          )
        })}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {about.features.map((feature, index) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Code
          return (
            <Reveal key={feature.title} delay={index * 0.06}>
              <motion.div whileHover={{ y: -6 }} className="h-full rounded-2xl p-5 glass-panel">
                <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
