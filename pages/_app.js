import '../styles/globals.scss'
import Head from 'next/head'
import Footer from '../components/Footer/Footer';
import HeaderNav from '../components/HeaderNav/HeaderNav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from '../context/AuthContext'


function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Head>
          <title>Wayte | Exercise &#38; Fitness</title>
      </Head>

      <HeaderNav />
      <Component {...pageProps} />
      
      <Footer />
    </AuthContextProvider>
  )
}

export default MyApp
