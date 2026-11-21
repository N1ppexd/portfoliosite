function Skills({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <div className="skill-card" key={skill}>
          <span>{skill}</span>
        </div>
      ))}
    </div>
  )
}

export default Skills
