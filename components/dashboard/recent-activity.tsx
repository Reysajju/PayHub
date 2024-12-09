export function RecentActivity() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* We'll implement this with real data later */}
          <div className="flex items-center">
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium">No recent activity</p>
              <p className="text-sm text-gray-500">Your recent transactions will appear here</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}