'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Reveal } from '@/components/animations/Reveal'
import { portfolio } from '@/data'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell relative mx-auto max-w-6xl">
      <Reveal>
        <p className="section-eyebrow">Testimonials</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Trusted by product teams</h2>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {portfolio.testimonials.map((item, index) => (
          <Reveal key={item.author} delay={index * 0.06}>
            <motion.blockquote
              whileHover={{ y: -6 }}
              className="flex h-full flex-col rounded-2xl p-6 glass-panel"
            >
              <Quote className="text-blue-400" size={20} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-medium">{item.author}</p>
                <p className="text-xs text-muted-foreground">
                  {item.role} · {item.company}
                </p>
              </footer>
            </motion.blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
