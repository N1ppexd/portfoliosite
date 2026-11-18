function Skills({ skills }) {
  return (
    <section className="section skills" aria-labelledby="skills-title" id="skills" href="#skills">
      <h2 id="skills-title">My skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
