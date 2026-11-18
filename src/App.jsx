import { projectSections } from './data/projects.js'
import { experience } from './data/experience.js'
import { skills } from './data/skills.js'
import { expertiseAreas } from './data/techexpertise.js'
import { useEffect, useState } from 'react'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Experience from './sections/Experience.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Skydiving from './components/Skydiving.jsx'
import TechnicalExpertise from './sections/Expertise.jsx'
import Skills from './sections/Skills.jsx'

const currentYear = new Date().getFullYear()

function App() {


  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const ids = ['about', 'projects', 'expertise', 'skills', 'experience', 'contact']


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
          <a href="#projects" aria-current={activeSection === 'projects' ? 'page' : undefined}>Projects</a>
          <a href="#expertise" aria-current={activeSection === 'expertise' ? 'page' : undefined}>Expertise</a>
          <a href="#skills" aria-current={activeSection === 'skills' ? 'page' : undefined}>Skills</a>
          <a href="#experience" aria-current={activeSection === 'experience' ? 'page' : undefined}>Experience</a>
          <a href="#contact" aria-current={activeSection === 'contact' ? 'page' : undefined}>Contact</a>
        </nav>
      </header>

      <Skydiving />
      <main id="top">
        <Hero />
        <About />
        <Projects sections={projectSections} />
        <TechnicalExpertise expertiseAreas={expertiseAreas} />
        <Skills skills={skills} />
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
