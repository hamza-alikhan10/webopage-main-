
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./ui/Footer";
import "../App.css";
import { Helmet } from "react-helmet";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ARTWORK_IMAGES, ImageData } from "../data/artworkData";

const Portfolio = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [showDetails, setShowDetails] = useState(false);

  const openImage = (index: number) => {
    setSelectedArtwork(index);
    setSelectedImageIndex(0);
    setShowDetails(true);
  };

  const closeModal = () => {
    setSelectedArtwork(null);
    setSelectedImageIndex(0);
    setShowDetails(false);
  };

  const backToGallery = () => {
    setSelectedArtwork(null); 
    setSelectedImageIndex(0);
    setShowDetails(false);
  };

  const navigateToPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedArtwork !== null) {
      const currentArtwork = ARTWORK_IMAGES[selectedArtwork];
      const totalImages = currentArtwork.images.length;
      
      if (selectedImageIndex > 0) {
        setSelectedImageIndex(selectedImageIndex - 1);
      } else {
        setSelectedImageIndex(totalImages - 1);
      }
    }
  };

  const navigateToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedArtwork !== null) {
      const currentArtwork = ARTWORK_IMAGES[selectedArtwork];
      const totalImages = currentArtwork.images.length;
      
      if (selectedImageIndex < totalImages - 1) {
        setSelectedImageIndex(selectedImageIndex + 1);
      } else {
        setSelectedImageIndex(0);
      }
    }
  };

  const navigateToPreviousArtwork = () => {
    if (selectedArtwork !== null && selectedArtwork > 0) {
      setSelectedArtwork(selectedArtwork - 1);
      setSelectedImageIndex(0);
    } else if (selectedArtwork === 0) {
      setSelectedArtwork(ARTWORK_IMAGES.length - 1);
      setSelectedImageIndex(0);
    }
  };

  const navigateToNextArtwork = () => {
    if (selectedArtwork !== null && selectedArtwork < ARTWORK_IMAGES.length - 1) {
      setSelectedArtwork(selectedArtwork + 1);
      setSelectedImageIndex(0);
    } else if (selectedArtwork === ARTWORK_IMAGES.length - 1) {
      setSelectedArtwork(0);
      setSelectedImageIndex(0);
    }
  };

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <Helmet>
        <title>FormForge | Gallery of Luxury Sculptures</title>
        <meta name="description" content="Explore the FormForge gallery featuring luxury Corten steel sculptures, bespoke metal art, and public installations from India and UAE." />
        <meta name="keywords" content="Corten Steel Sculptures, Luxury Metal Art, Public Art Installations, FormForge Gallery, Custom Sculptures, India, UAE" />
        <meta property="og:title" content="FormForge | Gallery of Luxury Sculptures" />
        <meta property="og:description" content="View our collection of luxury Corten steel sculptures and bespoke metal art installations across India and UAE." />
        <meta property="og:image" content="https://formforge.com/twin-spirits-chennai-2023.webp" />
        <meta property="og:url" content="https://formforge.com/gallery" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FormForge | Gallery of Luxury Sculptures" />
        <meta name="twitter:description" content="View our collection of luxury Corten steel sculptures and bespoke metal art installations across India and UAE." />
        <meta name="twitter:image" content="https://formforge.com/twin-spirits-chennai-2023.webp" />
        <link rel="canonical" href="https://formforge.com/gallery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "FormForge Gallery",
            "url": "https://formforge.com/gallery",
            "description": "A gallery showcasing luxury Corten steel sculptures and bespoke metal art installations by FormForge across India and UAE.",
            "publisher": {
              "@type": "Organization",
              "name": "FormForge",
              "url": "https://formforge.com/",
              "logo": "https://formforge.com/logo.webp"
            },
            "hasPart": ARTWORK_IMAGES.map((image) => ({
              "@type": "VisualArtwork",
              "name": typeof image.caption === 'string' ? image.caption : 'Sculpture',
              "image": `https://formforge.com${image.images[0].src}`,
              "description": image.images[0].alt,
              "contentLocation": {
                "@type": "Place",
                "name": image.details.location || "Worldwide"
              }
            })),
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919650020485",
              "contactType": "Customer Support",
              "areaServed": "Worldwide",
              "availableLanguage": ["English"]
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-10xl flex flex-col items-center justify-center mx-auto">
        <Navbar />

        {selectedArtwork !== null && showDetails ? (
          <div className="container mx-auto max-w-6xl">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={backToGallery} 
              className="mb-8 flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Gallery
            </Button>
            
            <Card className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="landscape-view p-4 md:p-8 bg-gray-50 relative">
                <img
                  src={ARTWORK_IMAGES[selectedArtwork].images[selectedImageIndex].src}
                  alt={ARTWORK_IMAGES[selectedArtwork].images[selectedImageIndex].alt}
                  className="mx-auto object-contain max-h-[65vh] w-auto"
                />
                
                {ARTWORK_IMAGES[selectedArtwork].images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImageIndex + 1} / {ARTWORK_IMAGES[selectedArtwork].images.length}
                  </div>
                )}
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={navigateToPreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full opacity-70 hover:opacity-100 bg-white"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={navigateToNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full opacity-70 hover:opacity-100 bg-white"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              
              <CardContent className="p-6 md:p-8 space-y-6">
                  {/* for the sizing of heading  */}
                <div className="border-b pb-4 flex justify-center">
                  <div className="flex flex-wrap items-baseline gap-2 text-center">
                    <h2 
                      className="text-2xl md:text-3xl font-semibold"
                      style={{
                        fontFamily: "Montserrat",
                        letterSpacing: ".06em",
                      }}
                    >
                      {ARTWORK_IMAGES[selectedArtwork].details.heading}
                    </h2>
                    <p 
                      className="text-black-600 md:text-3xl"
                      style={{
                        fontFamily: "Montserrat, Poppins, sans-serif",
                        color: "rgb(8, 7, 7)",
                      }}
                    >
                      {ARTWORK_IMAGES[selectedArtwork].details.location}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 
                    className="text-xl mb-3"
                    style={{
                      fontFamily: "Montserrat",
                      letterSpacing: ".06em",
                    }}
                  >
                    Description
                  </h3>
                  <div 
                    className="prose max-w-none"
                    style={{
                      fontFamily: "Montserrat, Poppins, sans-serif",
                      lineHeight: "1.6em",
                      color: "rgb(87, 87, 87)",
                    }}
                  >
                    {typeof ARTWORK_IMAGES[selectedArtwork].details.description === 'string' ? (
                      <p>{ARTWORK_IMAGES[selectedArtwork].details.description}</p>
                    ) : (
                      ARTWORK_IMAGES[selectedArtwork].details.description
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 
                    className="text-xl mb-3"
                    style={{
                      fontFamily: "Montserrat",
                      letterSpacing: ".06em",
                    }}
                  >
                    Details
                  </h3>
                  <div 
                    className="text-gray-700"
                    style={{
                      fontFamily: "Montserrat, Poppins, sans-serif",
                      lineHeight: "1.6em",
                      color: "rgb(87, 87, 87)",
                    }}
                  >
                    {typeof ARTWORK_IMAGES[selectedArtwork].details.details === 'string' ? (
                      <p>{ARTWORK_IMAGES[selectedArtwork].details.details}</p>
                    ) : (
                      ARTWORK_IMAGES[selectedArtwork].details.details
                    )}
                  </div>
                </div>
                
                {ARTWORK_IMAGES[selectedArtwork].details.credits && (
                  <div>
                    <h3 
                      className="text-xl mb-3"
                      style={{
                        fontFamily: "Montserrat",
                        letterSpacing: ".06em",
                      }}
                    >
                      Credits
                    </h3>
                    <div 
                      className="text-gray-700"
                      style={{
                        fontFamily: "Montserrat, Poppins, sans-serif",
                        lineHeight: "1.6em",
                        color: "rgb(87, 87, 87)",
                      }}
                    >
                      {typeof ARTWORK_IMAGES[selectedArtwork].details.credits === 'string' ? (
                        <p>{ARTWORK_IMAGES[selectedArtwork].details.credits}</p>
                      ) : (
                        ARTWORK_IMAGES[selectedArtwork].details.credits
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 w-full">
            {ARTWORK_IMAGES.map((artwork, index) => (
              <div
                key={index}
                className="relative group w-full overflow-hidden cursor-pointer"
                onClick={() => openImage(index)}
              >
                <div className="overflow-hidden shadow-lg relative">
                  <img
                    src={artwork.images[0].src}
                    alt={artwork.images[0].alt}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span 
                      className="text-white text-sm md:text-lg font-medium px-2 text-center"
                      style={{
                        fontFamily: "Montserrat, Poppins, sans-serif",
                      }}
                    >
                      {artwork.caption}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;