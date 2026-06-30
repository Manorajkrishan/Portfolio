'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '@/components/animations/Reveal'
import { portfolio } from '@/data'
import { cn } from '@/lib/utils'

export function ExperienceSection() {
  const { experience } = portfolio
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 70%', 'end 30%'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="section-shell relative mx-auto max-w-6xl">
      <Reveal>
        <p className="section-eyebrow">Professional Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Cinematic career timeline</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{experience.subtitle}</p>
      </Reveal>

      <div ref={containerRef} className="relative mt-12 space-y-8">
        <div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 md:left-1/2">
          <motion.div className="w-full origin-top bg-gradient-to-b from-blue-500 to-violet-500" style={{ height: lineHeight }} />
        </div>

        {experience.items.slice(0, 6).map((item, index) => (
          <Reveal key={`${item.title}-${item.date}`} delay={index * 0.04}>
            <motion.article
              whileHover={{ scale: 1.01 }}
              className={cn(
                'relative grid gap-6 md:grid-cols-2',
                index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
              )}
            >
              <div
                className={cn(
                  'absolute top-6 left-4 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-400 bg-[#030712] md:left-1/2',
                  index % 2 === 0 ? 'md:left-1/2' : 'md:left-1/2'
                )}
              />

              <div className={cn('md:col-start-auto', index % 2 === 1 && 'md:col-start-2')}>
                <div className="rounded-2xl p-6 glass-panel">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-blue-300">
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-blue-300">{item.org}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
