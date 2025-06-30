import { createClient } from "@supabase/supabase-js"

// Environment variable validation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL environment variable")
}

if (!supabaseAnonKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable")
}

console.log("Supabase URL:", supabaseUrl?.substring(0, 20) + "...")
console.log("Anon Key present:", !!supabaseAnonKey)
console.log("Service Key present:", !!supabaseServiceKey)

// Default client for public operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
})

// Admin client with service role key for server-side operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
})

/* -------------------------------------------------------------------------- */
/*  Browser client (singleton pattern)                                       */
/* -------------------------------------------------------------------------- */
let _browser: ReturnType<typeof createClient> | null = null
export function getBrowserSupabase() {
  if (_browser) return _browser
  _browser = createClient(supabaseUrl!, supabaseAnonKey!)
  return _browser
}

/* -------------------------------------------------------------------------- */
/*  Server client for admin operations                                       */
/* -------------------------------------------------------------------------- */
let _server: ReturnType<typeof createClient> | null = null
export function getServerSupabase() {
  if (_server) return _server

  const key = supabaseServiceKey || supabaseAnonKey

  _server = createClient(supabaseUrl!, key!, {
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

// Database connection and table existence test
export async function testSupabaseConnection() {
  try {
    console.log("Testing Supabase connection...")

    // Test basic connectivity by selecting a single record
    const { data: healthCheck, error: healthError } = await supabase.from("email_subscriptions").select("id").limit(1)

    if (healthError) {
      console.error("Health check failed:", healthError)

      // Check if it's a table not found error
      if (healthError.code === "42P01") {
        return {
          success: false,
          error: `Table 'email_subscriptions' does not exist. Please run the database setup script.`,
          needsSetup: true,
        }
      }

      return {
        success: false,
        error: `Database connection failed: ${healthError.message}`,
      }
    }

    console.log("Connection test successful:", healthCheck)
    return { success: true, data: healthCheck }
  } catch (error) {
    console.error("Unexpected error testing connection:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown connection error",
    }
  }
}

// Verify table structure
export async function verifyTableStructure() {
  try {
    // Use a simpler approach to check table structure
    const { data, error } = await supabaseAdmin.from("email_subscriptions").select("*").limit(1)

    if (error) {
      console.error("Error checking table structure:", error)
      return { success: false, error: error.message }
    }

    console.log("Table structure verified - sample data:", data)
    return { success: true, data }
  } catch (error) {
    console.error("Error verifying table structure:", error)
    return { success: false, error: "Failed to verify table structure" }
  }
}

// Get count of records using proper Supabase syntax
export async function getRecordCount(tableName = "email_subscriptions") {
  try {
    const { count, error } = await supabase.from(tableName).select("*", { count: "exact", head: true })

    if (error) {
      console.error("Error getting record count:", error)
      return { success: false, error: error.message }
    }

    return { success: true, count: count || 0 }
  } catch (error) {
    console.error("Unexpected error getting count:", error)
    return { success: false, error: "Failed to get record count" }
  }
}

// Export with the expected name for compatibility
export const testDatabaseConnection = testSupabaseConnection
