"use client"
import { cn } from "@/lib/utils"

interface AnnouncementBannerProps {
  message: string
  className?: string
}

export function AnnouncementBanner({ message, className }: AnnouncementBannerProps) {
  return (
    <div
      className={cn(
        "w-auto max-w-sm mx-auto",
        "bg-transparent backdrop-blur-md",
        "border border-white rounded-full",
        "shadow-lg shadow-black/20",
        className,
      )}
    >
      <div className="px-3 sm:px-4">
        <div className="flex items-center justify-center py-1.5 text-white">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
            <span className="whitespace-nowrap">{message}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
