"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
  return (
    <a
      href={href}
      className={cn(
        "relative text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white",
        className,
      )}
    >
      {children}
    </a>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-2 sm:top-8 left-1/2 transform -translate-x-1/2 z-50 w-[94%] sm:w-[85%] max-w-4xl">
      <div
        className={cn(
          "transition-all duration-300",
          "bg-[#111111]/90 backdrop-blur-md border border-gray-700/50",
          "rounded-full px-4 sm:px-6 py-2 sm:py-3 w-full",
          "shadow-lg shadow-black/20",
          isScrolled && "bg-[#111111]/95 border-gray-600/50 shadow-xl shadow-black/30",
          isOpen && "rounded-2xl",
        )}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/group-19.png"
                alt="Company Logo"
                width={120}
                height={24}
                className="h-5 sm:h-6 w-auto object-contain"
                style={{
                  imageRendering: "auto",
                  filter: "contrast(1.1) brightness(1.05) saturate(1.1)",
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* <NavLink href="/pricing">Pricing</NavLink> */}
            <NavLink href="/careers">Careers</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/feature-request">Feature Request</NavLink>
          </nav>

          {/* Desktop Auth Buttons */}
          {/* <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <button
              className={cn(
                "px-3 py-1.5 text-sm font-medium text-gray-300 transition-all duration-200",
                "border border-gray-600 rounded-full hover:border-gray-400 hover:text-white",
                "bg-transparent hover:bg-gray-800/50",
              )}
            >
              Log In
            </button>
            <button
              className={cn(
                "px-3 py-1.5 text-sm font-medium text-black transition-all duration-200",
                "bg-white rounded-full hover:bg-gray-100",
                "shadow-sm hover:shadow-md",
              )}
            >
              Sign Up
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 text-gray-300 hover:text-white transition-colors duration-300 flex-shrink-0"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="relative w-5 h-5">
              <span
                className={cn(
                  "absolute block h-0.5 w-5 bg-current transition-all duration-400 ease-in-out",
                  isOpen ? "top-2.5 rotate-45" : "top-1",
                )}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-5 bg-current transition-all duration-400 ease-in-out",
                  "top-2.5",
                  isOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-5 bg-current transition-all duration-400 ease-in-out",
                  isOpen ? "top-2.5 -rotate-45" : "top-4",
                )}
              />
            </div>
          </button>

          {/* Book a demo button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <a
              href="https://cal.com/giannihart/book-a-demo"
              className={cn(
                "px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#111111] transition-all duration-200",
                "bg-white rounded-full hover:bg-gray-100 hover:text-[#111111]",
                "shadow-sm hover:shadow-md",
                "inline-block",
              )}
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0",
          )}
        >
          <div className="space-y-3 border-t border-gray-700/50 pt-4">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-2">
              {/* <a
                href="/"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                Product
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                Documentation
              </a> */}
              {/* <a
                href="/pricing"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                Pricing
              </a> */}
              <a
                href="/careers"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                Careers
              </a>
              <a
                href="/blog"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                Blog
              </a>
              <a
                href="/feature-request"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                Feature Request
              </a>
            </nav>

            {/* Mobile Auth Buttons */}
            {/* <div className="flex flex-col space-y-2 pt-3 border-t border-gray-700/50">
              <button
                className={cn(
                  "w-full px-3 py-2 text-sm font-medium text-gray-300 transition-all duration-200",
                  "border border-gray-600 rounded-full hover:border-gray-400 hover:text-white",
                  "bg-transparent hover:bg-gray-800/50",
                )}
              >
                Log In
              </button>
              <button
                className={cn(
                  "w-full px-3 py-2 text-sm font-medium text-black transition-all duration-200",
                  "bg-white rounded-full hover:bg-gray-100",
                  "shadow-sm hover:shadow-md",
                )}
              >
                Sign Up
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}
