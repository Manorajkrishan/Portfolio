import { portfolio } from '@/data'

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-display text-2xl font-extrabold">
            {portfolio.person.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{portfolio.person.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {portfolio.footer.services.map((service) => (
            <span key={service} className="border-2 border-border bg-background px-3 py-1 text-xs font-medium">
              {service}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-border px-4 py-4">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} {portfolio.person.name}. Built with Next.js & TypeScript.
        </p>
      </div>
    </footer>
  )
}
