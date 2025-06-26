import { useEffect } from "react";
import "../App.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

const ReadyArt = () => {
  useEffect(() => {
    document.title = "Ready Art - FORMFORGE";
  }, []);

  const sculptures = Array(8).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Sculpture ${index + 1}`,
    image: `https://via.placeholder.com/300?text=Sculpture+${index + 1}`,
    description: "Ready-to-own art piece, available immediately.",
  }));

  return (
    <div className="blog-content">
      <h1>Ready Art</h1>
      <p>Discover our collection of 8 ready-to-own sculptures, available for immediate purchase.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sculptures.map((sculpture) => (
          <div key={sculpture.id} className="card">
            <img
              src={sculpture.image}
              alt={sculpture.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{sculpture.title}</h2>
            <p>{sculpture.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadyArt;