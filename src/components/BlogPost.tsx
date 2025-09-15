import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './ui/Footer';
import { Helmet } from "react-helmet";
import { blogPosts, type BlogPost } from '../data/blogData';
import { ArrowRight, MessageSquare, ArrowLeft, Album, Phone } from "lucide-react";
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
  const [selectedImageIndexes, setSelectedImageIndexes] = useState<{ [key: number]: number }>({});

  const handleInquiry = (galleryName: string) => {
    const message = `Hi, I'm interested in the ${galleryName} from your premium god idols collection. Could you please provide more details about pricing and customization options?`;
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
    <div className="bg-gradient-to-b from-white to-gray-50 mt-2">
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {galleries.map((gallery, index) => {
          const currentImageIndex = getCurrentImageIndex(index);
          const currentImage = gallery.images[currentImageIndex];
          const position = index % 2 === 0 ? "right" : "left";
          
          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-10
                         ${position === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-square">
                  <img
                    src={currentImage}
                    alt={`${gallery.heading} - Premium Metal God Idol by FormForge`}
                    title={`${gallery.heading} - ${gallery.details?.material || 'Metal'} Deity Statue`}
                    className="w-full h-full object-contain transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Navigation Arrows */}
                  {gallery.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePreviousImage(index);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 
                                 h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-lg 
                                 border border-gray-200 flex items-center justify-center
                                 transition-all duration-300 hover:scale-105 z-10"
                        aria-label="Previous image"
                      >
                        <ArrowLeft className="h-4 w-4 text-gray-700" />
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextImage(index);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 
                                 h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-lg 
                                 border border-gray-200 flex items-center justify-center
                                 transition-all duration-300 hover:scale-105 z-10"
                        aria-label="Next image"
                      >
                        <ArrowRight className="h-4 w-4 text-gray-700" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {gallery.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 
                                  bg-black/20 rounded-full px-3 py-1.5">
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
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentImageIndex === imageIndex ? "bg-white" : "bg-white/50"
                          }`}
                          aria-label={`View image ${imageIndex + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Thumbnail Navigation */}
                {gallery.images.length > 1 && (
                  <div className="flex gap-2 mt-2 overflow-x-auto pb-2 scrollbar-hide">
                    {gallery.images.map((image, imageIndex) => (
                      <button
                        key={imageIndex}
                        onClick={() => setSelectedImageIndexes(prev => ({
                          ...prev,
                          [index]: imageIndex
                        }))}
                        className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg border-2 overflow-hidden transition-all ${
                          currentImageIndex === imageIndex 
                            ? "border-gray-800 shadow-lg" 
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`${gallery.heading} thumbnail ${imageIndex + 1}`} 
                          className="w-full h-full object-cover" 
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-4 px-4 sm:px-6 lg:px-0">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                      style={{ fontFamily: "Playfair Display, serif" }}>
                    {gallery.heading}
                  </h2>
                  
                  {/* Price Display */}
                  <div className="text-sm sm:text-base text-gray-700 leading-relaxed font-semibold"
     style={{ fontFamily: "Montserrat, sans-serif", lineHeight: "1.7" }}>
  {gallery.details?.price}
</div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed"
                   style={{ fontFamily: "Montserrat, sans-serif", lineHeight: "1.7" }}>
                  {gallery.description}
                </p>

                {/* Specifications */}
                {gallery.details && (
                  <div className="space-y-3 pt-2">
                    {gallery.details.material && (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="text-sm font-semibold text-gray-900">Material:</span>
                        <span className="text-sm text-gray-700">{gallery.details.material}</span>
                      </div>
                    )}
                    {gallery.details.dimensions && (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="text-sm font-semibold text-gray-900">Dimensions:</span>
                        <span className="text-sm text-gray-700">{gallery.details.dimensions}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={() => handleInquiry(gallery.heading)}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg 
                             hover:bg-gray-800 transition-all duration-300 
                             shadow-lg hover:shadow-xl font-medium 
                             flex items-center justify-center gap-2 
                             text-sm sm:text-base"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <MessageSquare className="h-4 w-4" />
                    Get Price & Details
                  </button>
                  
                  <a
                    href="tel:+919650006385"
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg 
                             border border-gray-300 hover:bg-gray-50
                             transition-all duration-300 font-medium 
                             flex items-center justify-center gap-2 
                             text-sm sm:text-base"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
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

  // Related posts
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  // Author data
  const author = {
    name: "Abhinav Goyal",
    bio: "Founder of FormForge, specializing in luxury metal sculptures and religious art.",
    profileLink: "/about",
    profileImage: "/screen2.png",
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.date,
    "dateModified": post.date,
    "image": post.galleries?.[0]?.images || post.image,
    "author": { 
      "@type": "Person", 
      "name": author.name,
      "url": "https://formforge.com/about",
    },
    "publisher": { 
      "@type": "Organization", 
      "name": "FormForge",
      "logo": {
        "@type": "ImageObject",
        "url": "https://formforge.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": post.galleries?.map((gallery, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": gallery.heading,
        "description": gallery.description,
        "image": gallery.images[0],
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": gallery.details?.price?.replace(/[^\d]/g, '') || "45000",
          "availability": "https://schema.org/InStock"
        },
        "material": gallery.details?.material,
        "category": "Religious Sculptures"
      }))
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which metal is best for outdoor god idols?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stainless steel and corten steel are best for outdoor god idols as they are completely weatherproof, rust-resistant, and require zero maintenance even in harsh weather conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Can you customize god idol sizes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we create custom-sized deity statues ranging from 6 inches for car dashboards to 20 feet for temple installations. Contact us with your specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you ship god idols across India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide secure nationwide shipping with proper packaging. We also offer installation guidance for larger sculptures."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${post.title} | FormForge India`}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content="god idols, hindu deity statues, metal god idols, stainless steel idols, brass idols, corten steel sculptures, ganesh idol, buddha statue, krishna idol, religious statues india, weather resistant god idols, outdoor deity statues, home temple idols, pooja room statues, custom god idols, designer deity sculptures, modern religious art, vastu compliant idols, diwali god idols, temple installations" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={`https://formforge.com${post.image}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://formforge.com/blog/${post.id}`} />
        <meta property="og:site_name" content="FormForge" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={`https://formforge.com${post.image}`} />
        <meta name="twitter:site" content="@formforge" />
        
        {/* Additional SEO tags */}
        <link rel="canonical" href={`https://formforge.com/blog/${post.id}`} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="FormForge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://formforge.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://formforge.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "God Idols Collection",
                "item": `https://formforge.com/blog/${post.id}`
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="mb-4 sm:mb-6 flex items-center gap-2 px-3 py-2 text-sm text-gray-600 
                   bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-900 
                   transition-all duration-300 transform hover:scale-105"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          aria-label="Return to blog list"
        >
          <ArrowRight className="h-4 w-4 transform rotate-180" />
          Back to Blog
        </button>

        <article>
          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center text-gray-900"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {post.title}
          </h1>

          {/* Author and Date */}
          <div className="flex items-center justify-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
            <div className="flex items-center">
              <img
                src={author.profileImage}
                alt={`${author.name} profile`}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3 object-cover"
                loading="lazy"
              />
              <span>By </span>
              <Link 
                to={author.profileLink} 
                className="text-gray-900 hover:text-blue-600 mx-1 font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {author.name}
              </Link>
            </div>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString('en-IN', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Interactive Gallery */}
          {post.layout === 'interactive' && post.galleries && (
            <InteractiveBlogLayout galleries={post.galleries} title={post.title} />
          )}

         
          {/* Location-Based Content for SEO */}
          <div className="mt-8 p-4 text-center">
            <p className="text-sm text-gray-600">
              <strong>Serving Premium God Idols Across India:</strong> Delhi NCR, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, Lucknow, and all major cities. International shipping available to USA, UK, Canada, UAE, Australia, and worldwide.
            </p>
          </div>

          {/* Call to Action Section */}
         

          {/* Internal Links Section */}
          <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 text-center"
                style={{ fontFamily: "Playfair Display, serif" }}>
              Explore More From FormForge
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Link
                to="/gallery"
                className="group"
              >
                <div className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 h-full 
                              transition-all duration-300 hover:border-gray-400 hover:shadow-lg 
                              hover:translate-y-[-2px]">
                  <div className="flex items-center mb-3">
                    <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-3 rounded-full mr-4">
                      <Album className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg text-gray-900" 
                        style={{ fontFamily: "Montserrat, sans-serif" }}>
                      View Our Portfolio
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Explore our complete collection of metal sculptures and installations created for temples, homes, and commercial spaces worldwide.
                  </p>
                  <div className="flex items-center text-orange-600 font-medium text-sm group-hover:text-orange-700">
                    Discover Our Work 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              <Link
                to="/contact"
                className="group"
              >
                <div className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 h-full 
                              transition-all duration-300 hover:border-gray-400 hover:shadow-lg 
                              hover:translate-y-[-2px]">
                  <div className="flex items-center mb-3">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-3 rounded-full mr-4">
                      <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg text-gray-900" 
                        style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Custom Sculptures
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Get a custom god idol designed specifically for your space. Our team will help bring your vision to life with premium materials.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                    Start Your Project 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900"
                  style={{ fontFamily: "Playfair Display, serif" }}>
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-video bg-gray-100">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                          style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {relatedPost.metaDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>

      <WhatsAppFloat phoneNumber="+919650006385" />
      <Footer />
    </div>
  );
};

export default BlogPost;