import { useEffect, useRef, useState } from 'react'
import { ChevronIcon } from '../components/ChevronIcon.jsx'

const ROTATION_DELAY = 10_000

function Involvements({ involvements }) {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const videoInteractedRef = useRef(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [rotationPaused, setRotationPaused] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [isHovered, setIsHovered] = useState(false)
  const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPageVisible, setIsPageVisible] = useState(!document.hidden)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const activeInvolvement = involvements[activeIndex]

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.1 })
    observer.observe(sectionRef.current)

    const handleVisibilityChange = () => setIsPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = (event) => {
      setPrefersReducedMotion(event.matches)
      if (event.matches) {
        setRotationPaused(true)
        if (!videoInteractedRef.current) videoRef.current?.pause()
      }
    }
    reducedMotion.addEventListener('change', handleMotionChange)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      reducedMotion.removeEventListener('change', handleMotionChange)
    }
  }, [])

  useEffect(() => {
    if (
      involvements.length < 2 ||
      rotationPaused ||
      isHovered ||
      hasKeyboardFocus ||
      !isVisible ||
      !isPageVisible ||
      isVideoPlaying
    ) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      videoInteractedRef.current = false
      setActiveIndex((currentIndex) => (currentIndex + 1) % involvements.length)
    }, ROTATION_DELAY)

    return () => window.clearTimeout(timer)
  }, [
    activeIndex,
    hasKeyboardFocus,
    involvements.length,
    isHovered,
    isPageVisible,
    isVideoPlaying,
    isVisible,
    rotationPaused,
  ])

  const moveToProject = (direction) => {
    videoInteractedRef.current = false
    setIsVideoPlaying(false)
    setActiveIndex((currentIndex) =>
      (currentIndex + direction + involvements.length) % involvements.length,
    )
  }

  const handleVideoInteraction = (event) => {
    videoInteractedRef.current = true
    setIsVideoPlaying(!event.currentTarget.paused)
  }

  return (
    <section
      aria-labelledby="involvements-title"
      className="section involvements"
      id="involvements"
      ref={sectionRef}
    >
      <h2 id="involvements-title">Showcase.</h2>
      <p className="involvements-intro">
        A few of the larger games and teams I have contributed to.
      </p>
      <div
        aria-label="Featured projects"
        aria-roledescription="carousel"
        className="involvement-carousel"
        data-project-theme={activeInvolvement.theme}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setHasKeyboardFocus(false)
          }
        }}
        onFocusCapture={(event) => {
          setHasKeyboardFocus(event.target.matches(':focus-visible'))
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="region"
      >
        <div className="involvement-carousel__controls">
          <button
            aria-pressed={rotationPaused}
            className="project-rotation-toggle"
            onClick={() => setRotationPaused((paused) => !paused)}
            type="button"
          >
            {rotationPaused ? 'Resume' : 'Pause'} project rotation
          </button>
          <div className="involvement-carousel__navigation">
            <button
              aria-label="Previous featured project"
              className="project-section-nav"
              onClick={() => moveToProject(-1)}
              type="button"
            >
              <ChevronIcon direction="left" />
            </button>
            <span aria-atomic="true" aria-live={rotationPaused ? 'polite' : 'off'}>
              {activeIndex + 1} / {involvements.length}
            </span>
            <button
              aria-label="Next featured project"
              className="project-section-nav"
              onClick={() => moveToProject(1)}
              type="button"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
        <article
          aria-label={`${activeIndex + 1} of ${involvements.length}: ${activeInvolvement.title}`}
          aria-roledescription="slide"
          className="involvement-card"
          key={activeInvolvement.title}
          role="group"
        >
          <div className="involvement-card__content">
            <p className="project-status">Featured project</p>
            <h3>{activeInvolvement.title}</h3>
            <p>{activeInvolvement.description}</p>
            <a
              className="involvement-card__link"
              href={activeInvolvement.url}
              rel="noreferrer"
              target="_blank"
            >
              Explore project <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="involvement-media">
            {activeInvolvement.media.type === 'video' ? (
              <video
                aria-label={activeInvolvement.media.alt}
                autoPlay={activeInvolvement.media.autoPlay && !prefersReducedMotion}
                controls
                loop={activeInvolvement.media.autoPlay}
                muted={activeInvolvement.media.autoPlay}
                onEnded={() => setIsVideoPlaying(false)}
                onKeyDownCapture={handleVideoInteraction}
                onPause={() => setIsVideoPlaying(false)}
                onPlay={() => setIsVideoPlaying(
                  !activeInvolvement.media.autoPlay || videoInteractedRef.current,
                )}
                onPointerDownCapture={handleVideoInteraction}
                playsInline
                preload="none"
                poster={activeInvolvement.media.poster}
                ref={videoRef}
              >
                <source src={activeInvolvement.media.src} type="video/mp4" />
                Your browser does not support embedded videos.
              </video>
            ) : (
              <img
                alt={activeInvolvement.media.alt}
                loading="lazy"
                src={activeInvolvement.media.src}
              />
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Involvements
