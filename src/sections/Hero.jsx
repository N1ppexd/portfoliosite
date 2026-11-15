import portrait from '../pictures/image.png'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Portfolio / 2026</p>
        <h1 id="hero-title">
          Niilo Hanni
        </h1>
        <h2>
          <span>Game & Backend Developer</span>
        </h2>
        <p className="hero-copy">
          Very experienced in game development and design.
        </p>
        <p className="hero-copy">
          I'm a skilled person studying information technology at Oulu University of Applied Sciences.
        </p>
        <div className="hero-actions">
          <a className="button" href="#projects">
            View selected work <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
      <img className="hero-portrait" src={portrait} alt="Niilo Hanni" />
    </section>
  )
}

export default Hero
