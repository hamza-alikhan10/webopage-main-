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
        <div className="px-4 py-8">
          <h2
            className="text-4xl font-playfair text-gray-800 mb-3 text-center tracking-wide"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Bring Sculptural Luxury Into Your Life – <br /> Without the High Price Tag
          </h2>
          <p
            className="text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto"
            style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
          >
            Immerse yourself in our meticulously curated selection of ten exquisite sculptures. Each piece, a testament to
            masterful craftsmanship, is designed to bring sophisticated elegance into your world without compromise.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sculptures.map((sculpture) => {
              const piecesLeft = sculpture.piecesLeft ?? 100;
              const isSoldOut = sculpture.status === "Sold Out" || (piecesLeft === 0 && !sculpture.status);

              return (
                <Link
                  key={sculpture.id}
                  to={`/affordable-art/${sculpture.id}`}
                  className="card bg-gray-200 overflow-hidden transition-all duration-300 cursor-pointer relative group hover:shadow-xl hover:-translate-y-1 block"
                >
                  <img
                    src={sculpture.images[0]}
                    alt={sculpture.title}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder-image.png";
                    }}
                  />
                  <div className="p-2">
                    <h2
                      className="text-xl text-gray-800 mb-1"
                      style={{ fontFamily: "Playfair Display, Poppins, sans-serif" }}
                    >
                      {sculpture.title}
                    </h2>
                    <p
                      className="text-sm text-gray-600 mb-0"
                      style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
                    >
                      {sculpture.details.dimensions}
                    </p>
                    {isSoldOut ? (
                      <p className="text-sm text-red-600 mb-0">Sold Out</p>
                    ) : (
                      <p className="text-sm mb-0">
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
        <Dialog open={selectedSculpture !== null} onOpenChange={setSelectedSculpture.bind(null, null)}>
          <DialogContent className="max-w-4xl w-full p-0 rounded-lg">
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
                    className="w-full h-[400px] object-cover bg-gray-100"
                    loading="lazy"
                  />
                  {selectedSculpture.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePreviousImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h2
                    className="text-3xl font-playfair text-gray-800 mb-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {selectedSculpture.title}
                  </h2>
                  <p
                    className="text-gray-600 mb-6"
                    style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
                  >
                    {selectedSculpture.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3
                        className="text-xl font-semibold mb-4"
                        style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
                      >
                        Details
                      </h3>
                      <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Diamond className="h-4 w-4 text-gray-600" />
                          <span className="font-medium">Type:</span>
                          <span className="text-gray-600">{selectedSculpture.details.type}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Fingerprint className="h-4 w-4 text-gray-600" />
                          <span className="font-medium">Signature:</span>
                          <span className="text-gray-600">{selectedSculpture.details.signature}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="h-4 w-4 text-gray-600" />
                          <span className="font-medium">Authenticity:</span>
                          <span className="text-gray-600">{selectedSculpture.details.authenticity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Paintbrush className="h-4 w-4 text-gray-600" />
                          <span className="font-medium">Medium:</span>
                          <span className="text-gray-600">{selectedSculpture.details.medium}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold mb-4"
                        style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
                      >
                        Specifications
                      </h3>
                      <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Ruler className="h-4 w-4 text-gray-600" />
                          <span className="font-medium">Dimensions:</span>
                          <span className="text-gray-600">{selectedSculpture.details.dimensions}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Monitor className="h-4 w-4 text-gray-600" />
                          <span className="font-medium">Display:</span>
                          <span className="text-gray-600">{selectedSculpture.details.display}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Tags className="h-4 w-4 text-gray-600 mt-1" />
                          <span className="font-medium">Tags:</span>
                          <div className="flex flex-wrap gap-2">
                            {selectedSculpture.details.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
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