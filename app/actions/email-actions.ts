"use server"

import { z } from "zod"
import { supabase } from "@/lib/supabase"

/* -------------------------------------------------------------------------- */
/*  Schema & Types                                                           */
/* -------------------------------------------------------------------------- */
const emailSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required")
    .max(255, "Email is too long")
    .toLowerCase()
    .trim(),
})

export type SubmitEmailState = {
  status: "idle" | "success" | "error"
  message: string
  timestamp?: number
}

/* -------------------------------------------------------------------------- */
/*  Helper Functions                                                         */
/* -------------------------------------------------------------------------- */
async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from("email_subscriptions")
      .select("id")
      .eq("email", email)
      .eq("is_active", true)
      .limit(1)

    if (error) {
      console.error("Error checking email existence:", error)
      return false
    }

    return data && data.length > 0
  } catch (error) {
    console.error("Unexpected error checking email:", error)
    return false
  }
}

async function insertEmailSubscription(email: string) {
  try {
    const { data, error } = await supabase
      .from("email_subscriptions")
      .insert([
        {
          email,
          source: "hero-form",
          is_active: true,
        },
      ])
      .select("id, email, created_at")

    return { data, error }
  } catch (error) {
    console.error("Insert operation failed:", error)
    return {
      data: null,
      error: {
        message: "Database operation failed",
        code: "INSERT_FAILED",
      },
    }
  }
}

/* -------------------------------------------------------------------------- */
/*  Server Action                                                            */
/* -------------------------------------------------------------------------- */
export async function submitEmail(_prev: SubmitEmailState | undefined, formData: FormData): Promise<SubmitEmailState> {
  try {
    // Step 1: Validate input
    const rawEmail = formData.get("email")

    if (!rawEmail || typeof rawEmail !== "string") {
      return {
        status: "error",
        message: "Email address is required",
        timestamp: Date.now(),
      }
    }

    const parsed = emailSchema.safeParse({ email: rawEmail })

    if (!parsed.success) {
      const errorMessage = parsed.error.errors[0]?.message || "Invalid email format"
      return {
        status: "error",
        message: errorMessage,
        timestamp: Date.now(),
      }
    }

    const { email } = parsed.data

    // Step 2: Check if email already exists
    const emailExists = await checkEmailExists(email)

    if (emailExists) {
      return {
        status: "success",
        message: "You're already subscribed! 🎉",
        timestamp: Date.now(),
      }
    }

    // Step 3: Insert new email subscription
    const { data, error } = await insertEmailSubscription(email)

    if (error) {
      // Handle specific Supabase errors
      if (error.code === "23505") {
        // Unique constraint violation (race condition)
        return {
          status: "success",
          message: "You're already subscribed! 🎉",
          timestamp: Date.now(),
        }
      }

      if (error.code === "42P01") {
        // Table doesn't exist
        return {
          status: "error",
          message: "Service temporarily unavailable. Please try again later.",
          timestamp: Date.now(),
        }
      }

      if (error.code === "42501") {
        // Insufficient privileges
        return {
          status: "error",
          message: "Configuration error. Please contact support.",
          timestamp: Date.now(),
        }
      }

      // Generic database error
      console.error("Supabase insert error:", error)
      return {
        status: "error",
        message: "Unable to process your request. Please try again.",
        timestamp: Date.now(),
      }
    }

    // Step 4: Success response
    if (data && data.length > 0) {
      return {
        status: "success",
        message: "Thanks for subscribing! ✅",
        timestamp: Date.now(),
      }
    }

    // Fallback error (shouldn't happen)
    return {
      status: "error",
      message: "Subscription failed. Please try again.",
      timestamp: Date.now(),
    }
  } catch (error) {
    console.error("Unexpected error in submitEmail:", error)

    return {
      status: "error",
      message: "An unexpected error occurred. Please try again.",
      timestamp: Date.now(),
    }
  }
}

/* -------------------------------------------------------------------------- */
/*  Admin Helper Functions                                                   */
/* -------------------------------------------------------------------------- */
export async function getSubscriptionStats() {
  try {
    const [totalResult, activeResult, todayResult] = await Promise.all([
      supabase.from("email_subscriptions").select("count(*)", { count: "exact" }),
      supabase.from("email_subscriptions").select("count(*)", { count: "exact" }).eq("is_active", true),
      supabase
        .from("email_subscriptions")
        .select("count(*)", { count: "exact" })
        .gte("created_at", new Date().toISOString().split("T")[0]),
    ])

    return {
      total: totalResult.count || 0,
      active: activeResult.count || 0,
      today: todayResult.count || 0,
    }
  } catch (error) {
    console.error("Error fetching subscription stats:", error)
    return { total: 0, active: 0, today: 0 }
  }
}

export async function getAllSubscriptions() {
  try {
    const { data, error } = await supabase
      .from("email_subscriptions")
      .select("id, email, is_active, source, created_at, updated_at")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching subscriptions:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Unexpected error fetching subscriptions:", error)
    return []
  }
}
