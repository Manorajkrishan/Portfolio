import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react'
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

  const openMailFallback = () => {
    const subject = formData.subject?.trim() || `Portfolio enquiry from ${formData.name || 'someone'}`
    const body = [`Name: ${formData.name}`, `Email: ${formData.email}`, '', formData.message].join('\n')
    window.location.href = `mailto:${encodeURIComponent(portfolio.person.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
      const response = await fetch(formEndpoint, { method: 'POST', body: payload, headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('failed')
      setStatus({ type: 'success', message: 'Message sent! I will reply soon.' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus({ type: 'error', message: 'Opening your email app as fallback...' })
      openMailFallback()
    }
  }

  const contactInfo = [
    { icon: Mail, title: 'Email', value: portfolio.person.email, link: `mailto:${portfolio.person.email}` },
    { icon: Phone, title: 'Phone', value: portfolio.person.phoneDisplay, link: `tel:${portfolio.person.phoneE164}` },
    { icon: MapPin, title: 'Location', value: portfolio.person.location, link: null },
  ]

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text)
      setStatus({ type: 'copied', message: `${label} copied!` })
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 1500)
    } catch {
      setStatus({ type: 'error', message: 'Copy failed' })
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 2000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header section-header--center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">05 — Contact</span>
          <h2>
            Let&apos;s <span className="gradient-text">connect</span>
          </h2>
          <p>{portfolio.contact.subtitle}</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-panel glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-panel-icon">
              <MessageSquare size={28} />
            </div>
            <h3>Let&apos;s build something great</h3>
            <p>Open to collaborations, freelance projects, and full-time opportunities.</p>

            <div className="contact-channels">
              {contactInfo.map(({ icon: Icon, title, value, link }) => (
                <div className="contact-channel" key={title}>
                  <div className="contact-channel-icon"><Icon size={18} /></div>
                  <div>
                    <span className="contact-channel-label">{title}</span>
                    {link ? <a href={link}>{value}</a> : <span>{value}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-copy-btns">
              <button type="button" className="btn btn-ghost" onClick={() => copyToClipboard(portfolio.person.email, 'Email')}>
                <Copy size={14} /> Copy email
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => copyToClipboard(portfolio.person.phoneDisplay, 'Phone')}>
                <Copy size={14} /> Copy phone
              </button>
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="you@email.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" name="subject" placeholder="What's this about?" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-primary contact-submit" disabled={status.type === 'submitting'}>
              <Send size={18} />
              {status.type === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status.type !== 'idle' && (
              <div className={`contact-status contact-status--${status.type}`} role="status" aria-live="polite">
                {status.type === 'copied' && <Check size={14} />}
                <span>{status.message}</span>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
