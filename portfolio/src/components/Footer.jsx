import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/Manorajkrishan",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/manorajkrishan",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:krishan142536@gmail.com",
      label: "Email"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Manoraj Krishan</h3>
            <p>Full Stack Developer passionate about creating scalable digital solutions and AI/ML applications.</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Full Stack Development</li>
              <li>AI/ML Applications</li>
              <li>Mobile Apps</li>
              <li>System Architecture</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>krishan142536@gmail.com</li>
              <li>+44 7456 907934</li>
              <li>Hatfield, United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Manoraj Krishan. Made with <Heart size={16} className="heart" /> and lots of coffee.
            </p>
            <button onClick={scrollToTop} className="back-to-top">
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
