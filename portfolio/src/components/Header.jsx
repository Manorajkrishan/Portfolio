import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { portfolio } from '../data/portfolio'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDarkMode, toggleDarkMode } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const initials = portfolio.person.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header-inner">
        <button className="header-logo" onClick={() => scrollToSection('hero')}>
          <span className="header-logo-mark">{initials}</span>
          <span className="header-logo-name">{portfolio.person.name.split(' ')[0]}</span>
        </button>

        <nav className="header-nav">
          {portfolio.nav.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="header-theme" onClick={toggleDarkMode} aria-label="Toggle theme">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="header-cta btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Hire Me
          </button>
          <button
            className="header-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="header-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container">
              {portfolio.nav.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="header-mobile-num">0{i + 1}</span>
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
