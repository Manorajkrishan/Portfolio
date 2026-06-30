import { portfolio } from '@/data'

const items = [
  ...portfolio.hero.badges,
  'Full Stack',
  'AI/ML',
  'Quality Assurance',
  'Product Engineering',
  'Colombo · Remote',
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y-2 border-border bg-card py-3" aria-hidden>
      <div className="marquee-track gap-10 px-4 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            {item}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
