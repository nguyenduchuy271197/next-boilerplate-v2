/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'localhost:3000',
  sitemapSize: 5000,
  generateRobotsTxt: true, // (optional)
  // ...other options
}
