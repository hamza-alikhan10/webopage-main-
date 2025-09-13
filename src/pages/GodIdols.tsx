import React, { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
// Define the interface for each sculpture
interface SculptureSection {
  heading: string;
  description: string;
  story: string;
  images: string[];
  price: string;
  dimensions: string;
  material: string;
  position: "left" | "right";
}

// Data for the sculptures with multiple images
const sculptureData: SculptureSection[] = [
  {
    heading: "LORD GANESHA",
    description: "The Divine Remover of Obstacles",
    story: `A masterpiece capturing the essence of wisdom and new beginnings. This sculpture embodies Ganesha's benevolent nature, with intricate details showcasing his elephant head representing intelligence, and his four arms holding symbols of enlightenment.

Crafted with meticulous attention to traditional iconography, every curve and detail tells the story of the beloved deity who blesses all new ventures and removes life's obstacles.`,
    images: [
      "/vighnaharta-mumbai-2022.webp",
      "/VIGHNAHARTA.webp",
      "/raging-stallions-chennai-2021.webp"
    ],
    price: "Starting from ₹15,000",
    dimensions: "Available in multiple sizes",
    material: "Bronze, Marble, or Stone",
    position: "right",
  },
  {
    heading: "LORD KRISHNA",
    description: "The Divine Lover and Teacher",
    story: `An exquisite representation of Krishna's divine charm and wisdom. This sculpture captures the eternal youth of the blue-skinned deity, complete with his iconic peacock feather crown and flute.

The serene expression reflects Krishna's role as both the playful cowherd and the profound teacher of the Bhagavad Gita, making this piece a perfect addition to any spiritual space.`,
    images: [
      "/inverted-cactus-hyderabad-2023.webp",
      "/wing-man-dubai-2024.webp",
      "/vighnaharta-mumbai-2022.webp"
    ],
    price: "Starting from ₹18,000",
    dimensions: "Custom sizes available",
    material: "Bronze, Brass, or Marble",
    position: "left",
  },
  {
    heading: "LORD SHIVA",
    description: "The Cosmic Dancer and Destroyer",
    story: `A powerful sculpture depicting Shiva as Nataraja, the cosmic dancer whose movements maintain the rhythm of the universe. The third eye, serpent, and trident are masterfully incorporated into this dynamic piece.

This sculpture represents transformation and the eternal cycle of creation and destruction, perfect for those seeking spiritual transformation and inner strength.`,
    images: [
      "/Arts/METAL-TOTEMS.webp",
      "/raging-stallions-chennai-2021.webp",
      "/inverted-cactus-hyderabad-2023.webp"
    ],
    price: "Starting from ₹22,000",
    dimensions: "Multiple size options",
    material: "Bronze, Stone, or Metal",
    position: "right",
  },
  {
    heading: "GODDESS LAKSHMI",
    description: "The Divine Mother of Prosperity",
    story: `An elegant sculpture of the goddess of wealth and fortune, depicted with four arms holding lotus flowers and blessing mudras. Her serene expression radiates peace and abundance.

This beautiful piece symbolizes both material and spiritual prosperity, making it an ideal centerpiece for homes and offices seeking blessings of abundance and success.`,
    images: [
      "/raging-stallions-chennai-2021.webp",
      "/wing-man-dubai-2024.webp",
      "/Arts/METAL-TOTEMS.webp"
    ],
    price: "Starting from ₹16,500",
    dimensions: "Various sizes available",
    material: "Marble, Bronze, or Brass",
    position: "left",
  },
  {
    heading: "LORD HANUMAN",
    description: "The Divine Protector and Devotee",
    story: `A magnificent sculpture showcasing Hanuman's strength and devotion. This piece captures the monkey deity's powerful physique and humble devotion, with his hands in prayer position.

Perfect for those seeking protection and strength, this sculpture embodies courage, loyalty, and the power of unwavering devotion to overcome any obstacle in life.`,
    images: [
      "/wing-man-dubai-2024.webp",
      "/vighnaharta-mumbai-2022.webp",
      "/inverted-cactus-hyderabad-2023.webp"
    ],
    price: "Starting from ₹14,000",
    dimensions: "Small to life-size options",
    material: "Stone, Bronze, or Metal",
    position: "right",
  },
];

const GodIdols: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImageIndexes, setSelectedImageIndexes] = useState<{ [key: number]: number }>({});

  const handleInquiry = (sculptureName: string) => {
    const message = `Hi, I'm interested in the ${sculptureName} sculpture. Could you please provide more details about pricing and availability?`;
    const whatsappUrl = `https://wa.me/918123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePreviousImage = useCallback((sculptureIndex: number) => {
    const sculpture = sculptureData[sculptureIndex];
    if (!sculpture) return;
    
    setSelectedImageIndexes(prev => {
      const currentIndex = prev[sculptureIndex] || 0;
      return {
        ...prev,
        [sculptureIndex]: currentIndex > 0 ? currentIndex - 1 : sculpture.images.length - 1
      };
    });
  }, []);

  const handleNextImage = useCallback((sculptureIndex: number) => {
    const sculpture = sculptureData[sculptureIndex];
    if (!sculpture) return;
    
    setSelectedImageIndexes(prev => {
      const currentIndex = prev[sculptureIndex] || 0;
      return {
        ...prev,
        [sculptureIndex]: currentIndex < sculpture.images.length - 1 ? currentIndex + 1 : 0
      };
    });
  }, []);

  const getCurrentImageIndex = (sculptureIndex: number) => {
    return selectedImageIndexes[sculptureIndex] || 0;
  };

  return (
    <div className="origin-top bg-gradient-to-b from-slate-50 to-white min-h-screen">
        
      <div className="max-w-[95%] sm:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Navbar />
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 mt-4 sm:mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-800 mb-3 sm:mb-4" 
              style={{ fontFamily: "Montserrat", letterSpacing: "0.02em" }}>
            Divine Sculptures
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto px-4"
             style={{ fontFamily: "Poppins" }}>
            Handcrafted spiritual art pieces that bring divine energy to your space
          </p>
          <div className="w-16 sm:w-24 h-0.5 bg-gray-300 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {sculptureData.map((sculpture, index) => {
            const currentImageIndex = getCurrentImageIndex(index);
            const currentImage = sculpture.images[currentImageIndex];
            
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 
                           ${sculpture.position === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}
                           group transition-all duration-700 hover:scale-[1.01] sm:hover:scale-[1.02]`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Section with Navigation */}
                <div className="w-full lg:w-1/2 relative overflow-hidden">
                  <div className="relative group cursor-pointer">
                    <img
                      src={currentImage}
                      alt={`${sculpture.heading} - View ${currentImageIndex + 1} of ${sculpture.images.length}`}
                      className="w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover 
                               transition-all duration-500 group-hover:scale-105
                               shadow-xl sm:shadow-2xl hover:shadow-3xl rounded-lg"
                      style={{ 
                        filter: hoveredIndex === index ? 'brightness(1.1) contrast(1.1)' : 'brightness(1)',
                      }}
                    />
                    
                    {/* Navigation Arrows - Only Left/Right Arrows */}
                    {sculpture.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePreviousImage(index);
                          }}
                          className="absolute left-2 xs:left-3 sm:left-4 top-1/2 -translate-y-1/2 
                                   h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 
                                   rounded-full bg-white/90 hover:bg-white shadow-lg 
                                   border border-gray-200 flex items-center justify-center
                                   transition-all duration-300 hover:scale-105 z-10"
                          aria-label="Previous image"
                        >
                          <ArrowLeft className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-gray-700" />
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage(index);
                          }}
                          className="absolute right-2 xs:right-3 sm:right-4 top-1/2 -translate-y-1/2 
                                   h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 
                                   rounded-full bg-white/90 hover:bg-white shadow-lg 
                                   border border-gray-200 flex items-center justify-center
                                   transition-all duration-300 hover:scale-105 z-10"
                          aria-label="Next image"
                        >
                          <ArrowRight className="h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-gray-700" />
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    {sculpture.images.length > 1 && (
                      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 
                                    bg-black/20 rounded-full px-2 xs:px-2.5 sm:px-3 py-1.5 sm:py-2">
                        {sculpture.images.map((_, imageIndex) => (
                          <button
                            key={imageIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImageIndexes(prev => ({
                                ...prev,
                                [index]: imageIndex
                              }));
                            }}
                            className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2 sm:h-2 rounded-full transition-all ${
                              currentImageIndex === imageIndex ? "bg-white" : "bg-white/50"
                            }`}
                            aria-label={`View image ${imageIndex + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left px-2 sm:px-0">
                  <div className="space-y-2">
                    <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 leading-tight"
                        style={{ fontFamily: "Montserrat", letterSpacing: "0.02em" }}>
                      {sculpture.heading}
                    </h2>
                    <p className="text-sm xs:text-base sm:text-lg text-gray-500 italic"
                       style={{ fontFamily: "Poppins" }}>
                      {sculpture.description}
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-gray-600 leading-relaxed text-xs xs:text-sm sm:text-base"
                       style={{ fontFamily: "Poppins", lineHeight: "1.7" }}>
                      {sculpture.story}
                    </p>

                    {/* Specifications */}
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-500">
                      <div className="flex flex-col xs:flex-row justify-center lg:justify-start xs:items-center gap-1 xs:gap-2">
                        <span className="font-medium">Material:</span>
                        <span>{sculpture.material}</span>
                      </div>
                      <div className="flex flex-col xs:flex-row justify-center lg:justify-start xs:items-center gap-1 xs:gap-2">
                        <span className="font-medium">Dimensions:</span>
                        <span>{sculpture.dimensions}</span>
                      </div>
                      <div className="flex flex-col xs:flex-row justify-center lg:justify-start xs:items-center gap-1 xs:gap-2">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">Price:</span>
                        <span className="text-gray-800 font-medium text-sm sm:text-base">{sculpture.price}</span>
                      </div>
                      {sculpture.images.length > 1 && (
                        <div className="flex flex-col xs:flex-row justify-center lg:justify-start xs:items-center gap-1 xs:gap-2">
                          <span className="font-medium">Images:</span>
                          <span>{sculpture.images.length} views available</span>
                        </div>
                      )}
                    </div>

                    {/* Single CTA Button - Design My Piece */}
                    <div className="flex justify-center lg:justify-start pt-2 sm:pt-4">
                      <button
                        onClick={() => handleInquiry(sculpture.heading)}
                        className="bg-gray-800 text-white px-6 xs:px-7 sm:px-8 py-3 rounded-full 
                                 hover:bg-gray-900 transition-all duration-300 
                                 transform hover:scale-105 shadow-lg hover:shadow-xl
                                 font-medium flex items-center justify-center gap-2 
                                 text-sm xs:text-sm sm:text-base
                                 w-full xs:w-auto max-w-xs xs:max-w-none"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Design My Piece
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Contact CTA Section */}
          <div className="text-center py-12 sm:py-16 bg-gradient-to-r from-gray-50 to-gray-100 
                        rounded-2xl sm:rounded-3xl shadow-inner mt-16 sm:mt-20 mx-2 sm:mx-0">
            <h3 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 mb-4 sm:mb-6 px-4"
                style={{ fontFamily: "Montserrat" }}>
              Ready to Bring Divine Art Home?
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 text-sm sm:text-base"
               style={{ fontFamily: "Poppins" }}>
            Every FormForge sculpture is a bespoke creation, crafted with precision and artistry. Enquire for custom dimensions, finishes, and exclusive consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button
                onClick={() => handleInquiry("Custom Sculpture")}
                className="bg-gray-800 text-white px-8 xs:px-9 sm:px-10 py-3 sm:py-4 rounded-full 
                         hover:bg-gray-900 transition-all duration-300 
                         transform hover:scale-105 shadow-lg hover:shadow-xl
                         font-medium text-base sm:text-lg w-full sm:w-auto"
                style={{ fontFamily: "Montserrat" }}
              >
               Share Your Space
              </button>
           
            </div>
          </div>
        </div>
          <Footer />
      </div>
        
    </div>
  );
};

export default GodIdols;