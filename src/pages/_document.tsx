import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const isProd = process.env.NODE_ENV === 'production'

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Cloudflare Web Analytics */}
        {isProd && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "0e9f8f2c29e440dcb174ae36bcbf0da0"}'
          />
        )}

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
      </body>
    </Html>
  )
}
