import '../index.css'
import '../assets/css/fonts.css'
import '../assets/css/career.css'
import '../assets/css/contact.css'
import Layout from '../components/layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
