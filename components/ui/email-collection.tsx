"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export function EmailCollection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isLoading) return

    setIsLoading(true)

    // Simulate API call - replace with your actual email collection logic
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setEmail("")
    } catch (error) {
      console.error("Failed to submit email:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
        <Check className="w-4 h-4 text-green-400" />
        <span className="text-sm text-green-400 font-medium">Thanks for subscribing!</span>
      </div>
    )
  }

  return (
    <div className="relative">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
        className="rounded-lg"
      />
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 w-full relative rounded-lg border border-gray-600/50 p-1 bg-[#1a1a1a] overflow-hidden"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            "flex-1 bg-transparent border-0 text-white placeholder:text-gray-500",
            "focus:border-0 focus:ring-0 focus:outline-none",
            "rounded-lg px-3 py-2 text-sm",
          )}
          required
        />

        <Button
          type="submit"
          disabled={!email || isLoading}
          className={cn(
            "bg-white text-[#111111] hover:bg-gray-100 disabled:opacity-50 disabled:bg-white disabled:text-[#111111]",
            "rounded-md px-6 py-2 text-sm font-medium transition-all duration-200",
            "disabled:cursor-not-allowed whitespace-nowrap",
          )}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-[#111111]/20 border-t-[#111111] rounded-full animate-spin" />
              <span className="text-[#111111]">Subscribing...</span>
            </div>
          ) : (
            <span className="text-[#111111]">Subscribe</span>
          )}
        </Button>
      </form>
    </div>
  )
}
