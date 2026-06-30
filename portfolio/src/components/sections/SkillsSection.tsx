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
    () => skills.categories.find((category) => category.title === activeCategory)?.skills ?? [],
    [activeCategory, skills.categories]
  )

  return (
    <section id="skills" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader index="02" label="Skills" title="Tools I use to ship reliable products" description={skills.subtitle} />
      </Reveal>

      <div className="flex flex-wrap gap-2">
        {skills.categories.map((category) => (
          <button
            key={category.title}
            onClick={() => setActiveCategory(category.title)}
            className={cn(
              'border-2 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition',
              activeCategory === category.title
                ? 'border-border bg-primary text-primary-foreground shadow-[3px_3px_0_var(--shadow-color)]'
                : 'border-border bg-card text-muted-foreground hover:text-foreground'
            )}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {activeSkills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 0.02}>
            <div className="studio-card flex flex-col items-center gap-3 p-4 text-center">
              <div className="relative h-9 w-9">
                <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
              </div>
              <span className="text-xs font-semibold leading-tight">{skill.name}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <div className="studio-card border-l-8 border-l-accent p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{skills.summaryHeading}</p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{skills.summary}</p>
        </div>
      </Reveal>
    </section>
  )
}
