import { Check, MoveRight, PhoneCall } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

function Pricing() {
  return (
    <div className="w-full py-16 lg:py-24 bg-[#111111] text-white">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-8 flex-col max-w-4xl mx-auto font-inter">
          <Badge className="bg-white text-[#111111] hover:bg-white/90">Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-4xl font-semibold lg:text-5xl text-white">Docs that scale with you!</h2>
            <p className="text-lg leading-relaxed tracking-tight text-gray-400 max-w-xl text-center">
              Managing a business is tough, let us handle your API docs.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-4 lg:gap-6">
            <div className="min-h-[18rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-5">
                  <div className="relative flex flex-1 flex-col gap-3">
                    <div className="space-y-3">
                      <h3 className="text-lg leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-xl md:leading-[1.5rem] text-balance text-white">
                        Startup
                      </h3>
                      <p className="font-sans text-sm leading-[1.125rem] md:text-sm md:leading-[1.25rem] text-gray-400">
                        For small teams looking to get started with their first API docs plaform.
                      </p>
                    </div>
                    <div className="flex flex-col gap-8 justify-start">
                      <p className="flex flex-row items-center gap-2 text-xl">
                        <span className="text-4xl text-white">$400</span>
                        <span className="text-sm text-gray-400"> / month</span>
                      </p>
                      <div className="flex flex-col gap-4 justify-start">
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">Auto-generated docs</p>
                            <p className="text-gray-400 text-sm">Generate docs from your code automatically</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">Custom themes</p>
                            <p className="text-gray-400 text-sm">Brand your docs with custom styling</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">API playground</p>
                            <p className="text-gray-400 text-sm">Interactive testing environment</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">Real-time updates</p>
                            <p className="text-gray-400 text-sm">Sync with your repository automatically</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">Basic analytics</p>
                            <p className="text-gray-400 text-sm">Track usage and engagement metrics</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <Button
                      variant="outline"
                      className="gap-4 border-[#333333] text-white hover:bg-sidebar-accent bg-[#111111]"
                    >
                      Try for Free <MoveRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-[18rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-5">
                  <div className="relative flex flex-1 flex-col gap-3">
                    <div className="space-y-3">
                      <h3 className="text-lg leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-xl md:leading-[1.5rem] text-balance text-white">
                        Professional
                      </h3>
                      <p className="font-sans text-sm leading-[1.125rem] md:text-sm md:leading-[1.25rem] text-gray-400">
                        For larger teams looking to scale their API docs with advanced features for their customer.
                      </p>
                    </div>
                    <div className="flex flex-col gap-8 justify-start">
                      <p className="flex flex-row items-center gap-2 text-xl">
                        <span className="text-4xl text-white">$1000</span>
                        <span className="text-sm text-gray-400"> / month</span>
                      </p>
                      <div className="flex flex-col gap-4 justify-start">
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">Everything in Startup</p>
                            <p className="text-gray-400 text-sm">All features from the Startup plan</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">Advanced analytics</p>
                            <p className="text-gray-400 text-sm">Detailed insights and reporting</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">Team collaboration</p>
                            <p className="text-gray-400 text-sm">Multi-user editing and permissions</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">Priority support</p>
                            <p className="text-gray-400 text-sm">24/7 dedicated support channel</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">Custom integrations</p>
                            <p className="text-gray-400 text-sm">Connect with your existing tools</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <Button className="gap-4 bg-white text-[#111111] hover:bg-white/90 hover:text-[#111111]">
                      Get Started Today <MoveRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-[18rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] bg-[#111111] p-4 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-5">
                  <div className="relative flex flex-1 flex-col gap-3">
                    <div className="space-y-3">
                      <h3 className="text-lg leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-xl md:leading-[1.5rem] text-balance text-white">
                        Enterprise
                      </h3>
                      <p className="font-sans text-sm leading-[1.125rem] md:text-sm md:leading-[1.25rem] text-gray-400">
                        For enterprise teams looking for Stripe-level docs with advanced enterprise features.
                      </p>
                    </div>
                    <div className="flex flex-col gap-8 justify-start">
                      <p className="flex flex-row items-center gap-2 text-xl">
                        <span className="text-4xl text-white">Custom</span>
                        <span className="text-sm text-gray-400"> / month</span>
                      </p>
                      <div className="flex flex-col gap-4 justify-start">
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">Everything in Pro</p>
                            <p className="text-gray-400 text-sm">All features from Professional plan</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">SSO Capibility </p>
                            <p className="text-gray-400 text-sm">Single sign-on available</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">On-premise deployment</p>
                            <p className="text-gray-400 text-sm">Host on your own infrastructure</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">Dedicated account manager</p>
                            <p className="text-gray-400 text-sm">Personal support and guidance</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <Check className="w-4 h-4 mt-2 text-white" />
                          <div className="flex flex-col">
                            <p className="text-white">SLA guarantee</p>
                            <p className="text-gray-400 text-sm">99.9% uptime commitment</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <Button
                      variant="outline"
                      className="gap-4 border-[#333333] text-white hover:bg-sidebar-accent bg-[#111111]"
                    >
                      Contact Sales <PhoneCall className="w-4 h-4" />
                    </Button>
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

export { Pricing }
