import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>Anime Girl Dating Simulator</title>
    <meta name="title" content="Anime Girl Dating Simulator" />
    <meta name="description" content="A game where you can date anime characters." />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://anime-girl-dating-simulator.vercel.app" />
    <meta property="og:title" content="Anime Girl Dating Simulator" />
    <meta property="og:description" content="A game where you can date anime characters." />
    <meta property="og:image" content="/icon.jpg" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://anime-girl-dating-simulator.vercel.app" />
    <meta property="twitter:title" content="Anime Girl Dating Simulator" />
    <meta property="twitter:description" content="A game where you can date anime characters." />
    <meta property="twitter:image" content="/icon.jpg" />
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
