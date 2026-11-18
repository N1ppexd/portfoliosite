import { ProjectCover } from './ProjectCover.jsx'

export function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-card">
      <button
        className="project-card-button"
        onClick={(event) => onSelect(project, event.currentTarget)}
        type="button"
      >
        <ProjectCover project={project} />
        <div className="project-content">
          <p className="project-status">{project.status}</p>
          <h3>{project.title}</h3>
          <p>{project.smallDescription ?? 'View project details'}</p>
          {project.stack.length > 0 && (
            <ul aria-label={`${project.title} technologies`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </button>
    </article>
  )
}
