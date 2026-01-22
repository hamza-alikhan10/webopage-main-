import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar"; // Adjust path as needed
import Footer from "@/components/ui/Footer"; // Use Shadcn/UI path
import "../App.css";
import { Helmet } from "react-helmet";
import { ARTWORK_IMAGES, ImageData } from "../data/artworkData"; // Adjust path as needed
import WhatsAppFloat from "@/components/WhatsAppFloat"; 

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white page-shell">
      <Helmet>
        <title>FormForge | Precision‑Engineered Metal Sculptures & Bespoke Metal Artworks</title>
        <meta
          name="description"
          content="Discover FormForge, Delhi's premier studio crafting precision‑engineered corten and stainless steel sculptures. Explore luxury, narrative‑driven metal art pieces—ready to ship worldwide or custom‑made to order."
        />
        <meta
          name="keywords"
          content="Corten Steel Sculptures, Luxury Metal Art, Public Art Installations, FormForge Gallery, Custom Sculptures, India, UAE, precision-engineered, bespoke metal artworks"
        />
        <meta property="og:title" content="FormForge | Precision‑Engineered Metal Sculptures" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://formforge.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://formforge.com/gallery" />
        <meta
          property="og:description"
          content="Explore luxury corten and stainless steel sculptures by FormForge—custom, precision‑engineered artworks that tell a story."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FormForge | Precision‑Engineered Metal Sculptures" />
        <meta
          name="twitter:description"
          content="Explore luxury corten and stainless steel sculptures by FormForge—custom, precision‑engineered artworks that tell a story."
        />
        <meta name="twitter:image" content="https://formforge.com/assets/og-image.jpg" />
        <link rel="canonical" href="https://formforge.com/gallery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "FormForge Design Private Limited",
                "url": "https://formforge.com/",
                "logo": "https://formforge.com/assets/logo.svg",
                "sameAs": [
                  "https://www.instagram.com/abhinavgoyal1.0",
                  "https://www.linkedin.com/company/formforge"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+919650020485",
                  "contactType": "Customer Support",
                  "areaServed": "Worldwide",
                  "availableLanguage": ["English"]
                }
              },
              {
                "@type": "CollectionPage",
                "name": "FormForge Gallery - Precision‑Engineered Metal Sculptures",
                "url": "https://formforge.com/gallery",
                "description": "Discover luxury corten and stainless steel sculptures—ready to ship worldwide or custom‑made to order.",
                "publisher": {
                  "@type": "Organization",
                  "name": "FormForge Design Private Limited"
                },
                "hasPart": ARTWORK_IMAGES.map((image) => ({
                  "@type": "VisualArtwork",
                  "name": typeof image.caption === "string" ? image.caption : "Sculpture",
                  "image": `https://formforge.com${image.images[0].src}`,
                  "description": image.images[0].alt,
                  "contentLocation": {
                    "@type": "Place",
                    "name": image.details.location || "Worldwide"
                  },
                  "sameAs": `https://formforge.com/gallery/${image.slug}`
                }))
              }
            ]
          })}
        </script>
        <link
          rel="preload"
          as="image"
          href={ARTWORK_IMAGES[0]?.images[0]?.src}
        />
      </Helmet>

      {/* Hidden H1 for SEO - not visible to users */}
      <h1 className="sr-only">Luxury, Narrative‑Driven Metal Sculptures by FormForge</h1>

      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto">
        <Navbar />

        {/* Hidden navigation for internal linking - not visible to users */}
        <nav className="sr-only" aria-label="Gallery Navigation">
          <ul>
            <li><Link to="/">Home - FormForge Metal Sculptures</Link></li>
            <li><Link to="/about">About Our Metal Art Studio</Link></li>
            <li><Link to="/contact">Contact FormForge</Link></li>
            <li><Link to="/services">Custom Metal Sculpture Services</Link></li>
          </ul>
        </nav>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-1 w-full">
          {ARTWORK_IMAGES.map((artwork) => (
            <div
              key={artwork.slug}
              className="relative group w-full overflow-hidden"
            >
              <Link
                to={`/gallery/${artwork.slug}`}
                className="cursor-pointer overflow-hidden shadow-lg relative block"
                title={`View ${artwork.caption} - Custom Metal Sculpture`}
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
        <WhatsAppFloat phoneNumber="+919650006385" />
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
