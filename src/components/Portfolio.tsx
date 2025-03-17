import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./ui/Footer";
import "react-image-gallery/styles/css/image-gallery.css"; // Carousel styles
import ImageGallery from "react-image-gallery"; // React Image Gallery component
import "../App.css";
import { Helmet } from "react-helmet";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

interface ArtworkDetails {
  heading: string;
  location: string;
  description: string;
  dimensions?: string;
  materials?: string;
  credits?: string;
}

// Define the images outside the component to avoid recreating them on every render.
const IMAGES = [
  { 
    src: "/twin-spirits-chennai-2023.webp", 
    alt: "Twin Spirits Sculpture in Chennai, India, 2023", 
    caption: <>Twin Spirits (Chennai) IND, 2023</>,
    details: {
      heading: "Twin Spirits",
      location: "(Chennai) IND, 2023",
      description: "Twin Spirits explores the duality of human existence through contrasting yet complementary forms. The sculpture represents the harmony between opposing forces in nature and within ourselves.",
      materials: "Corten steel, stainless steel accents, weather-resistant finish",
      dimensions: "Height: 12 ft, Width: 8 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Chennai Arts Foundation"
    }
  },
  { 
    src: "/metamorphosis-muse-hyderabad-2025.webp", 
    alt: "The Metamorphosis Muse Sculpture in Hyderabad, India, 2025", 
    caption: <>The Metamorphosis Muse<br />(Hyderabad) IND, 2025</>,
    details: {
      heading: "The Metamorphosis Muse",
      location: "Hyderabad, India, 2025",
      description: "The Metamorphosis Muse depicts the transformation of creative energy from concept to realization. The fluid forms represent ideas taking shape and the constantly evolving nature of artistic inspiration.",
      materials: "Polished stainless steel, bronze elements, LED lighting",
      dimensions: "Height: 15 ft, Width: 7 ft, Depth: 7 ft",
      credits: "Artist: FormForge Studios, Commissioned for Hyderabad Design District"
    }
  },
  { 
    src: "/vighnaharta-mumbai-2022.webp", 
    alt: "Vighnaharta Sculpture in Mumbai, India, 2022", 
    caption: <>Vighnaharta<br />(Mumbai) IND, 2022</>,
    details: {
      heading: "Vighnaharta",
      location: "Mumbai, India, 2022",
      description: "Inspired by Lord Ganesha, the remover of obstacles, this sculpture blends traditional symbolism with contemporary design, symbolizing prosperity and wisdom.",
      materials: "Bronze, stone base",
      dimensions: "Height: 10 ft, Width: 6 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Mumbai Cultural Society"
    }
  },
  { 
    src: "/david-casamia-uae-2021.webp", 
    alt: "David Sculpture at Casamia, UAE, 2021", 
    caption: <>David<br />(Casamia UAE) 2021</>,
    details: {
      heading: "David",
      location: "Casamia, UAE, 2021",
      description: <>FORMFORGE’s abstract reinterpretation of Michelangelo’s David redefines classical artistry with a bold, modern twist. Sculpted in stainless steel with an astonishing antique brass finish, its asymmetrical metal plates create a striking interplay of light and form. The sculpture has been installed in Dubai, at <b>Palm Jumeirah</b>. This backlit masterpiece, ideal for both indoor and outdoor settings, embodies strength, defiance, and timeless elegance.</>,
      materials: <>Material: Stainless Steel 316 <br/> Finish: Brushed antique brass</>,
      dimensions: "Size: 1800mm x 720mm x 475mm",
      credits:  <>FormForge Studios Commissioned by: <b>Casamia Estates</b></>
    }
  },
  { 
    src: "/lotus-nouvel-pune-2020.webp", 
    alt: "The Lotus Nouvel Sculpture in Pune, India, 2020", 
    caption: <>The Lotus Nouvel<br />(Pune) IND, 2020</>,
    details: {
      heading: "The Lotus Nouvel",
      location: "Pune, India, 2020",
      description: "Inspired by the blooming lotus, this sculpture symbolizes purity and renewal, with delicate petals rising from a sturdy base.",
      materials: "Aluminum, powder-coated finish",
      dimensions: "Height: 8 ft, Width: 10 ft, Depth: 10 ft",
      credits: "Artist: FormForge Studios, Commissioned by Pune Art Collective"
    }
  },
  { 
    src: "/mermaid-ohl-nam-vadodara-2022.webp", 
    alt: "Mermaid | Oh’ll’nam Sculpture in Vadodara, India, 2022", 
    caption: <>Mermaid | Oh’ll’nam<br />(Vadodara) IND, 2022</>,
    details: {
      heading: "Mermaid | Oh’ll’nam",
      location: "Vadodara, India, 2022",
      description: "A whimsical portrayal of a mermaid emerging from water, blending myth with modern artistry to evoke mystery and grace.",
      materials: "Fiberglass, resin, metallic paint",
      dimensions: "Height: 7 ft, Width: 5 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Private Commission"
    }
  },
  { 
    src: "/levitating-whale-kpmg-gurugram-2022.webp", 
    alt: "Levitating Whale Sculpture at KPMG, Gurugram, India, 2022", 
    caption: <>Levitating Whale, KPMG<br />(Gurugram) IND, 2022</>,
    details: {
      heading: "Levitating Whale",
      location: "Gurugram, India, 2022",
      description: "This sculpture captures the majesty of a whale appearing to float mid-air, symbolizing freedom and innovation in a corporate environment.",
      materials: "Stainless steel, acrylic suspension",
      dimensions: "Height: 6 ft, Width: 12 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by KPMG India"
    }
  },
  { 
    src: "/tree-of-life-delhi-2025.webp", 
    alt: "The Tree of Life Sculpture in Delhi, India, 2025", 
    caption: <>The Tree of Life<br />(Delhi) IND, 2025</>,
    details: {
      heading: "The Tree of Life",
      location: "Delhi, India, 2025",
      description: "A towering representation of interconnectedness and growth, with intricate branches reaching skyward to symbolize vitality and resilience.",
      materials: "Corten steel, LED accents",
      dimensions: "Height: 18 ft, Width: 10 ft, Depth: 10 ft",
      credits: "Artist: FormForge Studios, Commissioned by Delhi Urban Arts"
    }
  },
  { 
    src: "/inverted-cactus-hyderabad-2023.webp", 
    alt: "Inverted Cactus Sculpture in Hyderabad, India, 2023", 
    caption: <>Inverted Cactus<br />(Hyderabad) IND, 2023</>,
    details: {
      heading: "Inverted Cactus",
      location: "Hyderabad, India, 2023",
      description: "This sculpture defies gravity with its upside-down form, symbolizing resilience in adversity and a playful twist on nature.",
      materials: "Steel, green patina finish",
      dimensions: "Height: 11 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Hyderabad Green Spaces"
    }
  },
  { 
    src: "/sculptural-totems-hyderabad-2025.webp", 
    alt: "Sculptural Totems in Hyderabad, India, 2025", 
    caption: <>Sculptural Totems<br />(Hyderabad) IND, 2025</>,
    details: {
      heading: "Sculptural Totems",
      location: "Hyderabad, India, 2025",
      description: "A series of vertical forms inspired by ancient totems, these sculptures blend cultural heritage with modern abstraction.",
      materials: "Wood, steel, stone",
      dimensions: "Height: 14 ft, Width: 3 ft, Depth: 3 ft (each)",
      credits: "Artist: FormForge Studios, Commissioned by Hyderabad Arts Council"
    }
  },
  { 
    src: "/raging-stallions-chennai-2021.webp", 
    alt: "The Raging Stallions Sculpture in Chennai, India, 2021", 
    caption: <>The Raging Stallions<br />(Chennai) IND, 2021</>,
    details: {
      heading: "The Raging Stallions",
      location: "Chennai, India, 2021",
      description: "Dynamic and powerful, this sculpture captures the wild energy of stallions in motion, symbolizing strength and freedom.",
      materials: "Bronze, steel base",
      dimensions: "Height: 10 ft, Width: 14 ft, Depth: 6 ft",
      credits: "Artist: FormForge Studios, Commissioned by Chennai Sculpture Park"
    }
  },
  { 
    src: "/wing-man-dubai-2024.webp", 
    alt: "The Wing Man Sculpture in Dubai, UAE, 2024", 
    caption: <>The Wing Man<br />DXB UAE, 2024</>,
    details: {
      heading: "The Wing Man",
      location: "Dubai, UAE, 2024",
      description: "A futuristic figure with outstretched wings, representing ambition and the pursuit of limitless possibilities.",
      materials: "Polished aluminum, LED lighting",
      dimensions: "Height: 12 ft, Width: 8 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Dubai Art Expo"
    }
  },
  { 
    src: "/sole-gaze-bangalore-2023.webp", 
    alt: "The Sole Gaze Sculpture in Bangalore, India, 2023", 
    caption: <>The Sole Gaze<br />(Bangalore) IND, 2023</>,
    details: {
      heading: "The Sole Gaze",
      location: "Bangalore, India, 2023",
      description: "An introspective figure gazing upward, symbolizing contemplation and the search for meaning in a fast-paced world.",
      materials: "Stainless steel, stone pedestal",
      dimensions: "Height: 8 ft, Width: 3 ft, Depth: 3 ft",
      credits: "Artist: FormForge Studios, Commissioned by Bangalore Art Initiative"
    }
  },
  { 
    src: "/leaning-man-hyderabad-2023.webp", 
    alt: "The Leaning Man Sculpture in Hyderabad, India, 2023", 
    caption: <>The Leaning Man<br />(Hyderabad) IND, 2023</>,
    details: {
      heading: "The Leaning Man",
      location: "Hyderabad, India, 2023",
      description: "A figure leaning forward as if defying gravity, representing resilience and the human spirit's ability to push boundaries.",
      materials: "Corten steel, concrete base",
      dimensions: "Height: 9 ft, Width: 5 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Hyderabad Urban Arts"
    }
  },
  { 
    src: "/meditating-lady-goa-2018.webp", 
    alt: "The Meditating Lady Sculpture in Goa, India, 2018", 
    caption: <>The Meditating Lady<br />(Goa) IND, 2018</>,
    details: {
      heading: "The Meditating Lady",
      location: "Goa, India, 2018",
      description: "A serene female figure in meditation, embodying peace and inner strength amidst a tranquil coastal setting.",
      materials: "Bronze, weathered patina",
      dimensions: "Height: 6 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Goa Serenity Project"
    }
  },
  { 
    src: "/etherea-chennai-2019.webp", 
    alt: "Etherea Sculpture in Chennai, India, 2019", 
    caption: <>Etherea<br />(Chennai) IND, 2019</>,
    details: {
      heading: "Etherea",
      location: "Chennai, India, 2019",
      description: "A delicate, cloud-like form that appears to float, symbolizing the ephemeral nature of existence and dreams.",
      materials: "Aluminum mesh, LED lighting",
      dimensions: "Height: 10 ft, Width: 12 ft, Depth: 12 ft",
      credits: "Artist: FormForge Studios, Commissioned by Chennai Dreamscapes"
    }
  },
  { 
    src: "/bonsai-delhi-2024.webp", 
    alt: "Bonsai Sculpture in Delhi, India, 2024", 
    caption: <>Bonsai<br />(Delhi) IND, 2024</>,
    details: {
      heading: "Bonsai",
      location: "Delhi, India, 2024",
      description: "A minimalist representation of a bonsai tree, celebrating patience, growth, and the beauty of small-scale perfection.",
      materials: "Steel, copper accents",
      dimensions: "Height: 5 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Delhi Zen Gardens"
    }
  },
  { 
    src: "/nandi-pune-2020.webp", 
    alt: "Nandi Sculpture in Pune, India, 2020", 
    caption: <>Nandi<br />(Pune) IND, 2020</>,
    details: {
      heading: "Nandi",
      location: "Pune, India, 2020",
      description: "A contemporary take on the sacred bull Nandi, symbolizing devotion and strength in Hindu tradition.",
      materials: "Bronze, stone base",
      dimensions: "Height: 7 ft, Width: 5 ft, Depth: 3 ft",
      credits: "Artist: FormForge Studios, Commissioned by Pune Heritage Society"
    }
  },
  { 
    src: "/carefree-seat-hyderabad-2022.webp", 
    alt: "The Carefree Seat Sculpture in Hyderabad, India, 2022", 
    caption: <>The Carefree Seat<br />(Hyderabad) IND, 2022</>,
    details: {
      heading: "The Carefree Seat",
      location: "Hyderabad, India, 2022",
      description: "A functional sculpture of a relaxed figure on a bench, inviting viewers to pause and embrace leisure.",
      materials: "Fiberglass, steel frame",
      dimensions: "Height: 6 ft, Width: 8 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Hyderabad Public Spaces"
    }
  },
  { 
    src: "/bloom-delhi-2021.webp", 
    alt: "Bloom Sculpture in Delhi, India, 2021", 
    caption: <>Bloom<br />(Delhi) IND, 2021</>,
    details: {
      heading: "Bloom",
      location: "Delhi, India, 2021",
      description: "An abstract floral form in mid-bloom, symbolizing growth, beauty, and the cycle of life.",
      materials: "Stainless steel, painted finish",
      dimensions: "Height: 9 ft, Width: 6 ft, Depth: 6 ft",
      credits: "Artist: FormForge Studios, Commissioned by Delhi Bloom Festival"
    }
  },
  { 
    src: "/reflective-pause-bangalore-2025.webp", 
    alt: "Reflective Pause Sculpture in Bangalore, India, 2025", 
    caption: <>Reflective Pause<br />(Bangalore) IND, 2025</>,
    details: {
      heading: "Reflective Pause",
      location: "Bangalore, India, 2025",
      description: "A contemplative figure in repose, encouraging moments of stillness and reflection in an urban setting.",
      materials: "Polished bronze, granite base",
      dimensions: "Height: 7 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Bangalore Urban Retreat"
    }
  },
  { 
    src: "/abstracta-delhi-2021.webp", 
    alt: "Abstracta Sculpture in Delhi, India, 2021", 
    caption: <>Abstracta<br />(Delhi), IND, 2021</>,
    details: {
      heading: "Abstracta",
      location: "Delhi, India, 2021",
      description: "A purely abstract form inviting multiple interpretations, celebrating the freedom of artistic expression.",
      materials: "Steel, acrylic panels",
      dimensions: "Height: 11 ft, Width: 5 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Delhi Modern Art Gallery"
    }
  },
  { 
    src: "/buddha-bangalore-2023.webp", 
    alt: "Buddha Sculpture in Bangalore, India, 2023", 
    caption: <>Buddha<br />(Bangalore) IND, 2023</>,
    details: {
      heading: "Buddha",
      location: "Bangalore, India, 2023",
      description: "A serene Buddha in meditation, radiating calm and enlightenment in a bustling cityscape.",
      materials: "Bronze, stone pedestal",
      dimensions: "Height: 8 ft, Width: 5 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Bangalore Peace Foundation"
    }
  },
  { 
    src: "/sleeping-lotus-delhi-2021.webp", 
    alt: "The Sleeping Lotus Sculpture in Delhi, India, 2021", 
    caption: <>The Sleeping Lotus<br />(Delhi) IND, 2021</>,
    details: {
      heading: "The Sleeping Lotus",
      location: "Delhi, India, 2021",
      description: "A closed lotus bud at rest, symbolizing potential and the beauty of quiet moments before blooming.",
      materials: "Aluminum, matte finish",
      dimensions: "Height: 6 ft, Width: 7 ft, Depth: 7 ft",
      credits: "Artist: FormForge Studios, Commissioned by Delhi Nature Society"
    }
  },
  { 
    src: "/raging-bull-goa-2024.webp", 
    alt: "Raging Bull Sculpture in Goa, India, 2024", 
    caption: <>Raging Bull<br />(Goa) IND, 2024</>,
    details: {
      heading: "Raging Bull",
      location: "Goa, India, 2024",
      description: "A powerful bull in mid-charge, embodying raw energy and untamed spirit against a coastal backdrop.",
      materials: "Bronze, steel reinforcement",
      dimensions: "Height: 8 ft, Width: 12 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Goa Art Collective"
    }
  },
  { 
    src: "/raging-stallions-chennai_2021.webp", 
    alt: "The Raging Stallions Sculpture in Chennai, India, 2021", 
    caption: <>The Raging Stallions<br />(Chennai) IND, 2021</>,
    details: {
      heading: "The Raging Stallions",
      location: "Chennai, India, 2021",
      description: "Dynamic and powerful, this sculpture captures the wild energy of stallions in motion, symbolizing strength and freedom.",
      materials: "Bronze, steel base",
      dimensions: "Height: 10 ft, Width: 14 ft, Depth: 6 ft",
      credits: "Artist: FormForge Studios, Commissioned by Chennai Sculpture Park"
    }
  },
  { 
    src: "/panthera-dubai-2020.webp", 
    alt: "Panthera Sculpture in Dubai, UAE, 2020", 
    caption: <>Panthera<br />DXB UAE, 2020</>,
    details: {
      heading: "Panthera",
      location: "Dubai, UAE, 2020",
      description: "A sleek panther poised for action, representing agility, power, and grace in a modern urban context.",
      materials: "Blackened steel, polished finish",
      dimensions: "Height: 5 ft, Width: 10 ft, Depth: 3 ft",
      credits: "Artist: FormForge Studios, Commissioned by Dubai Wildlife Fund"
    }
  },
  { 
    src: "/aphrodia-goa-2018.webp", 
    alt: "Aphrodia Sculpture in Goa, India, 2018", 
    caption: <>Aphrodia<br />(Goa) IND, 2018</>,
    details: {
      heading: "Aphrodia",
      location: "Goa, India, 2018",
      description: "Inspired by Aphrodite, this sculpture celebrates beauty and love with flowing, sensual forms.",
      materials: "Marble, bronze accents",
      dimensions: "Height: 7 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Goa Coastal Arts"
    }
  },
  { 
    src: "/geomorph-hyderabad-2023.webp", 
    alt: "Geomorph Sculpture in Hyderabad, India, 2023", 
    caption: <>Geomorph<br />(Hyderabad) IND, 2023</>,
    details: {
      heading: "Geomorph",
      location: "Hyderabad, India, 2023",
      description: "An abstract representation of geological forms, exploring the interplay between nature and time.",
      materials: "Steel, stone elements",
      dimensions: "Height: 10 ft, Width: 6 ft, Depth: 6 ft",
      credits: "Artist: FormForge Studios, Commissioned by Hyderabad Earth Project"
    }
  },
  { 
    src: "/ballerina-gurugram-2023.webp", 
    alt: "Ballerina Sculpture in Gurugram, India, 2023", 
    caption: <>Ballerina<br />(Gurugram) IND, 2023</>,
    details: {
      heading: "Ballerina",
      location: "Gurugram, India, 2023",
      description: "A graceful ballerina in mid-pose, capturing the elegance and discipline of dance in a modern setting.",
      materials: "Bronze, stainless steel base",
      dimensions: "Height: 8 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Gurugram Arts Society"
    }
  },
  { 
    src: "/sole-gaze-bangalore_2023.webp", 
    alt: "The Sole Gaze Sculpture in Bangalore, India, 2023", 
    caption: <>The Sole Gaze (Bangalore) IND, 2023</>,
    details: {
      heading: "The Sole Gaze",
      location: "Bangalore(IND), 2023",
      description: "An introspective figure gazing upward, symbolizing contemplation and the search for meaning in a fast-paced world.",
      materials: "Stainless steel, stone pedestal",
      dimensions: "Height: 8 ft, Width: 3 ft, Depth: 3 ft",
      credits: "Artist: FormForge Studios, Commissioned by Bangalore Art Initiative"
    }
  },
  { 
    src: "/solemn-mumbai-2021.webp", 
    alt: "Solemn contemporary sculpture in Mumbai, India, 2021", 
    caption: <>Solemn<br />(Mumbai) IND, 2021</>,
    details: {
      heading: "Solemn",
      location: "Mumbai, India, 2021",
      description: "A minimalist figure exuding quiet dignity, reflecting on the complexities of urban life.",
      materials: "Corten steel, matte finish",
      dimensions: "Height: 9 ft, Width: 3 ft, Depth: 3 ft",
      credits: "Artist: FormForge Studios, Commissioned by Mumbai Urban Gallery"
    }
  },
  { 
    src: "/a-quiet-gaze-oman-2024.webp", 
    alt: "A Quiet Gaze abstract sculpture in Oman, UAE, 2024", 
    caption: <>A Quiet Gaze<br />(Oman) UAE, 2024</>,
    details: {
      heading: "A Quiet Gaze",
      location: "Oman, UAE, 2024",
      description: "An abstract form with a gentle upward tilt, evoking serenity and introspection in a desert landscape.",
      materials: "Polished aluminum, sandstone base",
      dimensions: "Height: 7 ft, Width: 5 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Oman Art Collective"
    }
  },
  { 
    src: "/wing-sculpture-gurugram-2022.webp", 
    alt: "The Wing Sculpture modern metal installation in Gurugram, India, 2022", 
    caption: <>The Wing Sculpture<br />(Gurugram) IND, 2022</>,
    details: {
      heading: "The Wing Sculpture",
      location: "Gurugram, India, 2022",
      description: "A sleek, wing-like form soaring upward, symbolizing ambition and the freedom of flight.",
      materials: "Stainless steel, mirrored finish",
      dimensions: "Height: 12 ft, Width: 8 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Gurugram Skyline Project"
    }
  },
  { 
    src: "/dreaming-of-dharma-noida-2024.webp", 
    alt: "Dreaming Of Dharma spiritual sculpture in Noida, India, 2024", 
    caption: <>Dreaming Of Dharma<br />(Noida) IND, 2024</>,
    details: {
      heading: "Dreaming Of Dharma",
      location: "Noida, India, 2024",
      description: "A meditative form inspired by Buddhist principles, symbolizing harmony and spiritual awakening.",
      materials: "Bronze, gold leaf accents",
      dimensions: "Height: 8 ft, Width: 5 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Noida Spiritual Trust"
    }
  },
  { 
    src: "/skyward-bound-delhi-2024.webp", 
    alt: "Skyward Bound dynamic steel sculpture in Delhi, India, 2024", 
    caption: <>Skyward Bound<br />(Delhi) IND, 2024</>,
    details: {
      heading: "Skyward Bound",
      location: "Delhi, India, 2024",
      description: "A dynamic upward spiral, representing aspiration and the relentless pursuit of progress.",
      materials: "Steel, painted finish",
      dimensions: "Height: 15 ft, Width: 6 ft, Depth: 6 ft",
      credits: "Artist: FormForge Studios, Commissioned by Delhi Development Authority"
    }
  },
  { 
    src: "/seed-mumbai-2024.webp", 
    alt: "Seed nature-inspired art sculpture in Mumbai, India, 2024", 
    caption: <>Seed<br />(Mumbai) IND, 2024</>,
    details: {
      heading: "Seed",
      location: "Mumbai, India, 2024",
      description: "A simple yet profound seed form, symbolizing potential, growth, and the origins of life.",
      materials: "Bronze, stone base",
      dimensions: "Height: 6 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Mumbai Green Initiative"
    }
  },
  { 
    src: "/raging-bull-goa_2024.webp", 
    alt: "Raging Bull powerful metal sculpture in Goa, India, 2024", 
    caption: <>Raging Bull<br />(Goa) IND, 2024</>,
    details: {
      heading: "Raging Bull",
      location: "Goa, India, 2024",
      description: "A powerful bull in mid-charge, embodying raw energy and untamed spirit against a coastal backdrop.",
      materials: "Bronze, steel reinforcement",
      dimensions: "Height: 8 ft, Width: 12 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Goa Art Collective"
    }
  },
  { 
    src: "/ganapati-dxb-uae-2024.webp", 
    alt: "Ganapati Hindu deity sculpture in DXB, UAE, 2024", 
    caption: <>Ganapati<br />DXB UAE, 2024</>,
    details: {
      heading: "Ganapati",
      location: "Dubai, UAE, 2024",
      description: "A modern rendition of Lord Ganesha, blending tradition with innovation to honor wisdom and success.",
      materials: "Bronze, gold plating",
      dimensions: "Height: 10 ft, Width: 6 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Dubai Cultural Forum"
    }
  }
];

// Add details to each image object in the IMAGES array
IMAGES.forEach(image => {
  if (!image.details) {
    // Extract location and year from caption
    const captionText = image.caption.props.children;
    const title = captionText[0];
    const locationInfo = captionText[2];
    
    // Create default details if not provided
    image.details = {
      heading: title,
      location: locationInfo,
      description: `A stunning sculpture that captures the essence of contemporary art through innovative design and masterful craftsmanship. This piece invites viewers to reflect on the relationship between form, space, and meaning.`,
      materials: "Mixed metals, primarily Corten steel with weather-resistant finish",
      dimensions: "Dimensions vary based on installation requirements",
      credits: "Artist: FormForge Studios"
    };
  }
});

// Prepare the data format for react-image-gallery.
const GALLERY_IMAGES = IMAGES.map((image) => ({
  original: image.src,
  thumbnail: image.src,
  originalAlt: image.alt,
  description: image.caption,
}));

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // Handlers for opening and closing the modal
  const openImage = (index: number) => {
    setSelectedIndex(index);
    setShowDetails(true);
  };
  
  const closeModal = () => {
    setSelectedIndex(null);
    setShowDetails(false);
  };

  const backToGallery = () => {
    setSelectedIndex(null); 
    setShowDetails(false);
  };

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      {/* SEO Metadata with react-helmet */}
      <Helmet>
        <title>FormForge | Gallery of Luxury Sculptures</title>
        <meta name="description" content="Explore the FormForge gallery featuring luxury Corten steel sculptures, bespoke metal art, and public installations from India and UAE." />
        <meta name="keywords" content="Corten Steel Sculptures, Luxury Metal Art, Public Art Installations, FormForge Gallery, Custom Sculptures, India, UAE" />
        <meta property="og:title" content="FormForge | Gallery of Luxury Sculptures" />
        <meta property="og:description" content="View our collection of luxury Corten steel sculptures and bespoke metal art installations across India and UAE." />
        <meta property="og:image" content="https://formforge.com/twin-spirits-chennai-2023.webp" />
        <meta property="og:url" content="https://formforge.com/gallery" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FormForge | Gallery of Luxury Sculptures" />
        <meta name="twitter:description" content="View our collection of luxury Corten steel sculptures and bespoke metal art installations across India and UAE." />
        <meta name="twitter:image" content="https://formforge.com/twin-spirits-chennai-2023.webp" />
        <link rel="canonical" href="https://formforge.com/gallery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "FormForge Gallery",
            "url": "https://formforge.com/gallery",
            "description": "A gallery showcasing luxury Corten steel sculptures and bespoke metal art installations by FormForge across India and UAE.",
            "publisher": {
              "@type": "Organization",
              "name": "FormForge",
              "url": "https://formforge.com/",
              "logo": "https://formforge.com/logo.webp"
            },
            "hasPart": IMAGES.map((image) => ({
              "@type": "VisualArtwork",
              "name": image.caption.props.children[0], 
              "image": `https://formforge.com${image.src}`,
              "description": image.alt,
              "contentLocation": {
                "@type": "Place",
                "name": image.caption.props.children[2]
              }
            })),
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919650020485",
              "contactType": "Customer Support",
              "areaServed": "Worldwide",
              "availableLanguage": ["English"]
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-10xl flex flex-col items-center justify-center mx-auto">
        <Navbar />

        {selectedIndex !== null && showDetails ? (
        <div className="container mx-auto  max-w-6xl">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={backToGallery} 
            className="mb-8 flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Gallery
          </Button>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Artwork Main Image */}
            <div className="landscape-view p-4 md:p-8 bg-gray-50">
              <img
                src={IMAGES[selectedIndex].src}
                alt={IMAGES[selectedIndex].alt}
                className="mx-auto object-contain max-h-[65vh] w-auto"
              />
            </div>
            
           {/* Artwork Details */}
      <div className="p-6 md:p-8 space-y-6">
        {/* Header - Title and Location on same line, centered */}
        <div className="border-b pb-4 flex justify-center">
          <div className="flex flex-wrap items-baseline gap-2 text-center">
            <h2 
              className="text-2xl md:text-3xl font-semibold"
              style={{
                fontFamily: "Montserrat",
                letterSpacing: ".06em",
              }}
            >
              {IMAGES[selectedIndex].details.heading}
            </h2>
            <p 
              className="text-black-600 md:text-3xl"
              style={{
                fontFamily: "Montserrat, Poppins, sans-serif",
                color: "rgb(8, 7, 7)",
              }}
            >
              {IMAGES[selectedIndex].details.location}
            </p>
          </div>
        </div>
                
                {/* Description */}
                <div>
                  <h3 
                    className="text-xl  mb-3"
                    style={{
                      fontFamily: "Montserrat",
                      letterSpacing: ".06em",
                    }}
                  >
                    Description
                  </h3>
                  <div 
                    className="prose max-w-none"
                    style={{
                      fontFamily: "Montserrat, Poppins, sans-serif",
                      lineHeight: "1.6em",
                      color: "rgb(87, 87, 87)",
                    }}
                  >
                    <p>{IMAGES[selectedIndex].details.description}</p>
                  </div>
                </div>
                
                {/* Materials and Dimensions */}
                {IMAGES[selectedIndex].details.materials && (
                  <div>
                    <h3 
                      className="text-xl  mb-3"
                      style={{
                        fontFamily: "Montserrat",
                        letterSpacing: ".06em",
                      }}
                    >
                      Materials and Size
                    </h3>
                    <p 
                      className="text-gray-700"
                      style={{
                        fontFamily: "Montserrat, Poppins, sans-serif",
                        lineHeight: "1.6em",
                        color: "rgb(87, 87, 87)",
                      }}
                    >
                      {IMAGES[selectedIndex].details.materials}
                    </p>
                    {IMAGES[selectedIndex].details.dimensions && (
                      <p 
                        className="text-gray-700 mt-2"
                        style={{
                          fontFamily: "Montserrat, Poppins, sans-serif",
                          lineHeight: "1.6em",
                          color: "rgb(87, 87, 87)",
                        }}
                      >
                        {IMAGES[selectedIndex].details.dimensions}
                      </p>
                    )}
                  </div>
                )}
                
                {/* Credits */}
                {IMAGES[selectedIndex].details.credits && (
                  <div>
                    <h3 
                      className="text-xl  mb-3"
                      style={{
                        fontFamily: "Montserrat",
                        letterSpacing: ".06em",
                      }}
                    >
                      Credits
                    </h3>
                    <p 
                      className="text-gray-700"
                      style={{
                        fontFamily: "Montserrat, Poppins, sans-serif",
                        lineHeight: "1.6em",
                        color: "rgb(87, 87, 87)",
                      }}
                    >
                      {IMAGES[selectedIndex].details.credits}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Grid for images */
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 w-full">
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
                    <span 
                      className="text-white text-sm md:text-lg font-medium px-2 text-center"
                      style={{
                        fontFamily: "Montserrat, Poppins, sans-serif",
                      }}
                    >
                      {image.caption}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;