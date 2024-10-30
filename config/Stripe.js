//import { Platform } from 'react-native';

// export const STRIPE_PUBLISHABLE_KEY =
//   'pk_test_51QAJaKGOl2xOUOBH05603MhKsbhGGwFhHsJRtPCrDgPFW7B1FJcjp0gBeZJkuSZEziGfwF3jIv0AamkH5RSQdq1P004NAH1rww'
// export const API_URL = 'http://192.168.0.167:4002'

export const STRIPE_CONFIG = {
  publishableKey:
    'pk_test_51QAJaKGOl2xOUOBH05603MhKsbhGGwFhHsJRtPCrDgPFW7B1FJcjp0gBeZJkuSZEziGfwF3jIv0AamkH5RSQdq1P004NAH1rww',
  merchantId: 'merchant.com.your.app', // Required for Apple Pay
  urlScheme: 'your-app-scheme', // Required for 3D Secure
  API_URL: 'http://192.168.0.167:4002',
}
