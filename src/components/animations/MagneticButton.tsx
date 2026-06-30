'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  type = 'button',
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18 })
  const springY = useSpring(y, { stiffness: 260, damping: 18 })

  const handleMove = (event: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-shadow',
        'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-[0_0_30px_var(--glow-blue)]',
        'before:absolute before:inset-0 before:translate-y-full before:bg-white/20 before:transition-transform hover:before:translate-y-0',
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="border-0 bg-transparent p-0">
      {content}
    </button>
  )
}
