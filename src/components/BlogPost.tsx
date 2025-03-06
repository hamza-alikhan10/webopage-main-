import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './ui/Footer';
import { Helmet } from "react-helmet";
import { blogPosts, type BlogPost } from '../data/blogData';
import { Instagram, Linkedin, Globe, Album, ArrowRight, MessageSquare, Camera, Landmark } from "lucide-react";

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
              "url": "https://formforge.com/about",
              "image": author.profileImage
            },
            "publisher": { "@type": "Organization", "name": "formforge" }
          })}
        </script>
      </Helmet>

      <div className="max-w-full mx-auto px-0 sm:px-6 lg:px-8 py-12 overflow-hidden">
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
              className="text-3xl md:text-4xl font-bold mb-5 text-center"
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
           
            </div>

            {/* Blog Post Image */}
            <div className="flex justify-center px-4 sm:px-6 lg:px-8">
  <img
    src={post.image}
    alt={post.title}
    className="w-full max-w-[820px] h-auto object-cover rounded-lg shadow-lg"
    loading="lazy"
  />
</div>

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

           {/* Enhanced Internal Links Section */}
           <div className="my-5 p-8 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ fontFamily: "Montserrat" }}>
                <Landmark className="h-5 w-5 text-gray-500" /> 
                Explore More From FormForge
              </h3>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/gallery"
                  className="flex-1 group"
                >
                  <div className="bg-white p-6 rounded-lg border border-gray-200 h-full transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:translate-y-[-4px]">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Album className="h-6 w-6 text-gray-500" />
                      </div>
                      <h4 className="font-semibold text-lg" style={{ fontFamily: "Montserrat" }}>View Our Portfolio</h4>
                    </div>
                    <p className="text-gray-600 mb-4">Explore our collection of custom metal sculptures and installations created for clients worldwide.</p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                      Discover Our Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>

                <Link
                  to="/contact"
                  className="flex-1 group"
                >
                  <div className="bg-white p-6 rounded-lg border border-gray-200 h-full transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:translate-y-[-4px]">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <MessageSquare className="h-6 w-6 text-gray-500" />
                      </div>
                      <h4 className="font-semibold text-lg" style={{ fontFamily: "Montserrat" }}>Contact Us</h4>
                    </div>
                    <p className="text-gray-600 mb-4">Interested in a custom piece? Get in touch with our team to discuss your vision and requirements.</p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                      Start a Conversation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>


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