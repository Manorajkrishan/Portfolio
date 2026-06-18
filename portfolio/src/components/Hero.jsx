import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Marquee from './Marquee'
import { portfolio } from '../data/portfolio'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1]

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const [firstName, ...rest] = portfolio.person.name.split(' ')

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-accent" aria-hidden="true" />
      <div className="container">
        <div className="hero-layout">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              {portfolio.hero.statusPill}
            </div>

            <p className="hero-greeting">{portfolio.hero.headlinePrefix}</p>

            <h1 className="hero-title">
              {firstName}
              <span className="hero-title-accent">{rest.join(' ')}</span>
            </h1>

            <p className="hero-role">{portfolio.person.tagline}</p>
            <p className="hero-bio">{portfolio.hero.description}</p>

            <div className="hero-metrics">
              {portfolio.hero.proofPoints.map((point) => (
                <div className="hero-metric" key={point.label}>
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollToSection(portfolio.hero.primaryCta.targetId)}
              >
                {portfolio.hero.primaryCta.label}
                <ArrowRight size={18} />
              </button>
              {portfolio.hero.resumeUrl ? (
                <a
                  href={portfolio.hero.resumeUrl}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => scrollToSection(portfolio.hero.secondaryCta.targetId)}
                >
                  {portfolio.hero.secondaryCta.label}
                </button>
              )}
            </div>

            <div className="hero-links">
              {[
                { href: portfolio.person.links.github, icon: Github, label: 'GitHub' },
                { href: portfolio.person.links.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${portfolio.person.email}`, icon: Mail, label: 'Email' },
                { href: `tel:${portfolio.person.phoneE164}`, icon: Phone, label: 'Phone' },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
          >
            <div className="hero-photo-card">
              <div className="hero-photo-frame">
                <img
                  src={portfolio.person.image.src}
                  alt={portfolio.person.image.alt}
                  onError={(e) => {
                    e.target.src = portfolio.person.image.fallback
                  }}
                />
              </div>
              <div className="hero-photo-shine" aria-hidden="true" />
            </div>

            <div className="hero-info-stack">
              {portfolio.hero.orbitCards.map((card) => (
                <div className="hero-info-chip glass-card" key={card.label}>
                  <strong>{card.value}</strong>
                  <span>{card.label}</span>
                </div>
              ))}
              <div className="hero-info-chip hero-info-chip--location glass-card">
                <MapPin size={14} />
                <span>{portfolio.person.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-ticker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Marquee items={portfolio.hero.badges} speed={36} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
