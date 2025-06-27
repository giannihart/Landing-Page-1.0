"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw, Users, UserCheck, Calendar } from "lucide-react"
import { getSubscriptionStats } from "@/app/actions/email-actions"

interface StatsData {
  total: number
  active: number
  today: number
}

export function SubscriptionStats() {
  const [stats, setStats] = useState<StatsData>({ total: 0, active: 0, today: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchStats = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await getSubscriptionStats()
      setStats(data)
    } catch (err) {
      setError("Failed to load statistics")
      console.error("Error fetching stats:", err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={fetchStats} variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Total Subscriptions */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Subscriptions</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{isLoading ? "..." : stats.total.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">All time</p>
        </CardContent>
      </Card>

      {/* Active Subscriptions */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
          <UserCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{isLoading ? "..." : stats.active.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">Currently subscribed</p>
        </CardContent>
      </Card>

      {/* Today's Subscriptions */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Today</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{isLoading ? "..." : stats.today.toLocaleString()}</div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground">New subscriptions</p>
            {stats.today > 0 && (
              <Badge variant="secondary" className="text-xs">
                +{stats.today}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Refresh Button */}
      <div className="md:col-span-3 flex justify-center">
        <Button onClick={fetchStats} variant="outline" size="sm" disabled={isLoading}>
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
          Refresh Data
        </Button>
      </div>
    </div>
  )
}
