import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    // For now, return mock notifications
    // In a real application, these would come from your database
    const notifications = [
      {
        id: '1',
        title: 'Welcome to PaymentHub',
        message: 'Thank you for joining PaymentHub! Start by adding your bank account.',
        type: 'info',
        createdAt: new Date().toISOString(),
      },
    ]

    return NextResponse.json(notifications)
  } catch (error) {
    console.error('Error fetching notifications:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}