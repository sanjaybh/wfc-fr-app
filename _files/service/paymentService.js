//import { API_URL } from '../config/Stripe'

export const createPaymentIntent = async (amount) => {
  try {
    const response = await fetch(
      `http://localhost:4002/create-payment-intent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.floor(amount * 100), // Convert to cents
          currency: 'usd',
        }),
      }
    )
    console.log('pay service 1')
    const { clientSecret } = await response.json()
    return clientSecret
  } catch (error) {
    console.log('pay service 2')
    console.error('Error creating payment intent:- ', JSON.stringify(error))
    //throw error
  }
}
