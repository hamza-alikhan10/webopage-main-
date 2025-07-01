import { useEffect, useState } from "react";
import "../App.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { Link } from "react-router-dom";
import { Sculpture, sculptures } from "@/data/sculptureData";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, Diamond, Fingerprint, Award, Paintbrush, Ruler, Monitor, Tags } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const AffordableArt = () => {
  useEffect(() => {
    document.title = "Affordable Art - FORMFORGE";
  }, []);

  const [selectedSculpture, setSelectedSculpture] = useState<Sculpture | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : (selectedSculpture?.images.length ?? 1) - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < (selectedSculpture?.images.length ?? 1) - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <Helmet>
        <title>Affordable Art | FORMFORGE</title>
        <meta
          name="description"
          content="Discover affordable luxury sculptures at FORMFORGE. Explore our curated collection of unique and limited-edition artworks."
        />
        <meta
          name="keywords"
          content="Affordable Sculptures, Luxury Art, Corten Steel, Stainless Steel, FORMFORGE Art, Modern Sculptures"
        />
        <meta property="og:title" content="Affordable Art | FORMFORGE" />
        <meta
          property="og:description"
          content="Browse our collection of affordable luxury sculptures, featuring unique and limited-edition pieces crafted with precision."
        />
        <meta property="og:image" content="https://formforge.com/Arts/buddha-bangalore-2023.webp" />
        <meta property="og:url" content="https://formforge.com/affordable-art" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Affordable Art | FORMFORGE" />
        <meta
          name="twitter:description"
          content="Browse our collection of affordable luxury sculptures, featuring unique and limited-edition pieces crafted with precision."
        />
        <meta name="twitter:image" content="https://formforge.com/Arts/buddha-bangalore-2023.webp" />
        <link rel="canonical" href="https://formforge.com/affordable-art" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "FORMFORGE Affordable Art",
            url: "https://formforge.com/affordable-art",
            description: "A curated collection of affordable luxury sculptures by FORMFORGE, featuring unique and limited-edition artworks.",
            publisher: {
              "@type": "Organization",
              name: "FORMFORGE",
              url: "https://formforge.com/",
              logo: "https://formforge.com/logo.webp",
            },
            hasPart: sculptures.map((sculpture) => ({
              "@type": "VisualArtwork",
              name: sculpture.title,
              image: `https://formforge.com${sculpture.images[0]}`,
              description: sculpture.description,
              url: `https://formforge.com/affordable-art/${sculpture.id}`,
            })),
          })}
        </script>
        <link rel="preload" as="image" href={sculptures[0]?.images[0]} />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <Navbar />
       <div className="px-4 sm:px-6 lg:px-8 pb-3 sm:pb-8 lg:pb-5">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-gray-800 mb-4 sm:mb-6 tracking-wide leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Bring Sculptural Luxury Into Your Life –{" "}
              <span className="block sm:inline">Without the High Price Tag</span>
            </h1>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
            >
              Immerse yourself in our meticulously curated selection of ten exquisite sculptures. Each piece, a testament to
              masterful craftsmanship, is designed to bring sophisticated elegance into your world without compromise.
            </p>
          </div>

          {/* Sculptures Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {sculptures.map((sculpture) => {
              const isSoldOut = sculpture.status === "Sold Out";
              const isAvailable = sculpture.status === "Readily Available";

              return (
                <Link
                  key={sculpture.id}
                  to={`/affordable-art/${sculpture.id}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 transform"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                    <img
                      src={sculpture.images[0]}
                      alt={sculpture.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-image.png";
                      }}
                    />
                    {/* Status Badge */}
                    {sculpture.status && (
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            isSoldOut
                              ? "bg-red-100 text-red-800"
                              : isAvailable
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {sculpture.status}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <h2
                      className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 line-clamp-2"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {sculpture.title}
                    </h2>
                    <p
                      className="text-sm sm:text-base text-gray-600 mb-3"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {sculpture.details.dimensions}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs sm:text-sm text-gray-500"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {sculpture.details.medium}
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Dialog Modal */}
        <Dialog open={selectedSculpture !== null} onOpenChange={() => setSelectedSculpture(null)}>
          <DialogContent className="max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl w-full p-0 rounded-lg max-h-[95vh] overflow-y-auto">
            <DialogTitle className="sr-only">
              {selectedSculpture ? `${selectedSculpture.title} Details` : "Artwork Details"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {selectedSculpture ? selectedSculpture.description : "View detailed information about this artwork"}
            </DialogDescription>
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedSculpture(null)}
              className="absolute right-4 top-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {selectedSculpture && (
              <div className="bg-white rounded-lg overflow-hidden">
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={selectedSculpture.images[selectedImageIndex]}
                    alt={selectedSculpture.title}
                    className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover bg-gray-100"
                    loading="lazy"
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedSculpture.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePreviousImage}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNextImage}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}

                  {/* Image Counter */}
                  {selectedSculpture.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {selectedImageIndex + 1} / {selectedSculpture.images.length}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <h2
                    className="text-xl sm:text-2xl lg:text-3xl font-playfair text-gray-800 mb-3 sm:mb-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {selectedSculpture.title}
                  </h2>
                  <p
                    className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {selectedSculpture.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Details Section */}
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-semibold mb-4 text-gray-800"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Details
                      </h3>
                      <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <Diamond className="h-4 w-4 text-gray-600 flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">Type:</span>
                          <span className="text-gray-600 text-sm sm:text-base">{selectedSculpture.details.type}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Fingerprint className="h-4 w-4 text-gray-600 flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">Signature:</span>
                          <span className="text-gray-600 text-sm sm:text-base">{selectedSculpture.details.signature}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Award className="h-4 w-4 text-gray-600 flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">Authenticity:</span>
                          <span className="text-gray-600 text-sm sm:text-base">{selectedSculpture.details.authenticity}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Paintbrush className="h-4 w-4 text-gray-600 flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">Medium:</span>
                          <span className="text-gray-600 text-sm sm:text-base">{selectedSculpture.details.medium}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specifications Section */}
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-semibold mb-4 text-gray-800"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Specifications
                      </h3>
                      <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <Ruler className="h-4 w-4 text-gray-600 flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">Dimensions:</span>
                          <span className="text-gray-600 text-sm sm:text-base">{selectedSculpture.details.dimensions}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Monitor className="h-4 w-4 text-gray-600 flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">Display:</span>
                          <span className="text-gray-600 text-sm sm:text-base">{selectedSculpture.details.display}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
                          <div className="flex items-center gap-3">
                            <Tags className="h-4 w-4 text-gray-600 flex-shrink-0" />
                            <span className="font-medium text-sm sm:text-base">Tags:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedSculpture.details.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm whitespace-nowrap"
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
            )}
          </DialogContent>
        </Dialog>
        <Footer />
      </div>

      <style>
        {`
          .font-playfair {
            font-family: "Playfair Display", serif;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-in-out;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AffordableArt;