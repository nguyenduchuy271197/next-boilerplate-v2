import '@styles/globals.scss'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import SEO from '@config/next-seo.config'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

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
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
