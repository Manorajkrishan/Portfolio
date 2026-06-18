import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import SectionShell from './SectionShell'
import { portfolio } from '../data/portfolio'
import './Certifications.css'

const Certifications = () => (
  <SectionShell id="certifications">
    <motion.div
      className="section-header section-header--center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="section-eyebrow">Credentials</span>
      <h2>
        Certifications & <span className="gradient-text">courses</span>
      </h2>
      <p>{portfolio.certifications.subtitle}</p>
    </motion.div>

    <div className="cert-grid">
      {portfolio.certifications.items.map((cert, i) => (
        <motion.div
          key={`${cert.title}-${cert.date}`}
          className="cert-card glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ y: -4 }}
        >
          <Award size={20} className="cert-icon" />
          <div>
            <div className="cert-head">
              <h3>{cert.title}</h3>
              <time>{cert.date}</time>
            </div>
            <p className="cert-issuer">{cert.issuer}</p>
            <div className="cert-tags">
              {cert.tags?.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionShell>
)

export default Certifications
