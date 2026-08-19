'use client'

import { motion } from 'framer-motion'
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { Reveal } from '@/components/animations/Reveal'
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
        <SectionHeader title="Get In Touch" subtitle={contact.subtitle} />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glass-card h-full rounded-3xl p-6">
            <p className="text-display text-xl font-bold">Let&apos;s talk about everything!</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Don&apos;t like forms? Send me an email. I&apos;m always excited to discuss new opportunities and interesting projects.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                <span>{person.location}</span>
              </p>
              <button onClick={copyEmail} className="flex items-center gap-3 transition hover:text-primary">
                <Mail size={18} className="text-primary" />
                <span>{person.email}</span>
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
              <a href={`tel:${person.phoneE164}`} className="flex items-center gap-3 transition hover:text-primary">
                <Phone size={18} className="text-primary" />
                {person.phoneDisplay}
              </a>
            </div>

            <p className="mt-8 text-sm font-semibold">Connect with me:</p>
            <div className="mt-3 flex gap-3">
              <a href={person.links.github} target="_blank" rel="noreferrer" className="btn-outline !px-3">
                <Github size={18} />
              </a>
              <a href={person.links.linkedin} target="_blank" rel="noreferrer" className="btn-outline !px-3">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="glass-card rounded-3xl p-6 md:p-8">
            <p className="mb-6 text-sm text-muted-foreground">
              Messages sent through this form can be wired to your email service.
            </p>

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <div className="rounded-full bg-teal-400/15 p-4 text-teal-500">
                  <Check size={28} />
                </div>
                <h3 className="text-display mt-4 text-xl font-bold">Message sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">Thanks for reaching out — I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Name</span>
                  <input required className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Email</span>
                  <input type="email" required className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Message</span>
                  <textarea required rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send size={16} /> Send Message
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
