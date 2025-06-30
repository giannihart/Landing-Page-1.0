import { MapPin, Clock, ArrowRight, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// import { GlowingEffect } from "@/components/ui/glowing-effect"

// Future job openings data - currently hardcoded in JSX below
// const jobOpenings = [
//   {
//     id: 1,
//     title: "Frontend Engineer",
//     department: "Engineering",
//     location: "San Luis Obispo, Ca/ Remote",
//     type: "Full-time",
//     experience: "1+ years",
//     description: "...",
//     featured: true,
//   },
//   ...
// ]

// const _benefits = [
//   "Competitive salary and equity package",
//   "Comprehensive health, dental, and vision insurance",
//   "Flexible work arrangements and remote-first culture",
//   "Professional development budget and conference attendance",
//   "Unlimited PTO and flexible working hours",
//   "Top-tier equipment and home office setup allowance",
// ] // Future use

function CareersContent() {
  // const _featuredJob = jobOpenings.find((job) => job.featured) // Future use
  // const _regularJobs = jobOpenings.filter((job) => !job.featured) // Future use

  return (
    <div className="w-full py-16 lg:py-24 bg-[#111111] text-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex text-center justify-center items-center gap-12 flex-col max-w-4xl mx-auto font-inter">
          <div className="space-y-6">
            <Badge className="bg-white text-[#111111] hover:bg-white/90">Careers</Badge>
            <div className="flex gap-4 flex-col">
              <h2 className="text-4xl font-semibold lg:text-5xl text-white">Join our team</h2>
              <p className="text-lg leading-relaxed tracking-tight text-gray-400 max-w-xl text-center mx-auto">
                Help us revolutionize API documentation and build tools that developers love. We&apos;re looking for
                passionate individuals to join our growing team.
              </p>
            </div>
          </div>

          {/* Job Openings Grid */}
          <div className="flex flex-col text-left w-full gap-4">
            {/* Software Engineer */}
            <div className="min-h-[16rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                {/* <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                /> */}
                <div className="relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-5 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                  <div className="relative flex flex-1 flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-[#222222] text-gray-300 hover:bg-[#333333] text-xs">Engineering</Badge>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-xl md:leading-[1.5rem] text-balance text-white">
                        Software Engineer
                      </h3>
                      <p className="font-sans text-sm leading-[1.25rem] md:text-base md:leading-[1.375rem] text-gray-400">
                        Build scalable backend systems and APIs that power our documentation platform. Work with modern
                        technologies and help shape our technical architecture.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 pt-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>Remote / San Luis Obispo</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Full-time</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        <span>1+ years</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start pt-2">
                    <a
                      href="https://form.jotform.com/giannimhart/devscribe-summer-internship---softw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-[#333333] text-white hover:bg-sidebar-accent bg-[#111111]"
                      >
                        Apply Now <ArrowRight className="w-3 h-3" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Engineer */}
            <div className="min-h-[16rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                {/* <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                /> */}
                <div className="relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-5 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                  <div className="relative flex flex-1 flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-[#222222] text-gray-300 hover:bg-[#333333] text-xs">Engineering</Badge>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-xl md:leading-[1.5rem] text-balance text-white">
                        Frontend Engineer
                      </h3>
                      <p className="font-sans text-sm leading-[1.25rem] md:text-base md:leading-[1.375rem] text-gray-400">
                        Create beautiful, responsive user interfaces for our documentation platform. Work with React,
                        TypeScript, and modern design systems.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 pt-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>Remote / San Luis Obispo</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Full-time</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        <span>1+ years</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start pt-2">
                    <a
                      href="https://form.jotform.com/giannimhart/devscribe-summer-internship"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-[#333333] text-white hover:bg-sidebar-accent bg-[#111111]"
                      >
                        Apply Now <ArrowRight className="w-3 h-3" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Development Rep */}
            <div className="min-h-[16rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                {/* <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                /> */}
                <div className="relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-5 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                  <div className="relative flex flex-1 flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-[#222222] text-gray-300 hover:bg-[#333333] text-xs">Sales</Badge>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-xl md:leading-[1.5rem] text-balance text-white">
                        Sales Development Rep
                      </h3>
                      <p className="font-sans text-sm leading-[1.25rem] md:text-base md:leading-[1.375rem] text-gray-400">
                        Drive growth by identifying and qualifying potential customers. Help developers discover how our
                        platform can transform their documentation workflow.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 pt-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>Remote / San Luis Obispo</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Part-time</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        <span>1+ years</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start pt-2">
                    <a
                      href="https://form.jotform.com/giannimhart/devscribe-summer-internship-sales"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-[#333333] text-white hover:bg-sidebar-accent bg-[#111111]"
                      >
                        Apply Now <ArrowRight className="w-3 h-3" />
                      </Button>
                    </a>
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

export { CareersContent }
