import type React from "react"

import { cn } from "@/lib/utils"
export function RainbowButton({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-md border-0 bg-[length:200%] px-8 py-3 text-base font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        // before styles - updated with feature box colors
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,#dd7bbb,#d79f1e,#5a922c,#4c7894,#dd7bbb)] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

        // light mode colors - updated with feature box colors
        "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,#dd7bbb,#d79f1e,#5a922c,#4c7894,#dd7bbb)]",

        // dark mode colors - updated with feature box colors
        "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,#dd7bbb,#d79f1e,#5a922c,#4c7894,#dd7bbb)]",

        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
