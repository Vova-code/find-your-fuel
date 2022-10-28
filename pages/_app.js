import '../styles/globals.css'
import Header from '../components/atoms/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
