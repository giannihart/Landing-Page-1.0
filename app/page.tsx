import { Navbar } from "@/components/navbar"
import { DevFeatures } from "@/components/dev-features"
import { LearnMore } from "@/components/learn-more"
import { Footer7 as Footer } from "@/components/footer"
import { Features } from "@/components/features"

export default function Home() {
  return (
    <main className="bg-[#111111]">
      <Navbar />
      <Features />
      <DevFeatures />
      <LearnMore />
      <Footer />
    </main>
  )
}
