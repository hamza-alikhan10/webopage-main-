import { useEffect, useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import Footer from './ui/Footer';

const images = [
  "/Arts/Running_horses_Stainless_Steel.webp",
  "/Arts/Ganesh_ji.webp",
  "/Arts/metal_Bull.webp",
  "/Arts/Metal_cactus.webp",
  "/Arts/Metal_Totems.webp",
];

const captions = [
  "Forms shaped by tension, memory, and material",
  "A studio practice between structure and emotion",
  "Sculptural works that feel resolved yet unsettled",
  "Material as surface, structure, and expression",
  "Objects that remain open in meaning",
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
    id: 5,
    title: "Bonsai",
    image: "/images/blog/bonsai_metal.jpg",
    year: "2024",
    location: "Pune"
  },
  {
    id: 6,
    title: "Stainless Steel",
    image: "/images/blog/Stainless_Steel_Lotus.jpg",
    year: "2024",
    location: "Hyderabad"
  },
];

/* ── Uiverse-style Enter Button ── */
const EnterButton = ({ onClick, label = "Enter Gallery", variant = "dark" }) => {
  const isLight = variant === "light";

  return (
    <button
      onClick={onClick}
      className={`relative cursor-pointer py-3 px-8 text-center inline-flex justify-center
                  text-sm uppercase rounded-lg transition-transform
                  duration-300 ease-in-out group outline-offset-4 overflow-hidden
                  ${isLight ? "text-black border-black" : "text-white border-white"}`}
      style={{
        fontFamily: "Montserrat, sans-serif",
        letterSpacing: "0.2em",
        background: "transparent",
        borderWidth: "1px",
      }}
    >
      <span className="relative z-20">{label}</span>

      {/* shimmer */}
      <span
        className={`absolute left-[-75%] top-0 h-full w-[50%] rotate-12 z-10 blur-lg
        group-hover:left-[125%] transition-all duration-1000 ease-in-out
        ${isLight ? "bg-black/10" : "bg-white/20"}`}
      />

      {/* corners */}
      <span
        className={`w-1/2 transition-all duration-300 block absolute h-[20%]
        rounded-tl-lg border-l-2 border-t-2 top-0 left-0
        ${isLight ? "border-black" : "border-[#D4EDF9]"}`}
      />
      <span
        className={`w-1/2 transition-all duration-300 block absolute group-hover:h-[90%] h-[60%]
        rounded-tr-lg border-r-2 border-t-2 top-0 right-0
        ${isLight ? "border-black" : "border-[#D4EDF9]"}`}
      />
      <span
        className={`w-1/2 transition-all duration-300 block absolute h-[60%] group-hover:h-[90%]
        rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0
        ${isLight ? "border-black" : "border-[#D4EDF9]"}`}
      />
      <span
        className={`w-1/2 transition-all duration-300 block absolute h-[20%]
        rounded-br-lg border-r-2 border-b-2 right-0 bottom-0
        ${isLight ? "border-black" : "border-[#D4EDF9]"}`}
      />
    </button>
  );
};

const ScrollIndicator = ({ isVisible }) => (
  <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2
                   transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <span className="text-white/60 text-[10px] tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      SCROLL
    </span>
    <FaChevronDown className="text-white/60 text-lg animate-bounce" />
  </div>
);

const HeroSection = ({ currentImage, onEnterClick }) => {
  const [displayedIndex, setDisplayedIndex] = useState(currentImage);
  const [captionVisible, setCaptionVisible] = useState(true);

  useEffect(() => {
    setCaptionVisible(false);
    const timer = setTimeout(() => {
      setDisplayedIndex(currentImage);
      setCaptionVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <div
      className="relative h-screen overflow-hidden flex items-center justify-center bg-black"
      style={{
        width: '100vw',
        marginLeft: `calc(-1 * (100vw - 100%) / 2)`,
        marginRight: `calc(-1 * (100vw - 100%) / 2)`,
      }}
    >
      {/* Background Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                      ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center w-full max-w-4xl mx-auto">

        {/* Title block */}
        <div className="mb-2">
          <h1
            className="font-light text-white tracking-[0.25em] leading-none"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 200,
              fontSize: 'clamp(2.6rem, 8vw, 6.5rem)',
            }}
          >
            FORMFORGE
          </h1>

          <p
            className="text-white/65 text-right pr-10"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
              letterSpacing: '0.18em',
            }}
          >
            By Abhinav Goyal
          </p>
        </div>

        {/* Cycling Caption */}
        <p
          className="text-white/75 max-w-xl mt-5 mb-10"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(0.78rem, 1.8vw, 1rem)',
            lineHeight: '1.9',
            letterSpacing: '0.04em',
            opacity: captionVisible ? 1 : 0,
            transition: captionVisible ? 'opacity 0.5s ease-in' : 'opacity 0.3s ease-out',
            minHeight: '2em',
          }}
        >
          {captions[displayedIndex]}
        </p>

        <EnterButton onClick={onEnterClick} />
      </div>

      <ScrollIndicator isVisible={true} />
    </div>
  );
};

const AboutSection = () => (
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
          <h1
            className="text-3xl md:text-4xl lg:text-5xl tracking-wider mb-3"
            style={{ fontFamily: 'Montserrat', letterSpacing: '.06em', color: 'rgb(34,34,34)', fontWeight: 400 }}
          >
            OUR CRAFT
          </h1>
          <div className="w-20 h-0.5 bg-gray-300" />
          <p
            className="text-sm md:text-base pt-2"
            style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.8em', color: 'rgb(87,87,87)' }}
          >
            For over a decade, Abhinav Goyal worked with stainless steel as a primary sculptural
            medium—bridging traditional metal craftsmanship with contemporary form-making. My practice
            focuses on precision, material honesty, and structural clarity, producing works that are
            grounded in time yet responsive to the present.
          </p>
          <p
            className="text-sm md:text-base"
            style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.8em', color: 'rgb(87,87,87)' }}
          >
            Each sculpture is developed through a rigorous making process that combines engineering
            precision with artistic intent. The work spans intimate indoor pieces to large-scale
            public installations, engaging directly with space, scale, and context rather than
            serving as surface decoration.
          </p>
          <div className="mt-8">
            <EnterButton
              label="Learn More"
              variant="light"
              onClick={() => window.location.href = "/gallery"}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedWorks = () => (
  <section className="bg-white py-4 md:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-12">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl tracking-wider mb-3"
          style={{ fontFamily: 'Montserrat', letterSpacing: '.06em', color: 'rgb(34,34,34)', fontWeight: 400 }}
        >
          FEATURED WORKS
        </h1>
        <div className="w-20 h-0.5 bg-gray-300 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {featuredWorks.map((work) => (
          <div
            key={work.id}
            onClick={() => window.location.href = '/gallery'}
            className="cursor-pointer group"
          >
            <div className="relative overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[350px] sm:h-[420px] md:h-[500px] lg:h-[580px]
                           object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <span
                  className="text-white/90 text-sm tracking-widest bg-black/50 px-3 py-1 rounded"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
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

const HomeHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    const handleScroll = () => setShowScrollIndicator(window.scrollY < 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleEnterClick = () => {
    window.location.href = '/gallery';
  };

  return (
    <div className="w-full p-0 m-0" style={{ padding: 0, margin: 0 }}>
      <HeroSection currentImage={currentImage} onEnterClick={handleEnterClick} />

      <div className="max-w-7xl mx-auto">
        <AboutSection />
        <FeaturedWorks />
      </div>

      <Footer />
    </div>
  );
};

export default HomeHero;