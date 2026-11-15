function Projects({ projects }) {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="section-intro">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title">Projects with purpose.</h2>
        </div>
        <p>
          A few things I’ve built, explored, and continue to improve.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className={`project-art project-art-${index + 1}`}>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="project-content">
              <p className="project-status">{project.status}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
