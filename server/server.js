const express = require('express')
const app = express()
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'API server is running!' })
})

// Initialize payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd' } = req.body

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    })

    res.json({
      message: 'Payment successful',
      success: true,
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Payment failed',
      success: false,
      clientSecret: null,
    })
  }
})

// Webhook to handle post-payment events
app.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const sig = req.headers['stripe-signature']
    let event

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        'whsec_your_webhook_secret'
      )
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`)
    }

    // Handle specific events
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object
        // Handle successful payment
        break
      case 'payment_intent.payment_failed':
        // Handle failed payment
        break
    }

    res.json({ received: true })
  }
)

app.listen(process.env.PORT || 4000, () => {
  console.log('Sever is listening on port - ' + process.env.PORT)
})
