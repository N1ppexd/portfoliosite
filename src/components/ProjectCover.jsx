export function ProjectCover({ project, dialog = false }) {
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
