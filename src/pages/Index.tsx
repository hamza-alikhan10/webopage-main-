import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const desktopImages = [
  "/H-L-1.webp",
  "/H-L-2.webp",
  "/H-L-3.webp",
  "/H-L-4.webp",
  "/H-L-5.webp",
  "/H-L-6.webp",
  "/H-L-8.webp"
];

const mobileImages = [
  "/twin-spirits-chennai-2023.webp",
  "/levitating-whale-kpmg-gurugram-2022.webp",
  "/raging-bull-goa-2024.webp", 
  "/42.webp",
  "/40.webp",
  "/metamorphosis-muse-hyderabad-2025.webp",
  "/leaning-man-hyderabad-2023.webp",
  "/mermaid-ohl-nam-vadodara-2022.webp",
  "/levitating-whale-kpmg-gurugram-2022.webp",
  "/ballerina-gurugram-2023.webp"
];

const socialLinks = [
  { href: "https://wa.me/919650020485", icon: <FaWhatsapp /> },
  { href: "https://www.instagram.com/formforge/", icon: <FaInstagram /> },
  { href: "https://www.facebook.com/Formforge", icon: <FaFacebook /> },
  { href: "https://www.linkedin.com/company/formforge/", icon: <FaLinkedin /> },
];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const titleRef = useRef(null);

  // Determine if user is on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check initial screen size
    checkMobile();
    
    // Add event listener to handle resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Image slideshow effect
  useEffect(() => {
    const images = isMobile ? mobileImages : desktopImages;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
  
    return () => clearInterval(interval);
  }, [isMobile]);
  
  // Prevent body scrolling
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Handle page transition
  const handleEnterClick = () => {
    setIsExiting(true);
    
    if (titleRef.current) {
      titleRef.current.style.transform = 'translateY(-100vh)';
      titleRef.current.style.transition = 'transform 0.8s ease-in-out';
    }
    
    sessionStorage.setItem('fromHomepage', 'true');
    
    setTimeout(() => {
      navigate('/gallery');
    }, 1000);
  };

  // Text reveal animation for the title
  const letters = "FORMFORGE".split("");

  // Select images based on device type
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black">
      {/* SEO Metadata remains the same */}
      <Helmet>
        <title>FormForge | Luxury Corten Steel Sculptures & Metal Art</title>
        <meta name="description" content="FormForge specializes in luxury Corten steel sculptures, bespoke metal art, and public art installations. Explore premium handcrafted designs." />
        {/* ... rest of the Helmet content remains the same ... */}
      </Helmet>

      {/* Custom Slideshow with responsive images */}
      <AnimatePresence>
        {images.map((src, index) => (
          currentImage === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Rest of the component remains the same */}
      <motion.div 
        className="flex flex-col items-center justify-center h-auto w-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Title and other content remain unchanged */}
        <motion.h1 
          ref={titleRef}
          className="font-normal text-white md:text-8xl text-5xl font-[Poppins] tracking-wider text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2,
            staggerChildren: 0.1
          }}
        >
          {letters.map((letter, index) => (
            <motion.span 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut" 
              }}
              className="inline-block hover:text-gray-300 transition-colors duration-300"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Remaining components (button, social links) stay the same */}
        <motion.button
          onClick={handleEnterClick}
          className="mt-[8vh] font-light border border-white text-white tracking-[5px] px-[30px] py-[10px] transition-all duration-300 ease-in-out rounded-full hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0px_4px_15px_rgba(255,255,255,0.3)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(255,255,255,0.5)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          ENTER
        </motion.button>

        <motion.div 
          className="mt-[8vh] flex justify-center space-x-6 md:space-x-5 fixed bottom-9 w-full left-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                color: "#4b4948" 
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[6vw] md:text-2xl text-white transition-transform duration-300 ease-in-out">
                {link.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;