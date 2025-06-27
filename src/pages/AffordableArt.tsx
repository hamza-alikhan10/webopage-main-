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

      <div className="max-w-10xl mx-auto">
        <Navbar />
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-playfair text-gray-800 mb-3 sm:mb-4 md:mb-6 text-center tracking-wide"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Bring Sculptural Luxury Into Your Life – <br /> Without the High Price Tag
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10 text-center max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto"
            style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
          >
            Immerse yourself in our meticulously curated selection of ten exquisite sculptures. Each piece, a testament to
            masterful craftsmanship, is designed to bring sophisticated elegance into your world without compromise.
          </p>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 min-w-auto">
              {sculptures.map((sculpture) => {
                const piecesLeft = sculpture.piecesLeft ?? 100;
                const isSoldOut = sculpture.status === "Sold Out" || (piecesLeft === 0 && !sculpture.status);

                return (
                  <Link
                    key={sculpture.id}
                    to={`/affordable-art/${sculpture.id}`}
                    className="card bg-gray-200 overflow-hidden transition-all duration-300 cursor-pointer relative group hover:shadow-lg hover:-translate-y-1 block min-w-[33.33%] sm:min-w-0"
                  >
                    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden">
                      <img
                        src={sculpture.images[0]}
                        alt={sculpture.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder-image.png";
                        }}
                      />
                    </div>
                    <div className="p-1 sm:p-2 md:p-3">
                      <h2
                        className="text-sm sm:text-lg md:text-xl text-gray-800 mb-1"
                        style={{ fontFamily: "Playfair Display, Poppins, sans-serif" }}
                      >
                        {sculpture.title}
                      </h2>
                      <p
                        className="text-xs sm:text-sm md:text-base text-gray-600 mb-0"
                        style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
                      >
                        {sculpture.details.dimensions}
                      </p>
                      {isSoldOut ? (
                        <p className="text-xs sm:text-sm md:text-base text-red-600 mb-0">Sold Out</p>
                      ) : (
                        <p className="text-xs sm:text-sm md:text-base mb-0">
                          <span className={piecesLeft === 100 ? "text-gray-600" : "text-black"}>
                            {piecesLeft}
                          </span>{" "}
                          <span className="text-black">pieces left</span>
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <Dialog open={selectedSculpture !== null} onOpenChange={setSelectedSculpture.bind(null, null)}>
          <DialogContent className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl w-full p-0 rounded-lg">
            <DialogTitle className="sr-only">
              {selectedSculpture ? `${selectedSculpture.title} Details` : "Artwork Details"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {selectedSculpture ? selectedSculpture.description : "View detailed information about this artwork"}
            </DialogDescription>
            <button
              onClick={() => setSelectedSculpture(null)}
              className="absolute right-4 top-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
            >
              <svg
                width="24"
                height="24"
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
                <div className="relative">
                  <img
                    src={selectedSculpture.images[selectedImageIndex]}
                    alt={selectedSculpture.title}
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover bg-gray-100"
                    loading="lazy"
                  />
                  {selectedSculpture.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePreviousImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 h-8 sm:h-10 md:h-10 w-8 sm:w-10 md:w-10 rounded-full bg-white/80 hover:bg-white"
                      >
                        <ArrowLeft className="h-4 sm:h-5 md:h-5 w-4 sm:w-5 md:w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-8 sm:h-10 md:h-10 w-8 sm:w-10 md:w-10 rounded-full bg-white/80 hover:bg-white"
                      >
                        <ArrowRight className="h-4 sm:h-5 md:h-5 w-4 sm:w-5 md:w-5" />
                      </Button>
                    </>
                  )}
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl font-playfair text-gray-800 mb-2 sm:mb-3 md:mb-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {selectedSculpture.title}
                  </h2>
                  <p
                    className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 md:mb-6"
                    style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
                  >
                    {selectedSculpture.description}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div>
                      <h3
                        className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4"
                        style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
                      >
                        Details
                      </h3>
                      <div className="space-y-2 sm:space-y-3 bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Diamond className="h-3 sm:h-4 md:h-4 w-3 sm:w-4 md:w-4 text-gray-600" />
                          <span className="font-medium">Type:</span>
                          <span className="text-gray-600">{selectedSculpture.details.type}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Fingerprint className="h-3 sm:h-4 md:h-4 w-3 sm:w-4 md:w-4 text-gray-600" />
                          <span className="font-medium">Signature:</span>
                          <span className="text-gray-600">{selectedSculpture.details.signature}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Award className="h-3 sm:h-4 md:h-4 w-3 sm:w-4 md:w-4 text-gray-600" />
                          <span className="font-medium">Authenticity:</span>
                          <span className="text-gray-600">{selectedSculpture.details.authenticity}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Paintbrush className="h-3 sm:h-4 md:h-4 w-3 sm:w-4 md:w-4 text-gray-600" />
                          <span className="font-medium">Medium:</span>
                          <span className="text-gray-600">{selectedSculpture.details.medium}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3
                        className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4"
                        style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
                      >
                        Specifications
                      </h3>
                      <div className="space-y-2 sm:space-y-3 bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Ruler className="h-3 sm:h-4 md:h-4 w-3 sm:w-4 md:w-4 text-gray-600" />
                          <span className="font-medium">Dimensions:</span>
                          <span className="text-gray-600">{selectedSculpture.details.dimensions}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Monitor className="h-3 sm:h-4 md:h-4 w-3 sm:w-4 md:w-4 text-gray-600" />
                          <span className="font-medium">Display:</span>
                          <span className="text-gray-600">{selectedSculpture.details.display}</span>
                        </div>
                        <div className="flex items-start gap-1 sm:gap-2">
                          <Tags className="h-3 sm:h-4 md:h-4 w-3 sm:w-4 md:w-4 text-gray-600 mt-1" />
                          <span className="font-medium">Tags:</span>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {selectedSculpture.details.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-1 sm:px-2 md:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm"
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