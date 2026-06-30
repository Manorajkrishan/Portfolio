'use client'

import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { portfolio } from '@/data'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const activeId = useActiveSection(portfolio.nav.map((item) => item.id))

  useEffect(() => setMounted(true), [])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <button onClick={() => scrollTo('hero')} className="text-display text-lg font-extrabold tracking-tight">
            MK<span className="text-accent">.</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {portfolio.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  'border-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition',
                  activeId === item.id
                    ? 'border-border bg-primary text-primary-foreground shadow-[3px_3px_0_var(--shadow-color)]'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="border-2 border-border bg-card p-2 shadow-[3px_3px_0_var(--shadow-color)]"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <button
              className="border-2 border-border bg-card p-2 shadow-[3px_3px_0_var(--shadow-color)] lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-x-0 top-[65px] z-40 border-b-2 border-border bg-background p-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {portfolio.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  'border-2 px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.14em]',
                  activeId === item.id ? 'border-border bg-primary text-primary-foreground' : 'border-border bg-card'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
