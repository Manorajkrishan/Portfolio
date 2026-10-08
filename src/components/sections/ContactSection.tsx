'use client'

import { motion } from 'framer-motion'
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { Reveal } from '@/components/animations/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { portfolio } from '@/data'

export function ContactSection() {
  const { person, contact } = portfolio
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${person.email}`
    }
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)
    const body = encodeURIComponent(
      `${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`
    )
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`
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
              <a href={person.links.github} aria-label="GitHub profile" target="_blank" rel="noreferrer" className="btn-outline !px-3">
                <Github size={18} />
              </a>
              <a href={person.links.linkedin} aria-label="LinkedIn profile" target="_blank" rel="noreferrer" className="btn-outline !px-3">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="glass-card rounded-3xl p-6 md:p-8">
            <p className="mb-6 text-sm text-muted-foreground">
              Opens your email app with a draft. You send the message from there — nothing is sent automatically from this site.
            </p>

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <div className="rounded-full bg-primary/15 p-4 text-primary">
                  <Check size={28} />
                </div>
                <h3 className="text-display mt-4 text-xl font-bold">Email draft prepared</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Your email app should open with your draft. Send it there to complete your enquiry.
                </p>
                <a href={`mailto:${person.email}`} className="btn-outline mt-5">Email directly</a>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-4 text-sm underline">
                  Edit your draft
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Name</span>
                  <input name="name" autoComplete="name" required className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Email</span>
                  <input name="email" autoComplete="email" type="email" required className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Message</span>
                  <textarea name="message" required rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                </label>
                <button type="submit" className="btn-primary w-full sm:w-auto">Prepare Email</button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
