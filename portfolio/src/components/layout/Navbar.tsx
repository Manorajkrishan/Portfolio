'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { portfolio } from '@/data'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const activeId = useActiveSection(portfolio.nav.map((item) => item.id))
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 120], [0.85, 1])

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const current = window.scrollY
      setHidden(current > lastY && current > 120)
      lastY = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        style={{ opacity }}
        className={cn(
          'fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(1120px,calc(100%-2rem))] items-center justify-between rounded-2xl px-4 py-3 transition-transform duration-500 glass-panel',
          hidden && !open ? '-translate-y-28' : 'translate-y-0'
        )}
      >
        <button onClick={() => scrollTo('hero')} className="text-sm font-semibold tracking-[0.28em]">
          <span className="text-gradient">MK</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {portfolio.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                'relative px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground',
                activeId === item.id && 'text-foreground'
              )}
            >
              {item.label}
              {activeId === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-2 bottom-1 h-px bg-gradient-to-r from-blue-500 to-violet-500"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            className="rounded-full p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 top-20 z-40 rounded-2xl p-4 glass-panel md:hidden"
        >
          <div className="flex flex-col gap-1">
            {portfolio.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  'rounded-xl px-4 py-3 text-left text-sm',
                  activeId === item.id ? 'bg-secondary text-foreground' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}
