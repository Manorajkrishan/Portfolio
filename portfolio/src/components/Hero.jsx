import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Phone, Zap } from 'lucide-react'
import Marquee from './Marquee'
import { portfolio } from '../data/portfolio'
import './Hero.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-status" variants={fadeUp} custom={0}>
              <span className="hero-status-dot" />
              <Zap size={14} />
              {portfolio.hero.statusPill}
            </motion.div>

            <motion.p className="hero-kicker" variants={fadeUp} custom={1}>
              {portfolio.hero.headlinePrefix}
            </motion.p>

            <motion.h1 className="hero-name" variants={fadeUp} custom={2}>
              <span className="hero-name-line">{portfolio.person.name.split(' ')[0]}</span>
              <span className="hero-name-line gradient-text">{portfolio.person.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p className="hero-tagline" variants={fadeUp} custom={3}>
              {portfolio.person.tagline}
            </motion.p>

            <motion.p className="hero-desc" variants={fadeUp} custom={4}>
              {portfolio.hero.description}
            </motion.p>

            <motion.div className="hero-stats" variants={fadeUp} custom={5}>
              {portfolio.hero.proofPoints.map((point) => (
                <div className="hero-stat glass-card" key={point.label}>
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="hero-actions" variants={fadeUp} custom={6}>
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection(portfolio.hero.primaryCta.targetId)}
              >
                {portfolio.hero.primaryCta.label}
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
                  className="btn btn-secondary"
                  onClick={() => scrollToSection(portfolio.hero.secondaryCta.targetId)}
                >
                  {portfolio.hero.secondaryCta.label}
                </button>
              )}
            </motion.div>

            <motion.div className="hero-social" variants={fadeUp} custom={7}>
              {[
                { href: portfolio.person.links.github, icon: Github, label: 'GitHub' },
                { href: portfolio.person.links.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${portfolio.person.email}`, icon: Mail, label: 'Email' },
                { href: `tel:${portfolio.person.phoneE164}`, icon: Phone, label: 'Phone' },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-portrait-ring">
              <div className="hero-portrait-glow" />
              <div className="hero-portrait-frame">
                <img
                  src={portfolio.person.image.src}
                  alt={portfolio.person.image.alt}
                  onError={(e) => {
                    e.target.src = portfolio.person.image.fallback
                  }}
                />
              </div>
            </div>

            <div className="hero-float-cards">
              {portfolio.hero.orbitCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  className={`hero-float-card hero-float-card-${index + 1} glass-card`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + index, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <strong>{card.value}</strong>
                  <span>{card.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="hero-location glass-card">
              <span className="hero-location-label">Based in</span>
              <span>{portfolio.person.location}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-marquee-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Marquee items={portfolio.hero.badges} speed={32} />
        </motion.div>

        <motion.button
          className="hero-scroll"
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-label="Scroll to about"
        >
          <span>Scroll</span>
          <ArrowDown size={18} />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
