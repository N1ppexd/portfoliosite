import { useRef } from 'react'

const SWIPE_THRESHOLD = 50

export function useSwipe(onSwipe) {
  const startRef = useRef(null)

  const onTouchStart = (event) => {
    if (event.touches.length !== 1) {
      startRef.current = null
      return
    }

    const touch = event.touches[0]
    startRef.current = { id: touch.identifier, x: touch.clientX, y: touch.clientY }
  }

  const onTouchMove = (event) => {
    if (event.touches.length !== 1) startRef.current = null
  }

  const onTouchEnd = (event) => {
    const start = startRef.current
    startRef.current = null
    if (!start || event.touches.length !== 0) return

    const touch = Array.from(event.changedTouches).find((item) => item.identifier === start.id)
    if (!touch) return

    const deltaX = touch.clientX - start.x
    const deltaY = touch.clientY - start.y
    if (Math.abs(deltaX) <= Math.abs(deltaY)) return

    if (Math.abs(deltaX) >= 10 && event.cancelable) event.preventDefault()
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return

    onSwipe(deltaX < 0 ? 1 : -1)
  }

  const onTouchCancel = () => {
    startRef.current = null
  }

  return { onTouchStart, onTouchMove, onTouchEnd, onTouchCancel }
}
