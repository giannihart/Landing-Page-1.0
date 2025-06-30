"use client"

import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"

const BoardToken = "dc9c1137-5f60-a12d-f0ef-64929871ded8"

const Feedback = () => {
  useEffect(() => {
    ;((w, d, i, s) => {
      function l() {
        if (!d.getElementById(i)) {
          const f = d.getElementsByTagName(s)[0]
          const e = d.createElement(s) as HTMLScriptElement
          e.type = "text/javascript"
          e.async = true
          e.src = "https://canny.io/sdk.js"
          f.parentNode?.insertBefore(e, f)
        }
      }
      if ("function" != typeof w.Canny) {
        // eslint-disable-next-line func-names
        function c(...args: unknown[]) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(c as any).q.push(args)
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;((c as any).q = [])
        w.Canny = c
        if ("complete" === d.readyState) {
          l()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } else if ((w as any).attachEvent) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(w as any).attachEvent("onload", l)
        } else {
          w.addEventListener("load", l, false)
        }
      }
    })(window, document, "canny-jssdk", "script")

    window.Canny("render", {
      boardToken: BoardToken,
      basePath: null,
      ssoToken: null,
      theme: "dark", // Changed to dark to match site theme
    })
  }, [])

  return <div data-canny className="w-full min-h-[600px]" />
}

function FeatureRequestContent() {
  return (
    <div className="w-full py-16 lg:py-24 bg-[#111111] text-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex text-center justify-center items-center gap-12 flex-col max-w-6xl mx-auto font-inter">
          <div className="space-y-6">
            <Badge className="bg-white text-[#111111] hover:bg-white/90">Feature Request</Badge>
            <div className="flex gap-4 flex-col">
              <h2 className="text-4xl font-semibold lg:text-5xl text-white">Help us build the future</h2>
              <p className="text-lg leading-relaxed tracking-tight text-gray-400 max-w-xl text-center mx-auto">
                Your feedback drives our product development. Share your ideas, vote on features, and help shape the
                future of API documentation.
              </p>
            </div>
          </div>

          {/* Canny Feedback Widget */}
          <div className="w-full">
            <div className="min-h-[800px] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <div className="relative flex flex-col overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] min-h-[600px]">
                  <Feedback />
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="w-full">
            <div className="min-h-[12rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <div className="relative flex h-full flex-col justify-center items-center gap-4 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl leading-tight font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-tight text-balance text-white">
                      Have a specific feature in mind?
                    </h3>
                    <p className="font-sans text-sm leading-relaxed md:text-base md:leading-relaxed text-gray-400 max-w-md mx-auto">
                      Don&apos;t see your idea above? Submit a new feature request or reach out to discuss your specific
                      needs with our team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <a
                        href="https://cal.com/giannihart/book-a-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-gray-600 text-[#111111] bg-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-100 hover:text-[#111111] transition-colors duration-200 whitespace-nowrap"
                      >
                        Book a call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add TypeScript declaration for Canny
declare global {
  interface Window {
    Canny: (action: string, config: { boardToken: string; basePath: null; ssoToken: null; theme: string }) => void
  }
}

export { FeatureRequestContent }
