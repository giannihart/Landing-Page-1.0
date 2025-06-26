"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { cn } from "@/lib/utils"
import { RainbowButton } from "@/components/ui/rainbow-button"

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
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="w-full h-full"
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="rgb(255, 255, 255)"
          maxOpacity={0.1}
        />
        {/* Gradient overlay to fade the grid down the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/50 to-[#111111]" />
      </div>

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
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight mt-4 sm:mt-16">
            Automate your
            <br />
            API docs workflow
          </h1>

          {/* Description */}
          <p className="text-sm relative z-10 max-w-[350px] sm:max-w-[550px] animate-appear font-medium text-gray-400 opacity-0 delay-100 sm:text-xl px-4 sm:px-0">
            Devscribe boosts your team's efficiency by automating and managing your API documentation, allowing
            readability for all.
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-2 opacity-0 delay-300 flex-col sm:flex-row items-center w-full px-4 sm:px-0">
            {actions.map((action, index) => (
              <div key={index} className="relative w-full sm:w-auto">
                {action.text === "Get Started" ? (
                  <a
                    href="https://cal.com/giannihart/book-a-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full sm:w-auto"
                  >
                    <RainbowButton className="text-base font-medium group w-full sm:w-auto">
                      <span className="flex items-center justify-center gap-2 text-sm font-medium transition-opacity duration-200 group-hover:opacity-80">
                        {action.icon}
                        Book a demo
                      </span>
                    </RainbowButton>
                  </a>
                ) : (
                  <Button
                    variant="ghost"
                    size="lg"
                    asChild
                    className={cn(
                      "bg-transparent text-white border-0 hover:bg-transparent transition-all duration-200 w-full sm:w-auto",
                    )}
                  >
                    <a
                      href="https://cal.com/giannihart/get-started-for-free"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 group w-full sm:w-auto"
                    >
                      <span className="transition-opacity duration-200 group-hover:opacity-80">
                        Get started for free
                      </span>
                      <ArrowRightIcon className="h-4 w-4 transition-opacity duration-200 group-hover:opacity-80" />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
