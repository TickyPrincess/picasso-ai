'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const TITLE = 'PICASSO'

const letterRotations = [-2.1, 1.4, -0.8, 2.3, -1.6, 0.9, -1.2]

export default function EntryScene() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400)
    const t2 = setTimeout(() => setPhase(2), 1800)
    const t3 = setTimeout(() => setPhase(3), 3000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-14 lg:px-20">

      <div className="relative z-10">
        {/* Eyebrow */}
        <div className="overflow-hidden mb-3">
          <motion.p
            initial={{ y: '110%' }}
            animate={phase >= 1 ? { y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs tracking-[0.45em] uppercase"
            style={{ color: 'oklch(85% 0.22 195)' }}
          >
            Autonomous Design Agent
          </motion.p>
        </div>

        {/* Main title — letters fall with physics */}
        <div className="flex flex-wrap" aria-label="PICASSO">
          {TITLE.split('').map((letter, i) => (
            <motion.span
              key={i}
              initial={{
                y: -80,
                opacity: 0,
                rotate: (Math.random() - 0.5) * 40,
              }}
              animate={
                phase >= 1
                  ? {
                      y: 0,
                      opacity: 1,
                      rotate: letterRotations[i],
                    }
                  : {}
              }
              transition={{
                duration: 0.85,
                delay: i * 0.065,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="font-display font-bold select-none leading-none inline-block"
              style={{
                fontSize: 'clamp(4.5rem, 16vw, 13.5rem)',
                letterSpacing: '-0.02em',
                color: 'oklch(94% 0.008 60)',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={phase >= 2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-[480px]"
        >
          <p
            className="font-display font-light leading-relaxed"
            style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)' }}
          >
            <span style={{ color: 'oklch(60% 0.01 260)' }}>An AI that lives inside Claude.</span>
            <br />
            <span style={{ color: 'oklch(94% 0.008 60)' }}>It designs. It builds. It ships.</span>
            <br />
            <span style={{ color: 'oklch(60% 0.01 260)' }}>Before you finish the sentence.</span>
          </p>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={phase >= 2 ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transformOrigin: 'left',
            height: '1px',
            width: '200px',
            marginTop: '2.5rem',
            backgroundColor: 'oklch(85% 0.22 195)',
            opacity: 0.7,
          }}
        />

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-14 flex items-center gap-3"
          style={{ color: 'oklch(35% 0.01 260)' }}
        >
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="font-mono text-xs"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>

      {/* Version mark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-8 right-8 font-mono text-[10px] tracking-widest"
        style={{ color: 'oklch(28% 0.01 260)' }}
      >
        v1.0 — 2026
      </motion.div>

      {/* Vertical accent line */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={phase >= 2 ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 1.8, delay: 0.6 }}
        style={{
          transformOrigin: 'top',
          position: 'absolute',
          right: '22%',
          top: 0,
          bottom: 0,
          width: '1px',
          background:
            'linear-gradient(to bottom, transparent 0%, oklch(85% 0.22 195 / 0.12) 40%, oklch(85% 0.22 195 / 0.08) 60%, transparent 100%)',
        }}
      />
    </section>
  )
}
