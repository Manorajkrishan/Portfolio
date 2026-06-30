import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn('studio-btn', variant === 'ghost' && 'studio-btn-ghost', className)}
      {...props}
    >
      {children}
    </button>
  )
}
