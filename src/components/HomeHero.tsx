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
    image: "/images/blog/Corten_Steel_Face.jpg",
    year: "2025",
    location: "New Delhi"
  },
  {
    id: 2,
    title: "Waves of Infinity",
    image: "/images/blog/AD_Elephant.jpg",
    year: "2024",
    location: "Mumbai"
  },
  {
    id: 3,
    title: "Geometric Dreams",
    image: "/images/blog/Stainless_Steel_dolphin.jpg",
    year: "2024",
    location: "Bangalore"
  },
  {
    id: 4,
    title: "Eternal Forms",
    image: "/images/blog/Stainless_Steel_Flower.jpg",
    year: "2024",
    location: "Chennai"
  },
   {
    id: 4,
    title: "Bonsai",
    image: "/images/blog/bonsai_metal.jpg",
    year: "2024",
    location: "Pune"
  },
   {
    id: 4,
    title: "Stainless Steel",
    image: "/images/blog/Stainless_Steel_Lotus.jpg",
    year: "2024",
    location: "Hyderabad"
  },
  
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
          <p className="absolute bottom-1 right-10 text-white/70 text-[15px] sm:text-xs md:text-sm tracking-wider"
             style={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>
            By Abhinav Goyal
          </p>
        </div>
        <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl text-center px-4 tracking-wide mt-6"
           style={{ fontFamily: 'Montserrat, Poppins, sans-serif', lineHeight: '1.8em' }}>
          Blending material discipline with contemporary exploration, Abhinav Goyal creates sculptural works that challenge balance, presence, and permanence.
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
                src="/images/blog/Stainless_Steel_Flower.jpg"
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
             For over a decade, Abhinav Goyal worked with stainless steel as a primary sculptural medium—bridging traditional metal craftsmanship with contemporary form-making. My practice focuses on precision, material honesty, and structural clarity, producing works that are grounded in time yet responsive to the present.
            </p>
            <p className="text-sm md:text-base"
               style={{ fontFamily: 'Montserrat, Poppins, sans-serif', lineHeight: '1.8em', color: 'rgb(87, 87, 87)' }}>
           Each sculpture is developed through a rigorous making process that combines engineering precision with artistic intent. The work spans intimate indoor pieces to large-scale public installations, engaging directly with space, scale, and context rather than serving as surface decoration.
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
  const handleWorkClick = () => {
    window.location.href = '/gallery';
  };

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-wider mb-3"
              style={{ fontFamily: 'Montserrat', letterSpacing: '.06em', color: 'rgb(34, 34, 34)', fontWeight: 400 }}>
            FEATURED WORKS
          </h1>
          <div className="w-20 h-0.5 bg-gray-300 mx-auto" />
        </div>

        {/* Works Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featuredWorks.map((work) => (
            <div 
              key={work.id}
              onClick={handleWorkClick}
              className="cursor-pointer group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[400px] md:h-[550px] lg:h-[650px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-white/90 text-sm tracking-widest bg-black/50 px-3 py-1 rounded"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {work.year} • {work.location}
                  </span>
                </div>
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