import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import './globals.css'

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Manoraj Krishan | Full Stack Developer & AI Engineer',
  description:
    'Portfolio of Manoraj Krishan — QA engineer, full-stack developer, and AI/ML engineer building reliable software products.',
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
      'Engineering portfolio spanning QA, full-stack products, and applied AI systems.',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
