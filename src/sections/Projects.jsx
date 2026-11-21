import { useCallback, useEffect, useRef, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { ProjectCover } from '../components/ProjectCover.jsx'
import { ProjectGallery } from '../components/ProjectGallery.jsx'
import { ChevronIcon } from '../components/ChevronIcon.jsx'
import Tabs from '../components/Tabs.jsx'
import { renderInlineHighlight } from '../components/renderInlineHighlight.jsx'

const ROTATION_DELAY = 10_000

function Projects({ sections }) {

  
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id)
  const [selectedProject, setSelectedProject] = useState(null)
  const [rotationPaused, setRotationPaused] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [isHovered, setIsHovered] = useState(false)
  const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPageVisible, setIsPageVisible] = useState(!document.hidden)
  const [interactionCount, setInteractionCount] = useState(0)
  const [sectionDirection, setSectionDirection] = useState('next')
  const sectionRef = useRef(null)
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)
  const activeSection = sections.find((section) => section.id === activeSectionId)

  const moveToSection = useCallback((direction) => {
    // Keep button, swipe, and automatic navigation moving in the same direction.
    setSectionDirection(direction > 0 ? 'next' : 'previous')
    setActiveSectionId((currentId) => {
      const currentIndex = sections.findIndex((section) => section.id === currentId)
      const nextIndex = (currentIndex + direction + sections.length) % sections.length
      return sections[nextIndex].id
    })
  }, [sections])

  const navigateToSection = (direction) => {
    moveToSection(direction)
    setRotationPaused(true)
  }

  const selectSection = (sectionId, direction) => {
    const currentIndex = sections.findIndex((section) => section.id === activeSectionId)
    const nextIndex = sections.findIndex((section) => section.id === sectionId)

    if (currentIndex === nextIndex) return

    setSectionDirection(direction ?? (nextIndex > currentIndex ? 'next' : 'previous'))
    setActiveSectionId(sectionId)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.1 })
    observer.observe(sectionRef.current)

    const handleVisibilityChange = () => setIsPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = (event) => {
      if (event.matches) setRotationPaused(true)
    }
    reducedMotion.addEventListener('change', handleMotionChange)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      reducedMotion.removeEventListener('change', handleMotionChange)
    }
  }, [])

  useEffect(() => {
    // Automatic rotation stops while the user is interacting with the section or a dialog.
    if (sections.length < 2 || rotationPaused || isHovered || hasKeyboardFocus ||
        !isVisible || !isPageVisible || selectedProject) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      moveToSection(1)
    }, ROTATION_DELAY)

    return () => window.clearTimeout(timer)
  }, [sections, activeSectionId, rotationPaused, isHovered, hasKeyboardFocus,
    isVisible, isPageVisible, selectedProject, interactionCount, moveToSection])

  useEffect(() => {
    if (!selectedProject) {
      return undefined
    }

    // Preserve any existing inline style when the project dialog closes.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
        requestAnimationFrame(() => triggerRef.current?.focus())
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  const closeProjectDetails = () => {
    setSelectedProject(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }

  const selectProject = (project, trigger) => {
    triggerRef.current = trigger
    setSelectedProject(project)
  }

  return (
    <section
      className="section projects"
      id="projects"
      aria-labelledby="projects-title"
      ref={sectionRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={(event) => setHasKeyboardFocus(event.target.matches(':focus-visible'))}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasKeyboardFocus(false)
      }}
      onClickCapture={() => setInteractionCount((count) => count + 1)}
    >
      <div
        className="projects-panel"
      >
        <div className="section-intro">
          <div>
            <h2 id="projects-title">{activeSection.title}</h2>
          </div>
        </div>

        <Tabs
          activeId={activeSectionId}
          afterTabs={sections.length > 1 && (
            <button
              className="project-rotation-toggle"
              onClick={() => setRotationPaused((paused) => !paused)}
              type="button"
            >
              {rotationPaused ? 'Resume' : 'Pause'} automatic switching
            </button>
          )}
          direction={sectionDirection}
          label="Project collections"
          onChange={selectSection}
          onSwipe={navigateToSection}
          panelClassName="project-grid"
          renderContent={() => activeSection.projects.map((project) => (
            <ProjectCard key={project.title} onSelect={selectProject} project={project} />
          ))}
          renderPanels={(panels) => (
            <div className="project-grid-navigation">
              {sections.length > 1 && (
                <button
                  aria-label="Previous project section"
                  className="project-section-nav"
                  onClick={() => navigateToSection(-1)}
                  type="button"
                >
                  <ChevronIcon direction="left" />
                </button>
              )}
              {panels}
              {sections.length > 1 && (
                <button
                  aria-label="Next project section"
                  className="project-section-nav"
                  onClick={() => navigateToSection(1)}
                  type="button"
                >
                  <ChevronIcon direction="right" />
                </button>
              )}
            </div>
          )}
          swipeTabs
          tabs={sections}
        />
      </div>

      {selectedProject && (
        <div
          aria-labelledby="project-details-title"
          aria-modal="true"
          className="project-dialog-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeProjectDetails()
            }
          }}
          role="dialog"
        >
          <div className="project-dialog">
            <button
              aria-label="Close project details"
              className="project-dialog-close"
              onClick={closeProjectDetails}
              ref={closeButtonRef}
              type="button"
            >
              Close
            </button>
            {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
              <ProjectGallery project={selectedProject} />
            ) : (
              <ProjectCover dialog project={selectedProject} />
            )}
            <div className="project-dialog-content">
              <p className="project-status">{selectedProject.status}</p>
              <h3 id="project-details-title">{selectedProject.title}</h3>
              <p>{renderInlineHighlight(selectedProject.description)}</p>
              {selectedProject.stack.length > 0 && (
                <ul aria-label={`${selectedProject.title} technologies`}>
                  {selectedProject.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {(selectedProject.url || selectedProject.repoLink) && (
                <div className="project-dialog-links">
                  {selectedProject.url && (
                    <a
                      className="button"
                      href={selectedProject.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Visit project <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {selectedProject.repoLink && (
                    <a
                      className="button button-secondary"
                      href={selectedProject.repoLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Public repo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
