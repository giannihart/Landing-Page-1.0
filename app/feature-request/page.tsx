"use client"
import { FeatureRequestContent } from "@/components/feature-request-content"
import { Navbar } from "@/components/navbar"

export default function FeatureRequestPage() {
  return (
    <main className="bg-[#111111]">
      <Navbar />
      <div className="pt-20">
        <FeatureRequestContent />
      </div>
    </main>
  )
}
