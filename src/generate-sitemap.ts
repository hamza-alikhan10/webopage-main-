import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://yourdomain.com' });
const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

const routes = [
  '/',
  '/about',
  '/gallery',
  '/contact',
  '/press',
  '/blog',
  // Add blog slugs here if needed
];

routes.forEach((route) => {
  sitemap.write({ url: route, changefreq: 'weekly', priority: 0.7 });
});

sitemap.end();

writeStream.on('finish', () => {
  console.log('✅ Sitemap generated and written to /public/sitemap.xml');
});
