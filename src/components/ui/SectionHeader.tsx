import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle: string
  className?: string
  children?: ReactNode
}

export function SectionHeader({ title, subtitle, className, children }: SectionHeaderProps) {
  return (
    <div className={cn('mx-auto mb-12 max-w-2xl text-center', className)}>
      <h2 className="text-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-3 text-muted-foreground">{subtitle}</p>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400" />
      {children}
    </div>
  )
}
