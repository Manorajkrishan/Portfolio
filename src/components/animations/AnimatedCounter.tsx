'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ value, suffix = '', className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, motionValue, value])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(Math.round(latest))
    })
    return unsubscribe
  }, [spring])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
