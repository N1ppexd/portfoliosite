const skills = [
  ['Game development', 'Unity, C#, Blender, game design, and game UI design'],
  ['Backend', 'TypeScript and Nakama backend updates for live service games'],
  ['Mobile apps', 'React Native and AI-assisted study helper app development'],
  ['Collaboration', 'Indie game teams, problem-solving, and refactoring'],
]

function Skills() {
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
