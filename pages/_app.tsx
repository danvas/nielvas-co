import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import '../styles.scss'

function Root({ Component, pageProps }) {
  const router = useRouter();
  const enabledBg = router.asPath === "/" ? "nv-cloud-bg" : "";
  return (
    <div id="root-container" className={`d-flex flex-column ${enabledBg}`}>
      <Script
        strategy="beforeInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-DFH13LLV4W">
      </Script>
      <Script
        strategy="afterInteractive"
      >
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-DFH13LLV4W');`}
      </Script>
      <Head>
        <title>Daniel Vasquez // 3D Software Developer</title>
        <link rel="icon" href="https://symbl-world.akamaized.net/i/webp/78/4c77a8fb21eeb70940ce079977345c.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default Root;