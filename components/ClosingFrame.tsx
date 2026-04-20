'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const WORD = 'BEGIN'

export default function ClosingFrame() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Massive background word */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2.5 }}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontSize: 'clamp(7rem, 32vw, 30rem)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          color: 'oklch(8% 0.007 260)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        GO
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Pre-label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-mono text-[10px] tracking-[0.45em] uppercase mb-10"
          style={{ color: 'oklch(35% 0.01 260)' }}
        >
          Ready when you are
        </motion.p>

        {/* The big CTA word */}
        <motion.button
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.95, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="relative font-display font-bold bg-transparent border-none outline-none select-none"
          style={{
            fontSize: 'clamp(3.5rem, 14vw, 11rem)',
            letterSpacing: '-0.025em',
            lineHeight: 1,
          }}
          aria-label="Begin using Picasso"
        >
          {WORD.split('').map((letter, i) => (
            <motion.span
              key={i}
              animate={
                hovered
                  ? {
                      y: [0, -14, 0],
                      color: [
                        'oklch(94% 0.008 60)',
                        'oklch(85% 0.22 195)',
                        'oklch(94% 0.008 60)',
                      ],
                    }
                  : { y: 0, color: 'oklch(94% 0.008 60)' }
              }
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}

          {/* Underline sweep */}
          <motion.div
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transformOrigin: 'left',
              position: 'absolute',
              bottom: '4px',
              left: 0,
              right: 0,
              height: '3px',
              backgroundColor: 'oklch(85% 0.22 195)',
            }}
          />
        </motion.button>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 font-mono text-sm"
          style={{ color: 'oklch(32% 0.01 260)' }}
        >
          Install via{' '}
          <span style={{ color: 'oklch(85% 0.22 195)' }}>Claude Code</span>
          {' '}· Open source · Free to use
        </motion.p>
      </div>

      {/* Footer bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 flex justify-between px-8 font-mono text-[10px] tracking-widest"
        style={{ color: 'oklch(22% 0.01 260)' }}
      >
        <span>PICASSO AI — 2026</span>
        <span>BUILT BY PICASSO, ABOUT PICASSO</span>
        <span>↑ TOP</span>
      </motion.div>
    </section>
  )
}
