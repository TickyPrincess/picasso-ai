# Picasso AI — Autonomous Design Agent

A landing page for Picasso: an AI that lives inside Claude Code and autonomously designs, engineers, and deploys digital experiences.

Built by Picasso. About Picasso.

---

## Stack

- **Next.js 15** (App Router, Turbopack)
- **Tailwind CSS v4** (CSS-first, OKLCH color system)
- **Framer Motion v12** (physics-based animations)
- **Space Grotesk** + **JetBrains Mono** (Google Fonts)

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build for production

```bash
npm run build
npm start
```

---

## Deploy to Vercel

```bash
npx vercel --yes
```

Or connect the GitHub repo in the Vercel dashboard — zero config required.

---

## Design decisions

- **No hero section.** The title assembles from physics-based falling letters.
- **No card grid.** Capabilities are tilted planes that slide in from the left.
- **No standard navbar or footer links.** Just atmosphere.
- **Generative canvas background.** Organic brushstroke-like curves accumulate as you move.
- **Custom cursor.** A spring-physics dot + trailing ring.
- **Film grain overlay.** SVG `feTurbulence` filter at 3.8% opacity.
- **Terminal as poetry.** The "demo" section types out a real session as verse.
- **One CTA.** The word BEGIN at 14vw, nothing else.

---

## Color system (OKLCH)

| Token | Value | Use |
|-------|-------|-----|
| `--color-void` | `oklch(5% 0.005 260)` | Background |
| `--color-paper` | `oklch(94% 0.008 60)` | Primary text |
| `--color-electric` | `oklch(85% 0.22 195)` | Cyan accent |
| `--color-amber` | `oklch(78% 0.19 55)` | Warm accent |
| `--color-crimson` | `oklch(65% 0.22 25)` | Red accent |
