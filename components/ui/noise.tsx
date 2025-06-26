"use client"

import { useEffect, useRef } from "react"

export function Noise() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 200
    canvas.height = 200

    // Create noise pattern
    const imageData = ctx.createImageData(canvas.width, canvas.height)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 255
      data[i] = noise // Red
      data[i + 1] = noise // Green
      data[i + 2] = noise // Blue
      data[i + 3] = 25 // Alpha (low opacity)
    }

    ctx.putImageData(imageData, 0, 0)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-[0.015]"
        style={{
          backgroundImage: `url(${canvasRef.current?.toDataURL()})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  )
}
