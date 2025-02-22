import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

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
  }, []);

  return (
    <div className="w-full h-svh overflow-hidden flex item-centers justify-center relative bg-black">
      
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
        <h1 className="font-bold text-white md:text-7xl text-4xl">
          F O R M F O R G E
        </h1>
        <button
          onClick={() => (window.location.href = "/gallery")}
          className="mt-[5vh] font-light border border-white text-white tracking-[5px] px-[30px] py-[10px] transition-all duration-300 ease-in-out rounded-full hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0px_4px_15px_rgba(255,255,255,0.3)]"
        >
          ENTER
        </button>

        {/* Social Media Icons */}
        <div className="mt-[8vh] flex justify-center absolute bottom-5 space-x-5 md:space-x-4">
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
