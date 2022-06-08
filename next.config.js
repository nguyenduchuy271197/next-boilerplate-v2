/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['flowbite.com'],
  },
}

module.exports = nextConfig
