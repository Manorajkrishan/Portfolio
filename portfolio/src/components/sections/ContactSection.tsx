'use client'

import { motion } from 'framer-motion'
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { Reveal } from '@/components/animations/Reveal'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
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
    <section id="contact" className="section-shell mx-auto max-w-6xl">
      <Reveal>
        <SectionHeader index="08" label="Contact" title={contact.subtitle} />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="studio-card h-full p-6">
            <div className="inline-flex items-center gap-2 border-2 border-border bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
              <span className="h-2 w-2 bg-accent" />
              Open to remote opportunities
            </div>

            <div className="mt-8 space-y-4 text-sm">
              <p className="flex items-center gap-3 font-medium">
                <MapPin size={16} className="text-accent" /> {person.location}
              </p>
              <button onClick={copyEmail} className="flex items-center gap-3 font-medium transition hover:text-accent">
                <Mail size={16} className="text-accent" />
                <span>{person.email}</span>
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
              <a href={`tel:${person.phoneE164}`} className="flex items-center gap-3 font-medium transition hover:text-accent">
                <Phone size={16} className="text-accent" /> {person.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              <a href={person.links.github} target="_blank" rel="noreferrer" className="studio-card p-3">
                <Github size={18} />
              </a>
              <a href={person.links.linkedin} target="_blank" rel="noreferrer" className="studio-card p-3">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form onSubmit={onSubmit} className="studio-card p-6">
            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center border-2 border-border bg-secondary">
                  <Check size={24} className="text-accent" />
                </div>
                <h3 className="text-display mt-4 text-xl font-bold">Thanks for reaching out</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Your message is ready — connect via email directly or wire this form to your backend.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em]">Name</span>
                  <input required className="w-full border-2 border-border bg-background px-4 py-3 outline-none focus:border-accent" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em]">Email</span>
                  <input type="email" required className="w-full border-2 border-border bg-background px-4 py-3 outline-none focus:border-accent" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em]">Message</span>
                  <textarea required rows={5} className="w-full border-2 border-border bg-background px-4 py-3 outline-none focus:border-accent" />
                </label>
                <Button type="submit">Send Message</Button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
