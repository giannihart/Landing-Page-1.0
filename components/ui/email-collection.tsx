"use client"

import type React from "react"

import { useActionState } from "react"
import { z } from "zod"
import { submitEmail, type SubmitEmailState } from "@/app/actions/email-actions"
import { Input } from "@/components/ui/input"
import { SubmitButton } from "@/components/ui/submit-button"

/* -------------------------------------------------------------------------- */
/*  Client-side schema (for immediate feedback)                               */
/* -------------------------------------------------------------------------- */
const schema = z.string().email()

export function EmailCollection() {
  const [state, action] = useActionState<SubmitEmailState, FormData>(submitEmail, { status: "success", message: "" })
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    if (input.value === "") {
      input.setCustomValidity("")
      return
    }
    const res = schema.safeParse(input.value)
    input.setCustomValidity(res.success ? "" : "Invalid email address")
  }

  return (
    <form action={action} className="flex w-full max-w-md gap-2">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
        className="flex-1"
        onInput={handleInput}
      />
      <SubmitButton className="whitespace-nowrap">Get Early Access</SubmitButton>

      {/* Feedback ------------------------------------------------------------- */}
      {state?.message && (
        <p role="status" className={`mt-2 text-sm ${state.status === "error" ? "text-red-500" : "text-green-500"}`}>
          {state.message}
        </p>
      )}
    </form>
  )
}
