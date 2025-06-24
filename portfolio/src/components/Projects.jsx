import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Barakat E-Commerce Clone",
      description: "A full-stack e-commerce platform clone featuring modern UI/UX, product catalog, shopping cart functionality, and responsive design. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      liveUrl: null,
      githubUrl: "https://github.com/Manorajkrishan/BarakatClone"
    },
    {
      id: 2,
      title: "UK Mortgage Rate Predictor",
      description: "An AI-powered application that predicts UK mortgage interest rates using machine learning algorithms. Features data visualization and predictive analytics.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      technologies: ["Python", "Flask", "React", "Machine Learning"],
      category: "ai",
      liveUrl: null,
      githubUrl: "https://github.com/Manorajkrishan/Mortgage-interest-prediction-"
    },
    {
      id: 3,
      title: "Ministry of Health System",
      description: "A comprehensive healthcare management system built with MERN stack. Features patient management, appointment scheduling, and medical records tracking.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      category: "fullstack",
      liveUrl: null,
      githubUrl: "https://github.com/Manorajkrishan/Ministry-of-Health"
    },
    {
      id: 4,
      title: "TODO App - Kotlin",
      description: "A modern Android TODO application built with Kotlin. Features task management, categories, reminders, and a clean Material Design interface.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop",
      technologies: ["Kotlin", "Android", "Material Design", "SQLite"],
      category: "mobile",
      liveUrl: null,
      githubUrl: "https://github.com/Manorajkrishan/TODO"
    },
    {
      id: 5,
      title: "Vehicle Service Management System",
      description: "An OOP-based system for managing vehicle services and fuel station operations. Demonstrates advanced object-oriented programming concepts and design patterns.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      technologies: ["Java", "OOP", "Design Patterns", "Database"],
      category: "backend",
      liveUrl: null,
      githubUrl: "https://github.com/Manorajkrishan/Online-vehicle-service-and-Fuel-station-management-system"
    },
    {
      id: 6,
      title: "Parcel Service System",
      description: "A comprehensive parcel management system built entirely in Java. Features package tracking, delivery management, and customer service functionalities.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop",
      technologies: ["Java", "Swing", "JDBC", "MySQL"],
      category: "backend",
      liveUrl: null,
      githubUrl: "https://github.com/Manorajkrishan/ParcelService"
    }
  ]

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'backend', label: 'Backend' }
  ]

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
          <p>Some of my recent work</p>
        </motion.div>

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
