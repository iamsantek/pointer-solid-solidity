import { Container, Heading } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
          <Container className='max-w-3xl mx-auto'>
            <Heading as='h1'>Solidity Keyboard Generator</Heading>
            <Main />
          </Container>
          <Footer />
          <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument

