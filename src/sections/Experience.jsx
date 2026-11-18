

function Experience({ experience }) {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
      <dl>
        {experience.map(([term, description]) => (
          <div key={term}>
            <dt className="experience-term">{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Experience
