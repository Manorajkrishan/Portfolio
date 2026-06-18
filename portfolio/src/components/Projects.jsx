import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Eye, ExternalLink, ArrowUpRight } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const { items: projects, categories, allProjectsCta, repoInsights, subtitle } = portfolio.projects

  const categoryLabels = categories.reduce((labels, cat) => {
    labels[cat.key] = cat.label
    return labels
  }, {})

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">04 — Projects</span>
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
            transition={{ duration: 0.6 }}
          >
            <div className="projects-lab-header">
              <span className="neon-tag">{repoInsights.eyebrow}</span>
              <h3>{repoInsights.title}</h3>
              <p>{repoInsights.description}</p>
            </div>
            <div className="projects-lab-stats">
              {repoInsights.stats.map((stat) => (
                <div key={stat.label} className="projects-lab-stat">
                  <strong className="gradient-text">{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="projects-lab-lanes">
              {repoInsights.lanes.map((lane) => (
                <div key={lane.title} className="projects-lane">
                  <h4>{lane.title}</h4>
                  <div className="projects-lane-tags">
                    {lane.projects.map((name) => (
                      <span key={name}>{name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`projects-filter${filter === cat.key ? ' projects-filter--active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                className="project-card glass-card"
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                whileHover={{ y: -8 }}
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
                  <div className="project-card-num">#{String(index + 1).padStart(2, '0')}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-card-tech">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span>+{project.technologies.length - 5}</span>
                    )}
                  </div>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">
                    View repo <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
