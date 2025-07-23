import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar"; // Adjust path as needed
import Footer from "@/components/ui/Footer"; // Use Shadcn/UI path
import "../App.css";
import { Helmet } from "react-helmet";
import { ARTWORK_IMAGES, ImageData } from "../data/artworkData"; // Adjust path as needed
import WhatsAppFloat from "@/components/WhatsAppFloat"; 

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <Helmet>
        <title>FormForge | Gallery of Luxury Sculptures</title>
        <meta
          name="description"
          content="Explore the FormForge gallery featuring luxury Corten steel sculptures, bespoke metal art, and public installations from India and UAE."
        />
        <meta
          name="keywords"
          content="Corten Steel Sculptures, Luxury Metal Art, Public Art Installations, FormForge Gallery, Custom Sculptures, India, UAE"
        />
        <meta property="og:title" content="FormForge | Gallery of Luxury Sculptures" />
        <meta
          property="og:description"
          content="View our collection of luxury Corten steel sculptures and bespoke metal art installations across India and UAE."
        />
        <meta property="og:image" content="https://formforge.com/twin-spirits-chennai-2023.webp" />
        <meta property="og:url" content="https://formforge.com/gallery" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FormForge | Gallery of Luxury Sculptures" />
        <meta
          name="twitter:description"
          content="View our collection of luxury Corten steel sculptures and bespoke metal art installations across India and UAE."
        />
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
              "logo": "https://formforge.com/logo.webp",
            },
            "hasPart": ARTWORK_IMAGES.map((image) => ({
              "@type": "VisualArtwork",
              "name": typeof image.caption === "string" ? image.caption : "Sculpture",
              "image": `https://formforge.com${image.images[0].src}`,
              "description": image.images[0].alt,
              "contentLocation": {
                "@type": "Place",
                "name": image.details.location || "Worldwide",
              },
              "sameAs": `https://formforge.com/gallery/${image.slug}`,
            })),
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919650020485",
              "contactType": "Customer Support",
              "areaServed": "Worldwide",
              "availableLanguage": ["English"],
            },
          })}
        </script>
        <link
          rel="preload"
          as="image"
          href={ARTWORK_IMAGES[0]?.images[0]?.src}
        />
      </Helmet>

      <div className="max-w-10xl flex flex-col items-center justify-center mx-auto">
        <Navbar />

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-1 w-full">
          {ARTWORK_IMAGES.map((artwork) => (
            <div
              key={artwork.slug}
              className="relative group w-full overflow-hidden"
            >
              <Link
                to={`/gallery/${artwork.slug}`}
                className="cursor-pointer overflow-hidden shadow-lg relative block"
              >
                <img
                  src={artwork.images[0].src}
                  alt={artwork.images[0].alt}
                  loading="lazy"
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
              </Link>
              <div className="hidden">
                <h2>{artwork.details.heading}</h2>
                <p>
                  {typeof artwork.details.description === "string"
                    ? artwork.details.description
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
        <WhatsAppFloat phoneNumber="+919650020485" />
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;