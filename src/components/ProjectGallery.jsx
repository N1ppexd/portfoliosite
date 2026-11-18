import { useRef, useState } from 'react'
import { ChevronIcon } from './ChevronIcon.jsx'

const SWIPE_THRESHOLD = 50

export function ProjectGallery({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const touchStartRef = useRef(null)

  if (!project.gallery || project.gallery.length === 0) {
    return null
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.gallery.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === project.gallery.length - 1 ? 0 : prevIndex + 1))
  }

  const handleTouchStart = (event) => {
    const touch = event.touches[0]
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchEnd = (event) => {
    if (!touchStartRef.current) return

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - touchStartRef.current.x
    const deltaY = touch.clientY - touchStartRef.current.y
    touchStartRef.current = null

    // Ignore short or mostly vertical gestures so normal page scrolling still works.
    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) <= Math.abs(deltaY)) return

    if (deltaX < 0) {
      handleNext()
    } else {
      handlePrevious()
    }

    event.preventDefault()
  }

  return (
    <div className="project-gallery">
      <div
        className="project-gallery-container"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <img
          className="project-gallery-image"
          src={project.gallery[currentImageIndex]}
          alt={`${project.title} gallery image ${currentImageIndex + 1}`}
        />
        {project.gallery.length > 1 && (
          <>
            <button
              className="project-gallery-nav project-gallery-prev"
              onClick={handlePrevious}
              type="button"
              aria-label="Previous image"
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              className="project-gallery-nav project-gallery-next"
              onClick={handleNext}
              type="button"
              aria-label="Next image"
            >
              <ChevronIcon direction="right" />
            </button>
            <div className="project-gallery-indicators">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  className={`project-gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  type="button"
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === currentImageIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
