import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Eye, ExternalLink, ArrowUpRight } from 'lucide-react'
import SectionShell from './SectionShell'
import { portfolio } from '../data/portfolio'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const { items: projects, categories, allProjectsCta, repoInsights, subtitle } = portfolio.projects

  const categoryLabels = categories.reduce((acc, cat) => {
    acc[cat.key] = cat.label
    return acc
  }, {})

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
  const featured = filtered[0]

  return (
    <SectionShell id="projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-eyebrow">Projects</span>
        <h2>
          Featured <span className="gradient-text">work</span>
        </h2>
        <p>{subtitle}</p>
        {allProjectsCta && (
          <a className="projects-github-link" href={allProjectsCta.url} target="_blank" rel="noopener noreferrer">
            {allProjectsCta.label} <ExternalLink size={16} />
          </a>
        )}
      </motion.div>

      {repoInsights && (
        <motion.div
          className="projects-lab glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="neon-tag">{repoInsights.eyebrow}</span>
          <h3>{repoInsights.title}</h3>
          <p>{repoInsights.description}</p>
          <div className="projects-lab-stats">
            {repoInsights.stats.map((stat) => (
              <div key={stat.label} className="projects-lab-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <div className="projects-filters">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={`projects-filter${filter === cat.key ? ' projects-filter--active' : ''}`}
            onClick={() => setFilter(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {featured && (
        <motion.a
          href={featured.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-featured glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="project-featured-img">
            <img src={featured.image} alt={featured.title} />
          </div>
          <div className="project-featured-body">
            <span className="neon-tag">Spotlight</span>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
            <span className="project-featured-link">
              View repository <ArrowUpRight size={16} />
            </span>
          </div>
        </motion.a>
      )}

      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.slice(1).map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card glass-card"
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-card-img">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card-overlay">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <Eye size={18} />
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                </div>
                <span className="project-card-cat">{categoryLabels[project.category]}</span>
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">
                  View repo <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionShell>
  )
}

export default Projects
