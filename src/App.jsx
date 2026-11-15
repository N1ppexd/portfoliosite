import { projectSections } from './data/projects.js'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'

const currentYear = new Date().getFullYear()

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Niilo Hanni home">
          NH
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <About />
        <Projects sections={projectSections} />
        <Skills />
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
