"use client"

import type React from "react"
import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const BoardToken = "dc9c1137-5f60-a12d-f0ef-64929871ded8"

const CannyFeedback = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://canny.io/sdk.js"
    script.async = true
    script.onload = () => {
      // @ts-ignore – Canny will be attached to window after the script loads.
      if (window.Canny) {
        // @ts-ignore
        window.Canny("render", {
          boardToken: "dc9c1137-5f60-a12d-f0ef-64929871ded8",
          basePath: null,
          ssoToken: null,
          theme: "dark", // match site theme
        })
      }
    }
    document.head.appendChild(script)
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [])

  return <div data-canny className="w-full flex-1" />
}

function FeatureRequestContent() {
  return (
    <div className="w-full py-16 lg:py-24 bg-[#111111] text-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex text-center justify-center items-center gap-8 flex-col max-w-6xl mx-auto font-inter">
          <div className="space-y-6">
            <Badge className="bg-white text-[#111111] hover:bg-white/90">Feature Request</Badge>
            <div className="flex gap-4 flex-col">
              <h2 className="text-4xl font-semibold lg:text-5xl text-white">Help us build the future</h2>
              <p className="text-lg leading-relaxed tracking-tight text-gray-400 max-w-xl text-center mx-auto">
                Your feedback drives our product development. Share your ideas, vote on features, and help shape the
                future of API documentation.
              </p>
            </div>
          </div>

          {/* Canny Integration */}
          <div className="w-full">
            <div className="min-h-[800px] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex flex-col overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] min-h-[600px]">
                  {/* Canny Feedback Component */}
                  <CannyFeedback />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Categories */}

          {/* Call to Action */}
          <div className="w-full">
            <div className="min-h-[12rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-center items-center gap-4 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl leading-tight font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-tight text-balance text-white">
                      Have a specific feature in mind?
                    </h3>
                    <p className="font-sans text-sm leading-relaxed md:text-base md:leading-relaxed text-gray-400 max-w-md mx-auto">
                      Don't see your idea above? Submit a new feature request or reach out to discuss your specific
                      needs with our team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <a
                        href="https://cal.com/giannihart/book-a-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-gray-600 text-[#111111] bg-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-800/50 hover:text-white transition-colors duration-200"
                      >
                        Book a call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FeatureCategoryCardProps {
  icon: React.ReactNode
  title: string
  description: string
  examples: string[]
}

const FeatureCategoryCard = ({ icon, title, description, examples }: FeatureCategoryCardProps) => {
  return (
    <div className="min-h-[18rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-5">
          <div className="relative flex flex-1 flex-col gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2.5 text-white">{icon}</div>
            <div className="space-y-3">
              <h3 className="text-lg leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-xl md:leading-[1.5rem] text-balance text-white">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-sm md:leading-[1.25rem] text-gray-400">
                {description}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Examples:</p>
              <ul className="space-y-1">
                {examples.map((example, index) => (
                  <li key={index} className="text-xs text-gray-400 flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-500 rounded-full flex-shrink-0" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add TypeScript declaration for Canny
declare global {
  interface Window {
    Canny: any
  }
}

export { FeatureRequestContent }
