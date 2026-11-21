import { projectSections } from './data/projects.js'
import { experience } from './data/experience.js'
import { involvements } from './data/involvements.js'
import { skills } from './data/skills.js'
import { expertiseAreas } from './data/techexpertise.js'
import { useEffect, useState } from 'react'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Clouds from './components/Clouds.jsx'
import Experience from './sections/Experience.jsx'
import Hero from './sections/Hero.jsx'
import Involvements from './sections/Involvements.jsx'
import Projects from './sections/Projects.jsx'
import Skydiving from './components/Skydiving.jsx'
import TechnicalExpertise from './sections/Expertise.jsx'

const currentYear = new Date().getFullYear()

function App() {


  const [activeSection, setActiveSection] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  useEffect(() => {
    const ids = ['about', 'involvements', 'expertise', 'projects', 'experience', 'contact']


    const updateActiveSection = () => {
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0
      const scrollPosition = window.scrollY + headerHeight
      let currentSection = null
      ids.forEach(id => {
        const section = document.getElementById(id)
        if (section) {
          const offsetTop = section.offsetTop
          const offsetHeight = section.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = id
          }
        }
      })
      setActiveSection(currentSection)
    }
    window.addEventListener('scroll', updateActiveSection)
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])


  return (
    <>
      <header className="site-header" >
        <a className="brand" href="#top" aria-label="Niilo Hanni home">
          NH
        </a>
        <nav aria-label="Main navigation">
          <a href="#about" aria-current={activeSection === 'about' ? 'page' : undefined}>About</a>
          <a href="#involvements" aria-current={activeSection === 'involvements' ? 'page' : undefined}>Involvements</a>
          <a href="#expertise" aria-current={activeSection === 'expertise' ? 'page' : undefined}>Expertise &amp; skills</a>
          <a href="#projects" aria-current={activeSection === 'projects' ? 'page' : undefined}>Projects</a>
          <a href="#experience" aria-current={activeSection === 'experience' ? 'page' : undefined}>Experience</a>
          <a href="#contact" aria-current={activeSection === 'contact' ? 'page' : undefined}>Contact</a>
        </nav>
        <button
          className="theme-switch"
          type="button"
          role="switch"
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          aria-checked={isDarkMode}
          onClick={() => setIsDarkMode(current => !current)}
        >
          <span className="theme-switch__track" aria-hidden="true">
            <span className="theme-switch__knob" />
          </span>
          <span className="theme-switch__label">{isDarkMode ? 'Dark' : 'Light'}</span>
        </button>
      </header>

      <Skydiving />
      <Clouds />
      <main id="top">
        <Hero />
        <About />
        <Involvements involvements={involvements} />
        <TechnicalExpertise expertiseAreas={expertiseAreas} skills={skills} />
        <Projects sections={projectSections} />
        <Experience experience={experience} />
        <Contact />
      </main>

      <footer>
        <p>© {currentYear} Niilo Hanni</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
