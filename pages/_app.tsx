import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { trackErrors } from "../lib/analytics"
import '../styles.scss'

function Root({ Component, pageProps }) {
  useEffect(() => trackErrors(), []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-DFH13LLV4W">
      </Script>
      <Script
        id="ga-config"
        strategy="afterInteractive"
      >
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-DFH13LLV4W');`}
      </Script>
      <Script id="get-prefered-theme-script" strategy="beforeInteractive" >
        {`
      let storedTheme = localStorage.getItem('theme')
      let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      document.querySelector(':root').dataset.bsTheme = storedTheme ?? systemTheme
      `}
      </Script>
      <Head>
        <title>Daniel Vasquez // Software Developer</title>
        <link rel="icon" href="https://symbl-world.akamaized.net/i/webp/78/4c77a8fb21eeb70940ce079977345c.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Root;