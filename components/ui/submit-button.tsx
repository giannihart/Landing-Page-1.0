"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"
import { cn } from "@/lib/utils"

interface SubmitButtonProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export function SubmitButton({ children, className, disabled = false }: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      className={cn(
        "relative min-w-[120px]",
        "bg-white text-black hover:bg-gray-100",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "transition-all duration-200",
        className,
      )}
    >
      {pending ? (
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Subscribing...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  )
}
