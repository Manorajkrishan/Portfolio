'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AmbientBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setOffset({
        x: (event.clientX / window.innerWidth - 0.5) * 40,
        y: (event.clientY / window.innerHeight - 0.5) * 40,
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-1/4 left-[-10%] h-[55vh] w-[55vw] rounded-full bg-blue-600/20 blur-[120px]"
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      />
      <motion.div
        className="absolute top-[20%] right-[-5%] h-[45vh] w-[45vw] rounded-full bg-violet-600/20 blur-[120px]"
        animate={{ x: -offset.x * 0.6, y: offset.y * 0.6 }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] h-[40vh] w-[40vw] rounded-full bg-cyan-500/10 blur-[100px]"
        animate={{ x: offset.x * 0.4, y: -offset.y * 0.4 }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      />
      <div className="noise-overlay absolute inset-0" />
    </div>
  )
}
