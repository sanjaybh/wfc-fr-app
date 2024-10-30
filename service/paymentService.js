import { STRIPE_CONFIG } from '../config/Stripe'

export const createPaymentIntent = async (amount, currency = 'usd') => {
  try {
    const response = await fetch(
      `${STRIPE_CONFIG.API_URL}/create-payment-intent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency }),
      }
    )
    const { clientSecret, message, success } = await response.json()
    return { clientSecret, message, success }
  } catch (error) {
    console.error('Error creating payment intent:- ', JSON.stringify(error))
    throw error
  }
}
