import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const handleChange = (e) => {
    if (status.type !== 'idle') setStatus({ type: 'idle', message: '' })
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const subject = formData.subject?.trim() || `Portfolio enquiry from ${formData.name || 'someone'}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n')

    const mailto = `mailto:${encodeURIComponent(portfolio.person.email)}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setStatus({ type: 'success', message: 'Opening your email app…' })
    window.location.href = mailto

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: portfolio.person.email,
      link: `mailto:${portfolio.person.email}`
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: portfolio.person.phoneDisplay,
      link: `tel:${portfolio.person.phoneE164}`
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: portfolio.person.location,
      link: null
    }
  ]

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text)
      setStatus({ type: 'copied', message: `${label} copied` })
      window.setTimeout(() => setStatus({ type: 'idle', message: '' }), 1500)
    } catch {
      setStatus({ type: 'error', message: 'Copy failed — please copy manually.' })
      window.setTimeout(() => setStatus({ type: 'idle', message: '' }), 2000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>{portfolio.contact.subtitle}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let&apos;s talk about your project</h3>
            <p>
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact-quick-actions">
              <button
                type="button"
                className="contact-quick-btn"
                onClick={() => copyToClipboard(portfolio.person.email, 'Email')}
              >
                <Copy size={16} /> Copy email
              </button>
              <button
                type="button"
                className="contact-quick-btn"
                onClick={() => copyToClipboard(portfolio.person.phoneDisplay, 'Phone')}
              >
                <Copy size={16} /> Copy phone
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>

              {status.type !== 'idle' && (
                <div
                  className={`contact-status ${
                    status.type === 'error' ? 'contact-status-error' : 'contact-status-success'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.type === 'copied' ? <Check size={16} /> : null}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
