function Skills({ skills }) {
  return (
    <section className="section skills" aria-labelledby="skills-title" id="skills" href="#skills">
      <p className="eyebrow">Capabilities</p>
      <h2 id="skills-title">My skills</h2>
      <dl>
        {skills.map(([term, description]) => (
          <div key={term}>
            <dt className="experience-term">{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Skills
