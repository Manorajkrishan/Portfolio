'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const HeroScene = dynamic(() => import('./HeroScene').then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-transparent" />
  ),
})

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/20 to-[#030712]" />
    </div>
  )
}
