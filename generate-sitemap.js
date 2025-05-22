// generate-sitemap.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// Define your hostname
const hostname = "https://yourwebsite.com";

// Define your routes
const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/blog", changefreq: "weekly", priority: 0.9 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

// Create a sitemap
const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream("./public/sitemap.xml");

routes.forEach((route) => sitemap.write(route));
sitemap.end();

streamToPromise(sitemap)
  .then((data) => writeStream.write(data.toString()))
  .then(() => {
    writeStream.end();
    console.log("Sitemap generated successfully!");
  })
  .catch((err) => console.error("Error generating sitemap:", err));