"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useActionState } from "react"
import { z } from "zod"
import { submitEmail, type SubmitEmailState } from "@/app/actions/email-actions"
import { Input } from "@/components/ui/input"
import { SubmitButton } from "@/components/ui/submit-button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Mail } from "lucide-react"

/* -------------------------------------------------------------------------- */
/*  Client-side validation schema                                            */
/* -------------------------------------------------------------------------- */
const emailSchema = z.string().email("Please enter a valid email address")

export function EmailCollection() {
  const [state, action] = useActionState<SubmitEmailState, FormData>(submitEmail, { status: "idle", message: "" })

  const [email, setEmail] = useState("")
  const [clientError, setClientError] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  // Reset form on successful submission
  useEffect(() => {
    if (state.status === "success") {
      setEmail("")
      setClientError("")
      setIsFormValid(false)
    }
  }, [state.status])

  // Client-side validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)

    if (value === "") {
      setClientError("")
      setIsFormValid(false)
      return
    }

    const result = emailSchema.safeParse(value)
    if (result.success) {
      setClientError("")
      setIsFormValid(true)
    } else {
      setClientError("Please enter a valid email address")
      setIsFormValid(false)
    }
  }

  // Form submission handler
  const handleSubmit = async (formData: FormData) => {
    // Final client-side validation before submission
    const emailValue = formData.get("email") as string
    const result = emailSchema.safeParse(emailValue)

    if (!result.success) {
      setClientError("Please enter a valid email address")
      return
    }

    // Clear any previous client errors
    setClientError("")
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Form */}
      <form
        action={action}
        onSubmit={(e) => {
          const formData = new FormData(e.currentTarget)
          handleSubmit(formData)
        }}
        className="space-y-3"
      >
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
              required
              aria-describedby={clientError ? "email-error" : undefined}
              className={`pl-10 ${
                clientError
                  ? "border-red-500 focus:ring-red-500"
                  : isFormValid
                    ? "border-green-500 focus:ring-green-500"
                    : "border-gray-300"
              }`}
            />
          </div>
          <SubmitButton disabled={!isFormValid || !!clientError}>Get Early Access</SubmitButton>
        </div>

        {/* Client-side error */}
        {clientError && (
          <div id="email-error" className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {clientError}
          </div>
        )}
      </form>

      {/* Server response feedback */}
      {state.message && state.status !== "idle" && (
        <Alert
          className={`${state.status === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
        >
          <div className="flex items-center gap-2">
            {state.status === "success" ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertDescription className={`${state.status === "success" ? "text-green-800" : "text-red-800"}`}>
              {state.message}
            </AlertDescription>
          </div>
        </Alert>
      )}

      {/* Privacy notice */}
      {/* <p className="text-xs text-gray-500 text-center">We respect your privacy. Unsubscribe at any time.</p> */}
    </div>
  )
}

export default EmailCollection
