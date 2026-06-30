'use client'

import { motion } from 'framer-motion'
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { Reveal } from '@/components/animations/Reveal'
import { portfolio } from '@/data'

export function ContactSection() {
  const { person, contact } = portfolio
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(person.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-shell relative mx-auto max-w-6xl overflow-hidden">
      <Reveal>
        <p className="section-eyebrow">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{contact.subtitle}</h2>
      </Reveal>

      <div className="relative mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-3xl p-6 glass-panel">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{
              background:
                'conic-gradient(from 0deg, rgba(59,130,246,0.35), rgba(168,85,247,0.2), rgba(56,189,248,0.2), rgba(59,130,246,0.35))',
            }}
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for remote opportunities
            </div>

            <div className="mt-8 space-y-4 text-sm">
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={16} /> {person.location}
              </p>
              <button onClick={copyEmail} className="flex items-center gap-3 text-left transition hover:text-foreground">
                <Mail size={16} />
                <span>{person.email}</span>
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
              <a href={`tel:${person.phoneE164}`} className="flex items-center gap-3 text-muted-foreground transition hover:text-foreground">
                <Phone size={16} /> {person.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              <a href={person.links.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-blue-400/40">
                <Github size={18} />
              </a>
              <a href={person.links.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-blue-400/40">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl p-6 glass-panel">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-300">
                <Check size={28} />
              </div>
              <h3 className="mt-4 text-xl font-medium">Message ready to send</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Connect via email directly or wire this form to your preferred backend / FormSubmit endpoint.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-muted-foreground">Name</span>
                <input required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-blue-400/50" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-muted-foreground">Email</span>
                <input type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-blue-400/50" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-muted-foreground">Message</span>
                <textarea required rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-blue-400/50" />
              </label>
              <MagneticButton type="submit">Send Message</MagneticButton>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
