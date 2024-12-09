"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Building2 } from "lucide-react"
import { AddBankAccountModal } from "@/components/bank-accounts/add-bank-modal"
import { useBankAccounts } from "@/hooks/use-bank-accounts"

export default function BankAccountsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { bankAccounts, isLoading } = useBankAccounts()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Bank Accounts</h2>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Bank Account
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bankAccounts.map((account) => (
          <Card key={account.id}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center">
                <Building2 className="mr-2 h-5 w-5" />
                <CardTitle className="text-sm font-medium">{account.accountName}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{account.accountType}</CardDescription>
            </CardContent>
          </Card>
        ))}

        {bankAccounts.length === 0 && (
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>No Bank Accounts</CardTitle>
              <CardDescription>
                Add your first bank account to start managing your finances.
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </div>

      <AddBankAccountModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </div>
  )
}