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
  // FIX: Added "Made to Order" to the union type for status
  status: "Readily Available" | "Sold Out" | "Made to Order" | "";
  price: string; // Added price field
}

export const sculptures: Sculpture[] = [
  {
    id: 1,
    title: "Buddha sculpture",
    images: ["/buddha-bangalore-2023.webp"],
    description: "An exquisite piece of art crafted with precision.",
    details: {
      type: "Divine Idol",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Corten steel",
      dimensions: "H-4ft.4in. x W-3ft.4in. x D-1ft.7in. ",
      display: "Indoor/Outdoor",
      // FIX: Closed the unterminated string literal and removed the trailing comma
      tags: ["Idol Sculpture", "Buddha Sculpture"],
    },
    status: "",
    price: "₹3,00,000",
  },
  {
    id: 2,
    title: "Carefree Seat",
    images: ["/Arts/carefree-seat-hyderabad.webp", "/Arts/carefree-seat.webp"],
    description: "A harmonious blend of form and function.",
    details: {
      type: "Landscape Accent",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Stainless steel",
      dimensions: "H-4ft.2in.",
      display: "Indoor/Outdoor",
      tags: ["Seating figure", "Figurative Art", "Silver"],
    },
    status: "Sold Out",
    price: "₹1,50,000",
  },
  {
    id: 3,
    title: "Cactilome",
    images: ["/Arts/555.webp"],
    description: "A powerful representation of untamed energy and motion.",
    details: {
      type: "Landscape Accent",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Corten Steel",
      // FIX: Combined the dimensions into a single string.
      // If you need two separate dimensions, consider changing `dimensions` to `string[]` in the interface.
      dimensions: "H-7ft.5in. | H-5ft",
      display: "Outdoor",
      tags: ["Cactus", "Dynamic art", "Desert Sculpture", "Landcsape Sculpture"],
    },
    status: "Readily Available",
    price: "₹2,00,000",
  },
  {
    id: 4,
    title: "Ganapati",
    images: ["/ganapati-dxb-uae-2024.webp", "/Arts/Ganeshji-Project.webp", "/Arts/Ganeshji.webp"],
    description: "Inspired by earth shaped by Devotion. This Ganaapti sculpture channels divine grace.",
    details: {
      type: "Limited edition",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Corten steel",
      dimensions: "H-3ft",
      display: "Indoor/Outdoor",
      tags: ["Idol sculpture", "Ganapati Sculpture", "Divine Sculpture", "Ganesha"],
    },
    status: "",
    price: "₹3,25,000", // Corrected price to be a non-empty string
  },
  {
    id: 5,
    title: "Rhino",
    images: ["/Arts/Rhino-sculpture.webp"],
    description: "A powerfull creature rendered in repose.",
    details: {
      type: "Unique work",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Corten Steel",
      dimensions: "W-3ft.2in.",
      display: "Indoor/Outdoor",
      tags: ["Figurative sculpture", "Rhino Sculpture", "Abstract Art", "Statement Piece"],
    },
    status: "Readily Available",
    price: "₹1,75,000",
  },
  {
    id: 6,
    title: "Thinking Figure",
    images: ["/Arts/thinking_figure.webp"],
    description: "A she rests in thought , a quiet symbol of balance between mind and spirit.",
    details: {
      type: "Abstract Art",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Corten steel",
      dimensions: "H-6ft.6in",
      display: "Indoor/Outdoor",
      tags: ["Abstract Art", "Contemporary sculpture", "Figurative sculpture", "female standing figure"],
    },
    status: "",
    price: "₹2,25,000",
  },
  {
    id: 7,
    title: "Shivji",
    images: ["/Arts/metal-shivji.webp"],
    description: "A contemporary interpretation of shivaji's unwavering spirit , simplified in form, profound in meaning. ",
    details: {
      type: "Limited edition",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Corten steel",
      dimensions: "H-5ft.6in. | W-3ft",
      display: "Indoor/Outdoor",
      tags: ["Idol sculpture", "Ganapati Sculpture", "Divine Sculpture"],
    },
    status: "Made to Order",
    price: "₹5,00,000",
  },
  {
    id: 8,
    title: "Flamingos",
    images: ["/Arts/Corten-Steel-swans.webp"],
    description: "A delicate duet in stillness.",
    details: {
      type: "Landscape Accent",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Stainless steel",
      dimensions: "H-5ft.4in.",
      display: "Outdoor",
      tags: ["Animal sculpture", "Contemporary art", "Flamingo Sculpture"],
    },
    status: "",
    price: "₹ 3,00,000", // Corrected price to be a non-empty string
  },
  {
    id: 9,
    title: "Toro Inverso",
    images: ["/Arts/Stainless-steel-bull.webp"],
    description: "A force captured mid-charge.",
    details: {
      type: "Limited edition",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Stainless steel",
      dimensions: "H-6ft | W-4ft | D-3ft.8in.",
      display: "Indoor/Outdoor",
      tags: ["Figurative art", "Modern sculpture", "Silver"],
    },
    status: "Sold Out",
    price: "₹1,95,000",
  },
  {
    id: 10,
    title: "Mermaid",
    images: ["/Arts/sitting_lady_figure.webp"],
    description: "A modern ode to the see spirit.",
    details: {
      type: "Abstract Art",
      signature: "Hand-signed by artist",
      authenticity: "Sold with certificate of Authenticity",
      medium: "Sculpture: Corten Steel",
      dimensions: "H-3ft. 6in. ",
      display: "Outdoor",
      tags: ["Wall sculpture", "Mermaid sculpture", "water sculpture"],
    },
    status: "",
    price: "₹ 1,00,000", // Corrected price to be a non-empty string
  },
];