import portrait from '../pictures/image.png'

function Hero() {
  const name = 'Niilo Hanni'

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">
          {name}
          <span aria-hidden="true" className="hero-title__glitch hero-title__glitch--red">{name}</span>
          <span aria-hidden="true" className="hero-title__glitch hero-title__glitch--blue">{name}</span>
        </h1>
        <p className="hero-copy">
          I have many years of experience building games with Unity and C#.
          I am also highly interested in other areas of technology and software development.
        </p>
        <p className="hero-copy">
          I have been studying for a bachelor's degree in Information Technology since 2024.
        </p>
        <p className="email-link">
          <a href="mailto:niilohanni@gmail.com">
            niilohanni@gmail.com
          </a>
        </p>
        <div className="hero-actions">
          <a className="button" href="#involvements">
            View my work <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href="#contact">
            Contact me
          </a>
        </div>
      </div>
      <div className="hero-portrait-frame">
        <img className="hero-portrait" src={portrait} alt="Niilo Hanni" />
      </div>
    </section>
  )
}

export default Hero
