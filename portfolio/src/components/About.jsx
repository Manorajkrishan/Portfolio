import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Palette, Zap, Users } from 'lucide-react'
import { portfolio } from '../data/portfolio'
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

  const iconMap = {
    Code: <Code size={32} />,
    Palette: <Palette size={32} />,
    Zap: <Zap size={32} />,
    Users: <Users size={32} />,
  }

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>{portfolio.about.heading}</h3>
            {portfolio.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="stats">
              {portfolio.about.stats.map((stat, idx) => (
                <div className="stat" ref={(el) => (statsRef.current[idx] = el)} key={stat.label}>
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-features">
            <div className="features-grid">
              {portfolio.about.features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="feature-card"
                  ref={el => featuresRef.current[index] = el}
                >
                  <div className="feature-icon">
                    {iconMap[feature.icon]}
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
