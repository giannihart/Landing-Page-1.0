"use client"

import { cn } from "@/lib/utils"

interface GlowProps {
  variant?: "top" | "bottom" | "center"
  className?: string
}

export function Glow({ variant = "center", className }: GlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        variant === "top" && "bg-gradient-to-b from-primary/20 via-transparent to-transparent",
        variant === "bottom" && "bg-gradient-to-t from-primary/20 via-transparent to-transparent",
        variant === "center" && "bg-gradient-radial from-primary/20 via-transparent to-transparent",
        className,
      )}
    />
  )
}
