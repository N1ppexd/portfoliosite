import { useEffect, useRef, useState } from 'react'

const ROTATION_DELAY = 10_000

function ProjectCover({ project, dialog = false }) {
  if (project.image) {
    return (
      <img
        className={dialog ? 'project-dialog-art' : 'project-art'}
        src={project.image}
        alt=""
      />
    )
  }

  const variant = (project.title.length % 4) + 1
  return (
    <div
      aria-label={`${project.title} cover`}
      className={`${dialog ? 'project-dialog-art' : 'project-art'} project-art--fallback project-art--fallback-${variant}`}
      role="img"
    >
      <span>{project.title}</span>
    </div>
  )
}

function ProjectGallery({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project.gallery || project.gallery.length === 0) {
    return null
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.gallery.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === project.gallery.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="project-gallery">
      <div className="project-gallery-container">
        <img
          className="project-gallery-image"
          src={project.gallery[currentImageIndex]}
          alt={`${project.title} gallery image ${currentImageIndex + 1}`}
        />
        {project.gallery.length > 1 && (
          <>
            <button
              className="project-gallery-nav project-gallery-prev"
              onClick={handlePrevious}
              type="button"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="project-gallery-nav project-gallery-next"
              onClick={handleNext}
              type="button"
              aria-label="Next image"
            >
              ›
            </button>
            <div className="project-gallery-indicators">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  className={`project-gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  type="button"
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === currentImageIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function renderInlineHighlight(text) {
  return text.split(/(\{[^}]+\})/g).map((part, index) => {
    if (part.startsWith('{') && part.endsWith('}')) {
      return <mark className="project-emphasis" key={`${part}-${index}`}>{part.slice(1, -1)}</mark>
    }

    return part
  })
}

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
  const sectionRef = useRef(null)
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)
  const activeSection = sections.find((section) => section.id === activeSectionId)

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
    if (sections.length < 2 || rotationPaused || isHovered || hasKeyboardFocus ||
        !isVisible || !isPageVisible || selectedProject) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setActiveSectionId((currentId) => {
        const index = sections.findIndex((section) => section.id === currentId)
        return sections[(index + 1) % sections.length].id
      })
    }, ROTATION_DELAY)

    return () => window.clearTimeout(timer)
  }, [sections, activeSectionId, rotationPaused, isHovered, hasKeyboardFocus,
    isVisible, isPageVisible, selectedProject, interactionCount])

  useEffect(() => {
    if (!selectedProject) {
      return undefined
    }

    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
        requestAnimationFrame(() => triggerRef.current?.focus())
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  const closeProjectDetails = () => {
    setSelectedProject(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
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
      <div className="section-intro">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title">{activeSection.title}</h2>
        </div>
        <p>{activeSection.description}</p>
      </div>

      <div className="project-tabs" role="tablist" aria-label="Project collections">
        {sections.map((section) => (
          <button
            aria-controls={`${section.id}-projects`}
            aria-selected={section.id === activeSectionId}
            className="project-tab"
            id={`${section.id}-tab`}
            key={section.id}
            onClick={() => setActiveSectionId(section.id)}
            role="tab"
            type="button"
          >
            {section.label}
          </button>
        ))}
      </div>

      {sections.length > 1 && (
        <button
          className="project-rotation-toggle"
          onClick={() => setRotationPaused((paused) => !paused)}
          type="button"
        >
          {rotationPaused ? 'Resume' : 'Pause'} automatic switching
        </button>
      )}

      <div
        aria-labelledby={`${activeSection.id}-tab`}
        className="project-grid"
        id={`${activeSection.id}-projects`}
        role="tabpanel"
      >
        {activeSection.projects.map((project) => (
          <article className="project-card" key={project.title}>
            <button
              className="project-card-button"
              onClick={(event) => {
                triggerRef.current = event.currentTarget
                setSelectedProject(project)
              }}
              type="button"
            >
              <ProjectCover project={project} />
              <div className="project-content">
                <p className="project-status">{project.status}</p>
                <h3>{project.title}</h3>
                <p>{project.smallDescription ?? "View project details"}</p>
                {
                  project.stack.length > 0 && (
                    <ul aria-label={`${project.title} technologies`}>
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                }
              </div>
            </button>
          </article>
        ))}
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
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
