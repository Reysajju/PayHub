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

    const stats = await prisma.$transaction([
      prisma.bankAccount.count({
        where: { userId: user.id }
      }),
      prisma.subscription.findFirst({
        where: { 
          userId: user.id,
          status: 'active'
        }
      })
    ])

    return NextResponse.json({
      totalTransactions: 0, // We'll implement this later
      activeSubscriptions: stats[1] ? 1 : 0,
      connectedBanks: stats[0]
    })
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}