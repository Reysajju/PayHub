"use client"

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { supabase } from '@/lib/supabase'

export function DashboardHeader() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">
        Welcome back, {user?.email}
      </h2>
      <div className="flex items-center space-x-2">
        <Button>Download API Keys</Button>
      </div>
    </div>
  )
}