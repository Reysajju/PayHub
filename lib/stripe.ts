import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
})

export const getStripeCustomer = async (email: string) => {
  const customers = await stripe.customers.list({ email })
  return customers.data[0]?.id
}