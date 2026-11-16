

function Experience({ experience }) {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <p className="eyebrow">Experience</p>
      <h2 id="experience-title">Working with teams and ideas.</h2>
      <dl>
        {experience.map(([term, description]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Experience
