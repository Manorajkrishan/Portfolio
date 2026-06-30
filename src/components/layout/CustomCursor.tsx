'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { useMediaQuery } from '@/hooks/useActiveSection'

export function CustomCursor() {
  const isFinePointer = useMediaQuery('(pointer: fine)')
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useSpring(cursorX, { stiffness: 220, damping: 22 })
  const ringY = useSpring(cursorY, { stiffness: 220, damping: 22 })

  useEffect(() => {
    if (!isFinePointer) return

    document.body.classList.add('custom-cursor-active')

    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
    }

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [cursorX, cursorY, isFinePointer])

  if (!isFinePointer) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[90] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 mix-blend-screen"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[89] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/50"
        style={{ x: ringX, y: ringY }}
      />
    </>
  )
}
