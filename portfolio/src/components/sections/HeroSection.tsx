'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Sparkles } from 'lucide-react'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { Reveal } from '@/components/animations/Reveal'
import { HeroBackground } from '@/components/three/HeroBackground'
import { portfolio } from '@/data'

export function HeroSection() {
  const { person, hero } = portfolio

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      <div className="section-shell relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-blue-300">
            <Sparkles size={14} />
            {hero.statusPill}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-muted-foreground">
            {hero.headlinePrefix}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            <span className="text-gradient">{person.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">{person.title}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300/90 md:text-lg">
            {hero.description}
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton onClick={() => scrollTo(hero.primaryCta.targetId)}>
            {hero.primaryCta.label}
          </MagneticButton>
          <button
            onClick={() => scrollTo(hero.secondaryCta.targetId)}
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-foreground transition hover:border-blue-400/40 hover:bg-white/5"
          >
            {hero.secondaryCta.label}
          </button>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-3">
          {hero.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
            >
              {badge}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.35} className="mt-12 grid gap-4 sm:grid-cols-3">
          {hero.proofPoints.map((point) => (
            <div key={point.label} className="rounded-2xl p-4 glass-panel">
              <div className="text-2xl font-semibold text-gradient">{point.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{point.label}</div>
            </div>
          ))}
        </Reveal>

        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Scroll
            <ArrowDown size={16} />
          </button>
        </motion.div>

        <div className="absolute top-28 right-0 hidden flex-col gap-3 lg:flex">
          <a
            href={person.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-3 text-muted-foreground transition hover:border-blue-400/40 hover:text-foreground"
          >
            <Github size={18} />
          </a>
          <a
            href={person.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-3 text-muted-foreground transition hover:border-blue-400/40 hover:text-foreground"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
