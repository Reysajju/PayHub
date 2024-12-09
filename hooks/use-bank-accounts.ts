"use client"

import { useState, useEffect } from 'react'

interface BankAccount {
  id: string
  accountName: string
  accountType: string
  accountNumber: string
  createdAt: string
  updatedAt: string
}

export function useBankAccounts() {
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBankAccounts = async () => {
      try {
        const response = await fetch('/api/bank-accounts')
        if (!response.ok) throw new Error('Failed to fetch bank accounts')
        const data = await response.json()
        setBankAccounts(data)
      } catch (error) {
        console.error('Error fetching bank accounts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBankAccounts()
  }, [])

  return { bankAccounts, isLoading }
}