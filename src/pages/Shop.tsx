// src/components/Shop.tsx
import { useEffect, useState } from "react";
import "../App.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { Link } from "react-router-dom";
import { sculptures, Sculpture } from "../data/shopData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  ArrowRight,
  Diamond,
  Fingerprint,
  Award,
  Paintbrush,
  Ruler,
  Monitor,
  Tags,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const Shop = () => {
  useEffect(() => {
    document.title = "Shop - FORMFORGE";
  }, []);

  const [selectedSculpture, setSelectedSculpture] = useState<Sculpture | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setSelectedImageIndex((prev) =>
      prev > 0 ? prev - 1 : (selectedSculpture?.images.length ?? 1) - 1
    );
  };
  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev < (selectedSculpture?.images.length ?? 1) - 1 ? prev + 1 : 0
    );
  };

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <Helmet>
        <title>Shop | FORMFORGE</title>
        {/* …all your meta tags and schema … */}
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-8 pb-3 sm:pb-8 lg:pb-5">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair text-gray-800 mb-4 tracking-wide leading-tight">
              Bring Sculptural Luxury Into Your Life –
              <span className="block sm:inline"> Without the High Price Tag</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in our meticulously curated selection of ten exquisite sculptures. Each piece, a testament to masterful craftsmanship, is designed to bring sophisticated elegance into your world without compromise.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {sculptures.map((item) => {
              const isSoldOut = item.status === "Sold Out";
              const isAvailable = item.status === "Readily Available";
              const isMadeToOrder = item.status === "Made to Order";
              return (
                <Link
                  key={item.id}
                  to={`/shop/${item.id}`}
                  className="group bg-white shadow-sm hover:shadow-lg rounded-lg overflow-hidden border"
                >
                  <div className="relative" style={{ aspectRatio: "800/1067" }}>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => (e.currentTarget.src = "/placeholder-image.png")}
                    />
                    {item.status && (
                      <span
                        className={`absolute top-2 right-2 px-1.5 py-0.5 text-xs font-medium rounded-md ${
                          isSoldOut
                            ? "bg-red-100 text-red-700"
                            : isAvailable
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-1">
                      {item.details.dimensions}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 flex-1 truncate">
                        {item.details.medium}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Modal */}
        <Dialog
          open={selectedSculpture !== null}
          onOpenChange={() => setSelectedSculpture(null)}
        >
          <DialogContent className="max-w-3xl">
            {selectedSculpture && (
              <>
                <DialogTitle>{selectedSculpture.title}</DialogTitle>
                <DialogDescription>{selectedSculpture.description}</DialogDescription>
                <div>
                  <img
                    src={selectedSculpture.images[selectedImageIndex]}
                    alt=""
                    className="w-full h-96 object-cover"
                  />
                  {selectedSculpture.images.length > 1 && (
                    <>
                      <Button onClick={handlePreviousImage}>
                        <ArrowLeft />
                      </Button>
                      <Button onClick={handleNextImage}>
                        <ArrowRight />
                      </Button>
                    </>
                  )}
                </div>
                {/* …details grid with Diamond, Fingerprint, etc.… */}
              </>
            )}
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </div>
);
}
export default Shop;
