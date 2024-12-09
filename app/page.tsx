import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, CreditCard, Bell } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Secure Payment Solutions for Pakistan
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Integrate secure payments, manage subscriptions, and connect bank accounts with our powerful API.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/auth/signup">
                <Button className="px-8">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Secure Authentication</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Enterprise-grade security for user authentication and data protection.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <CreditCard className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Bank Integration</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Seamlessly connect bank accounts with our secure API.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Bell className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Real-time Notifications</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Stay updated with instant payment and subscription alerts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}