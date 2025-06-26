import { useEffect } from "react";
import "../App.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

const AffordableArt = () => {
  useEffect(() => {
    document.title = "Affordable Art - FORMFORGE";
  }, []);

  const sculptures = [
    { id: 1, title: "Sculpture 1", image: "/vighnaharta-mumbai-2022.webp", description: "An exquisite piece of art crafted with precision." },
    { id: 2, title: "Sculpture 2", image: "/carefree-seat-hyderabad-2022.webp", description: "An exquisite piece of art crafted with precision." },
    { id: 3, title: "Sculpture 3", image: "/Arts/555.webp", description: "An exquisite piece of art crafted with precision." },
    { id: 4, title: "Sculpture 4", image: "/ganapati-dxb-uae-2024.webp", description: "An exquisite piece of art crafted with precision." },
    { id: 5, title: "Sculpture 5", image: "/Arts/Rhino-sculpture.webp", description: "An exquisite piece of art crafted with precision." },
    { id: 6, title: "Sculpture 6", image: "/Arts/thinking_figure.webp", description: "An exquisite piece of art crafted with precision." },
    { id: 7, title: "Sculpture 7", image: "/Arts/metal-shivji.webp", description: "An exquisite piece of art crafted with precision." },
    { id: 8, title: "Sculpture 8", image: "/Arts/Corten-Steel-swans.webp", description: "An exquisite piece of art crafted with precision." },
    { id: 9, title: "Sculpture 9", image: "/Arts/Stainless-steel-bull.webp", description: "An exquisite piece of art crafted with precision." },
    { id: 10, title: "Sculpture 10", image: "/Arts/sitting_lady_figure.webp", description: "An exquisite piece of art crafted with precision." },
  ];

  return (
    <>
      <Navbar />
     

      <div className="blog-content container mx-auto px-4 ">
      <h2 className="text-4xl sm:text-4xl font-playfair text-gray-800 mb-3 text-center tracking-wide mt-0">Bring Sculptural Luxury Into Your Life – <br/> Without the High Price Tag</h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto px-4">
          Immerse yourself in our meticulously curated selection of ten exquisite sculptures. Each piece, a testament to masterful craftsmanship, is designed to bring sophisticated elegance into your world without compromise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sculptures.map((sculpture) => (
            <div key={sculpture.id} className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={sculpture.image}
                alt={sculpture.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-playfair text-gray-800 mb-2">{sculpture.title}</h2>
                <p className="text-gray-600">{sculpture.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      <style>{`
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-great-vibes {
          font-family: 'Great Vibes', cursive;
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-section {
          padding: 4rem 2rem;
        }
        .text-gold {
          color: #d4a017;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display&display=swap');
      `}</style>
    </>
  );
};

export default AffordableArt;