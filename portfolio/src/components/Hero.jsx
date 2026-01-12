import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react'
import ParticleBackground from './ParticleBackground'
import { portfolio } from '../data/portfolio'
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

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <ParticleBackground />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" ref={titleRef}>
              {portfolio.hero.headlinePrefix}{' '}
              <span className="highlight">{portfolio.person.name}</span>
            </h1>

            <p className="hero-subtitle" ref={subtitleRef}>
              {portfolio.person.title} & AI/ML Enthusiast
            </p>

            <p className="hero-description" ref={descriptionRef}>
              {portfolio.hero.description}
            </p>

            <div className="hero-buttons" ref={buttonsRef}>
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection(portfolio.hero.primaryCta.targetId)}
              >
                {portfolio.hero.primaryCta.label}
              </button>
              {portfolio.hero.resumeUrl ? (
                <a
                  href={portfolio.hero.resumeUrl}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              ) : (
                <button
                  className="btn btn-secondary"
                  onClick={() => scrollToSection(portfolio.hero.secondaryCta.targetId)}
                >
                  {portfolio.hero.secondaryCta.label}
                </button>
              )}
            </div>

            <div className="social-links" ref={socialRef}>
              <a
                href={portfolio.person.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={portfolio.person.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${portfolio.person.email}`} aria-label="Email">
                <Mail size={24} />
              </a>
              <a href={`tel:${portfolio.person.phoneE164}`} aria-label="Phone">
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div className="hero-image" ref={imageRef}>
            <div className="image-placeholder">
              <img
                src={portfolio.person.image.src}
                alt={portfolio.person.image.alt}
                onError={(e) => {
                  e.target.src = portfolio.person.image.fallback
                }}
              />
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <ArrowDown size={24} />
        </div>
      </div>
    </section>
  )
}

export default Hero
