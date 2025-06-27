"use client"
import { FeatureRequestContent } from "@/components/feature-request-content"
import { Navbar } from "@/components/navbar"
import { Footer7 as Footer } from "@/components/footer"

export default function FeatureRequestPage() {
  return (
    <main className="bg-[#111111]">
      <Navbar />
      <div className="pt-20">
        <FeatureRequestContent />
      </div>
      <Footer />
    </main>
  )
}
