function Skills({ skills }) {
  return (
    <section className="section skills" aria-labelledby="skills-title">
      <p className="eyebrow">Capabilities</p>
      <h2 id="skills-title">How I like to work.</h2>
      <dl>
        {skills.map(([term, description]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Skills
