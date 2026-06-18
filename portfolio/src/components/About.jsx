import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import './About.css'

const iconMap = {
  Code: Code,
  Palette: Palette,
  Zap: Zap,
  Users: Users,
}

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">01 — About</span>
        <h2>
          Crafting <span className="gradient-text">digital experiences</span> that matter
        </h2>
        <p>{portfolio.about.heading}</p>
      </motion.div>

      <div className="about-bento">
        <motion.div
          className="about-bento-main glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {portfolio.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>

        {portfolio.about.stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="about-stat glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6, borderColor: 'rgba(0,232,255,0.4)' }}
          >
            <span className="about-stat-value gradient-text">{stat.value}</span>
            <span className="about-stat-label">{stat.label}</span>
          </motion.div>
        ))}

        {portfolio.about.features.map((feature, index) => {
          const Icon = iconMap[feature.icon]
          return (
            <motion.div
              key={feature.title}
              className="about-feature glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="about-feature-icon">
                <Icon size={24} />
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

export default About
