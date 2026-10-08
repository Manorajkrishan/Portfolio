import { portfolio } from '@/data'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:text-left">
        <div>
          <p className="text-display font-bold">
            {portfolio.person.name}
            <span className="text-gradient">.</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{portfolio.person.tagline}</p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {portfolio.person.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
