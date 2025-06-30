"use server"

import { z } from "zod"
import { supabase, supabaseAdmin, testSupabaseConnection } from "@/lib/supabase"

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
  debug?: string | object
}

/* -------------------------------------------------------------------------- */
/*  Helper Functions                                                         */
/* -------------------------------------------------------------------------- */
async function checkDatabaseHealth(): Promise<{ success: boolean; error?: string }> {
  try {
    const healthCheck = await testSupabaseConnection()

    if (!healthCheck.success) {
      console.error("Database health check failed:", healthCheck.error)
      return {
        success: false,
        error: healthCheck.needsSetup
          ? "Database not set up. Please run the setup script."
          : "Database connection failed.",
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Health check error:", error)
    return {
      success: false,
      error: "Unable to connect to database",
    }
  }
}

async function checkEmailExists(email: string): Promise<{ exists: boolean; error?: string }> {
  try {
    console.log("Checking if email exists:", email)

    const { data, error } = await supabase
      .from("email_subscriptions")
      .select("id")
      .eq("email", email)
      .eq("is_active", true)
      .limit(1)

    if (error) {
      console.error("Error checking email existence:", error)

      // Handle specific error cases
      if (error.code === "42P01") {
        return {
          exists: false,
          error: "Database table not found. Please contact support.",
        }
      }

      return {
        exists: false,
        error: `Database query failed: ${error.message}`,
      }
    }

    const exists = data && data.length > 0
    console.log("Email exists check result:", { email, exists, dataLength: data?.length })

    return { exists }
  } catch (error) {
    console.error("Unexpected error checking email:", error)
    return {
      exists: false,
      error: "Failed to verify email status",
    }
  }
}

async function insertEmailSubscription(email: string) {
  try {
    console.log("Attempting to insert email:", email)

    const insertData = {
      email,
      source: "hero-form",
      is_active: true,
    }

    console.log("Insert data:", insertData)

    const { data, error } = await supabase
      .from("email_subscriptions")
      .insert([insertData])
      .select("id, email, created_at")

    if (error) {
      console.error("Insert error details:", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      })
    } else {
      console.log("Insert successful:", data)
    }

    return { data, error }
  } catch (error) {
    console.error("Insert operation failed with exception:", error)
    return {
      data: null,
      error: {
        message: "Database operation failed",
        code: "INSERT_EXCEPTION",
        details: error instanceof Error ? error.message : "Unknown error",
      },
    }
  }
}

/* -------------------------------------------------------------------------- */
/*  Server Action                                                            */
/* -------------------------------------------------------------------------- */
export async function submitEmail(_prev: SubmitEmailState | undefined, formData: FormData): Promise<SubmitEmailState> {
  console.log("=== Email Submission Started ===")

  try {
    // Step 0: Check database health
    const healthCheck = await checkDatabaseHealth()
    if (!healthCheck.success) {
      return {
        status: "error",
        message: healthCheck.error || "Database is not available. Please try again later.",
        timestamp: Date.now(),
      }
    }

    // Step 1: Validate input
    const rawEmail = formData.get("email")
    console.log("Raw email input:", rawEmail)

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
      console.log("Validation failed:", errorMessage)
      return {
        status: "error",
        message: errorMessage,
        timestamp: Date.now(),
      }
    }

    const { email } = parsed.data
    console.log("Validated email:", email)

    // Step 2: Check if email already exists
    const emailCheck = await checkEmailExists(email)

    if (emailCheck.error) {
      return {
        status: "error",
        message: emailCheck.error,
        timestamp: Date.now(),
      }
    }

    if (emailCheck.exists) {
      console.log("Email already exists, returning success")
      return {
        status: "success",
        message: "You're already subscribed! 🎉",
        timestamp: Date.now(),
      }
    }

    // Step 3: Insert new email subscription
    const { data, error } = await insertEmailSubscription(email)

    if (error) {
      console.error("Insert failed:", error)

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

      // Log full error for debugging
      console.error("Detailed insert error:", {
        code: error.code,
        message: error.message,
        details: error.details,
      })

      return {
        status: "error",
        message: `Unable to process your request: ${error.message || "Unknown error"}`,
        timestamp: Date.now(),
        debug: process.env.NODE_ENV === "development" ? error : undefined,
      }
    }

    // Step 4: Success response
    if (data && data.length > 0) {
      console.log("Email successfully subscribed:", data[0])
      return {
        status: "success",
        message: "Thanks for subscribing! ✅",
        timestamp: Date.now(),
      }
    }

    // Fallback error (shouldn't happen)
    console.error("Insert succeeded but no data returned")
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
      debug:
        process.env.NODE_ENV === "development" ? (error instanceof Error ? error.message : String(error)) : undefined,
    }
  } finally {
    console.log("=== Email Submission Ended ===")
  }
}

/* -------------------------------------------------------------------------- */
/*  Admin Helper Functions                                                   */
/* -------------------------------------------------------------------------- */
export async function getSubscriptionStats() {
  try {
    console.log("Fetching subscription stats...")

    // Use the proper Supabase count syntax
    const [totalResult, activeResult, todayResult] = await Promise.all([
      supabaseAdmin.from("email_subscriptions").select("*", { count: "exact", head: true }),
      supabaseAdmin.from("email_subscriptions").select("*", { count: "exact", head: true }).eq("is_active", true),
      supabaseAdmin
        .from("email_subscriptions")
        .select("*", { count: "exact", head: true })
        .gte("created_at", new Date().toISOString().split("T")[0]),
    ])

    // Check for errors
    if (totalResult.error) {
      console.error("Error fetching total count:", totalResult.error)
    }
    if (activeResult.error) {
      console.error("Error fetching active count:", activeResult.error)
    }
    if (todayResult.error) {
      console.error("Error fetching today count:", todayResult.error)
    }

    const stats = {
      total: totalResult.count || 0,
      active: activeResult.count || 0,
      today: todayResult.count || 0,
    }

    console.log("Stats fetched:", stats)
    return stats
  } catch (error) {
    console.error("Error fetching subscription stats:", error)
    return { total: 0, active: 0, today: 0 }
  }
}

export async function getAllSubscriptions() {
  try {
    console.log("Fetching all subscriptions...")

    const { data, error } = await supabaseAdmin
      .from("email_subscriptions")
      .select("id, email, is_active, source, created_at, updated_at")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching subscriptions:", error)
      return []
    }

    console.log(`Fetched ${data?.length || 0} subscriptions`)
    return data || []
  } catch (error) {
    console.error("Unexpected error fetching subscriptions:", error)
    return []
  }
}

// Test function to verify everything works
export async function testDatabaseConnection() {
  try {
    const result = await testSupabaseConnection()
    console.log("Database test result:", result)
    return result
  } catch (error) {
    console.error("Database test failed:", error)
    return { success: false, error: "Test failed" }
  }
}
