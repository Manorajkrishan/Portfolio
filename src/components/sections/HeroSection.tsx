'use client'

import Image from 'next/image'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { Reveal } from '@/components/animations/Reveal'
import { Button } from '@/components/ui/Button'
import { portfolio } from '@/data'

export function HeroSection() {
  const { person, hero } = portfolio

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="section-shell mx-auto max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="inline-block border-2 border-border bg-card px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] shadow-[3px_3px_0_var(--shadow-color)]">
              {hero.statusPill}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-display mt-8 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              {hero.headlinePrefix}
              <br />
              <span className="text-accent">{person.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg font-medium md:text-xl">{person.title}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{hero.description}</p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => scrollTo(hero.primaryCta.targetId)}>{hero.primaryCta.label}</Button>
            <Button variant="ghost" onClick={() => scrollTo(hero.secondaryCta.targetId)}>
              {hero.secondaryCta.label}
            </Button>
          </Reveal>

          <Reveal delay={0.25} className="mt-8 flex gap-3">
            <a
              href={person.links.github}
              target="_blank"
              rel="noreferrer"
              className="studio-card inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={person.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="studio-card inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
          <Reveal delay={0.1} className="sm:col-span-2">
            <div className="studio-card relative aspect-[5/4] overflow-hidden">
              <Image
                src={person.image.src}
                alt={person.image.alt}
                fill
                className="object-cover grayscale contrast-110"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
                onError={(event) => {
                  const target = event.target as HTMLImageElement
                  target.src = person.image.fallback
                }}
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </Reveal>

          {hero.proofPoints.map((point, index) => (
            <Reveal key={point.label} delay={0.15 + index * 0.05}>
              <div className="studio-card flex h-full min-h-[120px] flex-col justify-between p-5">
                <span className="text-display text-3xl font-extrabold text-accent">{point.value}</span>
                <p className="text-sm font-medium leading-snug text-muted-foreground">{point.label}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3} className="sm:col-span-2">
            <button
              onClick={() => scrollTo('projects')}
              className="studio-card flex w-full items-center justify-between p-5 text-left"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">See selected work</span>
              <ArrowUpRight size={20} className="text-accent" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
