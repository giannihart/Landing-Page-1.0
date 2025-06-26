"use client"
import { Pricing } from "@/components/pricing"
import { Navbar } from "@/components/navbar"

export default function PricingPage() {
  return (
    <main className="bg-[#111111]">
      <Navbar />
      <div className="pt-20">
        <Pricing />
      </div>
    </main>
  )
}
