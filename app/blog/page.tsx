"use client"
import { BlogContent } from "@/components/blog-content"
import { Navbar } from "@/components/navbar"
import { Footer7 as Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <main className="bg-[#111111]">
      <Navbar />
      <div className="pt-20">
        <BlogContent />
      </div>
      <Footer />
    </main>
  )
}
