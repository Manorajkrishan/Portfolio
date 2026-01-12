import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="noise" aria-hidden="true" />
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
