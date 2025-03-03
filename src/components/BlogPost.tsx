import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './ui/Footer';
import { Helmet } from "react-helmet";
import { blogPosts, type BlogPost } from '../data/blogData';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  // Logic for related articles (excluding current post, take 2 others)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  // Author data (move this to blogData.ts if dynamic per post)
  const author = {
    name: "Abhinav Goyal",
    bio: "Art enthusiast and expert in luxury metal sculptures.",
    profileLink: "/about",
    profileImage: "/screen2.png", // Replace with actual image URL
  };

  return (
    <div className="origin-top">
      <Helmet>
        <title>{`${post.title} | Luxury Art Blog`}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content="luxury art, metal sculptures, Corten steel, sustainable art, public installations" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.metaDescription,
            "datePublished": post.date,
            "image": post.image,
            "author": { 
              "@type": "Person", 
              "name": author.name,
              "url": `https://yourwebsite.com${author.profileLink}`,
              "image": author.profileImage
            },
            "publisher": { "@type": "Organization", "name": "YourWebsiteName" }
          })}
        </script>
      </Helmet>

      <div className="max-w-[90%] mx-auto sm:px-6 lg:px-8 py-12">
        <Navbar />
        <div className="responsive-zoom sm:-m-0">
          <button
            onClick={() => navigate('/blog')}
            className="mb-8 text-gray-600 hover:text-gray-900 flex items-center"
            style={{ fontFamily: "Montserrat" }}
          >
            ← Back to Blog
          </button>

          <article>
            <h1
              className="text-4xl md:text-5xl font-bold mb-5 text-center"
              style={{ fontFamily: "Montserrat" }}
            >
              {post.title}
            </h1>

            {/* Author, Date, and Read Time Section with Profile Pic */}
            <div className="flex items-center justify-center text-gray-500 text-sm mb-8 flex-wrap gap-2">
              <div className="flex items-center">
                <img
                  src={author.profileImage}
                  alt={`${author.name} profile`}
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                  loading="lazy"
                />
                <span>By </span>
                <Link 
                  to={author.profileLink} 
                  className="text-gray-700 hover:text-blue-600 mx-1 font-medium"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {author.name}
                </Link>
              </div>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Blog Post Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl"
              loading="lazy"
            />

            {/* Blog Content */}
            <div
              className="prose prose-lg max-w-none text-left"
              style={{ fontFamily: "Montserrat" }}
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/<header[\s\S]*?<\/header>/, '')
              }}
            />
          </article>

          {/* Related Articles Section */}
          {/* <section className="mt-10">
            <h2
              className="text-3xl font-semibold mb-8"
              style={{ fontFamily: "Montserrat" }}
            >
              Related Articles
            </h2>
            <div className="grid gap-6 grid-cols-2 sm:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      <Link
                        to={`/blog/${relatedPost.id}`}
                        className="text-black-600 hover:text-blue-800"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section> */}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;