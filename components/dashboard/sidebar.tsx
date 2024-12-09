"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  CreditCard, 
  Settings, 
  Bell,
  Building2
} from 'lucide-react'

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Bank Accounts',
    icon: Building2,
    href: '/dashboard/bank-accounts',
  },
  {
    label: 'Subscriptions',
    icon: CreditCard,
    href: '/dashboard/subscriptions',
  },
  {
    label: 'Notifications',
    icon: Bell,
    href: '/dashboard/notifications',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-gray-50 dark:bg-gray-900">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium ${
              pathname === route.href
                ? 'bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
            }`}
          >
            <route.icon className="mr-3 h-5 w-5" />
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}