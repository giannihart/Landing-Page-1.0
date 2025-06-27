"use client"
import { TermsContent } from "@/components/terms-content"
import { Navbar } from "@/components/navbar"
import { Footer7 as Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="bg-[#111111]">
      <Navbar />
      <div className="pt-20">
        <TermsContent />
      </div>
      <Footer />
    </main>
  )
}
