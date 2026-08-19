'use client'

export function GradientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 left-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[100px] dark:bg-indigo-500/25" />
      <div className="absolute top-[20%] right-[-5%] h-[360px] w-[360px] rounded-full bg-teal-400/20 blur-[90px] dark:bg-teal-400/15" />
      <div className="absolute bottom-[-10%] left-[25%] h-[300px] w-[300px] rounded-full bg-sky-400/15 blur-[80px]" />
    </div>
  )
}
