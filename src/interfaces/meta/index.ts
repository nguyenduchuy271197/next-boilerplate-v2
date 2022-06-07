interface OpenGraphMedia {
  url: string
  width?: number
  height?: number
  alt?: string
  type?: string
  secureUrl?: string
}

interface Twitter {
  handle?: string
  site?: string
  cardType?: string
}

interface OpenGraph {
  url?: string
  type?: string
  title?: string
  description?: string
  images?: ReadonlyArray<OpenGraphMedia>
  videos?: ReadonlyArray<OpenGraphMedia>
  defaultImageHeight?: number
  defaultImageWidth?: number
  locale?: string
  site_name?: string
}

export interface DefaultSeoProps {
  title?: string
  titleTemplate?: string
  defaultTitle?: string
  description?: string
  canonical?: string
  openGraph?: OpenGraph
  twitter?: Twitter
}
