import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import './Experience.css'

const iconByType = {
  work: <Briefcase size={18} />,
  education: <GraduationCap size={18} />,
}

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Experience</h2>
          <p>{portfolio.experience.subtitle}</p>
        </motion.div>

        <div className="experience-timeline">
          {portfolio.experience.items.map((item, idx) => (
            <motion.div
              key={`${item.type}-${item.title}-${item.org}`}
              className="experience-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="experience-dot" aria-hidden="true">
                {iconByType[item.type]}
              </div>

              <div className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <h3 className="experience-title">{item.title}</h3>
                    <div className="experience-org">{item.org}</div>
                  </div>
                  <div className="experience-date">{item.date}</div>
                </div>

                <ul className="experience-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

