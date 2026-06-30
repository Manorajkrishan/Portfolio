import { portfolio } from '@/data'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold text-gradient">{portfolio.person.name}</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">{portfolio.person.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {portfolio.footer.services.map((service) => (
            <span key={service} className="rounded-full border border-white/10 px-3 py-1">
              {service}
            </span>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} {portfolio.person.name}. Engineered with Next.js, Three.js, Framer Motion, and GSAP.
      </p>
    </footer>
  )
}
