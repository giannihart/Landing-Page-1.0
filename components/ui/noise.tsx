"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface NoiseProps {
  opacity?: number
  className?: string
}

export function Noise({ opacity = 0.05, className }: NoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      // Guarantee non-zero size (1×1px minimum)
      const w = Math.max(window.innerWidth, 1)
      const h = Math.max(window.innerHeight, 1)
      canvas.width = w
      canvas.height = h
    }

    const drawNoise = () => {
      const { width, height } = canvas
      if (width === 0 || height === 0) return

      try {
        const imageData = ctx.createImageData(width, height)
        const buffer = new Uint32Array(imageData.data.buffer)
        for (let i = 0; i < buffer.length; i++) {
          buffer[i] = ((Math.random() * 255) | 0) << 24
        }
        ctx.putImageData(imageData, 0, 0)
      } catch {
        /* createImageData can still throw on some browsers if
           the canvas was resized between calls – fail silently */
      }
    }

    let raf = 0
    const loop = () => {
      drawNoise()
      raf = requestAnimationFrame(loop)
    }

    resize()
    loop()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none fixed inset-0 -z-10 mix-blend-soft-light", className)}
      style={{ opacity }}
    />
  )
}
