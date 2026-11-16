import { useEffect, useRef, useState } from 'react'

function Projects({ sections }) {
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id)
  const [selectedProject, setSelectedProject] = useState(null)
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)
  const activeSection = sections.find((section) => section.id === activeSectionId)

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
    <section className="section projects" id="projects" aria-labelledby="projects-title">
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
              <img className="project-art" src={project.image} alt="" />
              <div className="project-content">
                <p className="project-status">{project.status}</p>
                <h3>{project.title}</h3>
                <p>View project details</p>
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
            <img className="project-dialog-art" src={selectedProject.image} alt="" />
            <div className="project-dialog-content">
              <p className="project-status">{selectedProject.status}</p>
              <h3 id="project-details-title">{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
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
