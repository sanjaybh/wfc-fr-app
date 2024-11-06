import { initStripe, useStripe } from '@stripe/stripe-react-native'
import React, { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native'

import { STRIPE_CONFIG } from '../../../config/Stripe'
import { createPaymentIntent } from '../../../service/paymentService'

const StripeBtn = ({ amount = '', router }) => {
    const { initPaymentSheet, presentPaymentSheet } = useStripe()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        initializeStripe()
    }, [])

    const initializeStripe = async () => {
        await initStripe({
            publishableKey: STRIPE_CONFIG.publishableKey,
            merchantIdentifier: STRIPE_CONFIG.merchantId,
            urlScheme: STRIPE_CONFIG.urlScheme,
        })
        //console.log("loading..." + amount)
    }

    const handlePayment = async () => {
        if (amount.trim() == '') {
            Alert.alert('Alert', 'This field is required.')
            return
        }
        try {
            setLoading(true)
            const { clientSecret, message, success } = await createPaymentIntent(
                amount
            )
            // Initialize payment sheet
            const { error: initError } = await initPaymentSheet({
                paymentIntentClientSecret: clientSecret,
                merchantDisplayName: 'WFC fundraiser, INC',
                style: 'automatic',
                googlePay: true,
                applePay: true,
            })
            //console.log('Intent created successfully ', clientSecret)
            if (initError) {
                Alert.alert('Error', initError.message)
                return
            }

            // Present payment sheet
            const { error: paymentError } = await presentPaymentSheet()
            if (paymentError) {
                Alert.alert('Error', paymentError.message)
            } else {
                Alert.alert('Success', 'Payment completed successfully')
                //window.location.href = '../assets/success.html'
            }
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setLoading(false)
            router.push('/(tabs)/dashboard')
        }
    }

    return (
        <View style={styles.button}>
            <Button
                title={loading ? 'Processing...' : `Pay (Stripe) $${amount}`}
                onPress={() => handlePayment()}
                disabled={loading}
            />
        </View>
    )
}

export default StripeBtn

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
    },
})