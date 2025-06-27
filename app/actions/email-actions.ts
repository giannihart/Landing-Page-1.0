"use server"

import { z } from "zod"
import { getServerSupabase } from "@/lib/supabase"

/* -------------------------------------------------------------------------- */
/*  Schema                                                                    */
/* -------------------------------------------------------------------------- */
const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
})

export type SubmitEmailState = { status: "success"; message: string } | { status: "error"; message: string }

/* -------------------------------------------------------------------------- */
/*  Server Action                                                             */
/* -------------------------------------------------------------------------- */
export async function submitEmail(_prev: SubmitEmailState | undefined, formData: FormData): Promise<SubmitEmailState> {
  const parsed = schema.safeParse({ email: formData.get("email") })

  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Invalid email." }
  }

  const { email } = parsed.data
  const supabase = getServerSupabase()

  /* Insert, ignore duplicates ------------------------------------------------ */
  const { error } = await supabase.from("email_subscriptions").insert({ email, source: "hero-form" }).single()

  if (error) {
    // 23505 = unique_violation  | 42P01 = undefined_table
    if (error.code === "23505") {
      return { status: "success", message: "You're already subscribed 🎉" }
    }
    if (error.code === "42P01") {
      return {
        status: "error",
        message: "Subscription table missing. Run scripts/setup-database.sql in Supabase, then retry.",
      }
    }
    console.error("Supabase insert error:", error)
    return { status: "error", message: "Unexpected error. Please try again later." }
  }

  return { status: "success", message: "Thanks for subscribing ✅" }
}
