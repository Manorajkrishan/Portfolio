'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Reveal, StaggerContainer, staggerItem } from '@/components/animations/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { portfolio } from '@/data'

export function AISection() {
  const aiProjects = portfolio.projects.items
    .filter((item) => item.category === 'ai' || item.category === 'research')
    .slice(0, 4)

  return (
    <section id="ai" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader
          index="04"
          label="AI & Research"
          title="Applied machine learning, from pipeline to product"
          description="Fraud detection, compliance automation, forecasting, and adaptive systems — engineered with measurable outcomes and production delivery in mind."
        />
      </Reveal>

      <div className="studio-card overflow-hidden">
        <div className="grid divide-y-2 divide-border md:grid-cols-6 md:divide-x-2 md:divide-y-0">
          {portfolio.aiPipelineSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="p-4"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">0{index + 1}</p>
              <p className="text-display mt-2 text-sm font-bold">{step.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Inference', value: 'Real-time scoring' },
          { label: 'Accuracy', value: 'Up to 95.1%' },
          { label: 'Stacks', value: 'TF · sklearn · ML.NET' },
          { label: 'Delivery', value: 'API + dashboards' },
        ].map((item) => (
          <Reveal key={item.label}>
            <div className="border-2 border-border bg-secondary/50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">{item.label}</p>
              <p className="mt-1 text-sm font-semibold">{item.value}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-2">
        {aiProjects.map((project) => (
          <motion.a
            key={project.id}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            variants={staggerItem}
            className="studio-card group block p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">{project.category}</p>
                <h3 className="text-display mt-2 text-lg font-bold">{project.title}</h3>
              </div>
              <ArrowRight size={18} className="shrink-0 text-accent transition group-hover:translate-x-1" />
            </div>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          </motion.a>
        ))}
      </StaggerContainer>
    </section>
  )
}
