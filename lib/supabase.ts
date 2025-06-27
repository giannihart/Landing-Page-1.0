import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client for admin operations
export const supabaseAdmin = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey)

/* -------------------------------------------------------------------------- */
/*  Browser client (if you ever need it)                                      */
/* -------------------------------------------------------------------------- */
let _browser: ReturnType<typeof createClient> | null = null
export function getBrowserSupabase() {
  if (_browser) return _browser
  _browser = supabase
  return _browser
}

/* -------------------------------------------------------------------------- */
/*  Server client – uses the **anon** key so inserts obey RLS policy          */
/* -------------------------------------------------------------------------- */
let _server: ReturnType<typeof createClient> | null = null
export function getServerSupabase() {
  if (_server) return _server
  const url = process.env.SUPABASE_URL || supabaseUrl
  const key =
    // Prefer service-role if provided, otherwise fall back to anon key.
    process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey

  if (!url || !key) throw new Error("Missing Supabase environment variables")

  _server = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return _server
}

export type EmailSubscription = {
  id: string
  email: string
  is_active: boolean
  source?: string
  created_at: string
}
