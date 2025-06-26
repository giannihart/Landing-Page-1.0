import { Cpu, Lock, Sparkles, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MockupFrame } from "@/components/ui/mockup"

export function CustomerFeatures() {
  return (
    <section className="py-0 md:py-0 bg-[#111111] text-gray-300">
      <div className="mx-auto max-w-5xl space-y-8 px-4 md:px-6 lg:px-8">
        <div className="relative z-10 max-w-2xl">
          <Badge className="bg-white text-[#111111] hover:bg-white/90 mb-4">Customers</Badge>
          <h2 className="text-4xl font-semibold lg:text-5xl text-white">Fan-favorite documentation</h2>
          <p className="mt-4 text-lg text-gray-400">
            Empower your customers with our Stripe level API documentation that will be appreciated by all.
          </p>
        </div>
        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-[88/36] relative rounded-xl overflow-hidden">
            <div className="bg-gradient-to-t z-1 from-[#111111] absolute inset-0 to-transparent"></div>
            <MockupFrame className="w-full h-full" size="large">
              <img
                src="https://tailark.com/_next/image?url=%2Fmail-upper.png&w=3840&q=75"
                className="absolute inset-0 z-10"
                alt="payments illustration dark"
                width={2797}
                height={1137}
              />
            </MockupFrame>
            <img
              src="https://tailark.com/_next/image?url=%2Fmail-back.png&w=3840&q=75"
              className="hidden dark:block"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <img
              src="https://tailark.com/_next/image?url=%2Fmail-back-light.png&w=3840&q=75"
              className="dark:hidden"
              alt="payments illustration light"
              width={2797}
              height={1137}
            />
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">MCP Servers</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Enable AI agents to seamlessly read and interpret your API documentation, facilitating intelligent,
              automated interactions.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">API Testing Playground</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Allow your users to test every API before using it on your production environment.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">Example Code Snippets</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Have your users see what the code snippets will look like before they test them.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">AI DeepSearch</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Are your users unsure what tehy are looking for? Our AI Deepsearch will help you find the exact API.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
