function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact me</h2>
      <p>
        Find me on GitHub to see what I'm working on and get in touch, or connect with me on LinkedIn.
      </p>
      <a
        className="button button-light"
        href="https://github.com/N1ppexd"
        target="_blank"
        rel="noreferrer"
      >
        Visit GitHub <span aria-hidden="true">↗</span>
      </a>

      <a
        className="button button-light"
        href="mailto:niilohanni@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        Send Email <span aria-hidden="true">↗</span>
      </a>

      <a
        className="button button-light"
        href="https://www.linkedin.com/in/niilo-hanni-992518257/"
        target="_blank"
        rel="noreferrer"
      >
        Visit LinkedIn <span aria-hidden="true">↗</span>
      </a>
    </section>
  )
}

export default Contact
