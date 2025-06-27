import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  subscriptions: { is_active: boolean; created_at: string }[]
}

export function SubscriptionStats({ subscriptions }: Props) {
  const total = subscriptions.length
  const active = subscriptions.filter((s) => s.is_active).length
  const today = subscriptions.filter((s) => new Date(s.created_at).toDateString() === new Date().toDateString()).length

  const items = [
    { label: "Total", value: total },
    { label: "Active", value: active },
    { label: "Today", value: today },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.label}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{item.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">{item.value}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
