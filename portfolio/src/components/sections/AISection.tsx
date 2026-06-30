'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Database, LineChart, Rocket, Workflow } from 'lucide-react'
import { Reveal, StaggerContainer, staggerItem } from '@/components/animations/Reveal'
import { portfolio } from '@/data'

const icons = [Database, Workflow, BrainCircuit, LineChart, Rocket, Workflow]

export function AISection() {
  const aiProjects = portfolio.projects.items.filter((item) => item.category === 'ai' || item.category === 'research').slice(0, 4)

  return (
    <section id="ai" className="section-shell relative mx-auto max-w-6xl overflow-hidden">
      <Reveal>
        <p className="section-eyebrow">AI & Research</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Neural systems in motion</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Live architecture visualizations, inference pipelines, and research-grade ML products built across fraud detection,
          compliance, forecasting, and adaptive systems.
        </p>
      </Reveal>

      <div className="relative mt-12 rounded-3xl p-6 md:p-8 glass-panel">
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <motion.div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 35%), radial-gradient(circle at 80% 30%, rgba(168,85,247,0.22), transparent 30%)',
            }}
            animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="relative grid gap-4 md:grid-cols-6">
          {portfolio.aiPipelineSteps.map((step, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur"
              >
                <div className="mb-3 inline-flex rounded-lg bg-blue-500/10 p-2 text-blue-300">
                  <Icon size={16} />
                </div>
                <p className="text-sm font-medium">{step.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{step.detail}</p>
                {index < portfolio.aiPipelineSteps.length - 1 && (
                  <div className="absolute top-1/2 right-[-8px] hidden h-px w-4 bg-gradient-to-r from-blue-500/50 to-violet-500/50 md:block" />
                )}
              </motion.div>
            )
          })}
        </div>

        <div className="relative mt-8 grid gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 md:grid-cols-4">
          {[
            { label: 'Inference', value: 'Real-time scoring' },
            { label: 'Accuracy', value: 'Up to 95.1%' },
            { label: 'Stacks', value: 'TF · sklearn · ML.NET' },
            { label: 'Delivery', value: 'API + dashboards' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[11px] uppercase tracking-[0.18em] text-blue-300">{item.label}</p>
              <p className="mt-1 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2">
        {aiProjects.map((project) => (
          <motion.a
            key={project.id}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            variants={staggerItem}
            whileHover={{ y: -6 }}
            className="rounded-2xl p-5 glass-panel"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-violet-300">{project.category}</p>
            <h3 className="mt-2 text-lg font-medium">{project.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{project.description}</p>
          </motion.a>
        ))}
      </StaggerContainer>
    </section>
  )
}
