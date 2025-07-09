import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { ARTWORK_IMAGES, ImageData } from "./data/artworkData";

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Artwork ID from URL:", id);
  const artwork = ARTWORK_IMAGES.find((item) => item.id === id);
  console.log("Found artwork:", artwork);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  if (!id) {
    console.error("No ID provided in URL");
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto max-w-6xl p-4">
          <p>Invalid artwork ID</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!artwork) {
    console.error("No artwork found for ID:", id);
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto max-w-6xl p-4">
          <p>Artwork not found for ID: {id}</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handlePreviousImage = useCallback(() => {
    console.log("Previous button clicked, current index:", selectedImageIndex);
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : artwork.images.length - 1;
      console.log("New previous index:", newIndex);
      return newIndex;
    });
  }, [artwork.images.length, selectedImageIndex]);

  const handleNextImage = useCallback(() => {
    console.log("Next button clicked, current index:", selectedImageIndex);
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex < artwork.images.length - 1 ? prevIndex + 1 : 0;
      console.log("New next index:", newIndex);
      return newIndex;
    });
  }, [artwork.images.length, selectedImageIndex]);

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <Helmet>
        <title>{artwork.details.heading} | FormForge Gallery</title>
        <meta
          name="description"
          content={
            typeof artwork.details.description === "string"
              ? artwork.details.description
              : artwork.seo.metaDescription // Use SEO description for better accuracy
          }
        />
        <meta
          name="keywords"
          content={`${artwork.details.heading}, Corten Steel Sculpture, FormForge, ${artwork.details.location}, Luxury Metal Art`}
        />
        <meta property="og:title" content={`${artwork.details.heading} | FormForge Gallery`} />
        <meta
          property="og:description"
          content={
            typeof artwork.details.description === "string"
              ? artwork.details.description
              : artwork.seo.metaDescription
          }
        />
        <meta property="og:image" content={`https://formforge.com${artwork.images[0].src}`} />
        <meta property="og:url" content={`https://formforge.com/gallery/${artwork.id}`} /> {/* Updated to /gallery */}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${artwork.details.heading} | FormForge Gallery`} />
        <meta
          name="twitter:description"
          content={
            typeof artwork.details.description === "string"
              ? artwork.details.description
              : artwork.seo.metaDescription
          }
        />
        <meta name="twitter:image" content={`https://formforge.com${artwork.images[0].src}`} />
        <link rel="canonical" href={`https://formforge.com/gallery/${artwork.id}`} /> {/* Updated to /gallery */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VisualArtwork",
            "name": typeof artwork.caption === "string" ? artwork.caption : artwork.details.heading,
            "image": `https://formforge.com${artwork.images[0].src}`,
            "description":
              typeof artwork.details.description === "string"
                ? artwork.details.description
                : artwork.seo.metaDescription,
            "contentLocation": {
              "@type": "Place",
              "name": artwork.details.location || "Worldwide",
            },
            "creator": {
              "@type": "Organization",
              "name": "FormForge",
              "url": "https://formforge.com/",
            },
            "publisher": {
              "@type": "Organization",
              "name": "FormForge",
              "url": "https://formforge.com/",
              "logo": "https://formforge.com/logo.webp",
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919650020485",
              "contactType": "Customer Support",
              "areaServed": "Worldwide",
              "availableLanguage": ["English"],
            },
          })}
        </script>
        <link rel="preload" as="image" href={artwork.images[0].src} />
      </Helmet>

      <div className="max-w-10xl flex flex-col items-center justify-center mx-auto">
        <Navbar />
        <div className="container mx-auto max-w-6xl">
          <div className="landscape-view p-4 md:p-8 bg-gray-50 relative">
            <img
              src={artwork.images[selectedImageIndex].src}
              alt={artwork.images[selectedImageIndex].alt}
              loading="lazy"
              key={`${artwork.id}-${selectedImageIndex}`}
              className="mx-auto object-contain max-h-[65vh] w-auto"
              onError={(e) => {
                console.error("Image failed to load:", artwork.images[selectedImageIndex].src);
                e.currentTarget.src = "/images/placeholder.png";
              }}
            />
            {artwork.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {artwork.images.length}
              </div>
            )}
            {artwork.images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full opacity-70 hover:opacity-100 bg-white"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full opacity-70 hover:opacity-100 bg-white"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="border-b pb-4 flex justify-center">
              <div className="flex flex-wrap items-baseline gap-2 text-center">
                <h2
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ fontFamily: "Montserrat", letterSpacing: ".06em" }}
                >
                  {artwork.details.heading}
                </h2>
                <p
                  className="text-black-600 md:text-3xl"
                  style={{ fontFamily: "Montserrat, Poppins, sans-serif", color: "rgb(8, 7, 7)" }}
                >
                  {artwork.details.location}
                </p>
              </div>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: "Montserrat", letterSpacing: ".06em" }}
              >
                Description
              </h3>
              <div
                className="prose max-w-none"
                style={{ fontFamily: "Montserrat, Poppins, sans-serif", lineHeight: "1.6em", color: "rgb(87, 87, 87)" }}
              >
                {typeof artwork.details.description === "string" ? (
                  <p>{artwork.details.description}</p>
                ) : (
                  artwork.details.description
                )}
              </div>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: "Montserrat", letterSpacing: ".06em" }}
              >
                Details
              </h3>
              <div
                className="text-gray-700"
                style={{ fontFamily: "Montserrat, Poppins, sans-serif", lineHeight: "1.6em", color: "rgb(87, 87, 87)" }}
              >
                {typeof artwork.details.details === "string" ? <p>{artwork.details.details}</p> : artwork.details.details}
              </div>
            </div>
            {artwork.details.credits && (
              <div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "Montserrat", letterSpacing: ".06em" }}
                >
                  Credits
                </h3>
                <div
                  className="text-gray-700"
                  style={{ fontFamily: "Montserrat, Poppins, sans-serif", lineHeight: "1.6em", color: "rgb(87, 87, 87)" }}
                >
                  {typeof artwork.details.credits === "string" ? (
                    <p>{artwork.details.credits}</p>
                  ) : (
                    artwork.details.credits
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ArtworkDetail;