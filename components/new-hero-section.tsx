"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { EmailCollection } from "@/components/ui/email-collection"
import { Noise } from "@/components/ui/noise"

interface HeroAction {
  text: string
  href: string
  icon?: React.ReactNode
  variant?: "default" | "glow"
}

interface HeroProps {
  badge?: {
    text: string
    action: {
      text: string
      href: string
    }
  }
  title: string
  description: string
  actions: HeroAction[]
  image: {
    light: string
    dark: string
    alt: string
  }
}

export function NewHeroSection({ badge, title, description, actions, image }: HeroProps) {
  return (
    <section
      className={cn(
        "bg-[#111111] text-white relative overflow-hidden",
        "py-4 md:py-12 px-4 sm:px-6",
        "fade-bottom pb-0 pt-20 sm:pt-48",
      )}
    >
      {/* Noise Background */}
      <Noise />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-4 pt-4 sm:gap-16 sm:pt-16 font-inter">
        <div className="flex flex-col items-center gap-3 text-center sm:gap-8 md:gap-12">
          {/* Badge */}
          {/* {badge && (
            <Badge variant="outline" className="animate-appear gap-2 border-gray-600 text-white">
              <span className="text-gray-400">Our beta will be live 5/31 📣</span>
              <a href={badge.action.href} className="flex items-center gap-1 text-white">
                Try now
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )} */}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear text-6xl lg:text-8xl text-white mt-4 sm:mt-16 font-bold">
            <span className="bg-gradient-to-r from-[#dd7bbb] via-[#d79f1e] to-[#5a922c] bg-clip-text text-transparent">
              Automate
            </span>{" "}
            your
            <br />
            API docs workflow
          </h1>

          {/* Description */}
          <p className="text-lg leading-relaxed tracking-tight text-gray-400 max-w-xl text-center mx-auto relative z-10 animate-appear opacity-0 delay-100 px-4 sm:px-0">
            Devscribe boosts your team's efficiency by automating and managing your API documentation, allowing
            readability for all.
          </p>

          {/* Email Collection */}
          <div className="relative z-10 animate-appear opacity-0 delay-300 w-full max-w-md px-4 sm:px-0">
            <EmailCollection />
          </div>

          {/* Terms and Privacy Policy */}
          <div className="relative z-10 animate-appear opacity-0 delay-500 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center text-sm">
            <button className="text-white hover:text-gray-300 transition-colors duration-200 underline underline-offset-4">
              Terms and Conditions
            </button>
            <button className="text-white hover:text-gray-300 transition-colors duration-200 underline underline-offset-4">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
