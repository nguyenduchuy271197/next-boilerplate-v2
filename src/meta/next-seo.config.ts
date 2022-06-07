import type { DefaultSeoProps } from '@interfaces'

const SEO: DefaultSeoProps = {
  title: 'Like Lion',
  titleTemplate: 'Like Lion',
  defaultTitle: 'Like Lion',
  description: 'This is the Like Lion with best courses in the world',
  canonical: 'localhost:3000',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'localhost:3000',
    title: 'Like Lion',
    description: 'This is the Like Lion with best courses in the world',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Huynguyen - personal site and blog',
      },
    ],
  },
  twitter: {
    handle: '@huynguyen',
    site: '@huynguyen',
    cardType: 'summary_large_image',
  },
}

export default SEO
