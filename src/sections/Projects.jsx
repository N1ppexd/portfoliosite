import { useState } from 'react'

function Projects({ sections }) {
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id)
  const activeSection = sections.find((section) => section.id === activeSectionId)

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
            <a
              className="project-link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title}`}
            >
              <img className="project-art" src={project.image} alt="" />
              <div className="project-content">
                <p className="project-status">{project.status}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.stack.length > 0 && (
                  <ul aria-label={`${project.title} technologies`}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
