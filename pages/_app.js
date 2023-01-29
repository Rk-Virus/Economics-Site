import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <title>Ekonopro</title>
    <meta charSet="utf-8" />
    <meta name="description" content="Economics handles the world behind the scene, from a coin to world bank" />
    <meta content="economics" name="keywords" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Component {...pageProps} />
  </>
}
