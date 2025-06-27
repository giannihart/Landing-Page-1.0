import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client for admin operations
export const supabaseAdmin = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey)

/* -------------------------------------------------------------------------- */
/*  Browser client (singleton pattern)                                       */
/* -------------------------------------------------------------------------- */
let _browser: ReturnType<typeof createClient> | null = null
export function getBrowserSupabase() {
  if (_browser) return _browser
  _browser = createClient(supabaseUrl, supabaseAnonKey)
  return _browser
}

/* -------------------------------------------------------------------------- */
/*  Server client – uses the anon key so inserts obey RLS policy            */
/* -------------------------------------------------------------------------- */
let _server: ReturnType<typeof createClient> | null = null
export function getServerSupabase() {
  if (_server) return _server

  const url = process.env.SUPABASE_URL || supabaseUrl
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey

  if (!url || !key) {
    throw new Error("Missing Supabase environment variables")
  }

  _server = createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
  return _server
}

export type EmailSubscription = {
  id: string
  email: string
  is_active: boolean
  source?: string
  created_at: string
  updated_at: string
}

// Database connection test utility
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from("email_subscriptions").select("count(*)").limit(1)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
