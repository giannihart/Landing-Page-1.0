import type React from "react"
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6"
import { FlickeringGrid } from "@/components/ui/flickering-grid"

interface Footer7Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  sections?: Array<{
    title: string
    links: Array<{ name: string; href: string }>
  }>
  description?: string
  socialLinks?: Array<{
    icon: React.ReactElement
    href: string
    label: string
  }>
  copyright?: string
  legalLinks?: Array<{
    name: string
    href: string
  }>
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Use Cases", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Get Started", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Documentation", href: "#" },
    ],
  },
]

const defaultSocialLinks = [
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
  { icon: <FaXTwitter className="size-5" />, href: "#", label: "X" },
  { icon: <FaGithub className="size-5" />, href: "#", label: "GitHub" },
]

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
]

export const Footer7 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  sections = defaultSections,
  description = "Automate your API docs workflow",
  socialLinks = defaultSocialLinks,
  copyright = "2025 Devscribe.ai. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-16 md:py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="w-full h-full"
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="rgb(255, 255, 255)"
          maxOpacity={0.08}
        />
        {/* Gradient overlay to fade the grid from the top */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#111111]/30 to-[#111111]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-12 px-4 md:px-6 lg:px-8">
        <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-5 lg:items-start">
            {/* Logo */}
            <img
              src="/images/group-19.png"
              alt={logo.title}
              className="h-8 w-auto object-contain"
              style={{
                imageRendering: "auto",
                filter: "contrast(1.1) brightness(1.05) saturate(1.1)",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            />
            <p className="max-w-[70%] text-sm text-gray-400">{description}</p>
            <ul className="flex items-center space-x-6 text-gray-400">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-white transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-5 md:grid-cols-3 lg:gap-16">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-3 font-bold text-white">{section.title}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-white transition-colors">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-gray-700 pt-6 text-xs font-medium text-gray-400 md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-white transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
