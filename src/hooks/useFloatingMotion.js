import { useEffect, useRef, useState } from 'react'

export function useFloatingMotion() {
  const [motion, setMotion] = useState({ x: 0, y: 0, rotate: 0 })
  const frameRef = useRef(0)

  useEffect(() => {
    const startedAt = performance.now()

    const animate = (timestamp) => {
      const t = (timestamp - startedAt) / 1000
      setMotion({
        x: Math.sin(t * 0.7) * 10,
        y: Math.cos(t * 0.5) * 14,
        rotate: Math.sin(t * 0.35) * 6,
      })
      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return motion
}
