import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import './Experience.css'

const iconByType = {
  work: Briefcase,
  education: GraduationCap,
}

const Experience = () => (
  <section id="experience" className="experience">
    <div className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">02 — Experience</span>
        <h2>
          My <span className="gradient-text">journey</span> so far
        </h2>
        <p>{portfolio.experience.subtitle}</p>
      </motion.div>

      <div className="exp-list">
        {portfolio.experience.items.map((item, idx) => {
          const Icon = iconByType[item.type]
          const isCurrent = item.date.includes('Present')

          return (
            <motion.article
              key={`${item.type}-${item.title}-${item.org}`}
              className={`exp-card glass-card${idx === 0 && isCurrent ? ' exp-card--current' : ''}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ x: 8 }}
            >
              <div className="exp-card-side">
                <div className="exp-icon">
                  <Icon size={18} />
                </div>
                <div className="exp-line" />
              </div>

              <div className="exp-card-body">
                <div className="exp-card-top">
                  <div>
                    <div className="exp-title-row">
                      <h3>{item.title}</h3>
                      {isCurrent && <span className="exp-live">Live</span>}
                    </div>
                    <p className="exp-org">{item.org}</p>
                  </div>
                  <time className="exp-date">{item.date}</time>
                </div>
                <ul className="exp-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  </section>
)

export default Experience
