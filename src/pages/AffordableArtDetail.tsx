import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { Button } from "@/components/ui/button";
import { Diamond, Fingerprint, Award, Paintbrush, Ruler, Monitor, Tags, ArrowLeft, ArrowRight } from "lucide-react";
import { sculptures, Sculpture } from "@/data/sculptureData";

const AffordableArtDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [artwork, setArtwork] = useState<Sculpture | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      const parsedId = parseInt(id || "0");
      if (isNaN(parsedId)) {
        throw new Error("Invalid artwork ID");
      }
      const foundArtwork = sculptures.find((s) => s.id === parsedId);
      if (!foundArtwork) {
        throw new Error("Artwork not found");
      }
      console.log("Found artwork:", foundArtwork); // Debug: Log artwork data
      setArtwork(foundArtwork);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching artwork:", err); // Debug: Log errors
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

  if (loading) {
    return (
      <div className="min-h-screen bg-white" id="Root-padding">
        <Helmet>
          <title>Loading | Affordable Art - FORMFORGE</title>
          <meta name="description" content="Loading artwork details..." />
        </Helmet>
        <Navbar />
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-center min-h-[60vh]">
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
          <title>Artwork Not Found | Affordable Art - FORMFORGE</title>
          <meta name="description" content="The requested artwork could not be found." />
        </Helmet>
        <Navbar />
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-center min-h-[60vh]">
          <p className="text-xl text-gray-600" style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}>
            {error || "Artwork not found"}
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <Helmet>
        <title>{artwork.title} | Affordable Art - FORMFORGE</title>
        <meta name="description" content={artwork.description} />
        <meta name="keywords" content={artwork.details.tags.join(", ") + ", Affordable Art, FORMFORGE"} />
        <meta property="og:title" content={`${artwork.title} | Affordable Art - FORMFORGE`} />
        <meta property="og:description" content={artwork.description} />
        <meta property="og:image" content={`https://formforge.com${artwork.images[0]}`} />
        <meta property="og:url" content={`https://formforge.com/affordable-art/${artwork.id}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${artwork.title} | Affordable Art - FORMFORGE`} />
        <meta name="twitter:description" content={artwork.description} />
        <meta name="twitter:image" content={`https://formforge.com${artwork.images[0]}`} />
        <link rel="canonical" href={`https://formforge.com/affordable-art/${artwork.id}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VisualArtwork",
            name: artwork.title,
            description: artwork.description,
            image: artwork.images.map((img) => `https://formforge.com${img}`),
            creator: { "@type": "Person", name: "Abhinav Goyal" },
            dateCreated: "2023",
            artMedium: artwork.details.medium.split(": ")[1],
            width: artwork.details.dimensions.split(" x ")[1],
            height: artwork.details.dimensions.split(" x ")[0],
            url: `https://formforge.com/affordable-art/${artwork.id}`,
            offers: {
              "@type": "Offer",
              // Changed this line to explicitly check for an empty string
              price: artwork.price === "" ? "Price not available" : artwork.price,
              priceCurrency: "INR",
              availability: artwork.status === "Readily Available" ? "InStock" : "OutOfStock",
            },
          })}
        </script>
        <link rel="preload" as="image" href={artwork.images[0]} />
      </Helmet>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Section */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative overflow-hidden bg-gray-50 rounded-lg mb-4">
              <img
                src={artwork.images[selectedImageIndex]}
                alt={`${artwork.title} - View ${selectedImageIndex + 1}`}
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-300"
                loading="lazy"
              />
              {artwork.images.length > 1 && (
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
            {artwork.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {artwork.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all ${
                      selectedImageIndex === index ? "border-gray-800" : "border-gray-200"
                    }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex flex-col gap-4">
              <h1
                className="text-3xl font-bold text-gray-800 text-center lg:text-left"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {artwork.title}
              </h1>
              <p
                className="text-lg font-semibold text-gray-800 text-center lg:text-left"
                style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
              >
                {/* Changed this line to explicitly check for an empty string */}
                {artwork.price === "" ? "Price not available" : artwork.price}
              </p>
              <p
                className="text-gray-600 leading-relaxed text-center lg:text-left"
                style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
              >
                {artwork.description}
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h2
                  className="text-xl font-semibold text-gray-800 mb-4 text-center lg:text-left"
                  style={{ fontFamily: "Montserrat, Poppins, sans-serif" }}
                >
                  About the Artwork
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Diamond className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-sm font-medium text-gray-800">Type</span>
                      <span className="text-sm text-gray-600">{artwork.details.type}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Fingerprint className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-sm font-medium text-gray-800">Signature</span>
                      <span className="text-sm text-gray-600">Hand-signed by artist</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-sm font-medium text-gray-800">Authenticity</span>
                      <span className="text-sm text-gray-600">{artwork.details.authenticity}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Paintbrush className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-sm font-medium text-gray-800">Medium</span>
                      <span className="text-sm text-gray-600">{artwork.details.medium}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Ruler className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-sm font-medium text-gray-800">Dimensions</span>
                      <span className="text-sm text-gray-600">{artwork.details.dimensions}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Monitor className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-sm font-medium text-gray-800">Display</span>
                      <span className="text-sm text-gray-600">{artwork.details.display}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Tags className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-sm font-medium text-gray-800">Tags</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {artwork.details.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white border text-gray-600 rounded text-xs"
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AffordableArtDetail;