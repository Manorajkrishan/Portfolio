import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react'
import SectionShell from './SectionShell'
import { portfolio } from '../data/portfolio'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const formEndpoint = `https://formsubmit.co/ajax/${portfolio.person.email}`

  const handleChange = (e) => {
    if (status.type !== 'idle') setStatus({ type: 'idle', message: '' })
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const subject = formData.subject?.trim() || `Portfolio enquiry from ${formData.name || 'someone'}`
    const payload = new FormData()
    payload.append('name', formData.name)
    payload.append('email', formData.email)
    payload.append('subject', subject)
    payload.append('message', formData.message)
    payload.append('_subject', subject)
    payload.append('_replyto', formData.email)
    payload.append('_template', 'table')
    payload.append('_captcha', 'false')

    try {
      setStatus({ type: 'submitting', message: 'Sending...' })
      const res = await fetch(formEndpoint, { method: 'POST', body: payload, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error('fail')
      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      const body = [`Name: ${formData.name}`, `Email: ${formData.email}`, '', formData.message].join('\n')
      window.location.href = `mailto:${portfolio.person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }
  }

  const copy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text)
      setStatus({ type: 'copied', message: `${label} copied` })
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 1500)
    } catch {
      setStatus({ type: 'error', message: 'Copy failed' })
    }
  }

  return (
    <SectionShell id="contact" alt>
      <motion.div
        className="section-header section-header--center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-eyebrow">Contact</span>
        <h2>
          Let&apos;s <span className="gradient-text">connect</span>
        </h2>
        <p>{portfolio.contact.subtitle}</p>
      </motion.div>

      <div className="contact-layout">
        <motion.div className="contact-aside glass-card" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <MessageSquare size={28} className="contact-aside-icon" />
          <h3>Ready to collaborate?</h3>
          <p>I&apos;m open to freelance work, full-time roles, and interesting project ideas.</p>
          <div className="contact-rows">
            <div className="contact-row"><Mail size={16} /><a href={`mailto:${portfolio.person.email}`}>{portfolio.person.email}</a></div>
            <div className="contact-row"><Phone size={16} /><a href={`tel:${portfolio.person.phoneE164}`}>{portfolio.person.phoneDisplay}</a></div>
            <div className="contact-row"><MapPin size={16} /><span>{portfolio.person.location}</span></div>
          </div>
          <div className="contact-copy">
            <button type="button" className="btn btn-ghost" onClick={() => copy(portfolio.person.email, 'Email')}><Copy size={14} /> Email</button>
            <button type="button" className="btn btn-ghost" onClick={() => copy(portfolio.person.phoneDisplay, 'Phone')}><Copy size={14} /> Phone</button>
          </div>
        </motion.div>

        <motion.form className="contact-form glass-card" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="contact-form-grid">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Your message..." value={formData.message} onChange={handleChange} required />
          <button type="submit" className="btn btn-primary" disabled={status.type === 'submitting'}>
            <Send size={16} />
            {status.type === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          {status.type !== 'idle' && (
            <p className={`contact-msg contact-msg--${status.type}`} role="status">
              {status.type === 'copied' && <Check size={14} />}
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </SectionShell>
  )
}

export default Contact
