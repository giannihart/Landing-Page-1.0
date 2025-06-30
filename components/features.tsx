import { NewHeroSection } from "@/components/new-hero-section"
import { Icons } from "@/components/icons"

export function Features() {
  return (
    <div className="w-full">
      {/* New Hero Section */}
      <NewHeroSection
        badge={{
          text: "Introducing our new components",
          action: {
            text: "Learn more",
            href: "/docs",
          },
        }}
        title="Build faster with beautiful components"
        description="Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components."
        actions={[
          {
            text: "Get Started",
            href: "/docs/getting-started",
            variant: "default",
          },
          {
            text: "GitHub",
            href: "https://github.com/your-repo",
            variant: "glow",
            icon: <Icons.github className="h-5 w-5" />,
          },
        ]}
        image={{
          light: "https://www.launchuicomponents.com/app-light.png",
          dark: "https://www.launchuicomponents.com/app-dark.png",
          alt: "UI Components Preview",
        }}
      />

      <div className="space-y-0 md:space-y-0">
        {/* Footer Section */}
        {/* <Footer7 /> */}
      </div>
    </div>
  )
}
