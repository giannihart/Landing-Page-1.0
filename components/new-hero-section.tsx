"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { EmailCollection } from "@/components/ui/email-collection"
import { Noise } from "@/components/ui/noise"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { AnnouncementBanner } from "@/components/announcement-banner"

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function NewHeroSection(_: HeroProps) {
  return (
    <>
      <section
        className={cn(
          "bg-[#111111] text-white relative overflow-hidden",
          "py-4 md:py-12 px-4 sm:px-6",
          "fade-bottom pb-0 pt-16 sm:pt-24",
        )}
      >
        {/* Noise Background */}
        <Noise />

        {/* Flickering Grid Background */}
        <div className="absolute inset-0 z-0">
          <FlickeringGrid
            className="w-full h-full"
            squareSize={4}
            gridGap={6}
            flickerChance={0.3}
            color="rgb(255, 255, 255)"
            maxOpacity={0.08}
          />
          {/* Gradient overlay to fade the grid from the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/30 to-[#111111]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-4 pt-8 sm:gap-16 sm:pt-20 font-inter">
          <div className="flex flex-col items-center gap-3 text-center sm:gap-8 md:gap-12">
            {/* Static Announcement Banner - moved down with increased padding */}
            <div className="relative z-10 animate-appear opacity-0 delay-75 mt-4 sm:mt-8">
              <AnnouncementBanner message="🚀 Launching on Product Hunt July 20th" />
            </div>

            {/* Title - now after banner */}
            <h1 className="relative z-10 inline-block animate-appear text-6xl lg:text-8xl text-white mt-4 font-bold sm:mt-0">
              <span className="text-white italic">Automate</span> your
              <br />
              API docs workflow
            </h1>

            {/* Description */}
            <p className="text-lg leading-relaxed tracking-tight text-gray-400 max-w-xl text-center mx-auto relative z-10 animate-appear opacity-0 delay-100 px-4 sm:px-0">
              Devscribe is your out-of-the-box API docs platform that generates API docs for you. From codebase to beautiful API docs in seconds. 
            </p>

            {/* Email Collection */}
            <div className="relative z-10 animate-appear opacity-0 delay-300 w-full max-w-md px-4 sm:px-0">
              <EmailCollection />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
