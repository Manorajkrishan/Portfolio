import React from 'react'
import { motion } from 'framer-motion'
import SectionShell from './SectionShell'
import { portfolio } from '../data/portfolio'
import './Skills.css'

const Skills = () => (
  <SectionShell id="skills" alt>
    <motion.div
      className="section-header section-header--center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="section-eyebrow">Skills</span>
      <h2>
        Tools & <span className="gradient-text">technologies</span>
      </h2>
      <p>{portfolio.skills.subtitle}</p>
    </motion.div>

    <div className="skills-wrap">
      {portfolio.skills.categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          className="skills-group glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.08 }}
        >
          <h3>{cat.title}</h3>
          <div className="skills-tags">
            {cat.skills.map((skill) => (
              <span className="skill-tag" key={skill.name}>
                <img src={skill.icon} alt="" onError={(e) => { e.target.style.display = 'none' }} />
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      className="skills-note glass-card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <strong>{portfolio.skills.summaryHeading}</strong>
      <p>{portfolio.skills.summary}</p>
    </motion.div>
  </SectionShell>
)

export default Skills
