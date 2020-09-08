import Document, { Html, Head, Main, NextScript } from 'next/document'
import Alert from '../components/Alert'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-300">
          <Alert message={"Get the best coupon deals by subscribing to newsletter"} badge={"New"} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument