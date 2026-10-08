'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Reveal } from '@/components/animations/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { portfolio } from '@/data'
import { cn } from '@/lib/utils'

export function SkillsSection() {
  const { skills } = portfolio
  const [activeCategory, setActiveCategory] = useState(skills.categories[0]?.title ?? '')
  const activeSkills = useMemo(
    () => skills.categories.find((c) => c.title === activeCategory)?.skills ?? [],
    [activeCategory, skills.categories]
  )

  return (
    <section id="skills" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader title="Skills & Technologies" subtitle={skills.subtitle} />
      </Reveal>

      <div className="flex flex-wrap justify-center gap-2">
        {skills.categories.map((category) => (
          <button
            key={category.title}
            onClick={() => setActiveCategory(category.title)}
            className={cn('chip', activeCategory === category.title && 'chip-active')}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {activeSkills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 0.02}>
            <div className="glass-card flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:-translate-y-1">
              <div className="relative h-8 w-8">
                <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
              </div>
              <span className="text-sm font-semibold">{skill.name}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="glass-card rounded-2xl border-l-4 border-l-teal-400 p-6">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">{skills.summaryHeading}</p>
          <p className="mt-3 text-muted-foreground">{skills.summary}</p>
        </div>
      </Reveal>
    </section>
  )
}
