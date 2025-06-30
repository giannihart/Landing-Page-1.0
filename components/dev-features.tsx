import { Cpu, Lock, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { MockupFrame } from "@/components/ui/mockup"

export function DevFeatures() {
  return (
    <section className="overflow-hidden py-0 md:py-0 bg-[#111111] text-gray-300">
      <div className="mx-auto max-w-5xl space-y-8 px-4 md:px-6 lg:px-8 py-[100px]">
        <div className="relative z-10 max-w-2xl">
          <Badge className="bg-white text-[#111111] hover:bg-white/90 mb-4">Developers</Badge>
          <h2 className="text-4xl font-semibold lg:text-5xl text-white">Built to ship projects faster</h2>
          <p className="mt-4 text-lg text-gray-400">
            Devscribe boosts your team&apos;s efficiency by automating and managing your API documentation, readable by all: Humans and AI Agents.
          </p>
        </div>
        <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
          <div className="[perspective:800px]">
            <div className="[transform:skewY(-2deg)skewX(-2deg)rotateX(6deg)]">
              <div className="aspect-video relative rounded-xl overflow-hidden">
                {/* Reduced intensity bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none z-10"></div>
                {/* Subtle bottom corner fades */}
                <div className="absolute bottom-0 left-0 w-1/3 h-1/4 bg-gradient-to-tr from-[#111111] via-[#111111]/50 to-transparent pointer-events-none z-10"></div>
                <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-gradient-to-tl from-[#111111] via-[#111111]/50 to-transparent pointer-events-none z-10"></div>
                <MockupFrame className="w-full h-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-18%20at%203.20.17%E2%80%AFPM-qkZh6Vz6vZOpWF9oehp2H8owNXnYOr.png"
                    className="w-full h-full object-cover"
                    alt="Documentation dashboard interface"
                    width={1200}
                    height={675}
                  />
                </MockupFrame>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">Generate Documentation</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Instantly generate clean, structured API documentation from your code—no manual writing needed.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">Web Editor</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Effortlessly editing and formatting of the docs, ensuring professional quality output with minimal effort.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">Custom Themes</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Add your brand&apos;s logo, color schemes, and style to the docs to make them yours.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">Automatic Updates</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Connect your company&apos;s repository to allow your docs to keep pace with your codebase.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
