import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import MetaMaskAccountProvider from '../components/meta-mask-account-provider'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MetaMaskAccountProvider>
        <Toaster />
        <Component {...pageProps} />
      </MetaMaskAccountProvider>
    </ChakraProvider>
  )
}

export default MyApp
