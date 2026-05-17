import '../src/index.css'
import '../src/assets/css/fonts.css'
import '../src/assets/css/career.css'
import '../src/assets/css/contact.css'
import Layout from '../src/components/layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
