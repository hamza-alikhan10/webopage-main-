export interface SculptureDetails {
  type: string;
  signature: string;
  authenticity: string;
  medium: string;
  dimensions: string;
  display: string;
  integratedLighting: boolean; // New field for integrated lighting
  tags: string[];
}

export interface Sculpture {
  id: string;
  title: string;
  images: string[];
  description: string;
  details: SculptureDetails;
  status: "Readily Available" | "Sold Out" | "Made to Order" | "Available" | "";
  price: string;
}

export const sculptures: Sculpture[] = [
  // Original sculptures from first dataset
    {
      "id": "Buddha-sculpture",
      "title": "Buddha Sculpture",
      "images": ["/buddha-bangalore-2023.webp"],
      "description": "Buddha idol radiating serene elegance and mindful presence.",
      "details": {
        "type": "Divine Idol",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 4ft.4in. | W 3ft.4in.",
        "display": "Indoor/Outdoor",
        "integratedLighting": true,
        "tags": ["corten steel Buddha", "divine idol sculpture", "garden statue", "Buddha artwork"]
      },
      "status": "Sold Out",
      "price": "₹4,00,000"
    },
    {
      "id": "metal-cactus",
      "title": "Cactilome",
      "images": ["/Arts/555.webp"],
      "description": "Bold cactus sculpture infuses modern landscapes with desert energy.",
      "details": {
        "type": "Landscape Accent",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": " H 5ft",
        "display": "Outdoor",
        "integratedLighting": true,
        "tags": ["corten steel cactus", "garden sculpture", "desert art", "landscape accent"]
      },
      "status": "Readily Available",
      "price": "₹2,00,000"
    },
    {
      "id": "metal-figure",
      "title": "Carefree Seat",
      "images": ["/Arts/carefree-seat-hyderabad.webp", "/Arts/carefree-seat.webp"],
      "description": "Ergonomic seating figure merging sculpture with functional design.",
      "details": {
        "type": "Landscape Accent",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 4ft.2in.",
        "display": "Indoor/Outdoor",
        "integratedLighting": true,
        "tags": ["corten steel seat", "figurative bench", "functional sculpture", "garden art"]
      },
      "status": "Sold Out",
      "price": "₹1,50,000"
    },
    {
      "id": "metal-ganapati",
      "title": "Ganapati",
      "images": ["/ganapati-dxb-uae-2024.webp", "/Arts/Ganeshji-Project.webp", "/Arts/Ganeshji.webp"],
      "description": "Inspired by earth shaped by devotion, this Ganapati channels divine grace.",
      "details": {
        "type": "Limited edition",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 3ft",
        "display": "Indoor/Outdoor",
        "integratedLighting": false,
        "tags": ["corten steel Ganesha", "Ganapati sculpture", "spiritual idol", "divine art"]
      },
      "status": "Sold Out",
      "price": "₹3,25,000"
    },
    {
      "id": "metal-Buddha",
      "title": "Dreaming of Dharma",
      "images": ["/dreaming-of-dharma-noida-2024.webp", "/Arts/buddha-close.webp", "/Arts/Gautam-Buddhaa.webp", "/Arts/b08.webp"],
      "description": "Layered Invisible Buddha radiates tranquil mindfulness for contemporary settings.",
      "details": {
        "type": "Invisible Art",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Stainless Steel",
        "dimensions": "H 6ft5in. | W 4ft | D 5ft",
        "display": "Outdoor",
        "integratedLighting": true,
        "tags": ["wood brass Buddha", "layered sculpture", "abstract dharma art", "large Buddha"]
      },
      "status": "Readily Available",
      "price": "₹28,00,000"
    },
    {
      "id": "metal-rhino",
      "title": "Rhino",
      "images": ["/Arts/Rhino-sculpture.webp"],
      "description": "Corten-steel rhino captures raw strength in peaceful repose.",
      "details": {
        "type": "Unique work",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "W 3ft.2in.",
        "display": "Indoor/Outdoor",
        "integratedLighting": false,
        "tags": ["corten steel rhino", "wildlife sculpture", "animal art", "garden centrepiece"]
      },
      "status": "Readily Available",
      "price": "₹1,75,000"
    },
    {
      "id": "metal-man",
      "title": "Leaning Man",
      "images": ["/leaning-man-hyderabad-2023.webp"],
      "description": "Minimalist corten-steel figure embodies steadfast spirit with modern poise.",
      "details": {
        "type": "Limited edition",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 6ft",
        "display": "Indoor/Outdoor",
        "integratedLighting": true,
        "tags": ["corten steel figure", "leaning man sculpture", "modern figurative art", "limited edition"]
      },
      "status": "Sold Out",
      "price": "₹5,00,000"
    },
    {
      "id": "Paw table",
      "title": "Paw Table",
      "images": ["/Arts/console-table.webp", "/Arts/console-table-art.webp"],
      "description": "Blends sculptural flair with everyday function.",
      "details": {
        "type": "Bespoke Furniture",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Stainless steel",
        "dimensions": "H 35in. | W 54in. | D 14in.",
        "display": "Indoor",
        "integratedLighting": false,
        "tags": ["paw console table", "stainless steel furniture", "sculptural table", "designer console"]
      },
      "status": "Readily Available",
      "price": "₹1,00,000"
    },
    {
      "id": "metal-thinking-figure",
      "title": "Thinking Figure",
      "images": ["/Arts/thinking_figure.webp"],
      "description": "Tall corten-steel female figure conveys contemplative balance and grace.",
      "details": {
        "type": "Abstract Art",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 6ft.6in.",
        "display": "Indoor/Outdoor",
        "integratedLighting": true,
        "tags": ["corten steel woman", "thinking sculpture", "abstract figure", "figurative art"]
      },
      "status": "Sold Out",
      "price": "₹2,25,000"
    },
    {
      "id": "metal-fish",
      "title": "Ocean Voyager",
      "images": ["/Arts/fish-sculpture.webp"],
      "description": "Sweeping corten-steel fish embodies oceanic journey and sculptural energy.",
      "details": {
        "type": "Limited edition",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 7ft",
        "display": "Indoor/Outdoor",
        "integratedLighting": false,
        "tags": ["corten steel fish", "marine sculpture", "outdoor art", "large garden piece"]
      },
      "status": "Readily Available",
      "price": "₹5,00,000"
    },
    {
      "id": "metal-Shivaji",
      "title": "Shivaji",
      "images": ["/Arts/metal-shivji.webp"],
      "description": "Contemporary corten-steel Shiva idol unites tradition.",
      "details": {
        "type": "Limited edition",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 5ft.6in. | W 3ft",
        "display": "Indoor/Outdoor",
        "integratedLighting": true,
        "tags": ["corten steel Shiva", "Shivji sculpture", "divine idol", "spiritual art"]
      },
      "status": "Sold Out",
      "price": "₹5,00,000"
    },
    {
      "id": "metal-garden-sculpture",
      "title": "Bonsai",
      "images": ["/bonsai-delhi-2024.webp", "/Arts/Bonsai-Delhi.webp"],
      "description": "Stainless-steel bonsai tree creates a zen focal point for outdoor spaces.",
      "details": {
        "type": "Abstract Art",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Stainless steel",
        "dimensions": "H 8ft6in. | W 3ft6in.",
        "display": "Outdoor",
        "integratedLighting": true,
        "tags": ["corten steel bonsai", "garden sculpture", "landscape accent", "zen art"]
      },
      "status": "Readily Available",
      "price": "₹1,00,000"
    },
    {
      "id": "Lap chair",
      "title": "Lap Chair",
      "images": ["/Arts/Paw-seat.webp", "/Arts/paw-seat-.webp"],
      "description": "Curved stainless-steel lap chair delivers artful seating and standout style.",
      "details": {
        "type": "Bespoke Furniture",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Stainless steel",
        "dimensions": "H 37in. | D 45in.",
        "display": "Indoor",
        "integratedLighting": false,
        "tags": ["stainless steel chair", "sculptural seat", "designer furniture", "modern lap chair"]
      },
      "status": "Readily Available",
      "price": "₹1,00,000"
    },
    {
      "id": "metal-wing",
      "title": "Winged Form",
      "images": ["/Arts/winged-form.webp"],
      "description": "Vertical corten-steel wing evokes ascent and transformative energy.",
      "details": {
        "type": "Abstract Art",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 8ft2in. | W 6ft6in.",
        "display": "Outdoor",
        "integratedLighting": false,
        "tags": ["corten steel wing", "abstract flight art", "outdoor sculpture", "modern landmark"]
      },
      "status": "Readily Available",
      "price": "₹1,00,000"
    },
   
   
    {
      "id": "Cabinet-art",
      "title": "Glitch Cabinet",
      "images": ["/Arts/Cabinet-art.webp", "/Arts/Cabinet_Art.webp"],
      "description": "Wood-and-brass glitch cabinet transforms storage into collectible art.",
      "details": {
        "type": "Bespoke Furniture",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Wood & Brass",
        "dimensions": "H 74in. | W 39in.",
        "display": "Indoor",
        "integratedLighting": true,
        "tags": ["glitch cabinet", "art furniture", "wood brass storage", "contemporary design"]
      },
      "status": "Readily Available",
      "price": "₹2,00,000"
    },
    {
      "id": "Metal-tortoise",
      "title": "Turquil Essence",
      "images": ["/Arts/metal-tortoise-front.webp", "/Arts/metal_tortoise.webp", "/Arts/metal-tortoise.webp"],
      "description": "Corten-steel tortoise sculpture infuses playful charm into garden settings.",
      "details": {
        "type": "Abstract Art",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel & Stainless Steel",
        "dimensions": "H 23.4in | W 34in",
        "display": "Outdoor",
        "integratedLighting": true,
        "tags": ["corten steel tortoise", "animal garden art", "outdoor sculpture", "decorative tortoise"]
      },
      "status": "Readily Available",
      "price": "₹1,00,000"
    },
    {
      "id": "wood-Tapestry",
      "title": "Tapestry of Dreams",
      "images": ["/Arts/tapestry.webp", "/Arts/wood-art.jpeg"],
      "description": "Wall tapestry unites rich wood grain with sculptural depths.",
      "details": {
        "type": "Wall Art",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Wood",
        "dimensions": "H 27in. | W 77in.",
        "display": "Indoor",
        "integratedLighting": false,
        "tags": ["wood wall art", "sculptural tapestry", "abstract wall panel", "indoor statement"]
      },
      "status": "Readily Available",
      "price": "₹1,00,000"
    },
    {
      "id": "metal-horn-man",
      "title": "Horn Man",
      "images": ["/Arts/metal-horn-man.webp", "/Arts/horn-man.webp"],
      "description": "Corten-steel horned figure channels primal energy in monumental form.",
      "details": {
        "type": "Abstract Art",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 8ft | W 3ft",
        "display": "Indoor/Outdoor",
        "integratedLighting": false,
        "tags": ["corten steel figure", "horned sculpture", "large indoor art", "primal energy"]
      },
      "status": "Readily Available",
      "price": "₹4,00,000"
    },
    {
      "id": "metal-horse",
      "title": "Gilded Stallion",
      "images": ["/Arts/metal-horse.webp", "/Arts/metal_horse.webp"],
      "description": "Ultra-marine stainless Steel Stallion sculpture embodies motion and luxury.",
      "details": {
        "type": "Abstract Art",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Stainless steel",
        "dimensions": "H 7ft",
        "display": "Indoor/Outdoor",
        "integratedLighting": true,
        "tags": ["stainless steel horse", "stallion sculpture", "luxury art", "equine figure"]
      },
      "status": "Readily Available",
      "price": "₹6,00,000"
    },
    {
      "id": "metal-sitting-fig",
      "title": "Sitting Figure",
      "images": ["/Arts/sitting-figure.webp"],
      "description": "Corten-steel sitting figure invites reflective pause in public or private spaces.",
      "details": {
        "type": "Abstract Art",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 5ft | W 2ft",
        "display": "Outdoor",
        "integratedLighting": true,
        "tags": ["corten steel figure", "sitting sculpture", "outdoor art", "modern minimalism"]
      },
      "status": "Readily Available",
      "price": "₹1,00,000"
    },
    {
      "id": "metal-wall-art",
      "title": "Floating Bubbles ",
      "images": ["/Arts/10999.png"],
      "description": "Brass-finished stainless bubble cluster glows with fluid modern elegance.",
      "details": {
        "type": "Wall Art",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Stainless steel with brass finish",
        "dimensions": "H 4ft5in. | W 3ft",
        "display": "Indoor",
        "integratedLighting": false,
        "tags": ["brass wall art", "bubble sculpture", "stainless decor", "statement wall"]
      },
      "status": "Readily Available",
      "price": "₹1,00,000"
    },
    {
      "id": "metal-birds",
      "title": "Flamingos",
      "images": ["/Arts/Corten-Steel-swans.webp"],
      "description": "Graceful corten-steel flamingos bring poetic symmetry to garden waterscapes.",
      "details": {
        "type": "Landscape Accent",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 5ft.4in.",
        "display": "Outdoor",
        "integratedLighting": true,
        "tags": ["corten steel flamingos", "bird sculpture", "garden accent", "landscape art"]
      },
      "status": "Sold Out",
      "price": "₹3,00,000"
    },
    {
      "id": "metal-bull",
      "title": "Toro Inverso",
      "images": ["/Arts/bull.webp", "/Arts/Stainless-steel-bull.webp"],
      "description": "Dynamic stainless-steel bull captures power mid-charge for dramatic impact.",
      "details": {
        "type": "Limited edition",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Stainless steel",
        "dimensions": "H 6ft | W 4ft | D 3ft.8in.",
        "display": "Indoor/Outdoor",
        "integratedLighting": true,
        "tags": ["stainless steel bull", "animal sculpture", "modern art", "statement piece"]
      },
      "status": "Readily Available",
      "price": "₹1,95,000"
    },
    {
      "id": "metal-mermaid",
      "title": "Mermaid",
      "images": ["/Arts/sitting_lady_figure.webp"],
      "description": "Corten-steel mermaid sculpture pays contemporary tribute to sea mythology.",
      "details": {
        "type": "Abstract Art",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Corten steel",
        "dimensions": "H 5ft",
        "display": "Outdoor",
        "integratedLighting": true,
        "tags": ["corten steel mermaid", "aquatic art", "outdoor sculpture", "mythical figure"]
      },
      "status": "Sold Out",
      "price": "₹1,00,000"
    },
    {
      "id": "metal-face",
      "title": "Oronoir",
      "images": ["/Arts/metal-face.webp", "/Arts/metal_face.webp"],
      "description": "Oversized stainless-steel face sculpture fuses abstraction with polished reflection.",
      "details": {
        "type": "Wall Sculpture",
        "signature": "Hand-signed by artist",
        "authenticity": "Sold with certificate of Authenticity",
        "medium": "Stainless steel",
        "dimensions": "H 82in. | W 70in.",
        "display": "Outdoor",
        "integratedLighting": false,
        "tags": ["stainless steel face", "modern wall sculpture", "abstract portrait", "outdoor statement"]
      },
      "status": "Readily Available",
      "price": "₹1,00,000"
    }
];