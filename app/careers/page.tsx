"use client"
import { CareersContent } from "@/components/careers-content"
import { Navbar } from "@/components/navbar"

export default function CareersPage() {
  return (
    <main className="bg-[#111111]">
      <Navbar />
      <div className="pt-20">
        <CareersContent />
      </div>
    </main>
  )
}
