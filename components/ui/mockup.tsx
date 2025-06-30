"use client"

import { cn } from "@/lib/utils"
import type React from "react"

interface MockupProps {
  children: React.ReactNode
  type?: "responsive" | "mobile" | "desktop"
  className?: string
}

export function Mockup({ children, type = "responsive", className }: MockupProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-background",
        type === "mobile" && "aspect-[9/16] max-w-sm",
        type === "desktop" && "aspect-video",
        type === "responsive" && "aspect-video w-full",
        className,
      )}
    >
      {children}
    </div>
  )
}

interface MockupFrameProps {
  children: React.ReactNode
  className?: string
}

export function MockupFrame({ children, className }: MockupFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-border/50 bg-background/50 p-2 backdrop-blur-sm mx-auto max-w-5xl",
        className,
      )}
    >
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-red-500" />
        <div className="h-2 w-2 rounded-full bg-yellow-500" />
        <div className="h-2 w-2 rounded-full bg-green-500" />
      </div>
      <div className="overflow-hidden rounded-lg border border-border/30">{children}</div>
    </div>
  )
}
