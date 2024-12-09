"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, CheckCircle2, AlertCircle } from "lucide-react"

interface Notification {
  id: string
  title: string
  message: string
  type: 'success' | 'error' | 'info'
  createdAt: string
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications')
        if (!response.ok) throw new Error('Failed to fetch notifications')
        const data = await response.json()
        setNotifications(data)
      } catch (error) {
        console.error('Error fetching notifications:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNotifications()
  }, [])

  if (isLoading) {
    return <div className="flex items-center justify-center h-[400px]">Loading...</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
      </div>

      <div className="space-y-4">
        {notifications.length === 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>No Notifications</CardTitle>
              <CardDescription>
                You don't have any notifications yet. They will appear here when you receive them.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          notifications.map((notification) => (
            <Card key={notification.id}>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center">
                  {notification.type === 'success' && <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />}
                  {notification.type === 'error' && <AlertCircle className="mr-2 h-5 w-5 text-red-500" />}
                  {notification.type === 'info' && <Bell className="mr-2 h-5 w-5 text-blue-500" />}
                  <CardTitle className="text-sm font-medium">{notification.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{notification.message}</CardDescription>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(notification.createdAt).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}