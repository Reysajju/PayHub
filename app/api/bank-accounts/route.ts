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

    const bankAccounts = await prisma.bankAccount.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(bankAccounts)
  } catch (error) {
    console.error('Error fetching bank accounts:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { accountName, accountNumber, accountType } = await request.json()

    const bankAccount = await prisma.bankAccount.create({
      data: {
        userId: user.id,
        accountName,
        accountType,
        plaidAccountId: accountNumber, // Using account number as plaidAccountId for now
      },
    })

    return NextResponse.json(bankAccount)
  } catch (error) {
    console.error('Error creating bank account:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}