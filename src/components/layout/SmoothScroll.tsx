'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { usePrefersReducedMotion } from '@/hooks/useActiveSection'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.4,
    })

    document.documentElement.classList.add('lenis')

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      document.documentElement.classList.remove('lenis')
      lenis.destroy()
    }
  }, [reducedMotion])

  return <>{children}</>
}
