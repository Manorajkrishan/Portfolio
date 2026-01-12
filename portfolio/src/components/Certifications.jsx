import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import './Certifications.css'

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Certifications</h2>
          <p>{portfolio.certifications.subtitle}</p>
        </motion.div>

        <div className="cert-grid">
          {portfolio.certifications.items.map((cert, idx) => (
            <motion.div
              key={`${cert.title}-${cert.issuer}-${cert.date}`}
              className="cert-card shine"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="cert-icon" aria-hidden="true">
                <Award size={18} />
              </div>

              <div className="cert-content">
                <div className="cert-top">
                  <div>
                    <h3 className="cert-title">{cert.title}</h3>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>
                  <div className="cert-date">{cert.date}</div>
                </div>

                <div className="cert-tags">
                  {cert.tags?.map((tag) => (
                    <span key={tag} className="cert-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {cert.url ? (
                  <a className="cert-link" href={cert.url} target="_blank" rel="noopener noreferrer">
                    View credential <ExternalLink size={16} />
                  </a>
                ) : (
                  <div className="cert-link cert-link-muted">Credential link available on request</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

