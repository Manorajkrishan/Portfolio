import React from 'react'
import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import './Skills.css'

const Skills = () => (
  <section id="skills" className="skills">
    <div className="container">
      <motion.div
        className="section-header section-header--center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">03 — Skills</span>
        <h2>
          Tools I <span className="gradient-text">master</span>
        </h2>
        <p>{portfolio.skills.subtitle}</p>
      </motion.div>

      <div className="skills-stack">
        {portfolio.skills.categories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            className="skills-block glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
          >
            <h3 className="skills-block-title">{category.title}</h3>
            <div className="skills-pills">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="skill-pill"
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <img
                    src={skill.icon}
                    alt=""
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <span>{skill.name}</span>
                  <div className="skill-pill-glow" style={{ '--skill-color': skill.color }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="skills-focus glass-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="skills-focus-label">{portfolio.skills.summaryHeading}</span>
        <p>{portfolio.skills.summary}</p>
      </motion.div>
    </div>
  </section>
)

export default Skills
