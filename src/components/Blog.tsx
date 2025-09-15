import React from "react";
import Navbar from "./Navbar";
import Footer from './ui/Footer';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowRight } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <Navbar />
        <div className="responsive-zoom">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
              >
                <div className="relative w-full pt-[100%]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-500 text-xs mb-2">
                    <span>{post.date}</span>
                  </div>
                  <h2
                    className="text-base font-semibold mb-2 line-clamp-2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    {post.title}
                  </h2>
                  <div
                    className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow"
                    style={{ fontFamily: "Montserrat" }}
                    dangerouslySetInnerHTML={{
                      __html: post.content.replace(/<[^>]*>/g, '').substring(0, 80) + '...'
                    }}
                  />
                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-auto flex items-center gap-1 px-2 py-1 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out text-sm"
                    style={{ fontFamily: "Montserrat" }}
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <WhatsAppFloat phoneNumber="+919650006385" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Blog;