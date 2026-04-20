'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

type LineType = 'input' | 'thinking' | 'output' | 'gap'

interface Line {
  prefix: string
  text: string
  type: LineType
}

const POEM: Line[] = [
  { prefix: '›', text: 'design a landing page for a new product', type: 'input' },
  { prefix: '◆', text: 'Analyzing intent...', type: 'thinking' },
  { prefix: '◆', text: 'Dark canvas. Electric tension. Space Grotesk at 14vw.', type: 'output' },
  { prefix: '◆', text: 'Grain overlay. Physics-based letter entry. No hero section.', type: 'output' },
  { prefix: '', text: '', type: 'gap' },
  { prefix: '›', text: 'build it', type: 'input' },
  { prefix: '◆', text: 'Writing 1,124 lines across 14 files...', type: 'thinking' },
  { prefix: '◆', text: 'TypeScript. Framer Motion. No template fingerprint.', type: 'output' },
  { prefix: '◆', text: 'Build passing. Zero type errors.', type: 'output' },
  { prefix: '', text: '', type: 'gap' },
  { prefix: '›', text: 'ship it', type: 'input' },
  { prefix: '◆', text: 'Creating GitHub repo...', type: 'thinking' },
  { prefix: '◆', text: 'Pushing 14 files. Connecting Vercel.', type: 'thinking' },
  { prefix: '◆', text: '✓ Live at new-product.vercel.app', type: 'output' },
  { prefix: '', text: '', type: 'gap' },
  { prefix: '›', text: 'how long', type: 'input' },
  { prefix: '◆', text: '3 minutes, 41 seconds.', type: 'output' },
]

const colorMap: Record<LineType, string> = {
  input: 'oklch(94% 0.008 60)',
  thinking: 'oklch(78% 0.19 55)',
  output: 'oklch(55% 0.01 260)',
  gap: 'transparent',
}

const prefixColorMap: Record<LineType, string> = {
  input: 'oklch(85% 0.22 195)',
  thinking: 'oklch(78% 0.19 55)',
  output: 'oklch(38% 0.01 260)',
  gap: 'transparent',
}

export default function TerminalPoem() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (!inView) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setVisible(i)
      if (i >= POEM.length) clearInterval(interval)
    }, 190)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <section ref={ref} className="relative py-36 px-6 md:px-14 lg:px-24 overflow-hidden">
      {/* Section number */}
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
        03
      </motion.div>

      <div className="relative z-10 max-w-3xl">
        {/* Label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p
            className="font-mono text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ color: 'oklch(38% 0.01 260)' }}
          >
            ◆ A session
          </p>
          <h2
            className="font-display font-bold leading-tight"
            style={{
              fontSize: 'clamp(2rem, 5.5vw, 4.2rem)',
              color: 'oklch(94% 0.008 60)',
            }}
          >
            What it looks like
            <br />
            in practice.
          </h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            backgroundColor: 'oklch(7% 0.006 260)',
            border: '1px solid oklch(15% 0.01 260)',
          }}
        >
          {/* Terminal chrome */}
          <div
            className="flex items-center gap-2 px-5 py-3"
            style={{ borderBottom: '1px solid oklch(13% 0.01 260)' }}
          >
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'oklch(65% 0.22 25)' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'oklch(78% 0.19 55)' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'oklch(72% 0.17 145)' }} />
            <span
              className="ml-4 font-mono text-[10px] tracking-widest"
              style={{ color: 'oklch(28% 0.01 260)' }}
            >
              picasso — claude-code
            </span>
          </div>

          {/* Lines */}
          <div className="p-6 space-y-1.5">
            {POEM.slice(0, visible).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex gap-3 font-mono text-sm leading-relaxed ${
                  line.type === 'gap' ? 'h-3' : ''
                }`}
              >
                {line.type !== 'gap' && (
                  <>
                    <span
                      className="shrink-0 w-4 text-right"
                      style={{ color: prefixColorMap[line.type] }}
                    >
                      {line.prefix}
                    </span>
                    <span style={{ color: colorMap[line.type] }}>
                      {line.text}
                      {i === visible - 1 && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.7, repeat: Infinity }}
                          className="inline-block w-1.5 h-3.5 align-middle ml-0.5"
                          style={{ backgroundColor: 'oklch(85% 0.22 195)' }}
                        />
                      )}
                    </span>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
