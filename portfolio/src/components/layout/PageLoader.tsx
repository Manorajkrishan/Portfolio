'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1400)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        exit={{ y: '-100%' }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="text-center">
          <motion.p
            className="text-display text-5xl font-extrabold tracking-tight md:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            MK<span className="text-accent">.</span>
          </motion.p>
          <motion.div
            className="mx-auto mt-6 h-1 bg-border"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
