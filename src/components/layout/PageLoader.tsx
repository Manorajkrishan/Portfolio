'use client'

import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 1800

    const tick = (now: number) => {
      const elapsed = now - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(next)
      if (elapsed < duration) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(onComplete, 300)
      }
    }

    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <p className="text-display text-2xl font-bold">Loading portfolio</p>
          <p className="mt-2 text-4xl font-bold text-gradient">{progress}%</p>
          <div className="mx-auto mt-6 h-2 w-56 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-teal-400 to-sky-400"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export function TopProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-indigo-500 via-teal-400 to-sky-400"
      style={{ scaleX }}
    />
  )
}
