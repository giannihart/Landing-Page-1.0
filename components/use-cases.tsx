"use client"

import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Bot } from "lucide-react"

export function UseCases() {
  return (
    <section className="py-0 md:py-0 bg-[#111111] text-gray-300">
      <div className="mx-auto max-w-5xl space-y-8 px-4 md:px-6 lg:px-8">
        <div className="relative z-10 max-w-2xl">
          <Badge className="bg-white text-[#111111] hover:bg-white/90 mb-4">Use Cases</Badge>
          <h2 className="text-4xl font-semibold lg:text-5xl text-white">Docs for all types of users</h2>
          <p className="mt-4 text-lg text-gray-400">
            Our docs are designed to be read by any user, regardless of their role or technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          <UseCaseCard
            icon={<Code className="h-6 w-6" />}
            title="Developers"
            description="Docs for technical users who need detailed API references and code examples."
            features={["Active"]}
          />

          <UseCaseCard
            icon={<Bot className="h-6 w-6" />}
            title="AI Agents"
            description="Docs for agents to understand and interact with your APIs to complete tasks and start using your product."
            features={["Coming soon"]}
          />

          <UseCaseCard
            icon={<Users className="h-6 w-6" />}
            title="Managers"
            description="Docs for decision makers who need high-level API understanding and business value."
            features={["Active"]}
          />
        </div>
      </div>
    </section>
  )
}

interface UseCaseCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const UseCaseCard = ({ icon, title, description, features }: UseCaseCardProps) => {
  return (
    <div className="min-h-[18rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-5">
          <div className="relative flex flex-1 flex-col gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2.5 text-white">{icon}</div>
            <div className="space-y-3">
              <h3 className="text-lg leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-xl md:leading-[1.5rem] text-balance text-white">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-sm md:leading-[1.25rem] text-gray-400">
                {description}
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-border rounded-full px-2.5 py-0.5 text-xs text-white"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
