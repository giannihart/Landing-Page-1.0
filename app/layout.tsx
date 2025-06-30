import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Noise } from "@/components/ui/noise"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Devscribe",
  description: "Automate your API docs workflow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#111111]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Noise />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
