
// Define the types for our artwork data
export interface ArtworkDetails {
    heading: string;
    location: string;
    description: React.ReactNode;
    details: React.ReactNode;
    credits?: React.ReactNode;
  }
  
  export interface ArtworkImage {
    src: string;
    alt: string;
    caption?: string;
  }
  
  export interface ImageData {
    images: ArtworkImage[];
    caption: React.ReactNode;
    details: ArtworkDetails;
  }
  
  // Define the images outside the component to avoid recreating them on every render.
  export const ARTWORK_IMAGES: ImageData[] = [
    { 
      images: [
        { src: "/twin-spirits-chennai-2023.webp", alt: "Twin Spirits Sculpture in Chennai, India, 2023" },
        { src: "/gallery/401.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }
      ],
      caption: <>Twin Spirits</>,
      details: {
        heading: "Twin Spirits",
        location: "",
        description: <>Twin Spirits explores the duality of human existence through contrasting yet complementary forms. <br/> The sculpture represents the harmony between opposing forces in nature and within ourselves.</>,
        details:<>Type: Outdoor Sculpture <br />
        Material: Stainless Steel <br />
        Finish: Ultramarine PU <br />
        Dimensions: 10ft. Height </>,
        credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Private Residence <br /> Photography: HT City</>
      }
    },
    { 
      images: [
        { src: "/metamorphosis-muse-hyderabad-2025.webp", alt: "The Metamorphosis Muse Sculpture in Hyderabad, India, 2025" },
        { src: "/gallery/v10.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }
      ],
      caption: <>The Metamorphosis Muse</>,
      details: {
        heading: "The Metamorphosis Muse",
        location: "",
        description: <>A divine embodiment of transformation, radiates grace and power, adorned with golden butterflies that symbolize rebirth and evolution. Capturing the essence of a goddess, the sculpture stands as a tribute to beauty, strength, and the ever-unfolding journey of change. Seen here with the stunning
         <a href="https://www.mashindia.com/" target="_blank" style={{ marginRight: "6px", marginLeft: "6px", fontWeight: "bold" }}>Shalini Passi,</a> it exudes an ethereal presence, where art and divinity intertwine in a timeless celebration of allure.</>,
        details: <>Type: Indoor Sculpture <br />
        Material: Stainless Steel <br />
        Finish: Satin Brass <br />
        Dimensions: H-1800mm | W-690mm</>,
        credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Hyderabad <br /> Photography: HT City</>
      }
    },
    { 
      images: [
        { src: "/vighnaharta-mumbai-2022.webp", alt: "Vighnaharta Sculpture in Mumbai, India, 2022" },
        { src: "/0-1.webp", alt: "Vighnaharta Sculpture in Mumbai, India, 2022" } ,
       { src: "/0-2.webp", alt: "Vighnaharta Sculpture in Mumbai, India, 2022" }
      ],
      caption: <>Vighnaharta</>,
      details: {
        heading: "V I G H N A H A R T A",
        location: "",
        description: <>Inspired by <b>Lord Ganesha</b>, the remover of obstacles. <br />  Merging traditional symbolism with contemporary design, the sculpture embodies prosperity, wisdom, and strength. <br /> While its refined metallic sheen enhances depth and elegance. <br /> Designed to be a striking focal point, the sculpture seamlessly integrates spiritual essence with modern artistry.</>,
        details: <>Type:  Outdoor/Indoor Sculpture <br />
        Material: Stainless Steel <br />
        Finish: Antique coating PU(Weatherproof) <br />
        Dimensions: L- 1545 mm | W- 985 mm | H- 1800 mm</>,
        credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Anantam Residence, Mumbai <br /> Photography: Formforge</>
      }
    },
    { 
      images: [
        { src: "/david-casamia-uae-2021.webp", alt: "David Sculpture at Casamia, UAE, 2021" },
        { src: "/gallery/501.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }   
      ],
      caption: <>David</>,
      details: {
        heading: "D A V I D",
        location: " ",
        description: <>An abstract reinterpretation of  <a href="https://en.wikipedia.org/wiki/David_%28Michelangelo%29" target="_blank" style={{ fontWeight: "bold", marginRight: "6px", marginLeft: "6px" }}>Michelangelo's David</a>
        redefines classical artistry with a bold, modern twist, merging timeless form with contemporary expression.  <br />    Sculpted in stainless steel with an astonishing antique brass finish, its asymmetrical metal plates create a striking interplay of light and form. The sculpture has been installed in Dubai, at <b>Palm Jumeirah</b>. <br /> This backlit masterpiece, ideal for both indoor and outdoor settings, embodies strength, defiance, and timeless elegance.</>,
        details: <>Type:  Indoor Sculpture <br />
        Material: Stainless Steel <br />
        Finish: Antique coating PU (Weatherproof) <br />
        Dimensions: D: 475 mm |
W: 720 mm |
H: 1800 mm</>,
        credits:  <>Artist: Abhinav Goyal <br /> Commissioned for:  <a href=" https://www.youtube.com/watch?v=kdZYhfHYHtY&t=195s" target="_blank" style={{  fontWeight: "bold", marginLeft: "3px"  }}>Dubai Mega Mansion</a> </> 
      }
    },
    { 
      images: [
        { src: "/lotus-nouvel-pune-2020.webp", alt: "The Lotus Nouvel Sculpture in Pune, India, 2020" }
      ],
      caption: <>The Lotus Nouvel</>,
      details: {
        heading: "Lotus Nouvel",
        location: "",
        description: <>Where Nature's rhythm takes form. Forged in Corten Steel, material that evolves with time, just as nature does. Its weathered rust finish, sealed with imported PU, enhances its raw, organic allure. Inspired by the seamless processes of replication and locomotion, this sculpture blurs the boundaries between reality and fantasy. <br />Elements drawn from diverse plant forms merge into a hybrid design, reflecting the ingenuity of the natural world. <br /> Resting in serene spaces, The Lotus Nouvel stands as a tribute to nature's endless cycles of growth and transformation. <br /> An artistic embodiment of strength, elegance, and timeless beauty.</>,
        details:<>Type: Indoor/Outdoor Sculpture<br />
        Material: Corten Steel <br />
        Finish:  Rust with imported PU <br />
        Dimensions: L: 1850 mm |
H: 1635 mm |
W:1180mm</>,
        credits: <>Artist: Abhinav Goyal <br /> Commissioned for: Shivtirtha House, Pune <br />
         Architects: ConCepts Architectural Studio, Kolhapur<br /> 
         </>
      }
    },
    { 
      images: [
        { src: "/mermaid-ohl-nam-vadodara-2022.webp", alt: "Mermaid | Oh'll'nam Sculpture in Vadodara, India, 2022" },
        { src: "/gallery/131.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
        { src: "/gallery/m01.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
        { src: "/gallery/m00.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
        { src: "/gallery/o'll.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
        { src: "/gallery/11.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
        { src: "/gallery/13.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
       
      ],
      caption: <>Mermaid | Oh'll'nam</>,
      details: {
        heading: "Mermaid | Oh'll'nam",
        location: "",
        description: <><b>Dia Mirza </b> effortlessly radiates grace and elegance against the backdrop of our sculptures <br /> at <b>Center of Arts & Design, Parul University, Vadodara.</b> <br />
       A whimsical mermaid blends myth with modern artistry, evoking mystery and fluidity, <br /> while Oh'll'Nam sits as a symbol of silence and peace.  <br />
       Together, these sculptures create a harmonious dialogue of serenity and expression, <br /> enriching the institutional space with depth and artistic storytelling. <br />
        </>,
        details: <>Type: Outdoor Sculpture<br />
        Material: Corten Steel <br />
        Finish:  Rust with imported PU <br />
        Dimensions: H- 1200mm Each</>,
        credits: <>Artist: Abhinav Goyal <br /> Commissioned for:  Architect Nitin Bharadwaj <br /> Photography: Parul University</>
      }
    },
    { 
      images: [
        { src: "/levitating-whale-kpmg-gurugram-2022.webp", alt: "Levitating Whale Sculpture at KPMG, Gurugram, India, 2022" },
        { src: "/gallery/201.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
      ],
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
      images: [
        { src: "/tree-of-life-delhi-2025.webp", alt: "The Tree of Life Sculpture in Delhi, India, 2025" }
      ],
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
      images: [
        { src: "/inverted-cactus-hyderabad-2023.webp", alt: "Inverted Cactus Sculpture in Hyderabad, India, 2023" },
        { src: "/gallery/012.webp", alt: "Inverted Cactus Sculpture in Hyderabad, India, 2023" }
      ],
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
      images: [
        { src: "/sculptural-totems-hyderabad-2025.webp", alt: "Sculptural Totems in Hyderabad, India, 2025" },
        { src: "/gallery/t10.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }
      ],
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
      images: [
        { src: "/raging-stallions-chennai-2021.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" },
        { src:"/gallery/71.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" },
        { src: "/gallery/72.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" }
      ],
      caption: <>The Raging Stallions</>,
      details: {
        heading: "S T A L L I O N S",
        location: "",
        description: <>Curves hold an untamed power—fluid yet fierce, commanding yet free. To capture their essence is no easy feat.
        <br /> It demands more than form; it requires motion, rhythm, and soul.
        These raging stallions dance with light and weather, <br />their presence shifting with every passing moment. 
        They pull you beyond the ordinary, igniting something primal, something wild. To witness them is to ride upon the wind, 
        <br />to dance upon the brink like a flame— <i>Unbridled, Fearless, and Untamed.</i></>,
       
       details: <>Material: Lightweight, Resilient Aluminum. <br /> Dimensions: -</>,
  
        credits: <>Artist: Abhinav Goyal <br /> Commissioned for: - <br /> Photography: -</>
      }
    },
    { 
      images: [
        { src: "/wing-man-dubai-2024.webp", alt: "The Wing Man Sculpture in Dubai, UAE, 2024" },
        { src:"/gallery/1098.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" }
      ],
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
      images: [
        { src: "/sole-gaze-bangalore-2023.webp", alt: "The Sole Gaze Sculpture in Bangalore, India, 2023" }
      ],
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
      images: [
        { src: "/leaning-man-hyderabad-2023.webp", alt: "The Leaning Man Sculpture in Hyderabad, India, 2023" },
        { src: "/gallery/41.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }
      ],
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
      images: [
        { src: "/meditating-lady-goa-2018.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
        { src: "/gallery/b-2.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
        { src: "/gallery/b-1.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }
      ],
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
      images: [
        { src: "/etherea-chennai-2019.webp", alt: "Etherea Sculpture in Chennai, India, 2019" },
        { src: "/gallery/e10.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
      ],
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
      images: [
        { src: "/bonsai-delhi-2024.webp", alt: "Bonsai Sculpture in Delhi, India, 2024" },
        { src: "/gallery/A7.webp", alt: "Bonsai Sculpture in Delhi, India, 2024" }
      ],
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
      images: [
        { src: "/nandi-pune-2020.webp", alt: "Nandi Sculpture in Pune, India, 2020" },
        { src: "/gallery/252.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
        { src: "/gallery/163.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }
      ],
      caption: <>Nandi</>,
      details: {
        heading: "N A N D I",
        location: "",
        description: <>A symbol of devotion, patience, and strength, stands poised in bustling Pune residence, 
        embodying the essence of waiting, welcome, and acceptance virtues deeply rooted in Indian tradition. <br />
        Crafted for Shivtirtha House, Pune. This sculpture is more than art, it's an invocation.\
        <br /> A silent guardian, a sage of divine wisdom, ushering in an aura of growth, 
        harmony, and timeless presence.</>,
        details: "dont know",
        credits:  <>Artist: Abhinav Goyal <br /> Commissioned for: Shivtirtha House, Pune <br /> Photography: FormForge</>
      }
    },
    { 
      images: [
        { src: "/carefree-seat-hyderabad-2022.webp", alt: "The Carefree Seat Sculpture in Hyderabad, India, 2022" },
        { src:"/gallery/ carefree-seat.webp", alt: "Carefree seat corten steel" },
        { src:  "/gallery/carefree-seat-hyderabad.webp", alt: "carefree seat corten steel sculpture " }  
      ],
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
      images: [
        { src: "/bloom-delhi-2021.webp", alt: "Bloom Sculpture in Delhi, India, 2021" },
        { src:"/gallery/1_1.webp", alt: "Carefree seat corten steel" }
      ],
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
      images: [
        { src: "/reflective-pause-bangalore-2025.webp", alt: "Reflective Pause Sculpture in Bangalore, India, 2025" }
      ],
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
      images: [
        { src: "/abstracta-delhi-2021.webp", alt: "Abstracta Sculpture in Delhi, India, 2021" },
        { src: "/gallery/091.webp", alt: "Inverted Cactus Sculpture in Hyderabad, India, 2023" }
      ],
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
      images: [
        { src: "/buddha-bangalore-2023.webp", alt: "Buddha Sculpture in Bangalore, India, 2023" },
        { src: "/gallery/b30.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }
      ],
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
      images: [
        { src: "/sleeping-lotus-delhi-2021.webp", alt: "The Sleeping Lotus Sculpture in Delhi, India, 2021" },
        { src:  "/gallery/009.webp", alt: "The Sleeping Lotus Sculpture in Delhi, India, 2021" },
        { src:  "/gallery/091.webp", alt: "The Sleeping Lotus Sculpture in Delhi, India, 2021" }
      ],
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
      images: [
        { src: "/raging-bull-goa-2024.webp", alt: "Raging Bull Sculpture in Goa, India, 2024" },
        { src:  "/gallery/x1.webp", alt: "The Sleeping Lotus Sculpture in Delhi, India, 2021" }
      ],
      caption: <>Raging B U L L</>,
      details: {
        heading: "Raging Bull",
        location: "Goa, India, 2024",
        description: <> A force of unbridled power and raw intensity, Raging Bull captures the creature's wrath <br /> through a striking
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
      images: [
        { src: "/raging-stallions-chennai_2021.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" },
        { src:"/gallery/71.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" },
        { src: "/gallery/72.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" }

         
      ],
      caption: <>The Raging Stallions</>,
      details: {
        heading: "S T A L L I O N S",
        location: "",
        description: <>Curves hold an untamed power—fluid yet fierce, commanding yet free. To capture their essence is no easy feat.
        <br /> It demands more than form; it requires motion, rhythm, and soul.
        These raging stallions dance with light and weather, <br />their presence shifting with every passing moment. 
        They pull you beyond the ordinary, igniting something primal, something wild. To witness them is to ride upon the wind, 
        <br />to dance upon the brink like a flame— <i>Unbridled, Fearless, and Untamed.</i></>,
       
       details: <>Material: Lightweight, Resilient Aluminum. <br /> Dimensions: -</>,
  
        credits: <>Artist: Abhinav Goyal <br /> Commissioned for: - <br /> Photography: -</>
      }
    },
    { 
      images: [
        { src: "/panthera-dubai-2020.webp", alt: "Panthera Sculpture in Dubai, UAE, 2020" },
        { src: "/gallery/00-1.webp", alt: "Panthera Sculpture in Dubai, UAE, 2020" }
      ],
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
        credits: <>Artist: Abhinav Goyal <br /> Commissioned for: - <br /> Photography: -</>
      }
    },
    { 
      images: [
        { src: "/aphrodia-goa-2018.webp", alt: "Aphrodia Sculpture in Goa, India, 2018" }
      ],
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
      images: [
        { src: "/geomorph-hyderabad-2023.webp", alt: "Geomorph Sculpture in Hyderabad, India, 2023" }
      ],
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
      images: [
        { src: "/ballerina-gurugram-2023.webp", alt: "Ballerina Sculpture in Gurugram, India, 2023" },
        { src: "/gallery/061.webp", alt: "Ballerina Sculpture in Gurugram, India, 2023" },
        { src:  "/gallery/062.webp", alt: "Ballerina Sculpture in Gurugram, India, 2023" }
      ],
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
      images: [
        { src: "/sole-gaze-bangalore_2023.webp", alt: "The Sole Gaze Sculpture in Bangalore, India, 2023" }
      ],
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
      images: [
        { src: "/solemn-mumbai-2021.webp", alt: "Solemn contemporary sculpture in Mumbai, India, 2021" },
        { src: "/gallery/c1.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
        { src: "/gallery/c2.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }
      ],
      caption: <>Solemn</>,
      details: {
        heading: "Solemn",
        location: "Mumbai, India, 2021",
        description: <>Where the unseen wields artistry. Solemn commands attention in the expansive <b> KPMG foyer, Mumbai.</b> An open, dynamic space that invites movement and interaction. As visitors walk around this striking piece, its form shifts, bold and defined from one angle, dissolving into thin air from another. Carefully layered to play with depth, light, and illusion, it embodies both strength and mystery. In this grand setting, "SOLEMN" is not just a sculpture; it is an experience, one that transforms with every step, revealing the magic of invisibility in full glory.</>,
        details: <>Vanishing sculpture crafted from Stainless steel with a matte black finish. <br /> Dimensions: 1800mm x 1500mm x 675mm </>,
        credits: <>Artist: Abhinav Goyal <br /> Commissioned for: KPMG, Mumbai <br /> Photography: KPMG</>
      }
    },
    { 
      images: [
        { src: "/a-quiet-gaze-oman-2024.webp", alt: "A Quiet Gaze abstract sculpture in Oman, UAE, 2024" }
      ],
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
      images: [
        { src: "/wing-sculpture-gurugram-2022.webp", alt: "The Wing Sculpture modern metal installation in Gurugram, India, 2022" },
        { src: "/gallery/301.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }
      ],
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
      images: [
        { src: "/dreaming-of-dharma-noida-2024.webp", alt: "Dreaming Of Dharma spiritual sculpture in Noida, India, 2024" },
        { src: "/gallery/b20.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
        { src: "/gallery/b08.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }
      ],
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
      images: [
        { src: "/skyward-bound-delhi-2024.webp", alt: "Skyward Bound dynamic steel sculpture in Delhi, India, 2024" }
      ],
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
      images: [
        { src: "/seed-mumbai-2024.webp", alt: "Seed nature-inspired art sculpture in Mumbai, India, 2024" }
      ],
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
      images: [
        { src: "/raging-bull-goa_2024.webp", alt: "Raging Bull powerful metal sculpture in Goa, India, 2024" }
      ],
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
      images: [
        { src: "/ganapati-dxb-uae-2024.webp", alt: "Ganapati Hindu deity sculpture in DXB, UAE, 2024" },
        { src: "/gallery/3012.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }
      ],
      caption: <>Ganapati</>,
      details: {
        heading: "Ganapati",
        location: "Dubai, UAE, 2024",
        description: "A modern rendition of Lord Ganesha, blending tradition with innovation to honor wisdom and success.",
        details: "Material: Bronze, gold plating\nHeight: 10 ft, Width: 6 ft, Depth: 5 ft",
        credits: "Artist: FormForge Studios, Commissioned by Dubai Cultural Forum"
      }
    },
    { 
      images: [
        { src: "/41.webp", alt: "Abstract sculpture in modern art style" }
      ],
      caption: <>Abstract Form</>,
      details: {
        heading: "Abstract Form",
        location: "Mumbai, India, 2023",
        description: "A contemporary abstract sculpture exploring themes of space and form.",
        details: "Material: Mixed media\nHeight: 8 ft, Width: 5 ft, Depth: 4 ft",
        credits: "Artist: FormForge Studios, Commissioned by Mumbai Art Gallery"
      }
    },
    { 
      images: [
        { src: "/40.webp", alt: "Ganapati Hindu deity sculpture in DXB, UAE, 2024" },
        { src: "/gallery/616.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" }

      ],
      caption: <>Raging Bull</>,
      details: {
        heading: "Raging Bull",
        location: "Dubai, UAE, 2024",
        description: "Raging Bull and success.",
        details: "Material: Bronze, gold plating\nHeight: 10 ft, Width: 6 ft, Depth: 5 ft",
        credits: "Artist: FormForge Studios, Commissioned by Dubai Cultural Forum"
      }
    },
   
    { 
        images: [
          { src: "/42.webp", alt: "Abstract sculpture in modern art style" }
        ],
        caption: <>Abstract Form</>,
        details: {
          heading: "Abstract Form",
          location: "Mumbai, India, 2023",
          description: "A contemporary abstract sculpture exploring themes of space and form.",
          details: "Material: Mixed media\nHeight: 8 ft, Width: 5 ft, Depth: 4 ft",
          credits: "Artist: FormForge Studios, Commissioned by Mumbai Art Gallery"
        }
      }
  ];