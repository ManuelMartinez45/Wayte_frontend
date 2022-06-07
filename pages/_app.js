import '../styles/globals.scss'
import Head from 'next/head'
import Footer from '../components/Footer/Footer';
import HeaderNav from '../components/HeaderNav/HeaderNav'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Wayte | Exercise &#38; Fitness</title>
      </Head>

      <HeaderNav />
      <Component {...pageProps} />
      
      <Footer />
    </>
  )
}

export default MyApp
