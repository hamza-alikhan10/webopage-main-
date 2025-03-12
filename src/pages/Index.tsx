import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet";
import "../App.css";

const images = [
  "/H-L-1.webp",
  "/H-L-2.webp",
  "/H-L-3.webp",
  "/H-L-4.webp",
  "/H-L-5.webp",
  "/H-L-6.webp",
  "/H-L-8.webp"
];

const socialLinks = [
  { href: "https://wa.me/919650020485", icon: <FaWhatsapp /> },
  { href: "https://www.instagram.com/formforge/", icon: <FaInstagram /> },
  { href: "https://www.facebook.com/Formforge", icon: <FaFacebook /> },
  { href: "https://www.linkedin.com/company/formforge/", icon: <FaLinkedin /> },
];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
  
    return () => clearInterval(interval);
  }, [images.length]);
  
  // Add this effect to prevent scrolling on the body
  useEffect(() => {
    // Save original styles
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    
    // Restore original style on unmount
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
      <div className="fixed inset-0 w-full h-full flex items-centers justify-center bg-black">
      {/* SEO Metadata with react-helmet */}
      <Helmet>
        <title>FormForge | Luxury Corten Steel Sculptures & Metal Art</title>
        <meta name="description" content="FormForge specializes in luxury Corten steel sculptures, bespoke metal art, and public art installations. Explore premium handcrafted designs." />
        <meta name="keywords" content="Corten Steel, Corten Steel Sculptures, Luxury Sculptures, Metal Art, Public Art, Custom Metal Installations, Outdoor Sculptures" />
        <meta property="og:title" content="FormForge | Luxury Corten Steel Sculptures & Metal Art" />
        <meta property="og:description" content="Discover high-end Corten steel sculptures and luxury metal art for public and private spaces. Custom designs available worldwide." />
        <meta property="og:image" content="https://formforge.com/logo.webp" />
        <meta property="og:url" content="https://formforge.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FormForge | Luxury Corten Steel Sculptures & Metal Art" />
        <meta name="twitter:description" content="Explore custom Corten steel sculptures and public installations designed by FormForge." />
        <meta name="twitter:image" content="https://formforge.com/logo.webp" />
        <link rel="canonical" href="https://formforge.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FormForge",
            "url": "https://formforge.com/",
            "logo": "https://formforge.com/logo.webp",
            "description": "Luxury Corten steel sculptures, custom metal art, and large-scale public installations crafted with precision.",
            "sameAs": [
              "https://www.instagram.com/formforge/",
              "https://www.linkedin.com/company/formforge/",
              "https://www.facebook.com/Formforge",
              "https://wa.me/919650020485"
            ],
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

      {/* Custom Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-3000 ease-in-out ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center h-auto w-auto relative z-10">
        <h1 className="font-normal text-white md:text-7xl text-4xl font-[Poppins]">
          F O R M F O R G E
        </h1>

        <button
          onClick={() => (window.location.href = "/gallery")}
          className="mt-[8vh] font-light border border-white text-white tracking-[5px] px-[30px] py-[10px] transition-all duration-300 ease-in-out rounded-full hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0px_4px_15px_rgba(255,255,255,0.3)]"
        >
          ENTER
        </button>

        {/* Social Media Icons */}
        <div className="mt-[8vh] flex justify-center absolute bottom-9 space-x-5 md:space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              <span className="text-[4vw] md:text-2xl text-white transition-transform duration-300 ease-in-out hover:scale-125 hover:text-[#4b4948]">
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;