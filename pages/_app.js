import '../styles/globals.css'
import AppStore from '../context/info'


export default function App({ Component, pageProps }) {
  return <>

    <meta charSet="utf-8" />
    <meta name="description" content="Economics handles the world behind the scene, from a coin to world bank" />
    <meta content="economics" name="keywords" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />


    {/* // Wrapping our app in AppStore */}
    <AppStore>
      <Component {...pageProps} />
    </AppStore>
  </>
}
