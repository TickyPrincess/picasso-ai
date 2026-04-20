'use client'

export default function NoiseTexture() {
  return (
    <svg
      className="fixed inset-0 z-[100] pointer-events-none w-full h-full"
      aria-hidden="true"
      style={{ opacity: 0.038 }}
    >
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.72"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  )
}
