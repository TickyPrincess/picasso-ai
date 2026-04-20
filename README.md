<div align="center">

# PICASSO

### Autonomous AI Design & Engineering Agent

**An AI that lives inside Claude Code.**  
It designs. It builds. It ships. Before you finish the sentence.

<br/>

[![Live Demo](https://img.shields.io/badge/Live_Demo-picasso--agent.vercel.app-black?style=flat-square&logo=vercel)](https://picasso-agent.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0055?style=flat-square&logo=framer&logoColor=white)](https://framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/TickyPrincess/picasso-ai/ci.yml?style=flat-square&label=CI)](https://github.com/TickyPrincess/picasso-ai/actions)

<br/>

[**→ picasso-agent.vercel.app**](https://picasso-agent.vercel.app)

</div>

---

## What is Picasso

Picasso is an autonomous agent that runs inside [Claude Code](https://claude.ai/code). You describe what you want — a direction, a tension, a vague feeling — and Picasso collapses it into a complete, deployed digital experience.

It handles the full cycle:

| Phase | What it does |
|-------|-------------|
| **Design** | Visual language, spatial hierarchy, interaction character — from first principles, never templates |
| **Engineer** | Full-stack Next.js: components, APIs, auth, database — everything typed |
| **Deploy** | GitHub repo creation, Vercel connection, environment config — zero manual steps |

This repository is the landing page for Picasso. Built by Picasso. About Picasso.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 15](https://nextjs.org) — App Router, Turbopack |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) — CSS-first config, OKLCH color system |
| Animation | [Framer Motion v12](https://framer.com/motion) — physics-based, spring-driven |
| Typography | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| Background | Canvas 2D API — generative brushstroke accumulation |
| Deployment | [Vercel](https://vercel.com) |

---

## Design decisions

This is not a landing page. It's an atmosphere.

- **No hero section** — the title assembles from physics-based falling letters with per-character rotation
- **No card grid** — capabilities are tilted planes at ±2° that slide in from the left
- **Generative canvas background** — organic Bezier brushstrokes accumulate as you move, unique on every visit
- **Custom cursor** — spring-physics dot (600 stiffness) with lagging ring trail (120 stiffness)
- **Film grain overlay** — SVG `feTurbulence` filter at 3.8% opacity, no external assets
- **Terminal as poetry** — the demo section types out a real Claude session as verse
- **One CTA** — the word `BEGIN` at 14vw. Nothing else.

### Color system (OKLCH)

```css
--color-void:     oklch(5%  0.005 260)   /* background       */
--color-paper:    oklch(94% 0.008  60)   /* primary text     */
--color-electric: oklch(85% 0.22  195)   /* electric cyan    */
--color-amber:    oklch(78% 0.19   55)   /* warm amber       */
--color-crimson:  oklch(65% 0.22   25)   /* deep red         */
```

---

## Project structure

```
picasso-ai/
├── app/
│   ├── globals.css           # Tailwind v4 + OKLCH design tokens
│   ├── layout.tsx            # Root layout, Google Fonts via next/font
│   └── page.tsx              # Page composition
├── components/
│   ├── GenerativeCanvas.tsx  # Canvas 2D brushstroke background
│   ├── CustomCursor.tsx      # Spring-physics cursor + trailing ring
│   ├── NoiseTexture.tsx      # SVG feTurbulence grain overlay
│   ├── EntryScene.tsx        # Opening — physics letter assembly
│   ├── Manifesto.tsx         # Mission statement — offset type planes
│   ├── CapabilityPlanes.tsx  # Features — tilted panels
│   ├── TerminalPoem.tsx      # Typing terminal as narrative
│   └── ClosingFrame.tsx      # CTA — single word at 14vw
├── .github/
│   └── workflows/ci.yml      # Type check + build on every push
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

---

## Getting started

```bash
# Clone
git clone https://github.com/TickyPrincess/picasso-ai.git
cd picasso-ai

# Install
npm install

# Develop
npm run dev
# → http://localhost:3000

# Type check
npx tsc --noEmit

# Build
npm run build
```

### Deploy to Vercel

```bash
npx vercel --yes
```

Zero configuration required — Next.js is auto-detected.

---

## Contributing

Pull requests are welcome. For significant changes, open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/my-change`
3. Commit your changes: `git commit -m 'feat: add my change'`
4. Push to the branch: `git push origin feature/my-change`
5. Open a pull request

---

## License

[MIT](./LICENSE) — free to use, modify, and distribute.

---

<div align="center">

Built with [Claude Code](https://claude.ai/code) · Deployed on [Vercel](https://vercel.com)

</div>
