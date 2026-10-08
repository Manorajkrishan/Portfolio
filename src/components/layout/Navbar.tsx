'use client'

import { motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { portfolio } from '@/data'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const activeId = useActiveSection(portfolio.nav.map((item) => item.id))

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
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

          <nav className="hidden items-center gap-1 rounded-full border border-border bg-card/80 p-1 backdrop-blur md:flex">
            {portfolio.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  activeId === item.id
                    ? 'bg-gradient-to-r from-indigo-500 to-teal-400 text-white shadow-md'
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
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition hover:text-foreground"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              className="rounded-full border border-border bg-card p-2.5 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-border bg-card p-3 shadow-xl md:hidden"
        >
          {portfolio.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                'block w-full rounded-xl px-4 py-3 text-left text-sm font-medium',
                activeId === item.id ? 'bg-muted text-foreground' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </>
  )
}
