import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolio } from '../data/portfolio'
import './Skills.css'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const skillsRef = useRef(null)
  const skillItemsRef = useRef([])

  const skillCategories = portfolio.skills.categories

  const categoryStartIndex = skillCategories.reduce((acc, category, idx) => {
    const prev = idx === 0 ? 0 : acc[idx - 1] + skillCategories[idx - 1].skills.length
    acc[idx] = prev
    return acc
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      skillItemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        })
      })
    }, skillsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>{portfolio.skills.subtitle}</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-icons">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-icon-item"
                    ref={(el) => {
                      const idx = categoryStartIndex[categoryIndex] + skillIndex
                      skillItemsRef.current[idx] = el
                    }}
                  >
                    <div className="skill-icon-wrapper">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon"
                        style={{ '--skill-color': skill.color }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div
                        className="skill-icon-fallback"
                        style={{
                          display: 'none',
                          backgroundColor: skill.color,
                          color: 'white',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: '100%',
                          borderRadius: '0.5rem'
                        }}
                      >
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <h3>{portfolio.skills.summaryHeading}</h3>
          <p>{portfolio.skills.summary}</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
