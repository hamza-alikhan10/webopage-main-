import { useEffect, useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import Footer from './ui/Footer';

const images = [
  "/images/blog/H-L-1.webp",
  "/images/blog/H-L-2.webp",
  "/images/blog/H-L-3.webp",
  "/images/blog/H-L-4.webp",
  "/images/blog/H-L-5.webp",
  "/images/blog/H-L-7.webp",
  "/images/blog/H-L-8.webp",
];

const featuredWorks = [
  {
    id: 1,
    title: "Urban Metamorphosis",
    description: "A stunning 15-foot sculpture that transforms city squares into interactive art experiences. Crafted from mirror-polished stainless steel, this piece reflects both the environment and the viewer's perception.",
    image: "/images/blog/Corten_Steel_Face.jpg",
    year: "2025",
    location: "New Delhi"
  },
  {
    id: 2,
    title: "Waves of Infinity",
    description: "An organic form that captures the eternal motion of water. This installation creates a mesmerizing interplay of light and shadow, inviting contemplation and wonder.",
    image: "/images/blog/AD_Elephant.jpg",
    year: "2024",
    location: "Mumbai"
  },
  {
    id: 3,
    title: "Geometric Dreams",
    description: "A bold exploration of architectural forms and mathematical precision. This piece challenges traditional perceptions of space and dimension through its intricate geometric patterns.",
    image: "/images/blog/Stainless_Steel_dolphin.jpg",
    year: "2024",
    location: "Bangalore"
  }
];

const ScrollIndicator = ({ isVisible }) => {
  return (
    <div className={`
      absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20
      transition-opacity duration-500 flex flex-col items-center gap-2
      ${isVisible ? 'opacity-100' : 'opacity-0'}
    `}>
      <span className="text-white/60 text-xs tracking-widest">SCROLL</span>
      <FaChevronDown className="text-white/60 text-xl animate-bounce" />
    </div>
  );
};

const HeroSection = ({ currentImage, onEnterClick }) => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative bg-black -mx-[50vw] left-1/2 right-1/2">
      {/* Background Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out
            ${currentImage === index ? "opacity-100" : "opacity-0"}
          `}
          style={{ 
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="flex flex-col items-center justify-center relative z-10 px-4">
        <div className="relative">
          <h1 className="font-light text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] mb-4 text-center"
              style={{ fontFamily: 'Montserrat, Poppins, sans-serif', fontWeight: 300 }}>
            FORMFORGE
          </h1>
          <p className="absolute -bottom-2 right-0 text-white/70 text-[15px] sm:text-xs md:text-sm tracking-wider"
             style={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>
            By Abhinav Goyal
          </p>
        </div>
        <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl text-center px-4 tracking-wide"
           style={{ fontFamily: 'Montserrat, Poppins, sans-serif', lineHeight: '1.8em' }}>
          Blending tradition with innovation, Nitush & Aroosh craft extraordinary stainless steel sculptures that redefine spaces.
        </p>
      </div>

      <ScrollIndicator isVisible={true} />
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden group">
              <img
                src="/images/blog/H-L-4.webp"
                alt="Artist at work"
                className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-wider mb-3"
                style={{ fontFamily: 'Montserrat', letterSpacing: '.06em', color: 'rgb(34, 34, 34)', fontWeight: 400 }}>
              OUR CRAFT
            </h1>
            <div className="w-20 h-0.5 bg-gray-300" />
            <p className="text-sm md:text-base pt-2"
               style={{ fontFamily: 'Montserrat, Poppins, sans-serif', lineHeight: '1.8em', color: 'rgb(87, 87, 87)' }}>
              For over a decade, Nitush and Aroosh have been pioneering the art of stainless steel sculpture. 
              Their work seamlessly blends traditional craftsmanship with contemporary design, creating pieces 
              that are both timeless and innovative.
            </p>
            <p className="text-sm md:text-base"
               style={{ fontFamily: 'Montserrat, Poppins, sans-serif', lineHeight: '1.8em', color: 'rgb(87, 87, 87)' }}>
              Each sculpture is meticulously hand-crafted, combining precision engineering with artistic vision. 
              From intimate indoor pieces to monumental public installations, their work transforms spaces and 
              inspires wonder.
            </p>
            <button 
              onClick={() => window.location.href = '/gallery'}
              className="mt-8 border border-gray-400 px-8 py-3 rounded-full 
                             hover:bg-black hover:text-white hover:border-black transition-all duration-300 
                             tracking-wider text-sm cursor-pointer"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgb(87, 87, 87)' }}>
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedWorks = () => {
  return (
    <section className="min-h-screen bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-wider mb-3"
              style={{ fontFamily: 'Montserrat', letterSpacing: '.06em', color: 'rgb(34, 34, 34)', fontWeight: 400 }}>
            FEATURED WORKS
          </h1>
          <div className="w-20 h-0.5 bg-gray-300 mx-auto" />
        </div>

        {/* Works Grid */}
        <div className="space-y-16 md:space-y-20">
          {featuredWorks.map((work, index) => (
            <div 
              key={work.id}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative overflow-hidden group">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-white/90 text-sm tracking-widest bg-black/50 px-3 py-1 rounded"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {work.year} • {work.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-2"
                    style={{ fontFamily: 'Montserrat', letterSpacing: '.06em', color: 'rgb(34, 34, 34)', fontWeight: 400 }}>
                  {work.title}
                </h2>
                <div className="w-16 h-0.5 bg-gray-300" />
                <p className="text-sm md:text-base pt-2"
                   style={{ fontFamily: 'Montserrat, Poppins, sans-serif', lineHeight: '1.8em', color: 'rgb(87, 87, 87)' }}>
                  {work.description}
                </p>
                <button className="border border-gray-400 px-8 py-3 rounded-full 
                                 hover:bg-black hover:text-white hover:border-black transition-all duration-300 
                                 tracking-wider text-sm inline-flex items-center gap-2 mt-4"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgb(87, 87, 87)' }}>
                  VIEW PROJECT
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NavbarWrapper = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className={`
      fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `}>
    
    </div>
  );
};

const HomeHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    // Image slider
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    // Scroll handler
    const handleScroll = () => {
      // Hide scroll indicator when scrolled
      setShowScrollIndicator(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleEnterClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <div ref={heroRef}>
          <HeroSection 
            currentImage={currentImage} 
            onEnterClick={handleEnterClick}
          />
        </div>

        <div className="max-w-7xl mx-auto page-shell">
          <AboutSection />
          
          <FeaturedWorks />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomeHero;