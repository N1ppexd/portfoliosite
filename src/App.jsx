import { projectSections } from './data/projects.js'
import { experience } from './data/experience.js'
import { skills } from './data/skills.js'
import { expertiseAreas } from './data/techexpertise.js'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Experience from './sections/Experience.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Skydiving from './sections/Skydiving.jsx'
import TechnicalExpertise from './sections/Expertise.jsx'
import Skills from './sections/Skills.jsx'

const currentYear = new Date().getFullYear()

function App() {
  return (
    <>
      <header className="site-header" >
        <a className="brand" href="#top" aria-label="Niilo Hanni home">
          NH
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#expertise">Expertise</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
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
