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
        <body>
          <Container centerContent p={6} margin={20} >
            <Heading fontWeight='bold' fontSize={30}>Solidity Keyboard Generator</Heading>
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

