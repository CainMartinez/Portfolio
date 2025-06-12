module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cain-dev.es',
  generateRobotsTxt: true,       // genera también /robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  // opcional: excluye rutas privadas
  // exclude: ['/secret', '/admin/*'],
};
