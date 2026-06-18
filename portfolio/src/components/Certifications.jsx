import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import './Certifications.css'

const Certifications = () => (
  <section id="certifications" className="certifications">
    <div className="container">
      <motion.div
        className="section-header section-header--center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">Credentials</span>
        <h2>
          Certifications & <span className="gradient-text">courses</span>
        </h2>
        <p>{portfolio.certifications.subtitle}</p>
      </motion.div>

      <div className="cert-grid">
        {portfolio.certifications.items.map((cert, idx) => (
          <motion.div
            key={`${cert.title}-${cert.date}`}
            className="cert-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
            whileHover={{ y: -6, borderColor: 'rgba(0,232,255,0.35)' }}
          >
            <div className="cert-badge">
              <Award size={20} />
            </div>
            <div className="cert-body">
              <div className="cert-top">
                <h3>{cert.title}</h3>
                <time>{cert.date}</time>
              </div>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-tags">
                {cert.tags?.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {cert.url ? (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View credential <ExternalLink size={14} />
                </a>
              ) : (
                <span className="cert-link cert-link--muted">Credential on request</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Certifications
