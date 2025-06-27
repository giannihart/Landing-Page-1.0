"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Subscription {
  id: string
  email: string
  is_active: boolean
  source: string
  created_at: string
}

interface EmailSubscriptionsTableProps {
  subscriptions: Subscription[]
}

export function EmailSubscriptionsTable({ subscriptions }: EmailSubscriptionsTableProps) {
  const [data, setData] = useState(subscriptions)

  const exportToCsv = () => {
    const csvContent = [
      ["Email", "Status", "Source", "Created At"],
      ...data.map((sub) => [
        sub.email,
        sub.is_active ? "Active" : "Inactive",
        sub.source,
        new Date(sub.created_at).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `email-subscriptions-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">All Subscriptions ({data.length})</h2>
        <Button onClick={exportToCsv} variant="outline">
          Export CSV
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((subscription) => (
              <TableRow key={subscription.id}>
                <TableCell className="font-medium">{subscription.email}</TableCell>
                <TableCell>
                  <Badge variant={subscription.is_active ? "default" : "secondary"}>
                    {subscription.is_active ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>{subscription.source}</TableCell>
                <TableCell>{new Date(subscription.created_at).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
