'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Reveal } from '@/components/animations/Reveal'
import { portfolio } from '@/data'
import { cn } from '@/lib/utils'

export function SkillsSection() {
  const { skills } = portfolio
  const [activeCategory, setActiveCategory] = useState(skills.categories[0]?.title ?? '')
  const activeSkills = useMemo(
    () => skills.categories.find((category) => category.title === activeCategory)?.skills ?? [],
    [activeCategory, skills.categories]
  )

  return (
    <section id="skills" className="section-shell relative mx-auto max-w-6xl overflow-hidden">
      <Reveal>
        <p className="section-eyebrow">Technical Expertise</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Interactive skill constellation</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{skills.subtitle}</p>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2">
        {skills.categories.map((category) => (
          <button
            key={category.title}
            onClick={() => setActiveCategory(category.title)}
            className={cn(
              'rounded-full px-4 py-2 text-sm transition',
              activeCategory === category.title
                ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white'
                : 'border border-white/10 text-muted-foreground hover:text-foreground'
            )}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="relative mt-14 flex min-h-[420px] items-center justify-center">
        <motion.div
          className="absolute h-72 w-72 rounded-full border border-blue-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute h-52 w-52 rounded-full border border-violet-500/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 blur-2xl" />

        {activeSkills.map((skill, index) => {
          const angle = (index / activeSkills.length) * Math.PI * 2
          const radius = 150 + (index % 2) * 24
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.div
              key={skill.name}
              className="absolute"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, x, y }}
              transition={{ type: 'spring', stiffness: 120, damping: 14, delay: index * 0.03 }}
              whileHover={{ scale: 1.08, zIndex: 10 }}
            >
              <div className="flex w-28 flex-col items-center gap-2 rounded-2xl p-3 text-center glass-panel">
                <div className="relative h-10 w-10">
                  <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
                </div>
                <span className="text-xs font-medium">{skill.name}</span>
              </div>
            </motion.div>
          )
        })}
      </div>

      <Reveal className="mt-10 rounded-3xl p-6 glass-panel">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">{skills.summaryHeading}</p>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{skills.summary}</p>
      </Reveal>
    </section>
  )
}
