export interface SculptureDetails {
  type: string;
  signature: string;
  authenticity: string;
  medium: string;
  dimensions: string;
  display: string;
  tags: string[];
}

export interface Sculpture {
  id: number;
  title: string;
  images: string[];
  description: string;
  details: SculptureDetails;
  status: "Readily Available" | "Sold Out" | "";
  price: string; // Added price field
}

export const sculptures: Sculpture[] = [
  {
    id: 1,
    title: "Buddha sculpture",
    images: ["/buddha-bangalore-2023.webp"],
    description: "An exquisite piece of art crafted with precision.",
    details: {
      type: "Unique work",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Corten steel",
      dimensions: "45 x 45 x 5 cm",
      display: "Indoor/Outdoor",
      tags: ["Wall sculpture", "Abstract art", "Grey", "Sky blue"],
    },
    status: "Readily Available",
    price: "₹1,50,000",
  },
  {
    id: 2,
    title: "Carefree Seat",
    images: ["/Arts/carefree-seat-hyderabad.webp", "/Arts/carefree-seat.webp"],
    description: "A harmonious blend of form and function.",
    details: {
      type: "Limited edition",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Stainless steel",
      dimensions: "120 x 60 x 45 cm",
      display: "Indoor/Outdoor",
      tags: ["Seating", "Modern art", "Silver"],
    },
    status: "Sold Out",
    price: "₹1,75,000",
  },
  {
    id: 3,
    title: "Cactilome",
    images: ["/Arts/555.webp"],
    description: "A powerful representation of untamed energy and motion.",
    details: {
      type: "Unique work",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Stainless steel",
      dimensions: "180 x 120 x 60 cm",
      display: "Outdoor",
      tags: ["Animal sculpture", "Dynamic art", "Silver"],
    },
    status: "Readily Available",
    price: "₹1,90,000",
  },
  {
    id: 4,
    title: "Ganapati",
    images: ["/ganapati-dxb-uae-2024.webp", "/Arts/Ganeshji-Project.webp", "/Arts/Ganeshji.webp"],
    description: "A serene interpretation of nature's perfect geometry.",
    details: {
      type: "Limited edition",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Corten steel",
      dimensions: "90 x 90 x 45 cm",
      display: "Indoor/Outdoor",
      tags: ["Floral sculpture", "Contemporary art", "Bronze"],
    },
    status: "",
    price: "₹1,65,000", // Corrected price to be a non-empty string
  },
  {
    id: 5,
    title: "Rhino",
    images: ["/Arts/Rhino-sculpture.webp"],
    description: "A peaceful representation of inner tranquility.",
    details: {
      type: "Unique work",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Bronze",
      dimensions: "150 x 75 x 75 cm",
      display: "Indoor/Outdoor",
      tags: ["Figurative sculpture", "Spiritual art", "Bronze"],
    },
    status: "Sold Out",
    price: "₹2,00,000",
  },
  {
    id: 6,
    title: "Thinking Figure",
    images: ["/Arts/thinking_figure.webp"],
    description: "A contemporary interpretation of spiritual enlightenment.",
    details: {
      type: "Limited edition",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Stainless steel",
      dimensions: "200 x 100 x 60 cm",
      display: "Indoor/Outdoor",
      tags: ["Religious art", "Contemporary sculpture", "Silver"],
    },
    status: "",
    price: "₹1,85,000", // Corrected price to be a non-empty string
  },
  {
    id: 7,
    title: "Shivji",
    images: ["/Arts/metal-shivji.webp"],
    description: "A modern take on the timeless symbol of purity.",
    details: {
      type: "Unique work",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Stainless steel",
      dimensions: "100 x 100 x 50 cm",
      display: "Indoor/Outdoor",
      tags: ["Floral art", "Modern sculpture", "Silver"],
    },
    status: "Readily Available",
    price: "₹1,70,000",
  },
  {
    id: 8,
    title: "Corten Steel Swans",
    images: ["/Arts/Corten-Steel-swans.webp"],
    description: "A powerful symbol of strength and determination.",
    details: {
      type: "Limited edition",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Corten steel",
      dimensions: "160 x 80 x 60 cm",
      display: "Outdoor",
      tags: ["Animal sculpture", "Contemporary art", "Rust"],
    },
    status: "",
    price: "₹ 1,80,000", // Corrected price to be a non-empty string
  },
  {
    id: 9,
    title: "Corten Steel Bull",
    images: ["/Arts/Stainless-steel-bull.webp"],
    description: "An elegant representation of human form in motion.",
    details: {
      type: "Unique work",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Stainless steel",
      dimensions: "180 x 60 x 40 cm",
      display: "Indoor/Outdoor",
      tags: ["Figurative art", "Modern sculpture", "Silver"],
    },
    status: "Sold Out",
    price: "₹1,95,000",
  },
  {
    id: 10,
    title: "Sitting Lady",
    images: ["/Arts/sitting_lady_figure.webp"],
    description: "A striking geometric composition for contemporary spaces.",
    details: {
      type: "Limited edition",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Mixed metals",
      dimensions: "120 x 180 x 10 cm",
      display: "Indoor",
      tags: ["Wall sculpture", "Abstract art", "Mixed metals"],
    },
    status: "",
    price: "₹ 1,60,000", // Corrected price to be a non-empty string
  },
];