import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: portfolio.person.links.github,
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      url: portfolio.person.links.linkedin,
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      url: `mailto:${portfolio.person.email}`,
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
            <h3>{portfolio.person.name}</h3>
            <p>
              {portfolio.person.title} passionate about building scalable digital solutions and exploring AI/ML
              applications.
            </p>
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
              {portfolio.nav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              {portfolio.footer.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>{portfolio.person.email}</li>
              <li>{portfolio.person.phoneDisplay}</li>
              <li>{portfolio.person.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>
              © {currentYear} {portfolio.person.name}. Made with <Heart size={16} className="heart" /> and lots of
              coffee.
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
