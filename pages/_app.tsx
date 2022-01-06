import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />

    </ChakraProvider>
  
  )
}

export default MyApp
