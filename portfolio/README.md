# Next-Generation Portfolio

Premium cinematic portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js, and Lenis smooth scrolling.

## Quick start

```bash
npm install
npm run dev
```

## Update content

- Main content: `src/data/portfolio.js`
- Extended sections (testimonials, stats, AI pipeline): `src/data/extras.ts`
- Profile image: add to `public/` and update `person.image.src` in the portfolio data file

## Build

```bash
npm run lint
npm run build
npm start
```

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Framer Motion + GSAP-ready animation primitives
- React Three Fiber + Drei (hero 3D scene)
- Lenis smooth scroll
- next-themes (dark/light)
