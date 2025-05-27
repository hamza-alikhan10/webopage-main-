import React from "react";

export interface ImageData {
  slug: string;
  images: { src: string; alt: string }[];
  caption: string | React.ReactNode;
  details: {
    heading: string;
    location?: string;
    description: string | React.ReactNode;
    details: string | React.ReactNode;
    credits?: string | React.ReactNode;
  };
}

export const ARTWORK_IMAGES: ImageData[] = [
  {
    slug: "twin-spirits",
    images: [
      { 
    "src": "/Arts/twin-spirits-sculpture-chennai-2023.webp", 
    "alt": "Twin Spirits - Contemporary Outdoor Sculpture by Abhinav Goyal in Chennai, India (2023)" 
  },
  { 
    "src": "/Arts/twin-spirits-stainless-steel-sculpture.webp", 
    "alt": "Twin Spirits Stainless Steel Sculpture - Outdoor Art Installation by Abhinav Goyal" 
  }
    ],
    caption: <>Twin Spirits</>,
    details: {
      heading: "Twin Spirits",
      location: "",
      description: (
        <>
          Twin Spirits explores the duality of human existence through contrasting yet complementary forms. <br /> The
          sculpture represents the harmony between opposing forces in nature and within ourselves.
        </>
      ),
      details: (
        <>
          Type: Outdoor Sculpture <br />
          Material: Stainless Steel <br />
          Finish: Ultramarine PU <br />
          Dimensions: 10ft. Height
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private Residence <br /> Photography: HT City
        </>
      ),
    },
  },
  {
    slug: "metamorphosis-muse",
    images: [
      { 
    "src": "/Arts/golden-butterfly-sculpture-hyderabad-2025.webp", 
    "alt": "Contemporary Golden Butterfly Sculpture - Metamorphosis Muse, Hyderabad 2025 by FormForge" 
  },
  { 
    "src": "/Arts/abstract-meditating-lady-sculpture-goa-2018.webp", 
    "alt": "Modern Abstract Meditating Lady Sculpture in Goa 2018 - Corten Steel Art Installation by FormForge" 
  }
    ],
    caption: <>The Metamorphosis Muse</>,
    details: {
      heading: "The Metamorphosis Muse",
      location: "",
      description: (
        <>
          A divine embodiment of transformation, radiates grace and power, adorned with golden butterflies that symbolize
          rebirth and evolution. Capturing the essence of a goddess, the sculpture stands as a tribute to beauty, strength,
          and the ever-unfolding journey of change. Seen here with the stunning
          <a
            href="https://www.mashindia.com/"
            target="_blank"
            style={{ marginRight: "6px", marginLeft: "6px", fontWeight: "bold" }}
          >
            Shalini Passi,
          </a>
          it exudes an ethereal presence, where art and divinity intertwine in a timeless celebration of allure.
        </>
      ),
      details: (
        <>
          Type: Indoor Sculpture <br />
          Material: Stainless Steel <br />
          Finish: Satin Brass <br />
          Dimensions: H-1800mm | W-690mm
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Hyderabad <br /> Photography: HT City
        </>
      ),
    },
  },
  {
    slug: "vighnaharta",
    images: [
      { src: "/vighnaharta-mumbai-2022.webp", alt: "Vighnaharta Sculpture in Mumbai, India, 2022" },
      { src: "/Ganesha.webp", alt: "Vighnaharta Sculpture in Mumbai, India, 2022" },
      { src: "/Ganeshji.webp", alt: "Vighnaharta Sculpture in Mumbai, India " },
    ],
    caption: <>Vighnaharta</>,
    details: {
      heading: "Vighnaharta",
      location: "",
      description: (
        <>
          Inspired by <b>Lord Ganesha</b>, the remover of obstacles. <br /> Merging traditional symbolism with contemporary
          design, the sculpture embodies prosperity, wisdom, and strength. <br /> While its refined metallic sheen enhances
          depth and elegance. <br /> Designed to be a striking focal point, the sculpture seamlessly integrates spiritual
          essence with modern artistry.
        </>
      ),
      details: (
        <>
          Type: Outdoor/Indoor Sculpture <br />
          Material: Stainless Steel <br />
          Finish: Antique coating PU(Weatherproof) <br />
          Dimensions: L- 1545 mm | W- 985 mm | H- 1800 mm
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Anantam Residence, Mumbai <br /> Photography: Formforge
        </>
      ),
    },
  },
  {
    slug: "david",
    images: [
      { src: "/david-casamia-uae-2021.webp", alt: "David Sculpture at Casamia, UAE, 2021" },
      { src: "/Arts/501.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
    ],
    caption: <>David</>,
    details: {
      heading: "David",
      location: " ",
      description: (
        <>
          An abstract reinterpretation of
          <a
            href="https://en.wikipedia.org/wiki/David_%28Michelangelo%29"
            target="_blank"
            style={{ fontWeight: "bold", marginRight: "6px", marginLeft: "6px" }}
          >
            Michelangelo's David
          </a>
          redefines classical artistry with a bold, modern twist, merging timeless form with contemporary expression.{" "}
          <br /> Sculpted in stainless steel with an astonishing antique brass finish, its asymmetrical metal plates create
          a striking interplay of light and form. The sculpture has been installed in Dubai, at <b>Palm Jumeirah</b>.{" "}
          <br /> This backlit masterpiece, ideal for both indoor and outdoor settings, embodies strength, defiance, and
          timeless elegance.
        </>
      ),
      details: (
        <>
          Type: Indoor Sculpture <br />
          Material: Stainless Steel <br />
          Finish: Antique coating PU (Weatherproof) <br />
          Dimensions: D: 475 mm | W: 720 mm | H: 1800 mm
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for:
          <a
            href=" https://www.youtube.com/watch?v=kdZYhfHYHtY&t=195s"
            target="_blank"
            style={{ fontWeight: "bold", marginLeft: "3px" }}
          >
            Dubai Mega Mansion
          </a>
        </>
      ),
    },
  },
  {
    slug: "lotus-nouvel",
    images: [{ src: "/lotus-nouvel-pune-2020.webp", alt: "The Lotus Nouvel Sculpture in Pune, India, 2020" }],
    caption: <>The Lotus Nouvel</>,
    details: {
      heading: "Lotus Nouvel",
      location: "",
      description: (
        <>
          Where Nature's rhythm takes form. Forged in Corten Steel, material that evolves with time, just as nature does.
          Its weathered rust finish, sealed with imported PU, enhances its raw, organic allure. Inspired by the seamless
          processes of replication and locomotion, this sculpture blurs the boundaries between reality and fantasy. <br />
          Elements drawn from diverse plant forms merge into a hybrid design, reflecting the ingenuity of the natural
          world. <br /> Resting in serene spaces, The Lotus Nouvel stands as a tribute to nature's endless cycles of growth
          and transformation. <br /> An artistic embodiment of strength, elegance, and timeless beauty.
        </>
      ),
      details: (
        <>
          Type: Indoor/Outdoor Sculpture
          <br />
          Material: Corten Steel <br />
          Finish: Rust with imported PU <br />
          Dimensions: L: 1850 mm | H: 1635 mm | W:1180mm
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Shivtirtha House, Pune <br />
          Architects: ConCepts Architectural Studio, Kolhapur
          <br />
        </>
      ),
    },
  },
  {
    slug: "mermaid-ohllnam",
    images: [
      { src: "/mermaid-ohl-nam-vadodara-2022.webp", alt: "Mermaid | Oh'll'nam Sculpture in Vadodara, India, 2022" },
      { src: "/Arts/131.webp", alt: "Oh'll'nam Sculpture Series by Abhinav Goyal - Contemporary Art Installation"  },
      { src: "/Arts/m01.webp", alt: "Oh'll'nam Sculpture Series by Abhinav Goyal"  },
      { src: "/Arts/m00.webp", alt: "Oh'll'nam Sculpture Series by Abhinav Goyal - Contemporary Art Installation"  },
      { src: "/Arts/o'll.webp", alt:"Oh'll'nam Sculpture Series by Abhinav Goyal - Contemporary Art Installation"  },
      { src: "/Arts/11.webp", alt: "Oh'll'nam Sculpture Series by Abhinav Goyal - Contemporary Art Installation"  },
    ],
    caption: <>Mermaid | Oh'll'nam</>,
    details: {
      heading: "Mermaid | Oh'll'nam",
      location: "",
      description: (
        <>
          <b>Dia Mirza </b> effortlessly radiates grace and elegance against the backdrop of our sculptures <br /> at{" "}
          <b>Center of Arts & Design, Parul University, Vadodara.</b> <br />
          A whimsical mermaid blends myth with modern artistry, evoking mystery and fluidity, <br /> while Oh'll'Nam sits
          as a symbol of silence and peace. <br />
          Together, these sculptures create a harmonious dialogue of serenity and expression, <br /> enriching the
          institutional space with depth and artistic storytelling. <br />
        </>
      ),
      details: (
        <>
          Type: Outdoor Sculpture
          <br />
          Material: Corten Steel <br />
          Finish: Rust with imported PU <br />
          Dimensions: H- 1200mm Each
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Architect Nitin Bharadwaj <br /> Photography: Parul University
        </>
      ),
    },
  },
  {
    slug: "levitating-whale",
    images: [
      { src: "/levitating-whale-kpmg-gurugram-2022.webp", alt: "Levitating Whale Sculpture at KPMG, Gurugram, India, 2022" },
      { src: "/Arts/whale-kpmg-project.webp", alt: "Levitating Whale Sculpture at KPMG, Gurugram" },
    ],
    caption: <>Levitating Whale </>,
    details: {
      heading: "Levitating Whale",
      location: "",
      description: (
        <>
          Suspended in mid-air, Dive is a surreal and whimsical masterpiece, blurring the line between reality and
          imagination. <br /> It hovers in the vestibule—the heart of this workplace,commanding attention with its raw,
          weathered beauty. <br /> <i>A chime that takes your breath away!</i>
        </>
      ),
      details: (
        <>
          Material: Corten Steel <br /> Dimensions: 15 ft (L) x 5 ft 5 in (Dia.)
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Hyderabad <br /> Photography: Kiasma Studio
        </>
      ),
    },
  },
  {
    slug: "tree-of-life",
    images: [{ src: "/tree-of-life-delhi-2025.webp", alt: "The Tree of Life Sculpture in Delhi, India, 2025" }],
    caption: <>The Tree of Life</>,
    details: {
      heading: "Tree of Life",
      location: "",
      description: (
        <>
          A bold symbol of interconnectedness and growth, this geometric tree sculpture features a faceted trunk <br /> that
          twists upward, splitting into intricate, angular branches. Crafted in warm, rust-hued metal, <br />it embodies
          strength, resilience, and transformation. Rooted yet reaching skyward, it reflects the enduring <br /> vitality of
          nature and the web of connections that shape our lives.
        </>
      ),
      details: "Material: Corten steel",
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private Residence,New Delhi
        </>
      ),
    },
  },
  {
    slug: "inverted-cactus",
    images: [
      { src: "/inverted-cactus-hyderabad-2023.webp", alt: "Inverted Cactus Sculpture in Hyderabad, India, 2023" },
      { src: "/Arts/012.webp", alt: "Inverted Cactus Sculpture in Hyderabad, India, 2023" },
    ],
    caption: <>Inverted Cactus </>,
    details: {
      heading: "Inverted C A C T U S",
      location: "",
      description: (
        <>
          A mesmerizing fusion of nature and design, Inverted Cactus reimagines the iconic desert form <br />as a suspended,
          illuminated sculpture. Crafted in corten steel with a rusted PU finish, its warm <br /> earthy tones complement
          lush greenery, while its integrated lighting casts a soft, ambient glow. <br /> Hanging gracefully from the
          ceiling, it transforms the space into an enchanting oasis, both a statement piece <br /> and a seamless extension
          of the landscape.
        </>
      ),
      details: (
        <>
          Crafted from Corten Steel with a rust finish sealed with Imported PU,
          <br /> Dimension: 1500mm x 765mm x 200mm."
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Mumbai <br /> Photography: Kiasma Studio
        </>
      ),
    },
  },
  {
    slug: "sculptural-totems",
    images: [
      { src: "/sculptural-totems-hyderabad-2025.webp", alt: "Sculptural Totems in Hyderabad, India, 2025" },
      { src: "/Arts/t10.webp", alt: "Sculptural Totems in Hyderabad, India" },
    ],
    caption: <>Sculptural Totems</>,
    details: {
      heading: "Sculptural Totems",
      location: "",
      description: (
        <>
          A series of vertical forms inspired by ancient totems, these sculptures merge cultural heritage <br /> with modern
          abstraction. Their faceted silhouettes and perforated patterns glow from within <br /> symbolizing inner light and
          shared human presence. Standing together they evoke unity <br /> ,quiet strength, and timeless storytelling
          through form and illumination.
        </>
      ),
      details: "Material: Corten Steel ",
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Hyderabad Arts Council
        </>
      ),
    },
  },
  {
    slug: "raging-st Changelistallions-2021",
    images: [
      { src: "/raging-stallions-chennai-2021.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" },
      { src: "/Arts/Chennai-Raging-Stallions.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" },
      { src: "/Arts/Raging-Stallions-Chennai.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" },
    ],
    caption: <>The Raging Stallions</>,
    details: {
      heading: "Stallions",
      location: "",
      description: (
        <>
          Curves hold an untamed power—fluid yet fierce, commanding yet free. To capture their essence is no easy feat.{" "}
          <br /> It demands more than form; it requires motion, rhythm, and soul. These raging stallions dance with light
          and weather, <br />their presence shifting with every passing moment. They pull you beyond the ordinary, igniting
          something primal, something wild. To witness them is to ride upon the wind, <br />to dance upon the brink like a
          flame— <i>Unbridled, Fearless, and Untamed.</i>
        </>
      ),
      details: (
        <>
          Material: Lightweight, Resilient Aluminum. <br />
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
  {
    slug: "wing-man",
    images: [
      { src: "/wing-man-dubai-2024.webp", alt: "The Wing Man Sculpture in Dubai, UAE, 2024" },
      { src: "/Arts/Dubai-Wing-Man-Event-2024.webp", alt: "The Wing Man Sculpture in Dubai" },
    ],
    caption: <>The Wing Man</>,
    details: {
      heading: "Wing Man",
      location: "",
      description: (
        <>
          A futuristic figure with outstretched wings, this sculpture represents ambition <br /> and the pursuit of
          limitless possibilities. Composed of angular, faceted planes in stainless steel <br /> it stands boldly in
          water—its reflective surfaces catching light like a beacon of progress. <br />The wing-like form suggests
          transcendence, freedom, and the relentless drive <br />to rise beyond boundaries. A symbol of visionary spirit
          and human evolution.
        </>
      ),
      details: (
        <>
          Material: Polished aluminum, LED lighting <br /> Height: 6 ft | Width: 2ft | Depth: 1.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
  {
    slug: "sole-gaze-2023",
    images: [{ src: "/sole-gaze-bangalore-2023.webp", alt: "The Sole Gaze Sculpture in Bangalore, India, 2023" }],
    caption: <>The Sole Gaze</>,
    details: {
      heading: "The Sole Gaze",
      location: "",
      description: (
        <>
          An introspective figure gazing upward, this bold, abstract face captures a moment of quiet reflection. <br />{" "}
          Crafted from corten steel, its simplified geometry and monolithic presence evoke timelessness and depth. <br />{" "}
          The upward gaze symbolizes contemplation, hope, and the enduring human quest <br /> for meaning amidst the chaos
          of a fast-paced world.
        </>
      ),
      details: "Material: Corten Steel",
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Hyderabad Design District
        </>
      ),
    },
  },
  {
    slug: "leaning-man",
    images: [
      { src: "/leaning-man-hyderabad-2023.webp", alt: "The Leaning Man Sculpture in Hyderabad, India, 2023" },
      { src: "/Arts/Hyderabad-Leaning-Man-Event-2023.webp", alt: "Leaning Man Sculpture" },
    ],
    caption: <>The Leaning Man</>,
    details: {
      heading: "The Leaning Man",
      location: "",
      description: (
        <>
          Set within a serene courtyard, this corten steel sculpture of a leaning figure gently emerges from the wall{" "}
          <br /> embodying curiosity and quiet observation. The adjacent waterbody and lush green backdrop <br /> enhance
          the meditative ambiance, while the folded, faceted form echoes the art of origami. <br />Together, the sculpture
          and its surroundings invite a moment of pause <br /> A space to Reflect, Reconnect, and Simply be.
        </>
      ),
      details: "Material: Corten steel",
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Hyderabad
        </>
      ),
    },
  },
  {
    slug: "meditating-lady",
    images: [
      { src: "/meditating-lady-goa-2018.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
      { src: "/Arts/Goa-Meditating-Lady-Sculpture-2018.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
      { src: "/Arts/Goa-Meditating-Lady-PV-Sindhu.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
    ],
    caption: <>The Meditating Lady</>,
    details: {
      heading: "The Meditating Lady",
      location: "",
      description: (
        <>
          A serene female figure in meditation, this layered steel sculpture embodies peace, balance, and inner strength.{" "}
          <br />Set against a lush, coastal backdrop, the form captures stillness in motion <br />each contour gently
          flowing into the next. Beside her stands Olympic champion PV Sindhu <br /> adding a powerful layer of grace and
          strength to this moment of quiet reflection in nature.
        </>
      ),
      details: (
        <>
          Material: Bronze, weathered patina <br />Height: 6 ft, Width: 2.7 ft, Depth: 2 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br />Commissioned for: Goa Serenity Project
        </>
      ),
    },
  },
  {
    slug: "etherea",
    images: [
      { src: "/etherea-chennai-2019.webp", alt: "Etherea Sculpture in Chennai, India, 2019" },
      { src: "/Arts/Etherea-Chennai.webp", alt: "Etherea Sculpture" },
    ],
    caption: <>Etherea</>,
    details: {
      heading: "E T H E R E A",
      location: "",
      description: (
        <>
          A delicate balance of light, air, and spirit, Etherea stands in quiet stillness, yet never truly still. Her glow
          lures nature into a silent dance, evoking an unspoken dialogue between form and perception. More than a fleeting
          vision,
          <br /> she resists a mere passing glance <i>Demanding pause, Thought, and Introspection.</i>
        </>
      ),
      details: "Material: Bronze, weathered patina",
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Uttandi, Chennai <br /> Landscape Design:
          Kiasma Studio
          <br />Photography: Ricken Desai
        </>
      ),
    },
  },
  {
    slug: "bonsai",
    images: [
      { src: "/bonsai-delhi-2024.webp", alt: "Bonsai Sculpture in Delhi, India, 2024" },
      { src: "/Arts/Bonsai-Delhi.webp", alt: "Bonsai Sculpture in Delhi, India, 2024" },
    ],
    caption: <>Bonsai</>,
    details: {
      heading: "Bonsai",
      location: "Delhi, India, 2024",
      description: (
        <>
          A minimalist interpretation of a bonsai tree, this sculptural form blends geometric precision with organic grace.{" "}
          <br />The faceted base, resembling a seed pod or vessel, anchors the upward-reaching black branches <br /> crafted
          from modular steel elements. Celebrating patience, growth, and the art of deliberate cultivation, <br />the piece
          invites contemplation of nature’s quiet resilience and the elegance of small-scale mastery.
        </>
      ),
      details: (
        <>
          Material: Stainless steel (branches) and coated mild steel (base), finished in Matte black and Metallic Gold{" "}
          <br />Height: 7.5 ft, Width: 3.5 ft, Depth: 3 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br />Commissioned for: Delhi Zen Gardens
        </>
      ),
    },
  },
  {
    slug: "nandi",
    images: [
      { src: "/nandi-pune-2020.webp", alt: "Nandi Sculpture in Pune, India, 2020" },
      { src: "/Arts/Nandi.webp", alt: "Nandi Sculpture " },
      { src: "/Arts/Nandi-Pune.webp", alt: "Nandi Sculpture " },
    ],
    caption: <>Nandi</>,
    details: {
      heading: "NANDI",
      location: "",
      description: (
        <>
          A symbol of devotion, patience, and strength, this angular Nandi sculpture stands poised in a bustling Pune
          residence <br /> embodying virtues of welcome and silent resilience deeply rooted in Indian tradition. <br /> It
          transcends ornamentation, serving as a spiritual anchor and timeless guardian, <br />radiating harmony and sacred
          presence.
        </>
      ),
      details: (
        <>
          Material: Mild steel with Matte black finish and Brass
          <br />Height: 4.5 ft, Width: 5.5 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Shivtirtha House, Pune <br /> Photography: FormForge
        </>
      ),
    },
  },
  {
    slug: "carefree-seat",
    images: [
      { src: "/carefree-seat-hyderabad-2022.webp", alt: "The Carefree Seat Sculpture in Hyderabad, India, 2022" },
      { src: "/Arts/carefree-seat.webp", alt: "Carefree seat corten steel" },
      { src: "/Arts/carefree-seat-hyderabad.webp", alt: "carefree seat corten steel sculpture " },
    ],
    caption: <>The Carefree Seat</>,
    details: {
      heading: "The Carefree Seat",
      location: "Hyderabad, India, 2022",
      description: (
        <>
          A functional sculpture of a relaxed figure seamlessly perched on a bench, this piece invites viewers <br />to
          pause, reflect, and embrace leisure. Its faceted, geometric form adds a modern sensibility <br /> to the serene
          garden setting, blurring the line between utility and art. A Quiet Companion to moments of rest.
        </>
      ),
      details: (
        <>
          Material: Mild steel with outdoor-grade PU coating in Corten finish <br />Height: 5 ft, Width: 2 ft, Depth: 2.5
          ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br />Commissioned for: Public Space, Hyderabad
        </>
      ),
    },
  },
  {
    slug: "bloom",
    images: [
      { src: "/bloom-delhi-2021.webp", alt: "Bloom Sculpture in Delhi, India, 2021" },
      { src: "/Arts/Bloom-Lotus.webp", alt: "Bloom Sculpture" },
    ],
    caption: <>Bloom</>,
    details: {
      heading: "B L O O M",
      location: "",
      description: (
        <>
          A poetic tribute to nature, Bloom unfolds with resilience and grace, embodying elegance in its purest form. <br />{" "}
          Rooted in serenity, this sculptural masterpiece flourishes in its refreshing surroundings. <br /> Inspired by our
          national flower, Bloom was born from a vision sparked at the India Design ID Fair 2020, <br />where the client
          was instantly drawn to our work. Designed to seamlessly merge with its space, <br /> it stands as an organic
          extension of nature. <br /> <i>An emblem of renewal, harmony, and timeless beauty.</i>
        </>
      ),
      details: (
        <>
          Material: Corten Steel & Brass
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Pune
        </>
      ),
    },
  },
  {
    slug: "reflective-pause",
    images: [{ src: "/reflective-pause-bangalore-2025.webp", alt: "Reflective Pause Sculpture in Bangalore, India, 2025" }],
    caption: <>Reflective Pause</>,
    details: {
      heading: "Reflective Pause",
      location: "Bangalore, India, 2025",
      description: (
        <>
          A sculptural bench wrapped around a tree, Reflective Pause invites stillness and connection <br /> with nature in
          the heart of the city. Crafted from mirror-polished stainless steel, its organic, fluid form <br /> captures
          surrounding reflections, creating a calming oasis for urban dwellers to Sit, breathe, and Reflect.
        </>
      ),
      details: (
        <>
          Material: Mirror-polished Stainless Steel <br />Height: 1.5 ft, Width: 6 ft, Depth: 5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for:Bangalore Urban Retreat
        </>
      ),
    },
  },
  {
    slug: "abstracta",
    images: [{ src: "/abstracta-delhi-2021.webp", alt: "Abstracta Sculpture in Delhi, India, 2021" }],
    caption: <>Abstracta</>,
    details: {
      heading: "Abstracta",
      location: "",
      description: (
        <>
          A bold, geometric sculpture, Abstracta invites open interpretation through its layered intersecting <br /> frames
          and dynamic angles. Set against a polished stone backdrop, its golden finish catches the light
          <br /> amplifying its presence as a celebration of Pure form, Freedom, and Artistic expression.
        </>
      ),
      details: (
        <>
          Material: Stainless steel with brushed Gold PVD Coating <br />Height: 4 ft, Width: 5 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Delhi Modern Art Gallery
        </>
      ),
    },
  },
  {
    slug: "buddha",
    images: [
      { src: "/buddha-bangalore-2023.webp", alt: "Buddha Sculpture in Bangalore, India, 2023" },
      { src: "/Arts/Gautam-Buddha.webp", alt: "Buddha Sculpture" },
    ],
    caption: <>Buddha</>,
    details: {
      heading: "Buddha",
      location: "",
      description: (
        <>
          A serene Buddha in meditation, this faceted sculpture offers a moment of stillness amidst the urban rush.
          <br /> It glows gently from within, symbolizing inner peace, balance, and spiritual awakening. <br /> Set within a
          moon gate frame, it becomes a portal to tranquility in the heart of the city.
        </>
      ),
      details: (
        <>
          Material: Corten steel with internal lighting <br />Height: 5.5 ft, Width: 4 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Bangalore Peace Foundation
        </>
      ),
    },
  },
  {
    slug: "sleeping-lotus",
    images: [
      { src: "/sleeping-lotus-delhi-2021.webp", alt: "The Sleeping Lotus Sculpture in Delhi, India, 2021" },
      { src: "/Arts/Corten-Steel-lotus.webp", alt: "The Sleeping Lotus Sculpture in Delhi, India, 2021" },
      { src: "/Arts/Steel-lotus.webp", alt: "The Sleeping Lotus Sculpture in Delhi, India, 2021" },
    ],
    caption: <>The Sleeping Lotus</>,
    details: {
      heading: "The Sleeping Lotus",
      location: "Delhi, India, 2021",
      description: (
        <>
          A sculptural interpretation of a closed lotus bud, Sleeping Lotus captures the stillness <br />and quiet strength
          of nature before awakening. Its organic curves and rhythmic layers <br />suggest latent energy and unfolding
          potential
          <br /> <i>A Celebration of Pause, Introspection, and the promise of Bloom.</i>
        </>
      ),
      details: (
        <>
          Material: Corten steel with natural patina <br />Height: 3.5 ft, Width: 3 ft, Length: 8 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Delhi Nature Society
        </>
      ),
    },
  },
  {
    slug: "raging-bull-2024",
    images: [
      { src: "/raging-bull-goa-2024.webp", alt: "Raging Bull Sculpture in Goa, India, 2024" },
      { src: "/Arts/Corten-Steel-Bull.webp", alt: "Raging Bull Sculpture" },
    ],
    caption: <>Raging Bull</>,
    details: {
      heading: "Raging Bull",
      location: "",
      description: (
        <>
          A force of unbridled power and raw intensity, Raging Bull captures the creature's wrath <br /> through a striking
          abstraction in Corten steel. Weathered to perfection, its dynamic form <br /> commands attention at the main
          entrance plaza of a private villa in Goa.
          <br />A bold expression of strength and dominance, it stands as a testament to resilience and untamed energy.
        </>
      ),
      details: (
        <>
          2mm Corten steel with a Weathered Finish. <br /> Dimensions: 12ft x 5ft <br /> Location: Goa <br />
          Landscape Curation: Kiasma Studio <br />
          Project Designer: Ameet Mirpuri
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private villa in Goa <br /> Photography: Kiasma Studio
        </>
      ),
    },
  },
  {
    slug: "raging-stallions-2021",
    images: [
      { src: "/raging-stallions-chennai_2021.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" },
      { src: "/Arts/Chennai-Raging-Stallions.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" },
      { src: "/Arts/Raging-Stallions-Chennai.webp", alt: "The Raging Stallions Sculpture in Chennai, India, 2021" },
    ],
    caption: <>The Raging Stallions</>,
    details: {
      heading: "Stallions",
      location: "",
      description: (
        <>
          Curves hold an untamed power—fluid yet fierce, commanding yet free. To capture their essence is no easy feat.{" "}
          <br /> It demands more than form; it requires motion, rhythm, and soul. These raging stallions dance with light
          and weather, <br />their presence shifting with every passing moment. They pull you beyond the ordinary, igniting
          something primal, something wild. To witness them is to ride upon the wind, <br />to dance upon the brink like a
          flame— <i>Unbridled, Fearless, and Untamed.</i>
        </>
      ),
      details: (
        <>
          Material: Lightweight, Resilient Aluminum. <br />
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
  {
    slug: "panthera",
    images: [
      { src: "/panthera-dubai-2020.webp", alt: "Panthera Sculpture in Dubai, UAE, 2020" },
      { src: "/Arts/00-1.webp", alt: "Panthera Sculpture in Dubai, UAE, 2020" },
    ],
    caption: <>Panthera</>,
    details: {
      heading: "Panthera ",
      location: "",
      description: (
        <>
          A shadow in motion, a whisper in the dark. It stands as the spirit of the night, a traveler between realms. <br />
          There is an enchantment in its soft, deliberate pounce, a quiet dignity in solitude. <br />
          Hollow yet alive, its sculpted form breathes with an ethereal presence. The faceted stainless steel surface,
          <br />like watered silk, shimmers with an otherworldly glow, shifting with light and movement. <br />
          A creature of instinct and elegance, it exists between reality and myth.
        </>
      ),
      details: (
        <>
          Material: 3mm Stainless Steel <br /> Dimensions: 7ft | 3ft | 1.8ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br />
        </>
      ),
    },
  },
  {
    slug: "aphrodia",
    images: [{ src: "/aphrodia-goa-2018.webp", alt: "Aphrodia Sculpture in Goa, India, 2018" }],
    caption: <>The Meditating Lady</>,
    details: {
      heading: "The Meditating Lady",
      location: "",
      description: (
        <>
          A serene female figure in meditation, this layered steel sculpture embodies peace, balance, and inner strength.{" "}
          <br />Set against a lush, coastal backdrop, the form captures stillness in motion, <br />each contour gently
          flowing into the next. Inviting calm, Presence, and Introspection.
        </>
      ),
      details: (
        <>
          Material: Bronze, weathered patina <br />Height: 6 ft, Width: 2.7 ft, Depth: 2 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br />Commissioned for: Goa Serenity Project
        </>
      ),
    },
  },
  {
    slug: "geomorph",
    images: [{ src: "/Arts/parametric-wall.webp", alt: "Geomorph Sculpture in Hyderabad, India, 2023" }],
    caption: <>Geomorph</>,
    details: {
      heading: "Geomorph",
      location: "",
      description: (
        <>
          An abstract representation of geological forms, this sculpture explores the interplay between nature and time.{" "}
          <br />Its sharp, faceted surfaces evoke the raw energy of tectonic shifts and erosion,
          <br /> frozen mid-transformation. Both monolithic and dynamic, it stands as a powerful reminder <br />of the
          Earth’s ever-evolving landscapes.
        </>
      ),
      details: (
        <>
          Material: Corten steel with weathered patina
          <br />Height: 7 ft | Width: 6 ft | Depth: 6 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br />Commissioned for: Hyderabad Earth Project
        </>
      ),
    },
  },
  {
    slug: "ballerina",
    images: [
      { src: "/ballerina-gurugram-2023.webp", alt: "Ballerina Sculpture in Gurugram, India, 2023" },
      { src: "/Arts/061.webp", alt: "Ballerina Sculpture in Gurugram, India, 2023" },
      { src: "/Arts/062.webp", alt: "Ballerina Sculpture in Gurugram, India, 2023" },
    ],
    caption: <>Ballerina</>,
    details: {
      heading: "Ballerina",
      location: "",
      description: (
        <>
          A graceful ballerina in mid-pose, this layered stainless steel sculpture captures the fluidity,
          <br /> discipline, and elegance of dance. Its rhythmic form and outstretched arms evoke movement <br />frozen in
          time, bringing life and energy to the modern interior it inhabits.
          <br />A celebration of poise, expression, and the art of stillness in motion.
        </>
      ),
      details: (
        <>
          Material: Stainless steel with brushed finish
          <br />Height: 8 ft, Width: 6 ft, Depth: 3 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br />Commissioned for: T.M.U University, Moradabad
        </>
      ),
    },
  },
   {
    slug: "The deer",
    images: [
      { src: "/Arts/111111.webp", alt: "Deer Sculpture, 2025" },
    ],
    caption: <>The deer</>,
    details: {
      heading: "The deer",
      location: "",
      description: (
        <>
          A sleek, wing-like form soaring upward, this dynamic sculpture symbolizes ambition, <br /> elevation, and the
          freedom of flight. Its fluid curves reflect light and movement, <br />creating a sense of lift and momentum
          within the space.
          <br />An ode to Progress, Aspiration, and Limitless Potential.
        </>
      ),
      details: (
        <>
          Material: Mirror-polished stainless steel
          <br />Height: 8 ft, Width: 6 ft, Depth: 3.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Gurugram Skyline Project
        </>
      ),
    },
  },
   {
    slug: "The Rhino",
    images: [
      { src: "/Arts/22222.webp", alt: "The Rhino Sculpture,2025 " },
    ],
    caption: <>The Rhino</>,
    details: {
      heading: "The Rhino",
      location: "",
      description: (
        <>
          A sleek, wing-like form soaring upward, this dynamic sculpture symbolizes ambition, <br /> elevation, and the
          freedom of flight. Its fluid curves reflect light and movement, <br />creating a sense of lift and momentum
          within the space.
          <br />An ode to Progress, Aspiration, and Limitless Potential.
        </>
      ),
      details: (
        <>
          Material: Mirror-polished stainless steel
          <br />Height: 8 ft, Width: 6 ft, Depth: 3.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Gurugram Skyline Project
        </>
      ),
    },
  },
   {
    slug: "The whale fin",
    images: [
      { src: "/Arts/3333333.webp", alt: "The whale Sculpture , 2025" },
    ],
    caption: <>The whale fin</>,
    details: {
      heading: "The whale fin",
      location: "",
      description: (
        <>
          A sleek, wing-like form soaring upward, this dynamic sculpture symbolizes ambition, <br /> elevation, and the
          freedom of flight. Its fluid curves reflect light and movement, <br />creating a sense of lift and momentum
          within the space.
          <br />An ode to Progress, Aspiration, and Limitless Potential.
        </>
      ),
      details: (
        <>
          Material: Mirror-polished stainless steel
          <br />Height: 8 ft, Width: 6 ft, Depth: 3.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Gurugram Skyline Project
        </>
      ),
    },
  },






































  {
    slug: "wing-sculpture",
    images: [
      { src: "/wing-sculpture-gurugram-2022.webp", alt: "The Wing Sculpture modern metal installation in Gurugram, India, 2022" },
      { src: "/Arts/301.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
    ],
    caption: <>The Wing Sculpture</>,
    details: {
      heading: "The Wing Sculpture",
      location: "",
      description: (
        <>
          A sleek, wing-like form soaring upward, this dynamic sculpture symbolizes ambition, <br /> elevation, and the
          freedom of flight. Its fluid curves reflect light and movement, <br />creating a sense of lift and momentum
          within the space.
          <br />An ode to Progress, Aspiration, and Limitless Potential.
        </>
      ),
      details: (
        <>
          Material: Mirror-polished stainless steel
          <br />Height: 8 ft, Width: 6 ft, Depth: 3.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Gurugram Skyline Project
        </>
      ),
    },
  },
  {
    slug: "dreaming-of-dharma",
    images: [
      { src: "/dreaming-of-dharma-noida-2024.webp", alt: "Dreaming of Dharma spiritual sculpture in Noida, India, 2024" },
      { src: "/Arts/Gautam-Buddhaa.webp", alt: "Gautam Buddha meditation sculpture artwork, India, 2018" },
      { src: "/Arts/b08.webp", alt: "Gautam Buddha meditative sculpture, India, 2018" },      
    ],
    caption: <>Dreaming Of Dharma</>,
    details: {
      heading: "Dreaming Of Dharma",
      location: "",
      description: (
        <>
          A meditative form inspired by Buddhist principles, this layered sculpture evokes a state of inner calm <br /> and
          spiritual awakening. Its gentle posture and fluid contours invite viewers to reflect on harmony,
          <br /> mindfulness, and the quiet power of stillness.
          <br />A sculptural embodiment of Dharma in the midst of modern life.
        </>
      ),
      details: (
        <>
          Material: Stainless steel with satin finish <br />Height: 6.5 ft | Width: 4 ft | Depth: 5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Noida Spiritual Trust
        </>
      ),
    },
  },
  {
    slug: "skyward-bound",
    images: [{ src: "/Arts/1011.webp", alt: "Skyward Bound dynamic steel sculpture in Delhi, India, 2024" }],
    caption: <>Skyward Bound</>,
    details: {
      heading: "Skyward Bound",
      location: "",
      description: (
        <>
          A dynamic upward spiral embodied in the form of a poised bird, Skyward Bound represents aspiration, clarity{" "}
          <br /> and the relentless pursuit of progress. Its origami-inspired geometry captures elegance in motion. <br />
          Standing tall as a symbol of resilience and focused determination. A powerful metaphor for rising above.
        </>
      ),
      details: (
        <>
          Material: Corten steel with weathered finish
          <br />Height: 7 ft | Width: 3 ft | Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Delhi Development Authority
        </>
      ),
    },
  },
  {
    slug: "seed",
    images: [{ src: "/seed-mumbai-2024.webp", alt: "Seed nature-inspired art sculpture in Mumbai, India, 2024" }],
    caption: <>Seed</>,
    details: {
      heading: "Seed",
      location: "",
      description: (
        <>
          A simple yet profound seed form, this sculpture captures the essence of potential, growth <br /> and the origins
          of life. Its fluid, organic curves rise gently upward, echoing nature’s quiet strength <br />and the journey from
          stillness to bloom.
          <br />A timeless symbol of new beginnings and rooted resilience.
        </>
      ),
      details: (
        <>
          Material: Corten steel with polygonal surface treatment
          <br />Height: 7.5 ft | Width: 3.5 ft | Depth: 3 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
  {
    slug: "raging-bull-goa-2024",
    images: [{ src: "/raging-bull-goa_2024.webp", alt: "Raging Bull powerful metal sculpture in Goa, India, 2024" }],
    caption: <>Raging Bull</>,
    details: {
      heading: "Raging Bull",
      location: "",
      description: (
        <>
          A powerful bull in mid-charge, this faceted sculpture captures raw energy, determination, and untamed spirit.{" "}
          <br />Set against a lush coastal backdrop, its angular form amplifies strength and momentum, <br /> An emblem of
          resilience and forward drive. Standing proudly beside it is Olympic champion PV Sindhu,
          <br /> embodying the same fierce grace and unstoppable force.
        </>
      ),
      details: (
        <>
          Material: Mild steel with weathered patina finish
          <br />Height: 5 ft, Width: 7 ft, Depth: 3 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
  {
    slug: "ganapati",
    images: [
      { src: "/ganapati-dxb-uae-2024.webp", alt: "Ganapati Hindu deity sculpture in Dubai UAE, 2024" },
      { src: "/Arts/Ganeshji-Project.webp", alt: "Ganeshji deity sculpture art project, India, 2018" },
      { src: "/Arts/Ganeshji.webp", alt: "Ganeshji sculpture artwork, India, 2018" }
    ],
    caption: <>Ganapati</>,
    details: {
      heading: "Ganapati",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },







































  {
    slug: "Performer",
    images: [
      { src: "/Arts/1211.webp", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Performer</>,
    details: {
      heading: "Performer",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },

  {
    slug: "ganapati",
    images: [
      { src: "/Arts/5012.webp", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Table</>,
    details: {
      heading: "Performer",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
  {
    slug: "ganapati",
    images: [
      { src: "/Arts/Crescent1.png", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Crescent</>,
    details: {
      heading: "Performer",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },

  {
    slug: "wall",
    images: [
      { src: "/Arts/wall1.png", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>wall</>,
    details: {
      heading: "wall",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },

  {
    slug: "solemn",
    images: [
      { src: "/solemn-mumbai-2021.webp", alt: "Solemn contemporary sculpture in Mumbai, India, 2021" },
      { src: "/Arts/c1.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
      { src: "/Arts/c2.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
    ],
    caption: <>Solemn</>,
    details: {
      heading: "Solemn",
      location: "",
      description: (
        <>
          Where the unseen becomes art. In the expansive <b>KPMG foyer, Mumbai</b>, <b>Solemn</b> commands attention{" "}
          <br />bold from one angle, vanishing from another. Layered to play with light and illusion, it’s not just a
          sculpture, <br /> but an ever-shifting experience of strength and mystery.
        </>
      ),
      details: (
        <>
          Vanishing sculpture crafted from Stainless steel with a matte black finish. <br /> Dimensions: 1800mm x 1500mm x
          675mm
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: KPMG, Mumbai <br /> Photography: KPMG
        </>
      ),
    },
  },


  {
    slug: "Bull",
    images: [
      { src: "/Arts/bulll.png", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Bull</>,
    details: {
      heading: "Bull",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
   {
    slug: "ganapati",
    images: [
      { src: "/Arts/1212.png", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Shivji</>,
    details: {
      heading: "Performer",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },

 {
    slug: "ganapati",
    images: [
      { src: "/Arts/10999.png", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Wall Art</>,
    details: {
      heading: "Performer",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },

   {
    slug: "Butterfly head",
    images: [
      { src: "/Arts/304.png", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Butterfly head</>,
    details: {
      heading: "Butterfly head",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
   {
    slug: "ganapati",
    images: [
      { src: "/Arts/891.png", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>wall</>,
    details: {
      heading: "wall",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },

   {
    slug: "ganapati",
    images: [
      { src: "/Arts/000.webp", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Performer</>,
    details: {
      heading: "Performer",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
   {
    slug: "ganapati",
    images: [
      { src: "/Arts/2076.png", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Performer</>,
    details: {
      heading: "Performer",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
   {
    slug: "Bar Table",
    images: [
      { src: "/Arts/444.webp", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Bar Table</>,
    details: {
      heading: "Bar Table",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
   {
    slug: "Cactus",
    images: [
      { src: "/Arts/555.webp", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Cactilome</>,
    details: {
      heading: "Cactilome",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
   {
    slug: "ganapati",
    images: [
      { src: "/Arts/666.webp", alt: "Ganeshji deity sculpture art project, India, 2018" },
    ],
    caption: <>Performer</>,
    details: {
      heading: "Performer",
      location: "",
      description: (
        <>
          A modern rendition of Lord Ganesha, this faceted sculpture reimagines the divine form <br /> with clean geometry
          and minimalist expression. Blending tradition with innovation,
          <br /> it honors wisdom, prosperity, and the spirit of new beginnings, <br />making it a powerful presence in any
          contemporary setting.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
  },
  
  ];