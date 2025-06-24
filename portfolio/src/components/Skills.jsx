import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Skills.css'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const skillsRef = useRef(null)
  const skillItemsRef = useRef([])

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "#61DAFB"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#F7DF1E"
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          color: "#3178C6"
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "#E34F26"
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "#1572B6"
        },
        {
          name: "Tailwind CSS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          color: "#06B6D4"
        }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "#339933"
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          color: "#3776AB"
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          color: "#ED8B00"
        },
        {
          name: "Spring Boot",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
          color: "#6DB33F"
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "#47A248"
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          color: "#4479A1"
        }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "#F05032"
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          color: "#2496ED"
        },
        {
          name: "AWS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
          color: "#FF9900"
        },
        {
          name: "Flask",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
          color: "#000000"
        },
        {
          name: "Kotlin",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
          color: "#7F52FF"
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          color: "#FCC624"
        }
      ]
    }
  ]

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
          <p>Technologies I work with</p>
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
                    ref={el => skillItemsRef.current[categoryIndex * 6 + skillIndex] = el}
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
          <h3>Always Learning</h3>
          <p>
            I'm constantly expanding my skill set and staying up-to-date with the latest
            technologies and best practices in software development. Currently exploring
            AI/ML applications, cloud architecture, and advanced full-stack solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
