import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./ui/Footer";
import "react-image-gallery/styles/css/image-gallery.css"; // Carousel styles
import ImageGallery from "react-image-gallery"; // React Image Gallery component
import "../App.css";

// Define the images outside the component to avoid recreating them on every render.
const IMAGES = [
{ src: "/twin-spirits-chennai-2023.webp", alt: "Twin Spirits Sculpture in Chennai, India, 2023", caption: <>Twin Spirits<br />(Chennai) IND, 2023</> },
{ src: "/metamorphosis-muse-hyderabad-2025.webp", alt: "The Metamorphosis Muse Sculpture in Hyderabad, India, 2025", caption: <>The Metamorphosis Muse<br />(Hyderabad) IND, 2025</> },
{ src: "/vighnaharta-mumbai-2022.webp", alt: "Vighnaharta Sculpture in Mumbai, India, 2022", caption: <>Vighnaharta<br />(Mumbai) IND, 2022</> },
{ src: "/david-casamia-uae-2021.webp", alt: "David Sculpture at Casamia, UAE, 2021", caption: <>David<br />(Casamia UAE) 2021</> },
{ src: "/lotus-nouvel-pune-2020.webp", alt: "The Lotus Nouvel Sculpture in Pune, India, 2020", caption: <>The Lotus Nouvel<br />(Pune) IND, 2020</> },
{ src: "/mermaid-ohl-nam-vadodara-2022.webp", alt: "Mermaid | Oh’ll’nam Sculpture in Vadodara, India, 2022", caption: <>Mermaid | Oh’ll’nam<br />(Vadodara) IND, 2022</> },
{ src: "/levitating-whale-kpmg-gurugram-2022.webp", alt: "Levitating Whale Sculpture at KPMG, Gurugram, India, 2022", caption: <>Levitating Whale, KPMG<br />(Gurugram) IND, 2022</> },
{ src: "/tree-of-life-delhi-2025.webp", alt: "The Tree of Life Sculpture in Delhi, India, 2025", caption: <>The Tree of Life<br />(Delhi) IND, 2025</> },
{ src: "/inverted-cactus-hyderabad-2023.webp", alt: "Inverted Cactus Sculpture in Hyderabad, India, 2023", caption: <>Inverted Cactus<br />(Hyderabad) IND, 2023</> },
{ src: "/sculptural-totems-hyderabad-2025.webp", alt: "Sculptural Totems in Hyderabad, India, 2025", caption: <>Sculptural Totems<br />(Hyderabad) IND, 2025</> },
{ src: "/raging-stallions-chennai-2021.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021", caption: <>The Raging Stallions<br />(Chennai) IND, 2021</> },
{ src: "/wing-man-dubai-2024.webp", alt: "The Wing Man Sculpture in Dubai, UAE, 2024", caption: <>The Wing Man<br />DXB UAE, 2024</> },
{ src: "/sole-gaze-bangalore-2023.webp", alt: "The Sole Gaze Sculpture in Bangalore, India, 2023", caption: <>The Sole Gaze<br />(Bangalore) IND, 2023</> },
{ src: "/leaning-man-hyderabad-2023.webp", alt: "The Leaning Man Sculpture in Hyderabad, India, 2023", caption: <>The Leaning Man<br />(Hyderabad) IND, 2023</> },
{ src: "/meditating-lady-goa-2018.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018", caption: <>The Meditating Lady<br />(Goa) IND, 2018</> },
{ src: "/etherea-chennai-2019.webp", alt: "Etherea Sculpture in Chennai, India, 2019", caption: <>Etherea<br />(Chennai) IND, 2019</> },
{ src: "/bonsai-delhi-2024.webp", alt: "Bonsai Sculpture in Delhi, India, 2024", caption: <>Bonsai<br />(Delhi) IND, 2024</> },
{ src: "/nandi-pune-2020.webp", alt: "Nandi Sculpture in Pune, India, 2020", caption: <>Nandi<br />(Pune) IND, 2020</> },
{ src: "/carefree-seat-hyderabad-2022.webp", alt: "The Carefree Seat Sculpture in Hyderabad, India, 2022", caption: <>The Carefree Seat<br />(Hyderabad) IND, 2022</> },
{ src: "/bloom-delhi-2021.webp", alt: "Bloom Sculpture in Delhi, India, 2021", caption: <>Bloom<br />(Delhi) IND, 2021</> },
{ src: "/reflective-pause-bangalore-2025.webp", alt: "Reflective Pause Sculpture in Bangalore, India, 2025", caption: <>Reflective Pause<br />(Bangalore) IND, 2025</> },
{ src: "/abstracta-delhi-2021.webp", alt: "Abstracta Sculpture in Delhi, India, 2021", caption: <>Abstracta<br />(Delhi), IND, 2021</> },
{ src: "/buddha-bangalore-2023.webp", alt: "Buddha Sculpture in Bangalore, India, 2023", caption: <>Buddha<br />(Bangalore) IND, 2023</> },
{ src: "/sleeping-lotus-delhi-2021.webp", alt: "The Sleeping Lotus Sculpture in Delhi, India, 2021", caption: <>The Sleeping Lotus<br />(Delhi) IND, 2021</> },
{ src: "/raging-bull-goa-2024.webp", alt: "Raging Bull Sculpture in Goa, India, 2024", caption: <>Raging Bull<br />(Goa) IND, 2024</> },
{ src: "/raging-stallions-chennai_2021.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021", caption: <>The Raging Stallions<br />(Chennai) IND, 2021</> },
{ src: "/panthera-dubai-2020.webp", alt: "Panthera Sculpture in Dubai, UAE, 2020", caption: <>Panthera<br />DXB UAE, 2020</> },
{ src: "/aphrodia-goa-2018.webp", alt: "Aphrodia Sculpture in Goa, India, 2018", caption: <>Aphrodia<br />(Goa) IND, 2018</> },
{ src: "/geomorph-hyderabad-2023.webp", alt: "Geomorph Sculpture in Hyderabad, India, 2023", caption: <>Geomorph<br />(Hyderabad) IND, 2023</> },
{ src: "/ballerina-gurugram-2023.webp", alt: "Ballerina Sculpture in Gurugram, India, 2023", caption: <>Ballerina<br />(Gurugram) IND, 2023</> },
{ src: "/sole-gaze-bangalore_2023.webp", alt: "The Sole Gaze Sculpture in Bangalore, India, 2023", caption: <>The Sole Gaze<br />(Bangalore) IND, 2023</> },
{ src: "/solemn-mumbai-2021.webp", alt: "Solemn contemporary sculpture in Mumbai, India, 2021", caption: <>Solemn<br />(Mumbai) IND, 2021</> },
{ src: "/a-quiet-gaze-oman-2024.webp", alt: "A Quiet Gaze abstract sculpture in Oman, UAE, 2024", caption: <>A Quiet Gaze<br />(Oman) UAE, 2024</> },
{ src: "/wing-sculpture-gurugram-2022.webp", alt: "The Wing Sculpture modern metal installation in Gurugram, India, 2022", caption: <>The Wing Sculpture<br />(Gurugram) IND, 2022</> },
{ src: "/dreaming-of-dharma-noida-2024.webp", alt: "Dreaming Of Dharma spiritual sculpture in Noida, India, 2024", caption: <>Dreaming Of Dharma<br />(Noida) IND, 2024</> },
{ src: "/skyward-bound-delhi-2024.webp", alt: "Skyward Bound dynamic steel sculpture in Delhi, India, 2024", caption: <>Skyward Bound<br />(Delhi) IND, 2024</> },
{ src: "/seed-mumbai-2024.webp", alt: "Seed nature-inspired art sculpture in Mumbai, India, 2024", caption: <>Seed<br />(Mumbai) IND, 2024</> },
{ src: "/raging-bull-goa_2024.webp", alt: "Raging Bull powerful metal sculpture in Goa, India, 2024", caption: <>Raging Bull<br />(Goa) IND, 2024</> },
{ src: "/ganapati-dxb-uae-2024.webp", alt: "Ganapati Hindu deity sculpture in DXB, UAE, 2024", caption: <>Ganapati<br />DXB UAE, 2024</> },
];

// Prepare the data format for react-image-gallery.
const GALLERY_IMAGES = IMAGES.map((image) => ({
  original: image.src,
  thumbnail: image.src,
  caption: image.caption,
}));

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handlers for opening and closing the modal
  const openImage = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <div className="max-w-10xl flex flex-col items-center justify-center mx-auto">
        <Navbar />

        {/* Grid for images */}
        <div className="grid grid-cols-3 gap-1 w-[100%]">
          {IMAGES.map((image, index) => (
            <div
              key={index}
              className="relative group w-full overflow-hidden cursor-pointer"
              onClick={() => openImage(index)}
            >
              <div className="overflow-hidden shadow-lg relative">
                <img
                  src={image.src}
                  alt={`Portfolio Image ${index + 1}`}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Thumbnail Caption Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white text-sm md:text-lg font-medium px-2 text-center">
                    {image.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-50 p-4 sm:p-8">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black p-4 md:p-6 rounded-full text-2xl md:text-4xl hover:scale-125 transform transition"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Carousel Component */}
            <div className="max-w-3xl w-full flex flex-col sm:max-w-4xl">
              <ImageGallery
                items={GALLERY_IMAGES}
                startIndex={selectedIndex}
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={false}
                onSlide={(currentIndex) => setSelectedIndex(currentIndex)}
              />

              {/* Modal Caption */}
              <p className="text-center text-sm md:text-lg font-medium bg-gray-100 w-full p-2">
                {GALLERY_IMAGES[selectedIndex]?.caption}
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
