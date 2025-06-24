import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Palette, Zap, Users } from 'lucide-react'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef(null)
  const statsRef = useRef([])
  const featuresRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats
      statsRef.current.forEach((stat, index) => {
        gsap.from(stat, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        })
      })

      // Animate feature cards
      featuresRef.current.forEach((feature, index) => {
        gsap.from(feature, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: feature,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        })
      })
    }, aboutRef)

    return () => ctx.revert()
  }, [])
  const features = [
    {
      icon: <Code size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette size={32} />,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces with attention to detail."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Performance",
      description: "Optimizing applications for speed and performance across all devices."
    },
    {
      icon: <Users size={32} />,
      title: "Team Player",
      description: "Collaborating effectively with teams to deliver exceptional results."
    }
  ]

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>I'm a passionate developer who loves creating scalable digital solutions.</h3>
            <p>
              Currently completing my BSc in Computer Science at the University of Hertfordshire,
              I bring a solid mix of technical skills, real-world project experience, and a drive
              for continuous learning. I specialize in MERN Stack, Spring Boot, and Java/Python
              development, with a growing focus on AI/ML applications.
            </p>
            <p>
              At Thuli Software Pvt Ltd, I built responsive interfaces and RESTful APIs,
              contributing to fast-paced development teams using agile methodologies.
              I've successfully developed full-stack solutions that are tailored to user needs
              and scalable for growth.
            </p>
            <p>
              Alongside technical proficiency, I value communication, collaboration, and project
              management — key skills that help me deliver solutions that work well for both
              users and stakeholders. Let's build something great together.
            </p>

            <div className="stats">
              <div className="stat" ref={el => statsRef.current[0] = el}>
                <h4>15+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat" ref={el => statsRef.current[1] = el}>
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat" ref={el => statsRef.current[2] = el}>
                <h4>BSc</h4>
                <p>Computer Science</p>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card"
                  ref={el => featuresRef.current[index] = el}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
