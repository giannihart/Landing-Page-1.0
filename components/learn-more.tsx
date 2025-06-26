"use client"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar-bento"

export function LearnMore() {
  return (
    <section className="relative py-0 md:py-0 overflow-hidden bg-[#111111]">
      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="bg-white text-[#111111] hover:bg-white/90 mb-4">Learn more</Badge>
          <h2 className="text-3xl font-semibold mb-4 text-white md:text-4xl">Ready to automate you workflow?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of teams who have already improved their productivity and customer relationships with Nexus.
          </p>

          <div className="mt-4">
            <Calendar />
          </div>
        </div>
      </div>
    </section>
  )
}
