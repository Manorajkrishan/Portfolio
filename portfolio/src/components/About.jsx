import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users } from 'lucide-react'
import SectionShell from './SectionShell'
import { portfolio } from '../data/portfolio'
import './About.css'

const iconMap = { Code, Palette, Zap, Users }

const About = () => (
  <SectionShell id="about" alt>
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="section-eyebrow">About</span>
      <h2>
        Building products with <span className="gradient-text">purpose</span>
      </h2>
      <p>{portfolio.about.heading}</p>
    </motion.div>

    <div className="about-grid">
      <motion.div
        className="about-story glass-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {portfolio.about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </motion.div>

      <div className="about-stats">
        {portfolio.about.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="about-stat glass-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <span className="about-stat-num">{stat.value}</span>
            <span className="about-stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="about-features">
        {portfolio.about.features.map((feature, i) => {
          const Icon = iconMap[feature.icon]
          return (
            <motion.div
              key={feature.title}
              className="about-feature glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div className="about-feature-icon"><Icon size={22} /></div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  </SectionShell>
)

export default About
