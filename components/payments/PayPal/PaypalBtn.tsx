//import liraries
import { useState } from 'react';
import { SafeAreaView, Button, StyleSheet, View, Modal, TouchableOpacity, Text } from 'react-native';
import queryString from 'query-string';
import PayPal from 'react-native-paypal';

//import WebView from 'react-native-webview';
import { WebView } from 'react-native-webview';

import paypalApi from '../../../data/apiPaypal';
import ButtonComp from '../../ButtonComp'

// create a component
const PaypalBtn = ({ amount, router }) => {
    //const [cardInfo, setCardInfo] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [paypalUrl, setPaypalUrl] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const [paymentLink, setPaymentLink] = useState(null);

    const onPressPaypal = async () => {
        //console.log("++++++++++[res]++++++")
        setLoading(true)
        try {
            const token = await paypalApi.generateToken()
            const res = await paypalApi.createOrder(token, amount)
            setAccessToken(token)

            // console.log("res++++++", res)

            setLoading(false)

            if (!!res?.links) {
                const findUrl = res.links.find(data => data?.rel == "approve")
                //console.log("findUrl - " + findUrl)
                setPaypalUrl(findUrl.href)
            }
        } catch (error) {
            //console.log("error", error)
            setLoading(false)
        }
    }

    const onUrlChange = (webviewState) => {
        //console.log("webviewStatewebviewState", webviewState)
        if (webviewState.url.includes('https://example.com/cancel')) {
            clearPaypalState()
            return;
        }
        if (webviewState.url.includes('https://example.com/return')) {
            const urlValues = queryString.parseUrl(webviewState.url)
            //console.log("my urls value", urlValues)
            const { token } = urlValues.query
            if (!!token) {
                paymentSucess(token)
            }
        }
    }

    const paymentSucess = async (id) => {
        try {
            const res = await paypalApi.capturePayment(id, accessToken)
            //console.log("capturePayment res++++", res)
            alert("Payment sucessfull...!!!")
            clearPaypalState()
        } catch (error) {
            console.log("error raised in payment capture", error)
        }
    }

    const clearPaypalState = () => {
        setPaypalUrl(null)
        setAccessToken(null)
    }

    // function onPressPaypal() { }
    // function onUrlChange() { }
    // function clearPaypalState() { }

    const btnText = `Pay (PayPal) $${amount}`;
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <ButtonComp
                    onPress={onPressPaypal}
                    disabled={false}
                    btnStyle={{ backgroundColor: '#0f4fa3', marginVertical: 16 }}
                    text={btnText}
                    isLoading={isLoading}
                />

                <Modal visible={!!paypalUrl} >
                    <TouchableOpacity onPress={clearPaypalState} style={{ margin: 24 }} >
                        <Text >Closed</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1 }}>
                        <WebView source={{ uri: paypalUrl }} onNavigationStateChange={onUrlChange} />
                    </View>
                </Modal>

                {/* <View>
                    <Text>Payment Link: {paymentLink && paymentLink}</Text>
                    <Button title="Create Payment Link" onPress={handleCreatePaymentLink} />
                </View> */}
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

//make this component available to the app
export default PaypalBtn;
