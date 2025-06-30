"use client"
import { PrivacyContent } from "@/components/privacy-content"
import { Navbar } from "@/components/navbar"
import { Footer7 as Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="bg-[#111111]">
      <Navbar />
      <div className="pt-20">
        <PrivacyContent />
      </div>
      <Footer />
    </main>
  )
}
