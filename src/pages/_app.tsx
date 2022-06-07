import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'

import SEO from '@config/next-seo.config'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      {/* Google Analytics scripts */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ''
        }`}
      />

      <Script id="ga-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ''}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
