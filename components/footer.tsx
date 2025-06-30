import type React from "react"
import { FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import Image from "next/image"

interface Footer7Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
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

const defaultSocialLinks = [
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/company/devscribeai", label: "LinkedIn" },
  {
    icon: <FaXTwitter className="size-5" />,
    href: "https://x.com/devscribeai?s=21&t=BWr8w_ST4lSrz3gIql_tsQ",
    label: "X",
  },
]

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
]

const navigationLinks = [
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Feature Request", href: "/feature-request" },
]

export const Footer7 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  description = "Automate your API docs workflow",
  socialLinks = defaultSocialLinks,
  copyright = "2025 Devscribeai. All rights reserved.",
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
        {/* Main section - Logo, description, social links on left, navigation on right */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          {/* Left side - Logo, description, and social links */}
          <div className="flex flex-col gap-5 lg:items-start">
            {/* Logo */}
            <Image
              src="/images/group-19.png"
              alt={logo.title}
              width={150}
              height={32}
              className="h-8 w-auto object-contain"
              style={{
                imageRendering: "auto",
                filter: "contrast(1.1) brightness(1.05) saturate(1.1)",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            />
            <p className="text-sm text-gray-400 max-w-md">{description}</p>
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

          {/* Right side - Navigation links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {navigationLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700/50 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Left - Copyright */}
            <p className="text-xs text-gray-500">{copyright}</p>

            {/* Right - Legal links */}
            <ul className="flex items-center gap-4">
              {legalLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-xs text-gray-500 hover:text-white transition-colors duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
