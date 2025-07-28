// src/components/Shop.tsx
import { useEffect, useState } from "react";
import "../App.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { Link } from "react-router-dom";
import { sculptures, Sculpture } from "../data/shopData";
import WhatsAppFloat from "@/components/WhatsAppFloat"; 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  ArrowRight,
  Diamond,
  Fingerprint,
  Award,
  Paintbrush,
  Ruler,
  Monitor,
  Tags,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const Shop = () => {
  useEffect(() => {
    document.title = "Shop Luxury Sculptures - FORMFORGE";
  }, []);

  const [selectedSculpture, setSelectedSculpture] = useState<Sculpture | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setSelectedImageIndex((prev) =>
      prev > 0 ? prev - 1 : (selectedSculpture?.images.length ?? 1) - 1
    );
  };
  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev < (selectedSculpture?.images.length ?? 1) - 1 ? prev + 1 : 0
    );
  };

  // Generate structured data for products
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Available Art Sculptures ",
    "url": "https://formforge.com/shop",
    "description": "Explore FormForge’s corten‑steel sculptures and bespoke metal art, precision‑engineered masterpieces, ready to ship.",
    "publisher": {
      "@type": "Organization",
      "name": "FORMFORGE",
      "url": "https://formforge.com",
      "logo": "https://formforge.com/logo.webp",
      "sameAs": [
        "https://www.instagram.com/formforge",
        "https://www.linkedin.com/company/formforge"
      ]
    },
    "hasPart": sculptures.map((sculpture) => ({
      "@type": "Product",
      "name": sculpture.title,
      "description": sculpture.description,
      "image": sculpture.images.map(img => `https://formforge.com${img}`),
      "brand": {
        "@type": "Brand",
        "name": "FORMFORGE"
      },
      "category": "Sculpture",
      "material": sculpture.details.medium,
      "artMedium": sculpture.details.medium,
      "size": sculpture.details.dimensions,
      "offers": {
        "@type": "Offer",
        "availability": sculpture.status === "Readily Available" 
          ? "https://schema.org/InStock"
          : sculpture.status === "Made to Order"
          ? "https://schema.org/PreOrder"
          : "https://schema.org/OutOfStock",
        "priceCurrency": "USD",
        "seller": {
          "@type": "Organization",
          "name": "FORMFORGE"
        }
      },
      "url": `https://formforge.com/shop/${sculpture.id}`
    })),
    "breadcrumb": {
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
          "name": "Shop",
          "item": "https://formforge.com/shop"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <Helmet>
        <title>Shop Luxury Sculptures | FORMFORGE - Handcrafted Metal Art</title>
        <meta
          name="description"
          content="Shop luxury Corten steel sculptures and bespoke metal art at FORMFORGE. Handcrafted masterpieces available ready-to-ship or made-to-order. Free worldwide shipping on premium sculptures."
        />
        <meta
          name="keywords"
          content="buy luxury sculptures, Corten steel art, handcrafted metal sculptures, bespoke art pieces, luxury home decor, sculptural art for sale, premium metal art, custom sculptures, artistic metalwork, contemporary sculptures"
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://formforge.com/shop" />
        <meta property="og:title" content="Available Art Sculptures | FORMFORGE - Engineered masterpieces" />
        <meta
          property="og:description"
          content="Discover corten‑steel sculptures and custom metal artworks by FormForge, meticulously engineered pieces, available ready to ship or made to order."
        />
        <meta property="og:image" content="https://formforge.com/shop-hero-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="FORMFORGE Available Art collection" />
        <meta property="og:site_name" content="FORMFORGE" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://formforge.com/shop" />
        <meta name="twitter:title" content="FORMFORGE Available Art collection" />
        <meta
          name="twitter:description"
          content="Shop luxury Corten steel sculptures and bespoke metal art at FORMFORGE. Handcrafted masterpieces available ready-to-ship or made-to-order."
        />
        <meta name="twitter:image" content="https://formforge.com/shop-hero-image.webp" />
        <meta name="twitter:image:alt" content="FORMFORGE luxury sculpture collection" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="FORMFORGE" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://formforge.com/shop" />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href={sculptures[0]?.images[0]} />
        <link rel="preload" as="image" href={sculptures[1]?.images[0]} />
        <link rel="preload" as="image" href={sculptures[2]?.images[0]} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>

        {/* Additional Schema for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FORMFORGE",
            "url": "https://formforge.com",
            "logo": "https://formforge.com/logo.webp",
            "description": "Available Art sculptures and bespoke metal art crafted by master artisans.",
            "founder": {
              "@type": "Person",
              "name": "FORMFORGE Founder"
            },
            "foundingDate": "2020",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919650020485",
              "contactType": "Customer Support",
              "areaServed": "Worldwide",
              "availableLanguage": ["English"]
            },
            "sameAs": [
              "https://www.instagram.com/formforge",
              "https://www.linkedin.com/company/formforge"
            ]
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <Navbar />
        
        {/* Header with SEO-optimized content */}
        <div className="px-4 sm:px-6 lg:px-8 pb-3 sm:pb-8 lg:pb-5">
          <div className="text-center mb-5 sm:mb-12 lg:mb-12">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-gray-800  tracking-wide leading-tight">
            Signature Sculptural Icons
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover contemporary forms shaped by story and precision. Choose from ready-to-ship icons, securely packed for delivery across the globe.
            </p>
          </div>

          {/* Product Grid with enhanced SEO */}
          <section aria-label="Sculpture Collection">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {sculptures.map((item, index) => {
                const isSoldOut = item.status === "Sold Out";
                const isAvailable = item.status === "Readily Available";
                const isMadeToOrder = item.status === "Made to Order";
                
                return (
                  <article
                    key={item.id}
                    className="group bg-white shadow-sm hover:shadow-lg rounded-lg overflow-hidden border"
                    itemScope
                    itemType="https://schema.org/Product"
                  >
                    <Link
                      to={`/shop/${item.id}`}
                      className="block"
                      aria-label={`View details for ${item.title}`}
                    >
                      <div className="relative" style={{ aspectRatio: "800/1067" }}>
                        <img
                          src={item.images[0]}
                          alt={`${item.title} - ${item.details.medium} sculpture, ${item.details.dimensions}`}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          loading={index < 6 ? "eager" : "lazy"}
                          itemProp="image"
                          onError={(e) => (e.currentTarget.src = "/placeholder-image.png")}
                        />
                        {item.status && (
                          <span
                            className={`absolute top-2 right-2 px-1.5 py-0.5 text-xs font-medium rounded-md ${
                              isSoldOut
                                ? "bg-red-100 text-red-700"
                                : isAvailable
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                            itemProp="availability"
                            content={
                              isSoldOut
                                ? "https://schema.org/OutOfStock"
                                : isAvailable
                                ? "https://schema.org/InStock"
                                : "https://schema.org/PreOrder"
                            }
                          >
                            {item.status}
                          </span>
                        )}
                      </div>
                      <div className="p-3">
                        <h2 
                          className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2"
                          itemProp="name"
                        >
                          {item.title}
                        </h2>
                        <p 
                          className="text-sm text-gray-500 mb-1"
                          itemProp="size"
                        >
                          {item.details.dimensions}
                        </p>
                        <div className="flex items-center justify-between">
                          <span 
                            className="text-xs text-gray-400 flex-1 truncate"
                            itemProp="material"
                          >
                            {item.details.medium}
                          </span>
                          <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                        </div>
                      </div>
                      <meta itemProp="brand" content="FORMFORGE" />
                      <meta itemProp="category" content="Sculpture" />
                      <meta itemProp="description" content={item.description} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        {/* Modal with SEO considerations */}
        <Dialog
          open={selectedSculpture !== null}
          onOpenChange={() => setSelectedSculpture(null)}
        >
          <DialogContent className="max-w-3xl">
            {selectedSculpture && (
              <>
                <DialogTitle>{selectedSculpture.title}</DialogTitle>
                <DialogDescription>{selectedSculpture.description}</DialogDescription>
                <div>
                  <img
                    src={selectedSculpture.images[selectedImageIndex]}
                    alt={`${selectedSculpture.title} - View ${selectedImageIndex + 1} of ${selectedSculpture.images.length}`}
                    className="w-full h-96 object-cover"
                  />
                  {selectedSculpture.images.length > 1 && (
                    <div className="flex justify-center gap-4 mt-4">
                      <Button 
                        onClick={handlePreviousImage}
                        aria-label="Previous image"
                      >
                        <ArrowLeft />
                      </Button>
                      <Button 
                        onClick={handleNextImage}
                        aria-label="Next image"
                      >
                        <ArrowRight />
                      </Button>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </div>
  );
};

export default Shop;