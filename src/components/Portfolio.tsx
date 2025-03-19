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
  details: string;
  credits?: string;
} 

//  Define the images outside the component to avoid recreating them on every render.
const IMAGES = [
  { 
    src: "/twin-spirits-chennai-2023.webp", 
    alt: "Twin Spirits Sculpture in Chennai, India, 2023", 
    caption: <>Twin Spirits </>,
    details: {
      heading: "T W I N Spirits",
      location: "",
      description: "Twin Spirits explores the duality of human existence through contrasting yet complementary forms. The sculpture represents the harmony between opposing forces in nature and within ourselves.",
      details: "dont knw",
      credits: <>dnt knw</>
    }
  },
  { 
    src: "/metamorphosis-muse-hyderabad-2025.webp", 
    alt: "The Metamorphosis Muse Sculpture in Hyderabad, India, 2025", 
    caption: <>The Metamorphosis Muse</>,
    details: {
      heading: "The Metamorphosis Muse",
      location: "",
      description: <>A divine embodiment of transformation, radiates grace and power, adorned with golden butterflies that symbolize rebirth and evolution. Capturing the essence of a goddess, the sculpture stands as a tribute to beauty, strength, and the ever-unfolding journey of change. Seen here with the stunning <b><u><a href="https://www.mashindia.com/" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }}>Shalini Passi</a></u></b>, it exudes an ethereal presence, where art and divinity intertwine in a timeless celebration of allure.</>,
      details: <>Stainless steel with a satin brass finish.<br />Height: 1800mm | Width: 690mm</>,
      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Hyderabad Design District <br /> Photography: HT City</>
    }
  },
  { 
    src: "/vighnaharta-mumbai-2022.webp", 
    alt: "Vighnaharta Sculpture in Mumbai, India, 2022", 
    caption: <>Vighnaharta</>,
    details: {
      heading: "V I G H N A H A R T A",
      location: "",
      description: <>Inspired by <b>Lord Ganesha</b>, the remover of obstacles. <br />  Merging traditional symbolism with contemporary design, it embodies prosperity, wisdom, and strength. <br /> While its refined metallic sheen enhances depth and elegance. <br /> Designed to be a striking focal point, it seamlessly integrates spiritual essence with modern artistry.</>,
      details: <>Material: Bronze, stone base <br /> Height: 10 ft | Width: 6 ft | Depth: 4 ft</>,
      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Hyderabad Design District <br /> Photography: HT City</>
    }
  },
  { 
    src: "/david-casamia-uae-2021.webp", 
    alt: "David Sculpture at Casamia, UAE, 2021", 
    caption: <>David</>,
    details: {
      heading: "D A V I D",
      location: " ",
      description: <>An abstract reinterpretation of Michelangelo's David redefines classical artistry with a bold, modern twist, merging timeless form with contemporary expression.  <br />    Sculpted in stainless steel with an astonishing antique brass finish, its asymmetrical metal plates create a striking interplay of light and form. The sculpture has been installed in Dubai, at <b>Palm Jumeirah</b>. <br /> This backlit masterpiece, ideal for both indoor and outdoor settings, embodies strength, defiance, and timeless elegance.</>,
      details: <>Stainless Steel 316 with a brushed antique brass finish. <br /> Size: 1800mm x 720mm x 475mm</>,
      credits:  <>Artist: Abhinav Goyal <br /> Commissioned for: 
      <b><u><a href="https://casamiaindia.in/" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }}>  Casamia Estates</a></u></b></>
    }
  },
  { 
    src: "/lotus-nouvel-pune-2020.webp", 
    alt: "The Lotus Nouvel Sculpture in Pune, India, 2020", 
    caption: <>The Lotus Nouvel</>,
    details: {
      heading: "L O T U S Nouvel",
      location: "",
      description: <>Where Nature’s rhythm takes form. Forged in Corten Steel, material that evolves with time, just as nature does. Its weathered rust finish, sealed with imported PU, enhances its raw, organic allure. Inspired by the seamless processes of replication and locomotion, this sculpture blurs the boundaries between reality and fantasy. <br />Elements drawn from diverse plant forms merge into a hybrid design, reflecting the ingenuity of the natural world. <br /> Resting in serene spaces, The Lotus Nouvel stands as a tribute to nature’s endless cycles of growth and transformation. <br /> An artistic embodiment of strength, elegance, and timeless beauty.</>,
      details: <>3mm Corten steel with a weathered rust finish sealed <br />  Height: 7ft</>,
      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Hyderabad <br /> Photography: <b><u><a href="https://casamiaindia.in/" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }}>  Casamia India</a></u></b></>
    }
  },
  { 
    src: "/mermaid-ohl-nam-vadodara-2022.webp", 
    alt: "Mermaid | Oh'll'nam Sculpture in Vadodara, India, 2022", 
    caption: <>Mermaid | Oh'll'nam</>,
    details: {
      heading: "M E R M A I D",
      location: "",
      description: "A whimsical portrayal of a mermaid emerging from water, blending myth with modern artistry to evoke mystery and grace.",
      details: "Material: Fiberglass, resin, metallic paint\nHeight: 7 ft, Width: 5 ft, Depth: 4 ft",
      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Hyderabad <br /> Photography: Kiasma Studio</>
    }
  },
  { 
    src: "/levitating-whale-kpmg-gurugram-2022.webp", 
    alt: "Levitating Whale Sculpture at KPMG, Gurugram, India, 2022", 
    caption: <>Levitating Whale </>,
    details: {
      heading: "Levitating W H A L E",
      location: "",
      description: <>Suspended in mid-air, Dive is a surreal and whimsical masterpiece, blurring the line between reality and imagination. <br /> It hovers in the vestibule—the heart of this workplace,commanding attention with its raw, weathered beauty. <br /> <i>A chime that takes your breath away!</i></>,
      details: <>Material: Corten Steel <br /> Dimensions: 15 ft (L) x 5 ft 5 in (Dia.)</>,
      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Hyderabad <br /> Photography: Kiasma Studio</>
    }
  },
  { 
    src: "/tree-of-life-delhi-2025.webp", 
    alt: "The Tree of Life Sculpture in Delhi, India, 2025", 
    caption: <>The Tree of Life</>,
    details: {
      heading: "Tree of Life",
      location: "",
      description: "A towering representation of interconnectedness and growth, with intricate branches reaching skyward to symbolize vitality and resilience.",
      details: "Material: Corten steel, LED accents\nHeight: 18 ft, Width: 10 ft, Depth: 10 ft",
      credits:<>Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Hyderabad <br /> Photography: Kiasma Studio</>
    }
  },
  { 
    src: "/inverted-cactus-hyderabad-2023.webp", 
    alt: "Inverted Cactus Sculpture in Hyderabad, India, 2023", 
    caption: <>Inverted Cactus </>,
    details: {
      heading: "Inverted C A C T U S",
      location: "",
      description: "A mesmerizing fusion of nature and design, Inverted Cactus reimagines the iconic desert form as a suspended, illuminated sculpture. Crafted in corten steel with a rusted PU finish, its warm, earthy tones complement lush greenery, while its integrated lighting casts a soft, ambient glow. Hanging gracefully from the ceiling, it transforms the space into an enchanting oasis, both a statement piece and a seamless extension of the landscape.",
      details: <>Crafted from Corten Steel with a rust finish sealed with Imported PU,<br/> Dimension: 1500mm x 765mm x 200mm."</>,
      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Hyderabad <br /> Photography: Kiasma Studio</>
    }
  },
  { 
    src: "/sculptural-totems-hyderabad-2025.webp", 
    alt: "Sculptural Totems in Hyderabad, India, 2025", 
    caption: <>Sculptural Totems</>,
    details: {
      heading: "Sculptural Totems",
      location: "",
      description: "A series of vertical forms inspired by ancient totems, these sculptures blend cultural heritage with modern abstraction.",
      details: "Material: Wood, steel, stone\nHeight: 14 ft, Width: 3 ft, Depth: 3 ft (each)",
      credits: "Artist: FormForge Studios, Commissioned by Hyderabad Arts Council"
    }
  },
  { 
    src: "/raging-stallions-chennai-2021.webp", 
    alt: "The Raging Stallions Sculpture in Chennai, India, 2021", 
    caption: <>The Raging Stallions</>,
    details: {
      heading: "S T A L L I O N S",
      location: "",
      description: <>Curves hold an untamed power—fluid yet fierce, commanding yet free. To capture their essence is no easy feat.
      <br /> It demands more than form; it requires motion, rhythm, and soul.
      These raging stallions dance with light and weather, <br />their presence shifting with every passing moment. 
      They pull you beyond the ordinary, igniting something primal, something wild. To witness them is to ride upon the wind, 
      <br />to dance upon the brink like a flame— <i>Unbridled, Fearless, and Untamed.</i></>,
     
     details: <>Material: Lightweight, Resilient Aluminum. <br /> Dimensions: dnt knw</>,

      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: dnt knw <br /> Photography: dnt knw</>
    }
  },
  { 
    src: "/wing-man-dubai-2024.webp", 
    alt: "The Wing Man Sculpture in Dubai, UAE, 2024", 
    caption: <>The Wing Man</>,
    details: {
      heading: "W I N G   M A N",
      location: "",
      description: "A futuristic figure with outstretched wings, representing ambition and the pursuit of limitless possibilities.",
      details: "Material: Polished aluminum, LED lighting\nHeight: 12 ft, Width: 8 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Dubai Art Expo"
    }
  },
  { 
    src: "/sole-gaze-bangalore-2023.webp", 
    alt: "The Sole Gaze Sculpture in Bangalore, India, 2023", 
    caption: <>The Sole Gaze</>,
    details: {
      heading: "The Sole Gaze",
      location: "",
      description: "An introspective figure gazing upward, symbolizing contemplation and the search for meaning in a fast-paced world.",
      details: "Material: Stainless steel, stone pedestal\nHeight: 8 ft, Width: 3 ft, Depth: 3 ft",
      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Hyderabad Design District <br /> Photography: HT City</>
    }
  },
  { 
    src: "/leaning-man-hyderabad-2023.webp", 
    alt: "The Leaning Man Sculpture in Hyderabad, India, 2023", 
    caption: <>The Leaning Man</>,
    details: {
      heading: "The Leaning Man",
      location: "",
      description: "A figure leaning forward as if defying gravity, representing resilience and the human spirit's ability to push boundaries.",
      details: "Material: Corten steel, concrete base\nHeight: 9 ft, Width: 5 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Hyderabad Urban Arts"
    }
  },
  { 
    src: "/meditating-lady-goa-2018.webp", 
    alt: "The Meditating Lady Sculpture in Goa, India, 2018", 
    caption: <>The Meditating Lady</>,
    details: {
      heading: "The Meditating Lady",
      location: "",
      description: "A serene female figure in meditation, embodying peace and inner strength amidst a tranquil coastal setting.",
      details: "Material: Bronze, weathered patina\nHeight: 6 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Goa Serenity Project"
    }
  },
  { 
    src: "/etherea-chennai-2019.webp", 
    alt: "Etherea Sculpture in Chennai, India, 2019", 
    caption: <>Etherea</>,
    details: {
      heading: "E T H E R E A",
      location: "",
      description: <>A delicate balance of light, air, and spirit, Etherea stands in quiet stillness, 
      yet never truly still. Her glow lures nature into a silent dance, evoking an unspoken dialogue between form and perception. 
      More than a fleeting vision,
      <br /> she resists a mere passing glance—demanding pause, thought, and introspection.</>,
      details: "dont knw",
      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Uttandi, Chennai 
      <br /> Landscape Design: Kiasma Studio<br />Photography: Ricken Desai</>
    }
  },
  { 
    src: "/bonsai-delhi-2024.webp", 
    alt: "Bonsai Sculpture in Delhi, India, 2024", 
    caption: <>Bonsai</>,
    details: {
      heading: "Bonsai",
      location: "Delhi, India, 2024",
      description: "A minimalist representation of a bonsai tree, celebrating patience, growth, and the beauty of small-scale perfection.",
      details: "Material: Steel, copper accents\nHeight: 5 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Delhi Zen Gardens"
    }
  },
  { 
    src: "/nandi-pune-2020.webp", 
    alt: "Nandi Sculpture in Pune, India, 2020", 
    caption: <>Nandi</>,
    details: {
      heading: "N A N D I",
      location: "",
      description: <>A symbol of devotion, patience, and strength, stands poised in bustling Pune residence, 
      embodying the essence of waiting, welcome, and acceptance virtues deeply rooted in Indian tradition. <br />
      Crafted for Shivtirtha House, Pune. This sculpture is more than art, it's an invocation.
      <br /> A silent guardian, a sage of divine wisdom, ushering in an aura of growth, 
      harmony, and timeless presence.</>,
      details: "dont know",
      credits:  <>Artist: Abhinav Goyal <br /> Commissioned for: Shivtirtha House, Pune <br /> Photography: FormForge</>
    }
  },
  { 
    src: "/carefree-seat-hyderabad-2022.webp", 
    alt: "The Carefree Seat Sculpture in Hyderabad, India, 2022", 
    caption: <>The Carefree Seat</>,
    details: {
      heading: "The Carefree Seat",
      location: "Hyderabad, India, 2022",
      description: "A functional sculpture of a relaxed figure on a bench, inviting viewers to pause and embrace leisure.",
      details: "Material: Fiberglass, steel frame\nHeight: 6 ft, Width: 8 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Hyderabad Public Spaces"
    }
  },
  {
    src: "/bloom-delhi-2021.webp", 
    alt: "Bloom Sculpture in Delhi, India, 2021", 
    caption: <>Bloom</>,
    details: {
      heading: "B L O O M",
      location: "",
      description: <>A poetic tribute to nature, Bloom unfolds with resilience and grace, embodying elegance in its purest form.
       <br /> Rooted in serenity, this sculptural masterpiece flourishes in its refreshing surroundings.
       <br /> Inspired by our national flower, Bloom was born from a vision sparked at the India Design ID Fair 2020, 
       <br />where the client was instantly drawn to our work. Designed to seamlessly merge with its space,
       <br /> it stands as an organic extension of nature. <br /> <i>An emblem of renewal, harmony, and timeless beauty.</i></>,
      details: <>Material: Corten Steel & Brass   <br />
      Dimensions: 5ft | 7ft is it correct?</>,
      credits:  <>Artist: Abhinav Goyal <br /> Commissioned for: Shivtirtha House, Pune <br /> Photography: FormForge</>
    }
  },
  { 
    src: "/reflective-pause-bangalore-2025.webp", 
    alt: "Reflective Pause Sculpture in Bangalore, India, 2025", 
    caption: <>Reflective Pause</>,
    details: {
      heading: "Reflective Pause",
      location: "Bangalore, India, 2025",
      description: "A contemplative figure in repose, encouraging moments of stillness and reflection in an urban setting.",
      details: "Material: Polished bronze, granite base\nHeight: 7 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Bangalore Urban Retreat"
    }
  },
  { 
    src: "/abstracta-delhi-2021.webp", 
    alt: "Abstracta Sculpture in Delhi, India, 2021", 
    caption: <>Abstracta</>,
    details: {
      heading: "Abstracta",
      location: "Delhi, India, 2021",
      description: "A purely abstract form inviting multiple interpretations, celebrating the freedom of artistic expression.",
      details: "Material: Steel, acrylic panels\nHeight: 11 ft, Width: 5 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Delhi Modern Art Gallery"
    }
  },
  { 
    src: "/buddha-bangalore-2023.webp", 
    alt: "Buddha Sculpture in Bangalore, India, 2023", 
    caption: <>Buddha</>,
    details: {
      heading: "Buddha",
      location: "Bangalore, India, 2023",
      description: "A serene Buddha in meditation, radiating calm and enlightenment in a bustling cityscape.",
      details: "Material: Bronze, stone pedestal\nHeight: 8 ft, Width: 5 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Bangalore Peace Foundation"
    }
  },
  { 
    src: "/sleeping-lotus-delhi-2021.webp", 
    alt: "The Sleeping Lotus Sculpture in Delhi, India, 2021", 
    caption: <>The Sleeping Lotus</>,
    details: {
      heading: "The Sleeping Lotus",
      location: "Delhi, India, 2021",
      description: "A closed lotus bud at rest, symbolizing potential and the beauty of quiet moments before blooming.",
      details: "Material: Aluminum, matte finish\nHeight: 6 ft, Width: 7 ft, Depth: 7 ft",
      credits: "Artist: FormForge Studios, Commissioned by Delhi Nature Society"
    }
  },
  { 
    src: "/raging-bull-goa-2024.webp", 
    alt: "Raging Bull Sculpture in Goa, India, 2024", 
    caption: <>Raging B U L L</>,
    details: {
      heading: "Raging Bull",
      location: "Goa, India, 2024",
      description: <> A force of unbridled power and raw intensity, Raging Bull captures the creature’s wrath <br /> through a striking
       abstraction in Corten steel. Weathered to perfection, its dynamic form <br /> commands attention at the main entrance plaza
        of a private villa in Goa.<br />A bold expression of strength and dominance, it stands as a testament to resilience and untamed energy.</>,
      details: <>2mm Corten steel with a Weathered Finish. <br /> Dimensions: 12ft x 5ft
       <br /> Location: Goa  <br />
      Landscape Curation: Kiasma Studio <br />
      Project Designer: Ameet Mirpuri</>,
      credits:  <>Artist: Abhinav Goyal <br /> Commissioned for: Private villa in Goa <br /> Photography: Kiasma Studio</>
    }
  },
  { 
    src: "/raging-stallions-chennai_2021.webp", 
    alt: "The Raging Stallions Sculpture in Chennai, India, 2021", 
    caption: <>The Raging Stallions</>,
    details: {
      heading: "S T A L L I O N S",
      location: "",
      description: <>Curves hold an untamed power—fluid yet fierce, commanding yet free. To capture their essence is no easy feat.
      <br /> It demands more than form; it requires motion, rhythm, and soul.
      These raging stallions dance with light and weather, <br />their presence shifting with every passing moment. 
      They pull you beyond the ordinary, igniting something primal, something wild. To witness them is to ride upon the wind, 
      <br />to dance upon the brink like a flame— <i>Unbridled, Fearless, and Untamed.</i></>,
     
     details: <>Material: Lightweight, Resilient Aluminum. <br /> Dimensions: dnt knw</>,

      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: dnt knw <br /> Photography: dnt knw</>
    }
  },
  { 
    src: "/panthera-dubai-2020.webp", 
    alt: "Panthera Sculpture in Dubai, UAE, 2020", 
    caption: <>Panthera</>,
    details: {
      heading: "P A N T H E R A",
      location: "",
      description: <>A shadow in motion, a whisper in the dark. It stands as the spirit of the night, a traveler between realms. <br />
      There is an enchantment in its soft, deliberate pounce, a quiet dignity in solitude. <br />
      Hollow yet alive, its sculpted form breathes with an ethereal presence. The faceted stainless steel surface,<br />like watered silk,
       shimmers with an otherworldly glow, shifting with light and movement. <br />
      A creature of instinct and elegance, it exists between reality and myth.</>,
      details:<>Material: 3mm Stainless Steel <br /> Dimensions: 7ft | 3ft | 1.8ft</>,
      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: dnt knw <br /> Photography: dnt knw</>
    }
  },
  { 
    src: "/aphrodia-goa-2018.webp", 
    alt: "Aphrodia Sculpture in Goa, India, 2018", 
    caption: <>Aphrodia</>,
    details: {
      heading: "Aphrodia",
      location: "Goa, India, 2018",
      description: "Inspired by Aphrodite, this sculpture celebrates beauty and love with flowing, sensual forms.",
      details: "Material: Marble, bronze accents\nHeight: 7 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Goa Coastal Arts"
    }
  },
  { 
    src: "/geomorph-hyderabad-2023.webp", 
    alt: "Geomorph Sculpture in Hyderabad, India, 2023", 
    caption: <>Geomorph</>,
    details: {
      heading: "Geomorph",
      location: "Hyderabad, India, 2023",
      description: "An abstract representation of geological forms, exploring the interplay between nature and time.",
      details: "Material: Steel, stone elements\nHeight: 10 ft, Width: 6 ft, Depth: 6 ft",
      credits: "Artist: FormForge Studios, Commissioned by Hyderabad Earth Project"
    }
  },
  { 
    src: "/ballerina-gurugram-2023.webp", 
    alt: "Ballerina Sculpture in Gurugram, India, 2023", 
    caption: <>Ballerina</>,
    details: {
      heading: "Ballerina",
      location: "Gurugram, India, 2023",
      description: "A graceful ballerina in mid-pose, capturing the elegance and discipline of dance in a modern setting.",
      details: "Material: Bronze, stainless steel base\nHeight: 8 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Gurugram Arts Society"
    }
  },
  { 
    src: "/sole-gaze-bangalore_2023.webp", 
    alt: "The Sole Gaze Sculpture in Bangalore, India, 2023", 
    caption: <>The Sole Gaze</>,
    details: {
      heading: "The Sole Gaze",
      location: "Bangalore(IND), 2023",
      description: "An introspective figure gazing upward, symbolizing contemplation and the search for meaning in a fast-paced world.",
      details: "Material: Stainless steel, stone pedestal\nHeight: 8 ft, Width: 3 ft, Depth: 3 ft",
      credits: "Artist: FormForge Studios, Commissioned by Bangalore Art Initiative"
    }
  },
  { 
    src: "/solemn-mumbai-2021.webp", 
    alt: "Solemn contemporary sculpture in Mumbai, India, 2021", 
    caption: <>Solemn</>,
    details: {
      heading: "Solemn",
      location: "Mumbai, India, 2021",
      description: <>Where the unseen wields artistry. Solemn commands attention in the expansive <b> KPMG foyer, Mumbai.</b> An open, dynamic space that invites movement and interaction. As visitors walk around this striking piece, its form shifts, bold and defined from one angle, dissolving into thin air from another. Carefully layered to play with depth, light, and illusion, it embodies both strength and mystery. In this grand setting, “SOLEMN” is not just a sculpture; it is an experience, one that transforms with every step, revealing the magic of invisibility in full glory.</>,
      details: <>Vanishing sculpture crafted from Stainless steel with a matte black finish. <br /> Dimensions: 1800mm x 1500mm x 675mm </>,
      credits: <>Artist: Abhinav Goyal <br /> Commissioned for: KPMG, Mumbai <br /> Photography: KPMG</>
    }
  },
  { 
    src: "/a-quiet-gaze-oman-2024.webp", 
    alt: "A Quiet Gaze abstract sculpture in Oman, UAE, 2024", 
    caption: <>A Quiet Gaze</>,
    details: {
      heading: "A Quiet Gaze",
      location: "Oman, UAE, 2024",
      description: "An abstract form with a gentle upward tilt, evoking serenity and introspection in a desert landscape.",
      details: "Material: Polished aluminum, sandstone base\nHeight: 7 ft, Width: 5 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Oman Art Collective"
    }
  },
  { 
    src: "/wing-sculpture-gurugram-2022.webp", 
    alt: "The Wing Sculpture modern metal installation in Gurugram, India, 2022", 
    caption: <>The Wing Sculpture</>,
    details: {
      heading: "The Wing Sculpture",
      location: "Gurugram, India, 2022",
      description: "A sleek, wing-like form soaring upward, symbolizing ambition and the freedom of flight.",
      details: "Material: Stainless steel, mirrored finish\nHeight: 12 ft, Width: 8 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Gurugram Skyline Project"
    }
  },
  { 
    src: "/dreaming-of-dharma-noida-2024.webp", 
    alt: "Dreaming Of Dharma spiritual sculpture in Noida, India, 2024", 
    caption: <>Dreaming Of Dharma</>,
    details: {
      heading: "Dreaming Of Dharma",
      location: "Noida, India, 2024",
      description: "A meditative form inspired by Buddhist principles, symbolizing harmony and spiritual awakening.",
      details: "Material: Bronze, gold leaf accents\nHeight: 8 ft, Width: 5 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Noida Spiritual Trust"
    }
  },
  { 
    src: "/skyward-bound-delhi-2024.webp", 
    alt: "Skyward Bound dynamic steel sculpture in Delhi, India, 2024", 
    caption: <>Skyward Bound</>,
    details: {
      heading: "Skyward Bound",
      location: "Delhi, India, 2024",
      description: "A dynamic upward spiral, representing aspiration and the relentless pursuit of progress.",
      details: "Material: Steel, painted finish\nHeight: 15 ft, Width: 6 ft, Depth: 6 ft",
      credits: "Artist: FormForge Studios, Commissioned by Delhi Development Authority"
    }
  },
  { 
    src: "/seed-mumbai-2024.webp", 
    alt: "Seed nature-inspired art sculpture in Mumbai, India, 2024", 
    caption: <>Seed</>,
    details: {
      heading: "Seed",
      location: "Mumbai, India, 2024",
      description: "A simple yet profound seed form, symbolizing potential, growth, and the origins of life.",
      details: "Material: Bronze, stone base\nHeight: 6 ft, Width: 4 ft, Depth: 4 ft",
      credits: "Artist: FormForge Studios, Commissioned by Mumbai Green Initiative"
    }
  },
  { 
    src: "/raging-bull-goa_2024.webp", 
    alt: "Raging Bull powerful metal sculpture in Goa, India, 2024", 
    caption: <>Raging Bull</>,
    details: {
      heading: "Raging Bull",
      location: "Goa, India, 2024",
      description: "A powerful bull in mid-charge, embodying raw energy and untamed spirit against a coastal backdrop.",
      details: "Material: Bronze, steel reinforcement\nHeight: 8 ft, Width: 12 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Goa Art Collective"
    }
  },
  { 
    src: "/ganapati-dxb-uae-2024.webp", 
    alt: "Ganapati Hindu deity sculpture in DXB, UAE, 2024", 
    caption: <>Ganapati</>,
    details: {
      heading: "Ganapati",
      location: "Dubai, UAE, 2024",
      description: "A modern rendition of Lord Ganesha, blending tradition with innovation to honor wisdom and success.",
      details: "Material: Bronze, gold plating\nHeight: 10 ft, Width: 6 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Dubai Cultural Forum"
    },
    
  },
  { 
    src: "/1.png", 
    alt: "Ganapati Hindu deity sculpture in DXB, UAE, 2024", 
    caption: <>Raging Bull</>,
    details: {
      heading: "Raging Bull",
      location: "Dubai, UAE, 2024",
      description: "Raging Bull and success.",
      details: "Material: Bronze, gold plating\nHeight: 10 ft, Width: 6 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Dubai Cultural Forum"
    },
    
  },
  { 
    src: "/1-33.png", 
    alt: "Ganapati Hindu deity sculpture in DXB, UAE, 2024", 
    caption: <>Raging Bull</>,
    details: {
      heading: "Raging Bull",
      location: "Dubai, UAE, 2024",
      description: "Raging Bull and success.",
      details: "Material: Bronze, gold plating\nHeight: 10 ft, Width: 6 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Dubai Cultural Forum"
    },
    
  },
  { 
    src:"/1-22.png", 
    alt: "Ganapati Hindu deity sculpture in DXB, UAE, 2024", 
    caption: <>Raging Bull</>,
    details: {
      heading: "Raging Bull",
      location: "Dubai, UAE, 2024",
      description: "Raging Bull to honor wisdom and success.",
      details: "Material: Bronze, gold plating\nHeight: 10 ft, Width: 6 ft, Depth: 5 ft",
      credits: "Artist: FormForge Studios, Commissioned by Dubai Cultural Forum"
    },
    
  }
];
// Prepare the data format for react-image-gallery
const galleryImages = IMAGES.map((image) => ({
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
          <div className="container mx-auto max-w-6xl">
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
                    className="text-xl mb-3"
                    style={{
                      fontFamily: "Montserrat",
                      letterSpacing: ".06em",
                    }}
                  >
                    Description
                  </h3>
                  <div 
                    className="prose max-w-none "
                    style={{
                    
                      fontFamily: "Montserrat, Poppins, sans-serif",
                      lineHeight: "1.6em",
                      color: "rgb(87, 87, 87)",
                    }}
                  >
                    {typeof IMAGES[selectedIndex].details.description === 'string' ? (
                      <p>{IMAGES[selectedIndex].details.description}</p>
                    ) : (
                      IMAGES[selectedIndex].details.description
                    )}
                  </div>
                </div>
                
                {/* Materials and Dimensions */}
                <div>
                  <h3 
                    className="text-xl mb-3"
                    style={{
                      fontFamily: "Montserrat",
                      letterSpacing: ".06em",
                    }}
                  >
                   Details
                  </h3>
                  <p 
                    className="text-gray-700"
                    style={{
                      fontFamily: "Montserrat, Poppins, sans-serif",
                      lineHeight: "1.6em",
                      color: "rgb(87, 87, 87)",
                    }}
                  >
                    {IMAGES[selectedIndex].details.details}
                  </p>
                </div>
                
                {/* Credits */}
                {IMAGES[selectedIndex].details.credits && (
                  <div>
                    <h3 
                      className="text-xl mb-3"
                      style={{
                        fontFamily: "Montserrat",
                        letterSpacing: ".06em",
                      }}
                    >
                      Credits
                    </h3>
                    <div 
                      className="text-gray-700"
                      style={{
                        fontFamily: "Montserrat, Poppins, sans-serif",
                        lineHeight: "1.6em",
                        color: "rgb(87, 87, 87)",
                      }}
                    >
                      {typeof IMAGES[selectedIndex].details.credits === 'string' ? (
                        <p>{IMAGES[selectedIndex].details.credits}</p>
                      ) : (
                        IMAGES[selectedIndex].details.credits
                      )}
                    </div>
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
                    alt={image.alt}
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