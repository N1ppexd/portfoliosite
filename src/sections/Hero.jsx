import portrait from '../pictures/image.png'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">
          Niilo Hanni
        </h1>
        <p className="hero-copy">
          10 years of experience building in Unity. 
          Highly interested in other areas of technology and software development.
        </p>
        <p className="hero-copy">
          Bachelors degree studies in Information Technology since 2024.
        </p>
        <p className="email-link">
          <a href="mailto:niilo.hanni@gmail.com">
            niilo.hanni@gmail.com
          </a>
        </p>
        <div className="hero-actions">
          <a className="button" href="#projects">
            View my work <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href="#contact">
            Contact me
          </a>
        </div>
      </div>
      <img className="hero-portrait" src={portrait} alt="Niilo Hanni" />
    </section>
  )
}

export default Hero
