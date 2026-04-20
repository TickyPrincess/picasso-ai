'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stanza = [
  { text: 'Most AI tools respond.', dim: true, indent: 0 },
  { text: 'Picasso initiates.', dim: false, indent: 80 },
]

const proseLines = [
  { text: 'You describe a direction.', dim: true },
  { text: 'A tension.', dim: true },
  { text: 'A vague feeling of what it should become.', dim: true },
  { text: '', gap: true },
  { text: 'Picasso collapses it.', dim: false },
  { text: 'Into working code,', dim: true },
  { text: 'deployed to production,', dim: true },
  { text: 'before the next sentence.', dim: false },
]

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-36 px-6 md:px-14 lg:px-24 overflow-hidden"
    >
      {/* Giant background section number */}
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
        01
      </motion.div>

      <div className="relative z-10 max-w-5xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] tracking-[0.4em] uppercase mb-16"
          style={{ color: 'oklch(38% 0.01 260)' }}
        >
          ◆ Why it exists
        </motion.p>

        {/* Two-line statement */}
        <div className="mb-24 space-y-1">
          {stanza.map((line, i) => (
            <div key={i} style={{ paddingLeft: `${line.indent}px` }}>
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.95,
                  delay: i * 0.16,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display font-bold leading-[1.05]"
                style={{
                  fontSize: 'clamp(2.4rem, 7.5vw, 7rem)',
                  color: line.dim
                    ? 'oklch(45% 0.01 260)'
                    : 'oklch(85% 0.22 195)',
                }}
              >
                {line.text}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Prose — offset to the right, smaller */}
        <div className="ml-auto max-w-xl space-y-[2px]">
          {proseLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.75,
                delay: 0.3 + i * 0.055,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`font-display leading-relaxed ${
                'gap' in line && line.gap ? 'h-5' : ''
              }`}
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                color: line.dim
                  ? 'oklch(48% 0.01 260)'
                  : 'oklch(94% 0.008 60)',
                fontWeight: line.dim ? 300 : 500,
              }}
            >
              {!('gap' in line && line.gap) ? line.text : null}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
