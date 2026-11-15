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
          Game developer with more than a decade of experience building in Unity.
        </p>
        <p className="hero-copy">
          Information technology student at Oulu University of Applied Sciences since 2024.
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
