import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import SectionShell from './SectionShell'
import { portfolio } from '../data/portfolio'
import './Experience.css'

const iconByType = { work: Briefcase, education: GraduationCap }

const Experience = () => (
  <SectionShell id="experience">
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="section-eyebrow">Experience</span>
      <h2>
        Where I&apos;ve <span className="gradient-text">worked</span>
      </h2>
      <p>{portfolio.experience.subtitle}</p>
    </motion.div>

    <div className="exp-track">
      {portfolio.experience.items.map((item, idx) => {
        const Icon = iconByType[item.type]
        const isCurrent = item.date.includes('Present')

        return (
          <motion.article
            key={`${item.type}-${item.title}`}
            className={`exp-item glass-card${isCurrent && idx === 0 ? ' exp-item--active' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
          >
            <div className="exp-item-marker">
              <Icon size={16} />
            </div>
            <div className="exp-item-body">
              <div className="exp-item-head">
                <div>
                  <h3>
                    {item.title}
                    {isCurrent && <span className="exp-live">Current</span>}
                  </h3>
                  <p className="exp-org">{item.org}</p>
                </div>
                <time>{item.date}</time>
              </div>
              <ul>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        )
      })}
    </div>
  </SectionShell>
)

export default Experience
