import React from 'react'
import { motion } from 'framer-motion'
import './SectionShell.css'

const SectionShell = ({ id, className = '', alt = false, children }) => (
  <motion.section
    id={id}
    className={`section-shell ${alt ? 'section-shell--alt' : ''} ${className}`.trim()}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5 }}
  >
    <div className="section-shell-glow" aria-hidden="true" />
    <div className="container">{children}</div>
  </motion.section>
)

export default SectionShell
