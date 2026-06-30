import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Manoraj Krishan | Full Stack Developer & AI Engineer',
  description:
    'Premium immersive portfolio showcasing QA engineering, full-stack development, AI/ML systems, and high-performance product experiences.',
  keywords: [
    'Manoraj Krishan',
    'Full Stack Developer',
    'AI Engineer',
    'QA Engineer',
    'Next.js',
    'Portfolio',
  ],
  openGraph: {
    title: 'Manoraj Krishan | Full Stack Developer & AI Engineer',
    description:
      'Cinematic portfolio experience featuring AI systems, full-stack products, and premium motion design.',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
