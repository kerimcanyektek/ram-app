import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from '../styles/globals'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FavoriteContextProvider } from '../context/CharContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoriteContextProvider>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
        <GlobalStyle />
      </>
    </FavoriteContextProvider>
  )
}

