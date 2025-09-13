import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './ui/Footer';
import { Helmet } from "react-helmet";
import { blogPosts, type BlogPost } from '../data/blogData';
import { Instagram, Linkedin, Globe, Album, ArrowRight, MessageSquare, Camera, Landmark, ArrowLeft } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Interactive Layout Component
interface Gallery {
  heading: string;
  description: string;
  images: string[];
  details?: {
    material?: string;
    dimensions?: string;
    price?: string;
  };
}

interface InteractiveBlogLayoutProps {
  galleries: Gallery[];
  title: string;
}

const InteractiveBlogLayout: React.FC<InteractiveBlogLayoutProps> = ({ galleries, title }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImageIndexes, setSelectedImageIndexes] = useState<{ [key: number]: number }>({});

  const handleInquiry = (galleryName: string) => {
    const message = `Hi, I'm interested in the ${galleryName} from your ${title} blog post. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/919650006385?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePreviousImage = useCallback((galleryIndex: number) => {
    const gallery = galleries[galleryIndex];
    if (!gallery) return;
    
    setSelectedImageIndexes(prev => {
      const currentIndex = prev[galleryIndex] || 0;
      return {
        ...prev,
        [galleryIndex]: currentIndex > 0 ? currentIndex - 1 : gallery.images.length - 1
      };
    });
  }, [galleries]);

  const handleNextImage = useCallback((galleryIndex: number) => {
    const gallery = galleries[galleryIndex];
    if (!gallery) return;
    
    setSelectedImageIndexes(prev => {
      const currentIndex = prev[galleryIndex] || 0;
      return {
        ...prev,
        [galleryIndex]: currentIndex < gallery.images.length - 1 ? currentIndex + 1 : 0
      };
    });
  }, [galleries]);

  const getCurrentImageIndex = (galleryIndex: number) => {
    return selectedImageIndexes[galleryIndex] || 0;
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white mt-8">
      <div className="space-y-12 sm:space-y-16 lg:space-y-20">
        {galleries.map((gallery, index) => {
          const currentImageIndex = getCurrentImageIndex(index);
          const currentImage = gallery.images[currentImageIndex];
          const position = index % 2 === 0 ? "right" : "left";
          
          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 
                         ${position === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}
                         group transition-all duration-700 hover:scale-[1.01] sm:hover:scale-[1.02]`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Section with Navigation */}
              <div className="w-full lg:w-1/2 relative overflow-hidden">
                <div className="relative group cursor-pointer">
                  <img
                    src={currentImage}
                    alt={`${gallery.heading} - View ${currentImageIndex + 1} of ${gallery.images.length}`}
                    className="w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover 
                             transition-all duration-500 group-hover:scale-105
                             shadow-xl sm:shadow-2xl hover:shadow-3xl rounded-lg"
                    style={{ 
                      filter: hoveredIndex === index ? 'brightness(1.1) contrast(1.1)' : 'brightness(1)',
                    }}
                  />
                  
                  {/* Navigation Arrows */}
                  {gallery.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePreviousImage(index);
                        }}
                        className="absolute left-2 xs:left-3 sm:left-4 top-1/2 -translate-y-1/2 
                                 h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 
                                 rounded-full bg-white/90 hover:bg-white shadow-lg 
                                 border border-gray-200 flex items-center justify-center
                                 transition-all duration-300 hover:scale-105 z-10"
                        aria-label="Previous image"
                      >
                        <ArrowLeft className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-gray-700" />
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextImage(index);
                        }}
                        className="absolute right-2 xs:right-3 sm:right-4 top-1/2 -translate-y-1/2 
                                 h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 
                                 rounded-full bg-white/90 hover:bg-white shadow-lg 
                                 border border-gray-200 flex items-center justify-center
                                 transition-all duration-300 hover:scale-105 z-10"
                        aria-label="Next image"
                      >
                        <ArrowRight className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-gray-700" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {gallery.images.length > 1 && (
                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 
                                  bg-black/20 rounded-full px-2 xs:px-2.5 sm:px-3 py-1.5 sm:py-2">
                      {gallery.images.map((_, imageIndex) => (
                        <button
                          key={imageIndex}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndexes(prev => ({
                              ...prev,
                              [index]: imageIndex
                            }));
                          }}
                          className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2 sm:h-2 rounded-full transition-all ${
                            currentImageIndex === imageIndex ? "bg-white" : "bg-white/50"
                          }`}
                          aria-label={`View image ${imageIndex + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left px-2 sm:px-0">
                <div className="space-y-2">
                  <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 leading-tight"
                      style={{ fontFamily: "Montserrat", letterSpacing: "0.02em" }}>
                    {gallery.heading}
                  </h2>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-gray-600 leading-relaxed text-xs xs:text-sm sm:text-base"
                     style={{ fontFamily: "Poppins", lineHeight: "1.7" }}>
                    {gallery.description}
                  </p>

                  {/* Specifications */}
                  {gallery.details && (
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-500">
                      {gallery.details.material && (
                        <div className="flex flex-col xs:flex-row justify-center lg:justify-start xs:items-center gap-1 xs:gap-2">
                          <span className="font-medium">Material:</span>
                          <span>{gallery.details.material}</span>
                        </div>
                      )}
                      {gallery.details.dimensions && (
                        <div className="flex flex-col xs:flex-row justify-center lg:justify-start xs:items-center gap-1 xs:gap-2">
                          <span className="font-medium">Dimensions:</span>
                          <span>{gallery.details.dimensions}</span>
                        </div>
                      )}
                      {gallery.details.price && (
                        <div className="flex flex-col xs:flex-row justify-center lg:justify-start xs:items-center gap-1 xs:gap-2">
                          <span className="font-medium text-gray-700 text-sm sm:text-base">Price:</span>
                          <span className="text-gray-800 font-medium text-sm sm:text-base">{gallery.details.price}</span>
                        </div>
                      )}
                      {gallery.images.length > 1 && (
                        <div className="flex flex-col xs:flex-row justify-center lg:justify-start xs:items-center gap-1 xs:gap-2">
                          <span className="font-medium">Images:</span>
                          <span>{gallery.images.length} views available</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="flex justify-center lg:justify-start pt-2 sm:pt-4">
                    <button
                      onClick={() => handleInquiry(gallery.heading)}
                      className="bg-gray-800 text-white px-6 xs:px-7 sm:px-8 py-3 rounded-full 
                               hover:bg-gray-900 transition-all duration-300 
                               transform hover:scale-105 shadow-lg hover:shadow-xl
                               font-medium flex items-center justify-center gap-2 
                               text-sm xs:text-sm sm:text-base
                               w-full xs:w-auto max-w-xs xs:max-w-none"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      <MessageSquare className="h-4 w-4" />
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

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
        <meta name="keywords" content="luxury art, metal sculptures, Corten steel Sculptures, Stainless Steel Sculptures, outdoor sculptures, sustainable art, public installations" />
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
  className="mb-2 flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:px-4 sm:py-2 sm:text-base"
  style={{ fontFamily: "Montserrat" }}
  aria-label="Return to blog list"
>
  <ArrowRight className="h-3.5 w-3.5 transform rotate-180 sm:h-4 sm:w-4" />
  Back to Blog
</button>

          <article>
            <h1
              className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-5 text-center"
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

            {/* Blog Post Image - Only show for default layout */}
            {post.layout !== 'interactive' && (
              <div className="flex justify-center mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg px-4 sm:px-0"
                  loading="lazy"
                />
              </div>
            )}

            {/* Blog Content */}
            <div
              className="prose prose-lg max-w-none text-left"
              style={{ fontFamily: "Montserrat" }}
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/<header[\s\S]*?<\/header>/, '')
              }}
            />

            {/* Interactive Layout for specific posts */}
            {post.layout === 'interactive' && post.galleries && (
              <InteractiveBlogLayout galleries={post.galleries} title={post.title} />
            )}
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

<WhatsAppFloat phoneNumber="+919650006385" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;