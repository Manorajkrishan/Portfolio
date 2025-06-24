import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './ParticleBackground.css'

const ParticleBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const particles = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 20 + 's'
      container.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles with GSAP
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: "none",
        delay: index * 0.1
      })

      gsap.to(particle, {
        opacity: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      })
    })

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="particle-background"></div>
}

export default ParticleBackground
