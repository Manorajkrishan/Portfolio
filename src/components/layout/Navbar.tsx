'use client'

import { motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'
import { portfolio } from '@/data'
import { useActiveSection } from '@/hooks/useActiveSection'
import { scrollToSection } from '@/lib/scroll'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const navigationIds = useMemo(
    () => ['hero', ...portfolio.nav.map((item) => item.id)],
    []
  )
  const activeId = useActiveSection(navigationIds)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'border-b border-border bg-background/85 py-3 shadow-sm backdrop-blur-xl' : 'bg-transparent py-5'
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <button onClick={() => scrollTo('hero')} className="text-display text-lg font-bold">
            Manoraj<span className="text-gradient">.</span>
          </button>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 rounded-full border border-border bg-card/80 p-1 backdrop-blur md:flex">
            {portfolio.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                aria-current={activeId === item.id ? 'location' : undefined}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  activeId === item.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
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
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition hover:text-foreground"
              >
                {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              className="rounded-full border border-border bg-card p-2.5 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <motion.nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-border bg-card p-3 shadow-xl md:hidden"
        >
          {portfolio.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-current={activeId === item.id ? 'location' : undefined}
              className={cn(
                'block w-full rounded-xl px-4 py-3 text-left text-sm font-medium',
                activeId === item.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </button>
          ))}
        </motion.nav>
      )}
    </>
  )
}
