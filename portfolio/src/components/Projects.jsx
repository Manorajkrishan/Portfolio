import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Eye, ExternalLink } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projectsSection = portfolio.projects
  const projects = projectsSection.items
  const categories = projectsSection.categories
  const allProjectsCta = projectsSection.allProjectsCta
  const repoInsights = projectsSection.repoInsights
  const categoryLabels = categories.reduce((labels, category) => {
    labels[category.key] = category.label
    return labels
  }, {})

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p>{projectsSection.subtitle}</p>
          {allProjectsCta ? (
            <a
              className="projects-all-link"
              href={allProjectsCta.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {allProjectsCta.label} <ExternalLink size={16} />
            </a>
          ) : null}
        </motion.div>

        {repoInsights ? (
          <motion.div
            className="project-lab"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="project-lab-copy">
              <span className="project-lab-eyebrow">{repoInsights.eyebrow}</span>
              <h3>{repoInsights.title}</h3>
              <p>{repoInsights.description}</p>
            </div>

            <div className="project-lab-stats" aria-label="GitHub repository summary">
              {repoInsights.stats.map((stat) => (
                <div className="project-lab-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="project-lab-lanes">
              {repoInsights.lanes.map((lane) => (
                <div className="project-lane" key={lane.title}>
                  <h4>{lane.title}</h4>
                  <div className="project-lane-tags">
                    {lane.projects.map((project) => (
                      <span key={project}>{project}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye size={20} />
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-meta">
                  <span>{categoryLabels[project.category] || project.category}</span>
                  <span>#{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
