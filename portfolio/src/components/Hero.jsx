import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react'
import ParticleBackground from './ParticleBackground'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonsRef = useRef(null)
  const socialRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Main entrance animations
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3")
      .from(buttonsRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.3")
      .from(socialRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        rotation: 360
      }, "-=0.2")
      .from(imageRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)"
      }, "-=1")

      // Continuous animations
      gsap.to(titleRef.current.querySelector('.highlight'), {
        backgroundPosition: "200% center",
        duration: 3,
        ease: "none",
        repeat: -1
      })

      // Floating animation for social links
      gsap.to(socialRef.current.children, {
        y: -5,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <ParticleBackground />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" ref={titleRef}>
              Hi, I'm <span className="highlight">Manoraj Krishan</span>
            </h1>

            <p className="hero-subtitle" ref={subtitleRef}>
              Full Stack Developer & AI/ML Enthusiast
            </p>

            <p className="hero-description" ref={descriptionRef}>
              A passionate and versatile Full Stack Developer with strong academic grounding in Computer Science
              and hands-on industry experience. I specialize in MERN Stack, Spring Boot, and Java/Python development,
              with a growing focus on AI/ML applications.
            </p>

            <div className="hero-buttons" ref={buttonsRef}>
              <button className="btn btn-primary" onClick={scrollToAbout}>
                View My Work
              </button>
              <a
                href="/Manoraj_Krishan_CV.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>

            <div className="social-links" ref={socialRef}>
              <a href="https://github.com/Manorajkrishan" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/manorajkrishan" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:krishan142536@gmail.com">
                <Mail size={24} />
              </a>
              <a href="tel:+447456907934">
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div className="hero-image" ref={imageRef}>
            <div className="image-placeholder">
              <img
                src="/WhatsApp Image 2025-06-22 at 19.05.29_708ba2a7.jpg"
                alt="Manoraj Krishan"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x400/3b82f6/ffffff?text=MK"
                }}
              />
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={scrollToAbout}>
          <ArrowDown size={24} />
        </div>
      </div>
    </section>
  )
}

export default Hero
