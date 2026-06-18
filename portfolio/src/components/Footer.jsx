import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  const social = [
    { icon: Github, url: portfolio.person.links.github, label: 'GitHub' },
    { icon: Linkedin, url: portfolio.person.links.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${portfolio.person.email}`, label: 'Email' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="gradient-text">{portfolio.person.name}</h3>
            <p>{portfolio.person.title}</p>
            <div className="footer-social">
              {social.map(({ icon: Icon, url, label }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {portfolio.nav.map((item) => (
                <li key={item.id}>
                  <button onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {portfolio.footer.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${portfolio.person.email}`}>{portfolio.person.email}</a></li>
              <li><a href={`tel:${portfolio.person.phoneE164}`}>{portfolio.person.phoneDisplay}</a></li>
              <li>{portfolio.person.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} {portfolio.person.name}. Built with React + Vite.</p>
          <motion.button
            className="footer-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} /> Top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
