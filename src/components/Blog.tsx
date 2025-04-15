// src/components/Blog.tsx
import React from "react";
import Navbar from "./Navbar";
import Footer from './ui/Footer';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

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

      <div className="max-w-[90%] mx-auto sm:px-6 lg:px-8 pt-[48px] pb-12 sm:pt-16">
        <Navbar />
        <div className="responsive-zoom sm:-m-0">
         

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>{post.date}</span>
                 
                  </div>
                  <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: "Montserrat" }}>
                    {post.title}
                  </h2>
                  <div
                    className="text-gray-600 mb-4 line-clamp-3"
                    style={{ fontFamily: "Montserrat" }}
                    dangerouslySetInnerHTML={{
                      __html: post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
                    }}
                  />
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                  >
                    Read More
                    <span className="ml-1">→</span>
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