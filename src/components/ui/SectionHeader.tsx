import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  index: string
  label: string
  title: string
  description?: string
  className?: string
  children?: ReactNode
}

export function SectionHeader({ index, label, title, description, className, children }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 grid gap-6 border-b-2 border-border pb-8 md:grid-cols-[auto_1fr]', className)}>
      <div className="section-index">{index}</div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{label}</p>
        <h2 className="text-display mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
        {description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
        {children}
      </div>
    </div>
  )
}
