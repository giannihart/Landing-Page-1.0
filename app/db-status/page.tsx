"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, RefreshCw, Database, AlertTriangle } from "lucide-react"
import { testDatabaseConnection, verifyTableStructure, getRecordCount } from "@/lib/supabase"

interface DatabaseStatus {
  connection: { success: boolean; error?: string; needsSetup?: boolean }
  tableStructure?: { success: boolean; data?: unknown[]; error?: string }
  recordCount?: { success: boolean; count?: number; error?: string }
}

export default function DatabaseStatusPage() {
  const [status, setStatus] = useState<DatabaseStatus | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const runTests = async () => {
    setIsLoading(true)
    try {
      console.log("Running database tests...")

      const connectionTest = await testDatabaseConnection()
      console.log("Connection test result:", connectionTest)

      let tableTest = undefined
      let countTest = undefined

      if (connectionTest.success) {
        tableTest = await verifyTableStructure()
        console.log("Table structure test result:", tableTest)

        if (tableTest.success) {
          countTest = await getRecordCount()
          console.log("Record count test result:", countTest)
        }
      }

      setStatus({
        connection: connectionTest,
        tableStructure: tableTest,
        recordCount: countTest,
      })
    } catch (error) {
      console.error("Test error:", error)
      setStatus({
        connection: {
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        },
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    runTests()
  }, [])

  return (
    <div className="min-h-screen bg-[#111111] text-white p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Database className="h-8 w-8" />
              Database Status
            </h1>
            <p className="text-gray-400 mt-2">Verify your Supabase connection and table setup</p>
          </div>
          <Button onClick={runTests} disabled={isLoading} variant="outline">
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            Run Tests
          </Button>
        </div>

        {/* Environment Variables */}
        <Card>
          <CardHeader>
            <CardTitle>Environment Variables</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between">
              <span>NEXT_PUBLIC_SUPABASE_URL</span>
              <Badge variant={process.env.NEXT_PUBLIC_SUPABASE_URL ? "default" : "destructive"}>
                {process.env.NEXT_PUBLIC_SUPABASE_URL ? "Set" : "Missing"}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>NEXT_PUBLIC_SUPABASE_ANON_KEY</span>
              <Badge variant={process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "default" : "destructive"}>
                {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Set" : "Missing"}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>SUPABASE_SERVICE_ROLE_KEY</span>
              <Badge variant={process.env.SUPABASE_SERVICE_ROLE_KEY ? "default" : "secondary"}>
                {process.env.SUPABASE_SERVICE_ROLE_KEY ? "Set" : "Optional"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Connection Test */}
        {status && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {status.connection.success ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                Database Connection
              </CardTitle>
            </CardHeader>
            <CardContent>
              {status.connection.success ? (
                <p className="text-green-400">✅ Successfully connected to Supabase</p>
              ) : (
                <div className="space-y-2">
                  <p className="text-red-400">❌ Connection failed</p>
                  <p className="text-sm text-gray-400">{status.connection.error}</p>
                  {status.connection.needsSetup && (
                    <div className="p-3 bg-yellow-900/20 border border-yellow-600 rounded-md">
                      <div className="flex items-center gap-2 text-yellow-400">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="font-semibold">Setup Required</span>
                      </div>
                      <p className="text-sm mt-1">
                        Please run the database setup script from `scripts/setup-database-v2.sql` in your Supabase SQL
                        Editor.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Table Structure */}
        {status?.tableStructure && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {status.tableStructure.success ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                Table Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              {status.tableStructure.success ? (
                <div className="space-y-2">
                  <p className="text-green-400">✅ Table structure verified</p>
                  <p className="text-sm text-gray-400">Table `email_subscriptions` exists and is accessible</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-red-400">❌ Table structure check failed</p>
                  <p className="text-sm text-gray-400">{status.tableStructure.error}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Record Count */}
        {status?.recordCount && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {status.recordCount.success ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                Record Count
              </CardTitle>
            </CardHeader>
            <CardContent>
              {status.recordCount.success ? (
                <div className="space-y-2">
                  <p className="text-green-400">✅ Successfully counted records</p>
                  <p className="text-sm text-gray-400">
                    Total records: <span className="font-mono">{status.recordCount.count}</span>
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-red-400">❌ Record count failed</p>
                  <p className="text-sm text-gray-400">{status.recordCount.error}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Setup Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Setup Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Create Supabase Project</h4>
              <p className="text-sm text-gray-400">Go to supabase.com and create a new project</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Run Database Setup</h4>
              <p className="text-sm text-gray-400">
                Copy the SQL from `scripts/setup-database-v2.sql` and run it in the Supabase SQL Editor
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">3. Configure Environment</h4>
              <p className="text-sm text-gray-400">Add your Supabase URL and keys to your `.env.local` file</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">4. Test Connection</h4>
              <p className="text-sm text-gray-400">Visit this page to verify everything is working correctly</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
