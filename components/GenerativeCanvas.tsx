'use client'

import { useEffect, useRef } from 'react'

interface Stroke {
  x0: number
  y0: number
  cx: number
  cy: number
  x1: number
  y1: number
  color: string
  opacity: number
  width: number
  progress: number
  speed: number
  done: boolean
}

export default function GenerativeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const strokesRef = useRef<Stroke[]>([])
  const frameRef = useRef<number>(0)
  const lastTimeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouse)

    const palettes = [
      'rgba(0, 255, 204, ',
      'rgba(255, 140, 20, ',
      'rgba(240, 235, 220, ',
    ]

    const createStroke = (near?: { x: number; y: number }): Stroke => {
      const w = canvas.width
      const h = canvas.height
      const cx = near
        ? near.x + (Math.random() - 0.5) * 400
        : Math.random() * w
      const cy = near
        ? near.y + (Math.random() - 0.5) * 400
        : Math.random() * h
      const angle = Math.random() * Math.PI * 2
      const length = 80 + Math.random() * 250

      return {
        x0: cx + Math.cos(angle) * length * 0.5,
        y0: cy + Math.sin(angle) * length * 0.5,
        cx: cx + (Math.random() - 0.5) * 120,
        cy: cy + (Math.random() - 0.5) * 120,
        x1: cx - Math.cos(angle) * length * 0.5,
        y1: cy - Math.sin(angle) * length * 0.5,
        color: palettes[Math.floor(Math.random() * palettes.length)],
        opacity: 0.015 + Math.random() * 0.055,
        width: 0.4 + Math.random() * 1.8,
        progress: 0,
        speed: 0.0015 + Math.random() * 0.003,
        done: false,
      }
    }

    for (let i = 0; i < 18; i++) strokesRef.current.push(createStroke())

    const animate = (time: number) => {
      if (time - lastTimeRef.current > 350) {
        const near = Math.random() > 0.4 ? mouseRef.current : undefined
        strokesRef.current.push(createStroke(near))
        if (strokesRef.current.length > 70) strokesRef.current.splice(0, 5)
        lastTimeRef.current = time
      }

      ctx.lineCap = 'round'

      strokesRef.current.forEach(stroke => {
        if (stroke.done) return

        const prevT = stroke.progress
        stroke.progress = Math.min(1, stroke.progress + stroke.speed)
        if (stroke.progress >= 1) stroke.done = true

        const t = stroke.progress
        const x = (1 - t) ** 2 * stroke.x0 + 2 * (1 - t) * t * stroke.cx + t ** 2 * stroke.x1
        const y = (1 - t) ** 2 * stroke.y0 + 2 * (1 - t) * t * stroke.cy + t ** 2 * stroke.y1
        const xp = (1 - prevT) ** 2 * stroke.x0 + 2 * (1 - prevT) * prevT * stroke.cx + prevT ** 2 * stroke.x1
        const yp = (1 - prevT) ** 2 * stroke.y0 + 2 * (1 - prevT) * prevT * stroke.cy + prevT ** 2 * stroke.y1

        ctx.beginPath()
        ctx.moveTo(xp, yp)
        ctx.lineTo(x, y)
        ctx.strokeStyle = stroke.color + stroke.opacity + ')'
        ctx.lineWidth = stroke.width
        ctx.stroke()
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
