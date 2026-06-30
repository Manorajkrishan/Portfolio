'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 2200

    const tick = (now: number) => {
      const elapsed = now - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(next)
      if (elapsed < duration) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(onComplete, 350)
      }
    }

    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]"
        exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative flex flex-col items-center gap-8">
          <motion.div
            className="relative flex h-28 w-28 items-center justify-center"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border border-blue-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-3 rounded-full border border-violet-500/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
            <div className="text-3xl font-semibold tracking-[0.3em] text-gradient">MK</div>
          </motion.div>

          <div className="w-56">
            <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
              <span>Initializing experience</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <motion.p
            className="max-w-sm text-center text-sm text-slate-400"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Assembling neural layers, particles, and premium motion systems
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
