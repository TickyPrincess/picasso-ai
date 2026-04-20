'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const planes = [
  {
    n: '01',
    title: 'Design',
    accentColor: 'oklch(85% 0.22 195)',
    description:
      'Defines visual language, spatial hierarchy, and interaction character. Not templates — original compositions assembled from first principles.',
    tools: ['Framer Motion', 'Three.js', 'GSAP', 'Canvas API', 'Tailwind v4'],
    tilt: -2.2,
    xOffset: 0,
  },
  {
    n: '02',
    title: 'Engineer',
    accentColor: 'oklch(78% 0.19 55)',
    description:
      'Writes production-grade Next.js across the full stack. State, APIs, databases, auth — everything typed, nothing templated.',
    tools: ['Next.js 15', 'TypeScript', 'Supabase', 'Better Auth', 'Edge Runtime'],
    tilt: 1.8,
    xOffset: 40,
  },
  {
    n: '03',
    title: 'Deploy',
    accentColor: 'oklch(65% 0.22 25)',
    description:
      'Creates the repo, pushes the code, configures Vercel, wires environment variables. Zero manual steps between idea and live URL.',
    tools: ['Vercel', 'GitHub API', 'CI/CD', 'Preview URLs', 'Edge Config'],
    tilt: -1.5,
    xOffset: 20,
  },
]

export default function CapabilityPlanes() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-36 px-6 md:px-14 overflow-hidden">
      {/* Giant section number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
        aria-hidden="true"
        className="absolute right-[-2vw] top-8 font-display font-bold select-none pointer-events-none leading-none"
        style={{
          fontSize: 'clamp(10rem, 28vw, 26rem)',
          color: 'oklch(10% 0.008 260)',
        }}
      >
        02
      </motion.div>

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="font-mono text-[10px] tracking-[0.4em] uppercase mb-16 relative z-10"
        style={{ color: 'oklch(38% 0.01 260)' }}
      >
        ◆ Capabilities
      </motion.p>

      <div className="relative z-10 space-y-3">
        {planes.map((plane, i) => (
          <motion.div
            key={plane.n}
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: i * 0.14,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              rotate: `${plane.tilt}deg`,
              marginLeft: `${plane.xOffset}px`,
            }}
            className="group relative overflow-hidden"
          >
            {/* Background panel */}
            <div
              className="relative px-8 py-10 md:px-14 md:py-12 transition-all duration-500"
              style={{
                backgroundColor: 'oklch(8% 0.007 260)',
                border: '1px solid oklch(16% 0.01 260)',
              }}
            >
              <div className="flex items-start gap-8 md:gap-14">
                {/* Number */}
                <span
                  className="font-mono font-medium text-5xl md:text-6xl leading-none shrink-0 tabular-nums"
                  style={{ color: plane.accentColor, opacity: 0.35 }}
                >
                  {plane.n}
                </span>

                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <h3
                    className="font-display font-bold leading-[1.0] mb-5 transition-transform duration-300 group-hover:translate-x-2"
                    style={{
                      fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
                      color: plane.accentColor,
                    }}
                  >
                    {plane.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-display font-light leading-relaxed max-w-xl mb-6"
                    style={{
                      fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                      color: 'oklch(55% 0.01 260)',
                    }}
                  >
                    {plane.description}
                  </p>

                  {/* Tool tags */}
                  <div className="flex flex-wrap gap-2">
                    {plane.tools.map(tool => (
                      <span
                        key={tool}
                        className="font-mono text-[10px] px-3 py-1 tracking-wider"
                        style={{
                          border: '1px solid oklch(20% 0.01 260)',
                          color: 'oklch(40% 0.01 260)',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right orbital accent */}
                <div className="hidden lg:flex shrink-0 self-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                    className="w-14 h-14 rounded-full"
                    style={{
                      border: `1px solid ${plane.accentColor}`,
                      opacity: 0.12,
                    }}
                  />
                </div>
              </div>

              {/* Bottom accent line — reveals on mount */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.35 + i * 0.14 }}
                style={{
                  transformOrigin: 'left',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  backgroundColor: plane.accentColor,
                  opacity: 0.25,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
