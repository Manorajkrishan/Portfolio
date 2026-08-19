'use client'

import Image from 'next/image'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/animations/Reveal'
import { portfolio } from '@/data'

export function HeroSection() {
  const { person, hero } = portfolio

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="section-shell mx-auto flex min-h-screen max-w-6xl flex-col justify-center pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
              {hero.statusPill}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-display mt-6 text-4xl font-bold leading-tight md:text-6xl">
              {hero.headlinePrefix}{' '}
              <span className="text-gradient">{person.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-xl font-semibold text-primary md:text-2xl">{person.title}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{hero.description}</p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollTo(hero.primaryCta.targetId)} className="btn-primary">
              {hero.primaryCta.label} <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo(hero.secondaryCta.targetId)} className="btn-outline">
              <Mail size={16} /> {hero.secondaryCta.label}
            </button>
            {hero.resumeUrl && (
              <a href={hero.resumeUrl} className="btn-outline" target="_blank" rel="noreferrer">
                <Download size={16} /> View CV
              </a>
            )}
          </Reveal>

          <Reveal delay={0.25} className="mt-8 flex gap-3">
            <a href={person.links.github} target="_blank" rel="noreferrer" className="btn-outline !px-3">
              <Github size={18} />
            </a>
            <a href={person.links.linkedin} target="_blank" rel="noreferrer" className="btn-outline !px-3">
              <Linkedin size={18} />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 via-teal-400/20 to-sky-400/30 blur-2xl" />
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-3">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
                <Image
                  src={person.image.src}
                  alt={person.image.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = person.image.fallback
                  }}
                />
              </div>
              <motion.div
                className="absolute -right-2 -bottom-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-xs text-muted-foreground">Currently</p>
                <p className="text-sm font-bold">Building AI products</p>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {hero.proofPoints.map((point, i) => (
          <Reveal key={point.label} delay={0.1 + i * 0.05}>
            <div className="stat-card">
              <p className="text-3xl font-bold text-gradient">{point.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{point.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
