import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import skydiver from '../pictures/skydivingPic.png'
import skydiver2 from '../pictures/skydivelandpic.png'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Skydiving() {
  const skydiverRef = useRef(null)
  const [hasOpenedParachute, setHasOpenedParachute] = useState(false)

  useGSAP(() => {
    const updateSprite = () => {
      setHasOpenedParachute((window.scrollY / (document.body.scrollHeight - window.innerHeight)) > 0.5)
    }

    ScrollTrigger.create({
      start: 0,
      end: () => ScrollTrigger.maxScroll(window),
      onUpdate: updateSprite,
      onRefresh: updateSprite,
    })
    updateSprite()

    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const fall = gsap.timeline({
        scrollTrigger: {
          start: 0,
          end: () => ScrollTrigger.maxScroll(window),
          scrub: true,
          invalidateOnRefresh: true,
        },
      })

      fall.to(skydiverRef.current, {
        y: () => Math.max(0, window.innerHeight * 0.9 - skydiverRef.current.clientHeight),
        duration: 2,
        ease: 'none',
      }, 0)
      fall.to(skydiverRef.current, {
        keyframes: {
          rotation: [0, 8, -8, 8, -8, 8, -8, 8, 0],
          easeEach: 'sine.inOut',
        },
        duration: 2,
        ease: 'none',
      }, 0)
      fall.to(skydiverRef.current, {
        keyframes: {
          //x: [0, 0.25 * window.innerWidth, 0.5 * window.innerWidth, 0.75 * window.innerWidth, window.innerWidth - skydiverRef.current.clientWidth],
          x: [0, 10, 0 , 10, 0],
          easeEach: 'sine.inOut',
        },
        duration: 1,
        ease: 'none',
      }, 0)

      const observer = new ResizeObserver(() => ScrollTrigger.refresh())
      observer.observe(document.body)
      observer.observe(skydiverRef.current)
      return () => observer.disconnect()
    })

    return () => media.revert()
  })

  return (
    <div className="skydiving-position" aria-hidden="true">
      <img className="skydiver" ref={skydiverRef} src={hasOpenedParachute ? skydiver2 : skydiver} alt="" width="658" height="493" />
    </div>
  )
}

export default Skydiving
