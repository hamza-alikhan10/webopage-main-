import React from "react";
import Navbar from "./Navbar";
import Footer from './ui/Footer';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowRight } from "lucide-react";

const Blog: React.FC = () => {
  return (
    <div className="origin-top">
      <Helmet>
        <title>Luxury Art Blog | Modern Sculptures & Installations</title>
        <meta name="description" content="Explore insights into luxury 3D sculptures, stainless steel art, and modern installations. Discover trends and techniques in contemporary art." />
        <meta name="keywords" content="luxury art, modern sculptures, metal art, Corten steel, sustainable art, public installations" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Luxury Art Blog",
            "description": "Insights into luxury 3D sculptures and modern installations.",
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.metaDescription,
              "datePublished": post.date,
              "image": post.image,
              "author": { "@type": "Organization", "name": "YourWebsiteName" }
            }))
          })}
        </script>
      </Helmet>

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pt-[48px] pb-12 sm:pt-16">
        <Navbar />
        <div className="responsive-zoom">
          <div className="grid gap-6 grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 xs:h-36 object-cover"
                  loading="lazy"
                />
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-3">
                    <span>{post.date}</span>
                  </div>
                  <h2
                    className="text-lg sm:text-xl font-semibold mb-3 line-clamp-2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {post.title}
                  </h2>
                  <div
                    className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3 flex-grow"
                    style={{ fontFamily: "Montserrat" }}
                    dangerouslySetInnerHTML={{
                      __html: post.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...'
                    }}
                  />
                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-auto flex items-center gap-2 px-3 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-base"
                    style={{ fontFamily: "Montserrat" }}
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Blog;