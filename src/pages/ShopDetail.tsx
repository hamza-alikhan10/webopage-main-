import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";
import { Diamond, Fingerprint, Award, Paintbrush, Ruler, Monitor, Tags, ArrowLeft, ArrowRight, MessageCircle, Lightbulb } from "lucide-react";
import { sculptures, Sculpture } from "@/data/shopData";

const ShopDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [artwork, setArtwork] = useState<Sculpture | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      if (!id) {
        throw new Error("Invalid artwork ID");
      }
      const foundArtwork = sculptures.find((s) => s.id === id);
      if (!foundArtwork) {
        throw new Error("Artwork not found");
      }
      console.log("Found artwork:", foundArtwork);
      setArtwork(foundArtwork);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching artwork:", err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handlePreviousImage = useCallback(() => {
    if (!artwork) return;
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : artwork.images.length - 1
    );
  }, [artwork]);

  const handleNextImage = useCallback(() => {
    if (!artwork) return;
    setSelectedImageIndex((prevIndex) =>
      prevIndex < artwork.images.length - 1 ? prevIndex + 1 : 0
    );
  }, [artwork]);

  const handlePriceInquiry = () => {
    const message = `Hi, I'm interested in the artwork "${artwork?.title}". Could you please share the pricing details?`;
    const whatsappUrl = `https://wa.me/919650020485?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white" id="Root-padding">
        <Helmet>
          <title>Loading Artwork | FORMFORGE Gallery</title>
          <meta name="description" content="Loading premium artwork details from FORMFORGE contemporary art gallery." />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !artwork) {
    return (
      <div className="min-h-screen bg-white" id="Root-padding">
        <Helmet>
          <title>Artwork Not Found | FORMFORGE Gallery</title>
          <meta name="description" content="The requested artwork could not be found. Browse our contemporary art collection at FORMFORGE." />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
          <p className="text-xl text-gray-600" style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}>
            {error || "Artwork not found"}
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  // Generate structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: artwork.title,
    description: artwork.description,
    image: artwork.images.map((img) => `https://formforge.com${img}`),
    creator: {
      "@type": "Person",
      name: "Abhinav Goyal",
      url: "https://formforge.com"
    },
    dateCreated: "2023",
    artMedium: artwork.details.medium,
    width: {
      "@type": "QuantitativeValue",
      value: artwork.details.dimensions.split(" x ")[1]?.replace(/[^\d.]/g, '') || "",
      unitCode: "CMT"
    },
    height: {
      "@type": "QuantitativeValue", 
      value: artwork.details.dimensions.split(" x ")[0]?.replace(/[^\d.]/g, '') || "",
      unitCode: "CMT"
    },
    url: `https://formforge.com/shop/${artwork.id}`,
    mainEntityOfPage: `https://formforge.com/shop/${artwork.id}`,
    offers: {
      "@type": "Offer",
      availability: artwork.status === "Readily Available" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "Contact for pricing"
      }
    },
    keywords: artwork.details.tags.join(", "),
    artworkSurface: artwork.details.medium,
    genre: artwork.details.type,
    isPartOf: {
      "@type": "Collection",
      name: "FORMFORGE Contemporary Art Collection"
    }
  };

  // Generate meta keywords
  const metaKeywords = [
    artwork.title,
    artwork.details.type,
    ...artwork.details.tags,
    "contemporary art",
    "sculpture",
    "FORMFORGE",
    "art gallery",
    "buy artwork online",
    "premium art"
  ].join(", ");

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <Helmet>
        <title>{artwork.title} - Premium {artwork.details.type} | FORMFORGE Gallery</title>
        <meta name="description" content={`${artwork.description} Discover this exquisite ${artwork.details.type.toLowerCase()} by Abhinav Goyal at FORMFORGE contemporary art gallery. ${artwork.details.medium}`} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content="Abhinav Goyal" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${artwork.title} - Premium ${artwork.details.type} | FORMFORGE`} />
        <meta property="og:description" content={`${artwork.description} Discover this exquisite ${artwork.details.type.toLowerCase()} at FORMFORGE contemporary art gallery.`} />
        <meta property="og:image" content={`https://formforge.com${artwork.images[0]}`} />
        <meta property="og:image:alt" content={`${artwork.title} - ${artwork.details.type} artwork by Abhinav Goyal`} />
        <meta property="og:url" content={`https://formforge.com/shop/${artwork.id}`} />
        <meta property="og:site_name" content="FORMFORGE Gallery" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${artwork.title} - Premium ${artwork.details.type} | FORMFORGE`} />
        <meta name="twitter:description" content={`${artwork.description} Discover this exquisite ${artwork.details.type.toLowerCase()} at FORMFORGE contemporary art gallery.`} />
        <meta name="twitter:image" content={`https://formforge.com${artwork.images[0]}`} />
        <meta name="twitter:image:alt" content={`${artwork.title} - ${artwork.details.type} artwork by Abhinav Goyal`} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="FORMFORGE Gallery" />
        <meta name="apple-mobile-web-app-title" content="FORMFORGE" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://formforge.com/shop/${artwork.id}`} />
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href={artwork.images[0]} />
        <link rel="preload" as="font" href="/fonts/playfair-display.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/fonts/montserrat.woff2" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Additional structured data for breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://formforge.com"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Shop",
                item: "https://formforge.com/shop"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: artwork.title,
                item: `https://formforge.com/shop/${artwork.id}`
              }
            ]
          })}
        </script>
      </Helmet>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Image Section - Mobile */}
          <div className="mb-6">
            <div className="relative overflow-hidden bg-gray-50 rounded-lg mb-1 aspect-square">
              <img
                src={artwork.images[selectedImageIndex]}
                alt={`${artwork.title} - View ${selectedImageIndex + 1} of ${artwork.images.length}`}
                className="w-full h-full object-contain transition-transform duration-300"
                loading="lazy"
              />
              {artwork.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePreviousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-lg border-gray-200"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-lg border-gray-200"
                    aria-label="Next image"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </>
              )}
              {artwork.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 rounded-full px-3 py-1.5">
                  {artwork.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedImageIndex === index ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            {/* Thumbnail Navigation - Mobile */}
            {artwork.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {artwork.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${
                      selectedImageIndex === index ? "border-gray-800 shadow-lg" : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title - Mobile */}
          <div className="text-center ">
            <h1
              className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {artwork.title}
            </h1>
          </div>

          {/* Price Button and Contact Info - Mobile */}
          <div className="text-center mb-1">
            <button
              onClick={handlePriceInquiry}
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium text-sm px-6 py-2.5 rounded-lg shadow-sm transition-colors"
              style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
            >
              <MessageCircle className="h-4 w-4" />
              Price on Request
            </button>
           
          </div>

          {/* Description - Mobile */}
          <div className="mb-1">
            <p
              className="text-gray-900 leading-relaxed text-base text-center px-1"
              style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
            >
              {artwork.description}
            </p>
          </div>

          {/* Artwork Details - Mobile */}
          <div className="bg-gray-50 rounded-lg p-5 mb-6">
            <h2
              className="text-xl font-semibold text-gray-900 mb-5 text-center"
              style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
            >
              Artwork Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Diamond className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="block text-sm font-medium text-gray-900">Type</span>
                  <span className="text-sm text-gray-700">{artwork.details.type}</span>
                </div>
              </div>
        
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="block text-sm font-medium text-gray-900">Authenticity</span>
                  <span className="text-sm text-gray-700">{artwork.details.authenticity}</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Paintbrush className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="block text-sm font-medium text-gray-900">Medium</span>
                  <span className="text-sm text-gray-700">{artwork.details.medium}</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Ruler className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="block text-sm font-medium text-gray-900">Dimensions</span>
                  <span className="text-sm text-gray-700">{artwork.details.dimensions}</span>
                </div>
              </div>
              
              {artwork.details.integratedLighting && (
  <div className="flex items-start gap-3">
    <Lightbulb className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
    <div className="min-w-0">
      <span className="block text-sm font-medium text-gray-900">Integrated Lighting</span>
      <span className="text-sm text-gray-700">LED illumination system included</span>
    </div>
  </div>
)}
              
              <div className="flex items-start gap-3">
                <Monitor className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="block text-sm font-medium text-gray-900">Display</span>
                  <span className="text-sm text-gray-700">{artwork.details.display}</span>
                </div>
              </div>
            </div>
            
            {/* Tags - Mobile */}
            <div className="mt-6">
              <div className="flex items-start gap-3">
                <Tags className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="block text-sm font-medium text-gray-900 mb-3">Tags</span>
                  <div className="flex flex-wrap gap-2">
                    {artwork.details.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8">
          {/* Image Section - Desktop */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden bg-gray-50 rounded-lg mb-4 aspect-square">
              <img
                src={artwork.images[selectedImageIndex]}
                alt={`${artwork.title} - View ${selectedImageIndex + 1} of ${artwork.images.length}`}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              {artwork.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePreviousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg border-gray-200"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg border-gray-200"
                    aria-label="Next image"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </>
              )}
              {artwork.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 rounded-full px-2 py-1">
                  {artwork.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedImageIndex === index ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            {/* Thumbnail Navigation - Desktop */}
            {artwork.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {artwork.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden transition-all ${
                      selectedImageIndex === index ? "border-gray-800 shadow-lg" : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section - Desktop */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title and Price Button - Desktop */}
            <div>
              <h1
                className="text-3xl xl:text-4xl font-bold text-gray-900 p-1 mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {artwork.title}
              </h1>
              <div className="mb-1 ">
                <button
                  onClick={handlePriceInquiry}
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium text-base px-6 py-3 rounded-lg shadow-sm transition-colors"
                  style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Price on Request
                </button>
              </div>
              
            </div>

            {/* Description - Desktop */}
            <div>
              <p
                className="text-gray-700 leading-relaxed text-left"
                style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
              >
                {artwork.description}
              </p>
            </div>

            {/* Artwork Details - Desktop */}
            <div className="bg-gray-50 rounded-lg p-2">
              <h2
                className="text-xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
              >
                Artwork Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Diamond className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-sm font-medium text-gray-900">Type</span>
                    <span className="text-sm text-gray-700">{artwork.details.type}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-sm font-medium text-gray-900">Authenticity</span>
                    <span className="text-sm text-gray-700">{artwork.details.authenticity}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Paintbrush className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-sm font-medium text-gray-900">Medium</span>
                    <span className="text-sm text-gray-700">{artwork.details.medium}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Ruler className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-sm font-medium text-gray-900">Dimensions</span>
                    <span className="text-sm text-gray-700">{artwork.details.dimensions}</span>
                  </div>
                </div>
                
                {artwork.details.integratedLighting && (
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="block text-sm font-medium text-gray-900">Integrated Lighting</span>
                      <span className="text-sm text-gray-700">LED illumination system included</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start gap-3">
                  <Monitor className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-sm font-medium text-gray-900">Display</span>
                    <span className="text-sm text-gray-700">{artwork.details.display}</span>
                  </div>
                </div>
              </div>
              
              {/* Tags - Desktop */}
              <div className="mt-6">
                <div className="flex items-start gap-3">
                  <Tags className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-sm font-medium text-gray-900 mb-2">Tags</span>
                    <div className="flex flex-wrap gap-2">
                      {artwork.details.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact/Inquiry Section - Full Width */}
        <div className="mt-6 sm:mt-12">
          <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center">
            <h3 
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
            >
              Not Sure What You're Looking For?
            </h3>
            <p 
              className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-4xl mx-auto"
              style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
            >
              Let FormForge guide you. Our complimentary art advisory service connects you with a dedicated curator who will help you discover the perfect artwork or sculpture tailored to your space, story, and style. 
            </p>
            <Button 
              onClick={() => window.open('https://wa.me/919650020485', '_blank')}
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-colors px-8 py-3 text-lg shadow-sm"
              style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ShopDetail;