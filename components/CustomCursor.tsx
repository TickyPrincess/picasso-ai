'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)

  const dotX = useSpring(mx, { stiffness: 600, damping: 35 })
  const dotY = useSpring(my, { stiffness: 600, damping: 35 })
  const ringX = useSpring(mx, { stiffness: 120, damping: 18 })
  const ringY = useSpring(my, { stiffness: 120, damping: 18 })

  useEffect(() => {
    setMounted(true)

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)

      const el = e.target as Element
      setHovering(
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        !!el.closest('a') ||
        !!el.closest('button')
      )
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [mx, my])

  if (!mounted) return null

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: clicking ? 16 : hovering ? 44 : 28,
            height: clicking ? 16 : hovering ? 44 : 28,
            opacity: hovering ? 0.6 : 0.25,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="rounded-full border"
          style={{ borderColor: 'oklch(85% 0.22 195)' }}
        />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: clicking ? 4 : 7,
            height: clicking ? 4 : 7,
            backgroundColor: hovering
              ? 'oklch(85% 0.22 195)'
              : 'oklch(94% 0.008 60)',
          }}
          transition={{ duration: 0.12 }}
          className="rounded-full"
        />
      </motion.div>
    </>
  )
}
