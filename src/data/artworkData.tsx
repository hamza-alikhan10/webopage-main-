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
  // SEO Enhancement Fields
  seo: {
    title: string;
    metaDescription: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    twitterCard: string;
    canonicalUrl: string;
  };
  schema: {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    image: string[];
    creator: {
      "@type": string;
      name: string;
    };
    dateCreated: string;
    artMedium: string;
    artworkSurface?: string;
    width?: string;
    height?: string;
    depth?: string;
    locationCreated?: string;
    url: string;
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
    seo: {
      title: "Twin Spirits - Contemporary Stainless Steel Sculpture by Abhinav Goyal | Chennai 2023",
      metaDescription: "Twin Spirits: A stunning 10ft contemporary outdoor sculpture in stainless steel by artist Abhinav Goyal. Explores duality through complementary forms. Chennai, India 2023.",
      keywords: ["contemporary sculpture", "stainless steel art", "outdoor sculpture", "Abhinav Goyal", "Chennai sculpture", "modern art installation", "twin spirits"],
      ogTitle: "Twin Spirits - Stainless Steel Sculpture by fromforge ",
      ogDescription: "Discover Twin Spirits, a magnificent 10ft stainless steel sculpture exploring duality and harmony. Created by renowned artist Abhinav Goyal in Chennai, 2023.",
      ogImage: "/Arts/twin-spirits-sculpture-chennai-2023.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/twin-spirits"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Twin Spirits",
      description: "Twin Spirits explores the duality of human existence through contrasting yet complementary forms. The sculpture represents the harmony between opposing forces in nature and within ourselves.",
      image: [
        "/Arts/twin-spirits-sculpture-chennai-2023.webp",
        "/Arts/twin-spirits-stainless-steel-sculpture.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2023",
      artMedium: "Stainless Steel",
      artworkSurface: "Ultramarine PU Finish",
      height: "10 feet",
      locationCreated: "Chennai, India",
      url: "/artwork/twin-spirits"
    }
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
    seo: {
      title: "Metamorphosis Muse - Golden Butterfly Sculpture by Abhinav Goyal | Hyderabad 2025",
      metaDescription: "The Metamorphosis Muse: Divine transformation sculpture with golden butterflies. Stainless steel with satin brass finish by Abhinav Goyal. Hyderabad 2025.",
      keywords: ["metamorphosis sculpture", "golden butterfly art", "transformation sculpture", "Abhinav Goyal", "Hyderabad art", "indoor sculpture", "goddess sculpture", "sculpture with shalini passi",],
      ogTitle: "The Metamorphosis Muse - Divine Transformation Sculpture",
      ogDescription: "Experience the divine embodiment of transformation with golden butterflies symbolizing rebirth and evolution. A masterpiece by Abhinav Goyal.",
      ogImage: "/Arts/golden-butterfly-sculpture-hyderabad-2025.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/metamorphosis-muse"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "The Metamorphosis Muse",
      description: "A divine embodiment of transformation, radiates grace and power, adorned with golden butterflies that symbolize rebirth and evolution.",
      image: [
        "/Arts/golden-butterfly-sculpture-hyderabad-2025.webp",
        "/Arts/abstract-meditating-lady-sculpture-goa-2018.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Stainless Steel",
      artworkSurface: "Satin Brass Finish",
      height: "1800mm",
      width: "690mm",
      locationCreated: "Hyderabad, India",
      url: "/artwork/metamorphosis-muse"
    }
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
    seo: {
      title: "Vighnaharta - Contemporary Ganesha Sculpture by Abhinav Goyal | Mumbai 2022",
      metaDescription: "Vighnaharta: Modern interpretation of Lord Ganesha sculpture. Stainless steel with weatherproof finish. Merges traditional symbolism with contemporary design. Mumbai 2022.",
      keywords: ["Ganesha sculpture", "Vighnaharta", "contemporary religious art", "Abhinav Goyal", "Mumbai sculpture", "spiritual art", "modern Ganesha", ],
      ogTitle: "Vighnaharta - Contemporary Lord Ganesha Sculpture",
      ogDescription: "Experience the divine power of Vighnaharta, a modern interpretation of Lord Ganesha that merges traditional symbolism with contemporary artistry.",
      ogImage: "/vighnaharta-mumbai-2022.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/vighnaharta"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Vighnaharta",
      description: "Inspired by Lord Ganesha, the remover of obstacles. Merging traditional symbolism with contemporary design, the sculpture embodies prosperity, wisdom, and strength.",
      image: [
        "/vighnaharta-mumbai-2022.webp",
        "/Ganesha.webp",
        "/Ganeshji.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2022",
      artMedium: "Stainless Steel",
      artworkSurface: "Antique coating PU (Weatherproof)",
      height: "1800mm",
      width: "985mm",
      depth: "1545mm",
      locationCreated: "Mumbai, India",
      url: "/artwork/vighnaharta"
    }
  },
  {
    slug: "david",
    images: [
      { src: "/david-casamia-uae-2021.webp", alt: "David Sculpture at Casamia, UAE, 2021" },
      { src: "/Arts/501.webp", alt: "David Sculpture made of corten steel" },
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
    seo: {
      title: "David - Modern Interpretation of Michelangelo's Masterpiece | Dubai 2021 | Abhinav Goyal",
      metaDescription: "Contemporary David sculpture: Abstract reinterpretation of Michelangelo's David in stainless steel. Backlit masterpiece at Palm Jumeirah, Dubai by Abhinav Goyal.",
      keywords: ["David sculpture", "Michelangelo reinterpretation", "contemporary classical art", "Dubai sculpture", "Palm Jumeirah art", "Abhinav Goyal", "stainless steel David"],
      ogTitle: "David - Contemporary Classical Sculpture in Dubai",
      ogDescription: "Discover the modern interpretation of Michelangelo's David, featuring asymmetrical metal plates and striking light interplay at Palm Jumeirah, Dubai.",
      ogImage: "/david-casamia-uae-2021.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/david"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "David",
      description: "An abstract reinterpretation of Michelangelo's David redefines classical artistry with a bold, modern twist, merging timeless form with contemporary expression.",
      image: [
        "/david-casamia-uae-2021.webp",
        "/Arts/501.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2021",
      artMedium: "Stainless Steel",
      artworkSurface: "Antique coating PU (Weatherproof)",
      height: "1800mm",
      width: "720mm",
      depth: "475mm",
      locationCreated: "Dubai, UAE",
      url: "/artwork/david"
    }
  },
  {
    slug: "lotus-nouvel",
    images: [{ src: "/lotus-nouvel-pune-2020.webp", alt: "Lotus Nouvel Sculpture made of corten steel" }],
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
    seo: {
      title: "Lotus Nouvel - Organic Corten Steel Sculpture by Abhinav Goyal | Pune 2020",
      metaDescription: "Lotus Nouvel: Nature-inspired corten steel sculpture with weathered rust finish. Embodies growth and transformation cycles. Pune 2020 by Abhinav Goyal.",
      keywords: ["lotus sculpture", "corten steel art", "nature inspired sculpture", "Pune art", "organic sculpture", "Abhinav Goyal", "weathered steel art"],
      ogTitle: "The Lotus Nouvel - Nature's Rhythm in Steel",
      ogDescription: "Experience nature's rhythm in sculptural form. The Lotus Nouvel celebrates the endless cycles of growth and transformation in weathered corten steel.",
      ogImage: "/lotus-nouvel-pune-2020.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/lotus-nouvel"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "The Lotus Nouvel",
      description: "Where Nature's rhythm takes form. Inspired by the seamless processes of replication and locomotion, this sculpture blurs the boundaries between reality and fantasy.",
      image: ["/lotus-nouvel-pune-2020.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2020",
      artMedium: "Corten Steel",
      artworkSurface: "Rust with imported PU",
      height: "1635mm",
      width: "1180mm",
      depth: "1850mm",
      locationCreated: "Pune, India",
      url: "/artwork/lotus-nouvel"
    }
  },
  {
    slug: "mermaid-ohllnam",
    images: [
      { src: "/mermaid-ohl-nam-vadodara-2022.webp", alt: "Mermaid Sculpture in Vadodara, India, 2022" },
      { src: "/Arts/131.webp", alt: "Oh'll'nam Sculpture Series by Abhinav Goyal made of corten steel"  },
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
    seo: {
      title: "Mermaid & Oh'll'nam Sculptures at Parul University Vadodara | Abhinav Goyal 2022",
      metaDescription: "Mermaid & Oh'll'nam sculpture series at Parul University. Whimsical corten steel sculptures blending myth with modern artistry. Vadodara 2022 by Abhinav Goyal.",
      keywords: ["mermaid sculpture", "university art installation", "Parul University Vadodara", "corten steel sculpture", "Abhinav Goyal", "contemporary campus art"],
      ogTitle: "Mermaid & Oh'll'nam - Mythical Contemporary Sculptures",
      ogDescription: "Discover the harmonious dialogue between myth and modernity with Mermaid and Oh'll'nam sculptures at Parul University, Vadodara.",
      ogImage: "/mermaid-ohl-nam-vadodara-2022.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/mermaid-ohllnam"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Mermaid | Oh'll'nam",
      description: "A whimsical mermaid blends myth with modern artistry, evoking mystery and fluidity, while Oh'll'Nam sits as a symbol of silence and peace.",
      image: [
        "/mermaid-ohl-nam-vadodara-2022.webp",
        "/Arts/131.webp",
        "/Arts/m01.webp",
        "/Arts/m00.webp",
        "/Arts/o'll.webp",
        "/Arts/11.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2022",
      artMedium: "Corten Steel",
      artworkSurface: "Rust with imported PU",
      height: "1200mm",
      locationCreated: "Vadodara, India",
      url: "/artwork/mermaid-ohllnam"
    }
  },
  {
    slug: "levitating-whale",
    images: [
      { src: "/levitating-whale-kpmg-gurugram-2022.webp", alt: "Levitating Whale Sculpture at KPMG, Gurugram, India, 2022" },
      { src: "/Arts/whale-kpmg-project.webp", alt: "Levitating Whale Sculpture made of corten steel" },
    ],
    caption: <>Levitating Whale </>,
    details: {
      heading: "Levitating Whale",
      location: "",
      description: (
        <>
         Suspended in midair, this surreal and whimsical masterpiece blurs the line between reality and imagination.
It floats in the vestibule, the vibrant heart of this workplace, drawing focus with its raw, weathered beauty.
<br /> <b>A chime that takes your breath away.</b>

<br /> This sculptural installation speaks to the rising demand for suspended art sculptures, modern corten steel installations, and statement pieces for corporate lobbies that spark wonder and conversation.
        </>
      ),
      details: (
        <>
          Material: Corten Steel <br /> Dimensions: 15 ft (L) x 5 ft 5 in (Dia.)
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: KPMG, Bengaluru <br /> Photography: Kiasma Studio
        </>
      ),
    },
    seo: {
      title: "Levitating Whale - Suspended Corten Steel Sculpture at KPMG Gurugram | Abhinav Goyal 2022",
      metaDescription: "Levitating Whale: Surreal 15ft suspended corten steel sculpture at KPMG Gurugram. Masterpiece blurring reality and imagination by Abhinav Goyal 2022.",
      keywords: ["levitating whale", "suspended sculpture", "KPMG Gurugram", "corporate art installation", "corten steel whale", "Abhinav Goyal", "surreal sculpture"],
      ogTitle: "Levitating Whale - Suspended Masterpiece at KPMG",
      ogDescription: "Experience the breathtaking Levitating Whale, a 15ft suspended sculpture that hovers in mid-air, commanding attention with its raw, weathered beauty.",
      ogImage: "/levitating-whale-kpmg-gurugram-2022.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/levitating-whale"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Levitating Whale",
      description: "Suspended in mid-air, this surreal and whimsical masterpiece blurs the line between reality and imagination, commanding attention with its raw, weathered beauty.",
      image: [
        "/levitating-whale-kpmg-gurugram-2022.webp",
        "/Arts/whale-kpmg-project.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2022",
      artMedium: "Corten Steel",
      width: "15 feet",
      height: "5 feet 5 inches",
      locationCreated: "Gurugram, India",
      url: "/artwork/levitating-whale"
    }
  },
  {
    slug: "tree-of-life",
    images: [{ src: "/tree-of-life-delhi-2025.webp", alt: "Tree Sculpture made of corten steel" }],
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
          Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, New Delhi
        </>
      ),
    },
    seo: {
      title: "Tree of Life - Geometric Corten Steel Sculpture by Abhinav Goyal | New Delhi 2025",
      metaDescription: "Tree of Life: Bold geometric corten steel sculpture with faceted trunk and angular branches. Symbol of interconnectedness and growth. New Delhi 2025 by Abhinav Goyal.",
      keywords: ["tree of life sculpture", "geometric tree art", "corten steel tree", "New Delhi sculpture", "interconnectedness art", "Abhinav Goyal", "contemporary tree sculpture"],
      ogTitle: "Tree of Life - Symbol of Interconnectedness in Steel",
      ogDescription: "Experience the bold geometric Tree of Life sculpture, embodying strength, resilience, and the enduring vitality of nature in warm, rust-hued corten steel.",
      ogImage: "/tree-of-life-delhi-2025.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/tree-of-life"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Tree of Life",
      description: "A bold symbol of interconnectedness and growth, this geometric tree sculpture features a faceted trunk that twists upward, splitting into intricate, angular branches.",
      image: ["/tree-of-life-delhi-2025.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Corten Steel",
      locationCreated: "New Delhi, India",
      url: "/artwork/tree-of-life"
    }
  },
  {
    slug: "inverted-cactus",
    images: [
      { src: "/inverted-cactus-hyderabad-2023.webp", alt: "Inverted Cactus Sculpture in Hyderabad" },
      { src: "/Arts/inverted-cactus-corten-steel.webp", alt: "Inverted Cactus Sculpture made up of corten steel" },
    ],
    caption: <>Inverted Cactus</>,
    details: {
      heading: "Inverted Cactus",
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
          <br /> Dimension: 1500mm x 765mm x 200mm.
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Mumbai <br /> Photography: Kiasma Studio
        </>
      ),
    },
    seo: {
      title: "Inverted Cactus - Suspended Corten Steel Sculpture by Abhinav Goyal | Hyderabad 2023",
      metaDescription: "Inverted Cactus: Mesmerizing suspended corten steel sculpture with rusted PU finish and integrated lighting. Hyderabad 2023 by Abhinav Goyal.",
      keywords: ["inverted cactus sculpture", "suspended art", "corten steel sculpture", "Hyderabad art", "illuminated sculpture", "Abhinav Goyal", "modern desert art"],
      ogTitle: "Inverted Cactus - Illuminated Desert Oasis Sculpture",
      ogDescription: "Discover Inverted Cactus, a suspended corten steel sculpture with warm, rusted tones and soft lighting, transforming spaces into enchanting oases.",
      ogImage: "/inverted-cactus-hyderabad-2023.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/inverted-cactus"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Inverted Cactus",
      description: "A mesmerizing fusion of nature and design, Inverted Cactus reimagines the iconic desert form as a suspended, illuminated sculpture with warm, earthy tones.",
      image: [
        "/inverted-cactus-hyderabad-2023.webp",
        "/Arts/012.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2023",
      artMedium: "Corten Steel",
      artworkSurface: "Rust with Imported PU",
      height: "1500mm",
      width: "765mm",
      depth: "200mm",
      locationCreated: "Hyderabad, India",
      url: "/artwork/inverted-cactus"
    }
  },
  {
    slug: "sculptural-totems",
    images: [
      { src: "/sculptural-totems-hyderabad-2025.webp", alt: "Sculptural Totems in Hyderabad, India, 2025" },
      { src: "/Arts/t10.webp", alt: "Sculptural Totems made up of corten steel" },
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
      details: "Material: Corten Steel",
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Hyderabad Arts Council
        </>
      ),
    },
    seo: {
      title: "Sculptural Totems - Modern Abstract Corten Steel Art by Abhinav Goyal | Hyderabad 2025",
      metaDescription: "Sculptural Totems: Vertical corten steel sculptures with perforated patterns, symbolizing unity and inner light. Hyderabad 2025 by Abhinav Goyal.",
      keywords: ["sculptural totems", "corten steel art", "modern abstract sculpture", "Hyderabad art", "cultural heritage art", "Abhinav Goyal", "illuminated totems"],
      ogTitle: "Sculptural Totems - Unity in Modern Abstraction",
      ogDescription: "Explore Sculptural Totems, a series of corten steel sculptures that blend cultural heritage with modern abstraction, glowing with inner light and unity.",
      ogImage: "/sculptural-totems-hyderabad-2025.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/sculptural-totems"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Sculptural Totems",
      description: "A series of vertical forms inspired by ancient totems, these sculptures merge cultural heritage with modern abstraction, glowing with perforated patterns.",
      image: [
        "/sculptural-totems-hyderabad-2025.webp",
        "/Arts/t10.webp"
     

],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Corten Steel",
      locationCreated: "Hyderabad, India",
      url: "/artwork/sculptural-totems"
    }
  },
  {
    slug: "raging-stallions-2021",
    images: [
      { src: "/raging-stallions-chennai-2021.webp", alt: "Horse Sculpture in Chennai" },
      { src: "/Arts/Chennai-Raging-Stallions.webp", alt: "The Raging Stallions Sculpture made of stainless steel" },
      { src: "/Arts/Raging-Stallions-Chennai.webp", alt: "Horse Sculpture in Chennai" },
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
    seo: {
      title: "Raging Stallions - Dynamic Aluminum Sculpture by Abhinav Goyal | Chennai 2021",
      metaDescription: "Raging Stallions: Dynamic aluminum sculpture capturing the untamed power of horses. Fluid, fierce, and free. Chennai 2021 by Abhinav Goyal.",
      keywords: ["raging stallions", "horse sculpture", "aluminum art", "Chennai sculpture", "dynamic sculpture", "Abhinav Goyal", "contemporary horse art"],
      ogTitle: "Raging Stallions - Untamed Power in Aluminum",
      ogDescription: "Experience the Raging Stallions, a dynamic aluminum sculpture that captures the fluid, fierce essence of horses, igniting a primal connection.",
      ogImage: "/raging-stallions-chennai-2021.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/raging-stallions-2021"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Raging Stallions",
      description: "A dynamic aluminum sculpture capturing the untamed power of horses, with fluid curves and fierce presence that shifts with light and weather.",
      image: [
        "/raging-stallions-chennai-2021.webp",
        "/Arts/Chennai-Raging-Stallions.webp",
        "/Arts/Raging-Stallions-Chennai.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2021",
      artMedium: "Aluminum",
      locationCreated: "Chennai, India",
      url: "/artwork/raging-stallions-2021"
    }
  },
  {
    slug: "wing-man",
    images: [
      { src: "/wing-man-dubai-2024.webp", alt: "The Wing Man Sculpture in Dubai, UAE, 2024" },
      { src: "/Arts/Dubai-Wing-Man-Event-2024.webp", alt: "The Wing Man Sculpture made of corten steel" },
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
          Artist: Abhinav Goyal  <br /> Commissioned for: Private Residence, Dubai
        </>
      ),
    },
    seo: {
      title: "Wing Man - Futuristic Aluminum Sculpture by Abhinav Goyal | Dubai 2024",
      metaDescription: "Wing Man: Futuristic polished aluminum sculpture with LED lighting, symbolizing ambition and transcendence. Dubai 2024 by Abhinav Goyal.",
      keywords: ["wing man sculpture", "futuristic art", "aluminum sculpture", "Dubai art", "transcendence sculpture", "Abhinav Goyal", "LED art installation"],
      ogTitle: "Wing Man - Symbol of Visionary Ambition",
      ogDescription: "Discover Wing Man, a futuristic aluminum sculpture with LED lighting, standing in water as a beacon of progress and limitless possibilities.",
      ogImage: "/wing-man-dubai-2024.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/wing-man"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Wing Man",
      description: "A futuristic figure with outstretched wings, symbolizing ambition and transcendence, crafted in polished aluminum with LED lighting.",
      image: [
        "/wing-man-dubai-2024.webp",
        "/Arts/Dubai-Wing-Man-Event-2024.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2024",
      artMedium: "Polished Aluminum",
      artworkSurface: "LED Lighting",
      height: "6 feet",
      width: "2 feet",
      depth: "1.5 feet",
      locationCreated: "Dubai, UAE",
      url: "/artwork/wing-man"
    }
  },
  {
    slug: "sole-gaze-2023",
    images: [{ src: "/sole-gaze-bangalore-2023.webp", alt: "The Sole Gaze Sculpture made of corten steel" }],
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
    seo: {
      title: "Sole Gaze - Abstract Corten Steel Sculpture by Abhinav Goyal | Bangalore 2023",
      metaDescription: "Sole Gaze: Abstract corten steel sculpture of an introspective figure, symbolizing contemplation and hope. Bangalore 2023 by Abhinav Goyal.",
      keywords: ["sole gaze sculpture", "abstract face art", "corten steel sculpture", "Bangalore art", "contemplative sculpture", "Abhinav Goyal", "modern reflective art"],
      ogTitle: "Sole Gaze - Reflection in Corten Steel",
      ogDescription: "Explore Sole Gaze, an abstract corten steel sculpture capturing quiet reflection and the human quest for meaning with a bold, monolithic presence.",
      ogImage: "/sole-gaze-bangalore-2023.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/sole-gaze-2023"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Sole Gaze",
      description: "An introspective figure gazing upward, this bold, abstract corten steel sculpture captures quiet reflection and the human quest for meaning.",
      image: ["/sole-gaze-bangalore-2023.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2023",
      artMedium: "Corten Steel",
      locationCreated: "Bangalore, India",
      url: "/artwork/sole-gaze-2023"
    }
  },
  {
    slug: "leaning-man",
    images: [
      { src: "/leaning-man-hyderabad-2023.webp", alt: "Leaning Man Sculpture in Hyderabad, India, 2023" },
      { src: "/Arts/Hyderabad-Leaning-Man-Event-2023.webp", alt: "Leaning Man Sculpture made of corten steel" },
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
    seo: {
      title: "Leaning Man - Corten Steel Sculpture by Abhinav Goyal | Hyderabad 2023",
      metaDescription: "Leaning Man: Corten steel sculpture emerging from a wall, evoking curiosity and calm. Hyderabad 2023 by Abhinav Goyal.",
      keywords: ["leaning man sculpture", "corten steel art", "Hyderabad sculpture", "origami-inspired art", "meditative sculpture", "Abhinav Goyal", "courtyard art"],
      ogTitle: "Leaning Man - Meditative Corten Steel Art",
      ogDescription: "Discover Leaning Man, a corten steel sculpture that invites pause and reflection, blending origami-inspired form with a serene courtyard setting.",
      ogImage: "/leaning-man-hyderabad-2023.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/leaning-man"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Leaning Man",
      description: "A corten steel sculpture of a leaning figure emerging from a wall, evoking curiosity and calm with an origami-inspired form in a serene courtyard.",
      image: [
        "/leaning-man-hyderabad-2023.webp",
        "/Arts/Hyderabad-Leaning-Man-Event-2023.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2023",
      artMedium: "Corten Steel",
      locationCreated: "Hyderabad, India",
      url: "/artwork/leaning-man"
    }
  },
  {
    slug: "meditating-lady",
    images: [
      { src: "/meditating-lady-goa-2018.webp", alt: "The Meditating Lady Sculpture in Goa, India, 2018" },
      { src: "/Arts/Goa-Meditating-Lady-Sculpture-2018.webp", alt: "Meditating Lady Sculpture made of stainless steel" },
      { src: "/Arts/Goa-Meditating-Lady-PV-Sindhu.webp", alt: "Meditating Lady Sculpture in Goa" },
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
    seo: {
      title: "Meditating Lady - Bronze Sculpture by Abhinav Goyal | Goa 2018",
      metaDescription: "Meditating Lady: Serene bronze sculpture embodying peace and strength, set against Goa's coastal backdrop. 2018 by Abhinav Goyal.",
      keywords: ["meditating lady sculpture", "bronze art", "Goa sculpture", "serenity art", "PV Sindhu", "Abhinav Goyal", "coastal art installation"],
      ogTitle: "Meditating Lady - Serenity in Bronze",
      ogDescription: "Experience Meditating Lady, a bronze sculpture capturing peace and strength, enhanced by the presence of PV Sindhu against Goa's lush backdrop.",
      ogImage: "/meditating-lady-goa-2018.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/meditating-lady"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Meditating Lady",
      description: "A serene female figure in meditation, this layered bronze sculpture embodies peace, balance, and inner strength, set against a lush coastal backdrop.",
      image: [
        "/meditating-lady-goa-2018.webp",
        "/Arts/Goa-Meditating-Lady-Sculpture-2018.webp",
        "/Arts/Goa-Meditating-Lady-PV-Sindhu.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2018",
      artMedium: "Bronze",
      artworkSurface: "Weathered Patina",
      height: "6 feet",
      width: "2.7 feet",
      depth: "2 feet",
      locationCreated: "Goa, India",
      url: "/artwork/meditating-lady"
    }
  },
  {
    slug: "etherea",
    images: [
      { src: "/etherea-chennai-2019.webp", alt: "Etherea Sculpture in Chennai, India, 2019" },
      { src: "/Arts/Etherea-Chennai.webp", alt: "Etherea Sculpture made of stainless steel" },
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
    seo: {
      title: "Etherea - Bronze Sculpture by Abhinav Goyal | Chennai 2019",
      metaDescription: "Etherea: Delicate bronze sculpture evoking light, air, and introspection. Chennai 2019 by Abhinav Goyal.",
      keywords: ["etherea sculpture", "bronze art", "Chennai sculpture", "introspective art", "Abhinav Goyal", "weathered patina", "modern art installation"],
      ogTitle: "Etherea - A Dance of Light and Spirit",
      ogDescription: "Discover Etherea, a bronze sculpture that balances light and air, inviting introspection and a silent dialogue with nature in Chennai.",
      ogImage: "/etherea-chennai-2019.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/etherea"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Etherea",
      description: "A delicate balance of light, air, and spirit, this bronze sculpture evokes introspection and a silent dialogue with nature.",
      image: [
        "/etherea-chennai-2019.webp",
        "/Arts/Etherea-Chennai.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2019",
      artMedium: "Bronze",
      artworkSurface: "Weathered Patina",
      locationCreated: "Chennai, India",
      url: "/artwork/etherea"
    }
  },
  {
    slug: "bonsai",
    images: [
      { src: "/bonsai-delhi-2024.webp", alt: "Bonsai Sculpture in Delhi, India, 2024" },
      { src: "/Arts/Bonsai-Delhi.webp", alt: "Bonsai Sculpture made of corten steel" },
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
    seo: {
      title: "Bonsai - Minimalist Steel Sculpture by Abhinav Goyal | Delhi 2024",
      metaDescription: "Bonsai: Minimalist steel sculpture blending geometric precision with organic grace, celebrating patience and growth. Delhi 2024 by Abhinav Goyal.",
      keywords: ["bonsai sculpture", "minimalist art", "steel sculpture", "Delhi art", "nature-inspired art", "Abhinav Goyal", "geometric bonsai"],
      ogTitle: "Bonsai - Elegance in Steel",
      ogDescription: "Explore Bonsai, a minimalist steel sculpture with a faceted base and black branches, celebrating nature’s resilience and deliberate cultivation.",
      ogImage: "/bonsai-delhi-2024.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/bonsai"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Bonsai",
      description: "A minimalist interpretation of a bonsai tree, blending geometric precision with organic grace, celebrating patience and nature’s resilience.",
      image: [
        "/bonsai-delhi-2024.webp",
        "/Arts/Bonsai-Delhi.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2024",
      artMedium: "Stainless Steel and Coated Mild Steel",
      artworkSurface: "Matte Black and Metallic Gold",
      height: "7.5 feet",
      width: "3.5 feet",
      depth: "3 feet",
      locationCreated: "Delhi, India",
      url: "/artwork/bonsai"
    }
  },
  {
    slug: "nandi",
    images: [
      { src: "/nandi-pune-2020.webp", alt: "Nandi Sculpture in Pune, India, 2020" },
      { src: "/Arts/Nandi.webp", alt: "Nandi Sculpture" },
      { src: "/Arts/Nandi-Pune.webp", alt: "Nandi Sculpture made up of stainless steel" },
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
    seo: {
      title: "Nandi - Spiritual Steel Sculpture by Abhinav Goyal | Pune 2020",
      metaDescription: "Nandi: Angular mild steel and brass sculpture symbolizing devotion and strength. Pune 2020 by Abhinav Goyal.",
      keywords: ["nandi sculpture", "spiritual art", "Pune sculpture", "mild steel art", "Indian tradition art", "Abhinav Goyal", "brass sculpture"],
      ogTitle: "Nandi - Timeless Spiritual Guardian",
      ogDescription: "Discover Nandi, an angular steel and brass sculpture embodying devotion and resilience, serving as a spiritual anchor in a Pune residence.",
      ogImage: "/nandi-pune-2020.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/nandi"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Nandi",
      description: "An angular Nandi sculpture symbolizing devotion, patience, and strength, serving as a spiritual anchor in a Pune residence.",
      image: [
        "/nandi-pune-2020.webp",
        "/Arts/Nandi.webp",
        "/Arts/Nandi-Pune.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2020",
      artMedium: "Mild Steel and Brass",
      artworkSurface: "Matte Black and Brass",
      height: "4.5 feet",
      width: "5.5 feet",
      depth: "2.5 feet",
      locationCreated: "Pune, India",
      url: "/artwork/nandi"
    }
  },
  {
    slug: "carefree-seat",
    images: [
      { src: "/carefree-seat-hyderabad-2022.webp", alt: "The Carefree Seat Sculpture in Hyderabad, India, 2022" },
      { src: "/Arts/carefree-seat.webp", alt: "Carefree seat corten steel" },
      { src: "/Arts/carefree-seat-hyderabad.webp", alt: "carefree seat corten steel sculpture" },
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
    seo: {
      title: "Carefree Seat - Functional Corten Steel Sculpture by Abhinav Goyal | Hyderabad 2022",
      metaDescription: "Carefree Seat: Functional mild steel sculpture with corten finish, blending art and utility in a serene garden setting. Hyderabad 2022 by Abhinav Goyal.",
      keywords: ["carefree seat sculpture", "functional art", "corten steel sculpture", "Hyderabad art", "public space art", "Abhinav Goyal", "geometric sculpture"],
      ogTitle: "Carefree Seat - Art Meets Leisure",
      ogDescription: "Explore Carefree Seat, a functional corten steel sculpture that invites relaxation and reflection in a serene Hyderabad garden setting.",
      ogImage: "/carefree-seat-hyderabad-2022.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/carefree-seat"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Carefree Seat",
      description: "A functional mild steel sculpture with corten finish, depicting a relaxed figure on a bench, blending art and utility in a serene garden setting.",
      image: [
        "/carefree-seat-hyderabad-2022.webp",
        "/Arts/carefree-seat.webp",
        "/Arts/carefree-seat-hyderabad.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2022",
      artMedium: "Mild Steel",
      artworkSurface: "Corten Finish with Outdoor-Grade PU Coating",
      height: "5 feet",
      width: "2 feet",
      depth: "2.5 feet",
      locationCreated: "Hyderabad, India",
      url: "/artwork/carefree-seat"
    }
  },
  {
    slug: "bloom",
    images: [
      { src: "/bloom-delhi-2021.webp", alt: "Bloom Sculpture in Delhi, India, 2021" },
      { src: "/Arts/Bloom-Lotus.webp", alt: "Bloom Sculpture of corten steel" },
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
          Material: Corten Steel & Brass <br />Height: 7 ft, Width: 5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private Residence, Delhi
        </>
      ),
    },
    seo: {
      title: "Bloom - Nature-Inspired Corten Steel Sculpture by Abhinav Goyal | Delhi 2021",
      metaDescription: "Bloom: Corten steel and brass sculpture inspired by India's national flower, embodying renewal and elegance. Delhi 2021 by Abhinav Goyal.",
      keywords: ["bloom sculpture", "corten steel art", "brass sculpture", "Delhi art", "nature-inspired art", "Abhinav Goyal", "India Design ID Fair"],
      ogTitle: "Bloom - Emblem of Renewal and Elegance",
      ogDescription: "Discover Bloom, a corten steel and brass sculpture inspired by the lotus, flourishing as an emblem of renewal and harmony in Delhi.",
      ogImage: "/bloom-delhi-2021.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/bloom"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Bloom",
      description: "A poetic tribute to nature, this corten steel and brass sculpture, inspired by India's national flower, embodies renewal and elegance.",
      image: [
        "/bloom-delhi-2021.webp",
        "/Arts/Bloom-Lotus.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2021",
      artMedium: "Corten Steel and Brass",
      height: "7 feet",
      width: "5 feet",
      locationCreated: "Delhi, India",
      url: "/artwork/bloom"
    }
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
          Artist: Abhinav Goyal <br /> Commissioned for: Bangalore Urban Retreat
        </>
      ),
    },
    seo: {
      title: "Reflective Pause - Stainless Steel Sculptural Bench by Abhinav Goyal | Bangalore 2025",
      metaDescription: "Reflective Pause: Mirror-polished stainless steel sculptural bench wrapped around a tree, creating an urban oasis. Bangalore 2025 by Abhinav Goyal.",
      keywords: ["reflective pause sculpture", "stainless steel bench", "Bangalore art", "urban oasis art", "functional sculpture", "Abhinav Goyal", "mirror-polished art"],
      ogTitle: "Reflective Pause - Urban Oasis in Steel",
      ogDescription: "Explore Reflective Pause, a stainless steel sculptural bench that wraps around a tree, inviting stillness and reflection in Bangalore’s urban heart.",
      ogImage: "/reflective-pause-bangalore-2025.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/reflective-pause"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Reflective Pause",
      description: "A mirror-polished stainless steel sculptural bench wrapped around a tree, inviting stillness and connection with nature in an urban setting.",
      image: ["/reflective-pause-bangalore-2025.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Stainless Steel",
      artworkSurface: "Mirror-Polished",
      height: "1.5 feet",
      width: "6 feet",
      depth: "5 feet",
      locationCreated: "Bangalore, India",
      url: "/artwork/reflective-pause"
    }
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
    seo: {
      title: "Abstracta - Geometric Gold Sculpture by Abhinav Goyal | Delhi 2021",
      metaDescription: "Abstracta: Bold geometric stainless steel sculpture with brushed gold PVD coating, celebrating artistic freedom. Delhi 2021 by Abhinav Goyal.",
      keywords: ["abstracta sculpture", "geometric art", "gold PVD sculpture", "Delhi art", "modern art gallery", "Abhinav Goyal", "stainless steel art"],
      ogTitle: "Abstracta - Celebration of Geometric Freedom",
      ogDescription: "Discover Abstracta, a bold geometric sculpture in stainless steel with a gold finish, amplifying artistic expression against a polished stone backdrop.",
      ogImage: "/abstracta-delhi-2021.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/abstracta"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Abstracta",
      description: "A bold geometric sculpture with layered intersecting frames and a brushed gold PVD coating, celebrating pure form and artistic expression.",
      image: ["/abstracta-delhi-2021.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2021",
      artMedium: "Stainless Steel",
      artworkSurface: "Brushed Gold PVD Coating",
      height: "4 feet",
      width: "5 feet",
      depth: "2.5 feet",
      locationCreated: "Delhi, India",
      url: "/artwork/abstracta"
    }
  },
  {
    slug: "buddha",
    images: [
      { src: "/buddha-bangalore-2023.webp", alt: "Buddha Sculpture in Bangalore, India, 2023" },
      { src: "/Arts/Gautam-Buddha.webp", alt: "Buddha Sculpture of stainless steel" },
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
    seo: {
      title: "Buddha - Corten Steel Sculpture by Abhinav Goyal | Bangalore 2023",
      metaDescription: "Buddha: Faceted corten steel sculpture with internal lighting, symbolizing peace and spiritual awakening. Bangalore 2023 by Abhinav Goyal.",
      keywords: ["buddha sculpture", "corten steel art", "Bangalore sculpture", "spiritual art", "Abhinav Goyal", "meditation sculpture", "illuminated art"],
      ogTitle: "Buddha - Portal to Tranquility",
      ogDescription: "Discover Buddha, a faceted corten steel sculpture glowing with inner light, offering stillness and spiritual awakening in Bangalore’s urban heart.",
      ogImage: "/buddha-bangalore-2023.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/buddha"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Buddha",
      description: "A serene Buddha in meditation, this faceted corten steel sculpture with internal lighting symbolizes inner peace and spiritual awakening.",
      image: [
        "/buddha-bangalore-2023.webp",
        "/Arts/Gautam-Buddha.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2023",
      artMedium: "Corten Steel",
      artworkSurface: "Internal Lighting",
      height: "5.5 feet",
      width: "4 feet",
      depth: "2.5 feet",
      locationCreated: "Bangalore, India",
      url: "/artwork/buddha"
    }
  },
  {
    slug: "sleeping-lotus",
    images: [
      { src: "/sleeping-lotus-delhi-2021.webp", alt: "Lotus Sculpture in Delhi" },
      { src: "/Arts/Corten-Steel-lotus.webp", alt: "Lotus Sculpture of corten steel" },
      { src: "/Arts/Steel-lotus.webp", alt: "Lotus Sculpture made of corten steel" },
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
    seo: {
      title: "Sleeping Lotus - Corten Steel Sculpture by Abhinav Goyal | Delhi 2021",
      metaDescription: "Sleeping Lotus: Corten steel sculpture of a closed lotus bud, symbolizing stillness and potential. Delhi 2021 by Abhinav Goyal.",
      keywords: ["sleeping lotus sculpture", "corten steel art", "Delhi sculpture", "nature-inspired art", "Abhinav Goyal", "lotus sculpture", "introspective art"],
      ogTitle: "Sleeping Lotus - Stillness in Bloom",
      ogDescription: "Explore Sleeping Lotus, a corten steel sculpture capturing the quiet strength and latent potential of a closed lotus bud in Delhi.",
      ogImage: "/sleeping-lotus-delhi-2021.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/sleeping-lotus"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "The Sleeping Lotus",
      description: "A sculptural interpretation of a closed lotus bud, capturing the stillness and quiet strength of nature before awakening.",
      image: [
        "/sleeping-lotus-delhi-2021.webp",
        "/Arts/Corten-Steel-lotus.webp",
        "/Arts/Steel-lotus.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2021",
      artMedium: "Corten Steel",
      artworkSurface: "Natural Patina",
      height: "3.5 feet",
      width: "3 feet",
      depth: "8 feet",
      locationCreated: "Delhi, India",
      url: "/artwork/sleeping-lotus"
    }
  },
  {
    slug: "raging-bull-2024",
    images: [
      { src: "/raging-bull-goa-2024.webp", alt: "Raging Bull corten steel Sculpture in Goa, India, 2024" },
      { src: "/Arts/Corten-Steel-Bull.webp", alt: "Raging Bull Sculpture in corten steel" },
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
    seo: {
      title: "Raging Bull - Corten Steel Sculpture by Abhinav Goyal | Goa 2024",
      metaDescription: "Raging Bull: Dynamic corten steel sculpture capturing raw power and intensity. Goa 2024 by Abhinav Goyal.",
      keywords: ["raging bull sculpture", "corten steel art", "Goa sculpture", "animal sculpture", "Abhinav Goyal", "modern art installation", "villa art"],
      ogTitle: "Raging Bull - Untamed Power in Steel",
      ogDescription: "Discover Raging Bull, a corten steel sculpture embodying raw intensity and resilience, commanding attention at a private villa in Goa.",
      ogImage: "/raging-bull-goa-2024.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/raging-bull-2024"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Raging Bull",
      description: "A dynamic corten steel sculpture capturing the raw power and intensity of a bull, set at the entrance of a private villa in Goa.",
      image: [
        "/raging-bull-goa-2024.webp",
        "/Arts/Corten-Steel-Bull.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2024",
      artMedium: "Corten Steel",
      artworkSurface: "Weathered Finish",
      height: "5 feet",
      width: "12 feet",
      locationCreated: "Goa, India",
      url: "/artwork/raging-bull-2024"
    }
  },
  {
    slug: "raging-stallions-2021",
    images: [
      { src: "/raging-stallions-chennai_2021.webp", alt: "Raging Stallions Sculpture in Chennai" },
      { src: "/Arts/Chennai-Raging-Stallions.webp", alt: "stainless steel horse Sculpture by formforge" },
      { src: "/Arts/Raging-Stallions-Chennai.webp", alt: "horse Sculpture" },
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
          Artist: Abhinav Goyal  <br /> Commissioned for: Private Residence, Hyderabad
        </>
      ),
    },
    seo: {
      title: "Raging Stallions - Dynamic Aluminum Sculpture by Abhinav Goyal | Chennai 2021",
      metaDescription: "Raging Stallions: Dynamic aluminum sculpture capturing the untamed power of horses. Chennai 2021 by Abhinav Goyal.",
      keywords: ["raging stallions", "horse sculpture", "aluminum art", "Chennai sculpture", "dynamic sculpture", "Abhinav Goyal", "contemporary horse art"],
      ogTitle: "Raging Stallions - Untamed Power in Aluminum",
      ogDescription: "Experience the Raging Stallions, a dynamic aluminum sculpture capturing the fluid, fierce essence of horses, igniting a primal connection.",
      ogImage: "/raging-stallions-chennai_2021.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/raging-stallions-2021"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Raging Stallions",
      description: "A dynamic aluminum sculpture capturing the untamed power of horses, with fluid curves and fierce presence that shifts with light and weather.",
      image: [
        "/raging-stallions-chennai_2021.webp",
        "/Arts/Chennai-Raging-Stallions.webp",
        "/Arts/Raging-Stallions-Chennai.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2021",
      artMedium: "Aluminum",
      locationCreated: "Chennai, India",
      url: "/artwork/raging-stallions-2021"
    }
  },
  {
    slug: "panthera",
    images: [
      { src: "/panthera-dubai-2020.webp", alt: "Panthera Sculpture in Dubai, UAE, 2020" },
      { src: "/Arts/00-1.webp", alt: "Panthera Sculpture by formforge" },
    ],
    caption: <>Panthera</>,
    details: {
      heading: "Panthera",
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
    seo: {
      title: "Panthera - Stainless Steel Sculpture by Abhinav Goyal | Dubai 2020",
      metaDescription: "Panthera: Ethereal stainless steel sculpture capturing the spirit of the night with a shimmering, faceted form. Dubai 2020 by Abhinav Goyal.",
      keywords: ["panthera sculpture", "stainless steel art", "Dubai sculpture", "animal sculpture", "Abhinav Goyal", "modern art installation", "ethereal art"],
      ogTitle: "Panthera - Spirit of the Night",
      ogDescription: "Discover Panthera, a stainless steel sculpture with a shimmering, faceted form, embodying the ethereal elegance of a nocturnal creature in Dubai.",
      ogImage: "/panthera-dubai-2020.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/panthera"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Panthera",
      description: "A faceted stainless steel sculpture capturing the ethereal presence of a nocturnal creature, shimmering with light and movement.",
      image: [
        "/panthera-dubai-2020.webp",
        "/Arts/00-1.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2020",
      artMedium: "Stainless Steel",
      height: "7 feet",
      width: "3 feet",
      depth: "1.8 feet",
      locationCreated: "Dubai, UAE",
      url: "/artwork/panthera"
    }
  },
  {
    slug: "aphrodia",
    images: [{ src: "/aphrodia-goa-2018.webp", alt: "Aphrodia Sculpture in Goa, India, 2018" }],
    caption: <>Meditating Lady</>,
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
    seo: {
      title: "Meditating Lady - Bronze Sculpture by Abhinav Goyal | Goa 2018",
      metaDescription: "Meditating Lady: Serene bronze sculpture embodying peace and strength, set against Goa's coastal backdrop. 2018 by Abhinav Goyal.",
      keywords: ["meditating lady sculpture", "bronze art", "Goa sculpture", "serenity art", "Abhinav Goyal", "coastal art installation", "introspective art"],
      ogTitle: "Meditating Lady - Serenity in Bronze",
      ogDescription: "Explore Meditating Lady, a bronze sculpture capturing peace and strength against Goa's lush coastal backdrop, inviting calm and introspection.",
      ogImage: "/aphrodia-goa-2018.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/aphrodia"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Meditating Lady",
      description: "A serene female figure in meditation, this layered bronze sculpture embodies peace, balance, and inner strength, set against a lush coastal backdrop.",
      image: ["/aphrodia-goa-2018.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2018",
      artMedium: "Bronze",
      artworkSurface: "Weathered Patina",
      height: "6 feet",
      width: "2.7 feet",
      depth: "2 feet",
      locationCreated: "Goa, India",
      url: "/artwork/aphrodia"
    }
  },
  {
    slug: "Signage",
    images: [{ src: "/Arts/parametric-wall.webp", alt: "Geomorph Sculpture in Hyderabad, India, 2023" }],
    caption: <>Signage</>,
    details: {
      heading: "Commercial Signage",
      location: "",
      description: (
        <>
          A seamless blend of art, identity, and architecture, this parametric installation transforms a corporate facade into a bold statement of design. The dynamic ripple texture, achieved through precision-cut <b>aluminium composite panels,</b> responds to light and movement, bringing the wall to life throughout the day.{" "}
          <br />This custom aluminium signage integrates advanced fabrication techniques with sculptural depth, offering both durability and visual impact. The gold crest emerges as a symbolic focal point, while the layered typographic cutouts create a striking 3D signage effect that enhances brand visibility from a distance.
          <br /> Ideal for commercial spaces seeking architectural branding solutions, this project sets a benchmark in modern facade signage, where aesthetics meet performance.
        </>
      ),
      details: (
        <>
          Material: Aluminium
          <br />Height: 4 ft | Length: 22 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br />Commissioned for: CRC The Flagship, Noida
        </>
      ),
    },
    seo: {
      title: "Commercial Signage - Parametric Aluminium Installation by Abhinav Goyal | Noida 2023",
      metaDescription: "Commercial Signage: Parametric aluminium installation with ripple texture and 3D typographic cutouts. Noida 2023 by Abhinav Goyal.",
      keywords: ["commercial signage", "parametric installation", "aluminium art", "Noida art", "architectural branding", "Abhinav Goyal", "modern facade art"],
      ogTitle: "Commercial Signage - Artful Branding in Aluminium",
      ogDescription: "Explore Commercial Signage, a parametric aluminium installation with dynamic ripple texture, enhancing brand visibility in Noida’s corporate landscape.",
      ogImage: "/Arts/parametric-wall.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Signage"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Commercial Signage",
      description: "A parametric aluminium installation with ripple texture and 3D typographic cutouts, transforming a corporate facade into a bold statement of design.",
      image: ["/Arts/parametric-wall.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2023",
      artMedium: "Aluminium",
      height: "4 feet",
      width: "22 feet",
      locationCreated: "Noida, India",
      url: "/artwork/Signage"
    }
  },
  {
    slug: "Parametric dancing sculpture",
    images: [
      { src: "/ballerina-gurugram-2023.webp", alt: "Ballerina Sculpture in Gurugram, India, 2023" },
      { src: "/Arts/061.webp", alt: "Ballerina Sculpture in Gurugram by formforge" },
      { src: "/Arts/062.webp", alt: "Ballerina Sculpture by formforge" },
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
    seo: {
      title: "Ballerina - Stainless Steel Sculpture by Abhinav Goyal | Gurugram 2023",
      metaDescription: "Ballerina: Layered stainless steel sculpture capturing the elegance of dance with rhythmic form. Gurugram 2023 by Abhinav Goyal.",
      keywords: ["ballerina sculpture", "stainless steel art", "Gurugram sculpture", "dance sculpture", "Abhinav Goyal", "modern interior art", "rhythmic art"],
      ogTitle: "Ballerina - Elegance in Motion",
      ogDescription: "Discover Ballerina, a stainless steel sculpture capturing the fluidity and poise of dance, bringing life to modern interiors in Gurugram.",
      ogImage: "/ballerina-gurugram-2023.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Parametric-dancing-sculpture"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Ballerina",
      description: "A layered stainless steel sculpture of a ballerina in mid-pose, capturing the fluidity, discipline, and elegance of dance.",
      image: [
        "/ballerina-gurugram-2023.webp",
        "/Arts/061.webp",
        "/Arts/062.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2023",
      artMedium: "Stainless Steel",
      artworkSurface: "Brushed Finish",
      height: "8 feet",
      width: "6 feet",
      depth: "3 feet",
      locationCreated: "Gurugram, India",
      url: "/artwork/Parametric-dancing-sculpture"
    }
  },
  {
    slug: "Deer Sculpture",
    images: [
      { src: "/Arts/111111.webp", alt: "Deer Sculpture, 2025" },
      { src: "/Arts/stainless-steel-deer.webp", alt: "Deer Sculpture made up of stainless steel" },
    ],
    caption: <>Antleris</>,
    details: {
      heading: "Antleris",
      location: "",
      description: (
        <>
          Its a geometric deer sculpture crafted in mirror-polished stainless steel. Its faceted form and towering antlers create a bold visual landmark, reflecting the landscape and transforming with light and movement.
          <br />Perfect for luxury hotels, gardens, or public spaces, it captures the growing demand for modern stainless steel animal sculptures and reflective outdoor art in premium environments.
        </>
      ),
      details: (
        <>
          Material: Mirror-polished stainless steel
          <br />Height: 10 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Crown Plaza, Lucknow
        </>
      ),
    },
    seo: {
      title: "Antleris - Stainless Steel Deer Sculpture by Abhinav Goyal | Lucknow 2025",
      metaDescription: "Antleris: Geometric mirror-polished stainless steel deer sculpture with towering antlers. Lucknow 2025 by Abhinav Goyal.",
      keywords: ["antleris sculpture", "stainless steel deer", "Lucknow sculpture", "geometric animal art", "Abhinav Goyal", "reflective outdoor art", "luxury hotel art"],
      ogTitle: "Antleris - Reflective Deer Sculpture",
      ogDescription: "Explore Antleris, a mirror-polished stainless steel deer sculpture with towering antlers, transforming spaces with light and movement in Lucknow.",
      ogImage: "/Arts/111111.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Deer-Sculpture"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Antleris",
      description: "A geometric deer sculpture in mirror-polished stainless steel, with towering antlers reflecting the landscape and transforming with light and movement.",
      image: [
        "/Arts/111111.webp",
        "/Arts/stainless-steel-deer.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Stainless Steel",
      artworkSurface: "Mirror-Polished",
      height: "10 feet",
      locationCreated: "Lucknow, India",
      url: "/artwork/Deer-Sculpture"
    }
  },
  {
    slug: "Rhino Sculpture",
    images: [
      { src: "/Arts/Rhino-sculpture.webp", alt: "Rhino Sculpture made up corten steel" },
    ],
    caption: <>Bovine</>,
    details: {
      heading: "Bovine",
      location: "",
      description: (
        <>
          This compact yet powerful sculpture reimagines the rhinoceros in sharp, angular geometry, crafted from weathered Corten steel. Its low-poly form and natural rust patina evoke strength, resilience, and raw materiality.
          <br />Perfect for art collectors and architectural spaces, it reflects the rising demand for modern corten steel sculptures and geometric animal art in contemporary interiors and outdoor settings.
        </>
      ),
      details: (
        <>
          Material: Corten steel
          <br />Length: 4ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Location: Formforge Gallery, Noida
        </>
      ),
    },
    seo: {
      title: "Bovine - Corten Steel Rhino Sculpture by Abhinav Goyal | Noida 2025",
      metaDescription: "Bovine: Compact corten steel rhino sculpture with angular geometry and rust patina. Noida 2025 by Abhinav Goyal.",
      keywords: ["bovine sculpture", "corten steel rhino", "Noida sculpture", "geometric animal art", "Abhinav Goyal", "modern sculpture", "rust patina art"],
      ogTitle: "Bovine - Strength in Corten Steel",
      ogDescription: "Discover Bovine, a compact corten steel rhino sculpture with sharp geometry and rust patina, embodying resilience for contemporary spaces.",
      ogImage: "/Arts/Rhino-sculpture.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Rhino-Sculpture"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Bovine",
      description: "A compact corten steel rhinoceros sculpture with sharp, angular geometry and natural rust patina, embodying strength and resilience.",
      image: ["/Arts/Rhino-sculpture.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Corten Steel",
      artworkSurface: "Natural Rust Patina",
      width: "4 feet",
      locationCreated: "Noida, India",
      url: "/artwork/Rhino-Sculpture"
    }
  },
  {
    slug: "fish sculpture",
    images: [
      { src: "/Arts/fish-sculpture.webp", alt: "whale Sculpture, 2025" },
    ],
    caption: <>Ocean Voyager</>,
    details: {
      heading: "Ocean Voyager",
      location: "",
      description: (
        <>
          Sleek and symbolic, this sculpture captures the upward thrust of a whale’s tail, sculpted in weathered Corten steel. Its smooth, organic form contrasts with the raw, rusted finish, evoking both grace and strength.
          <br />Ideal for modern interiors or outdoor art displays, it highlights the growing appeal of minimalist corten steel sculptures and <b>marine inspired public art </b>in architectural spaces.
        </>
      ),
      details: (
        <>
          Material: Corten steel
          <br />Height: 7 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Location: Formforge Gallery, Noida
        </>
      ),
    },
    seo: {
      title: "Ocean Voyager - Corten Steel Whale Sculpture by Abhinav Goyal | Noida 2025",
      metaDescription: "Ocean Voyager: Minimalist corten steel sculpture of a whale’s tail, blending grace and strength. Noida 2025 by Abhinav Goyal.",
      keywords: ["ocean voyager sculpture", "corten steel whale", "Noida sculpture", "marine inspired art", "Abhinav Goyal", "minimalist sculpture", "public art"],
      ogTitle: "Ocean Voyager - Grace in Corten Steel",
      ogDescription: "Explore Ocean Voyager, a corten steel sculpture of a whale’s tail, blending minimalist form with raw strength for modern and outdoor spaces.",
      ogImage: "/Arts/fish-sculpture.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/fish-sculpture"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Ocean Voyager",
      description: "A minimalist corten steel sculpture of a whale’s tail, blending smooth organic form with a raw, rusted finish to evoke grace and strength.",
      image: ["/Arts/fish-sculpture.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Corten Steel",
      artworkSurface: "Weathered Rust Finish",
      height: "7 feet",
      locationCreated: "Noida, India",
      url: "/artwork/fish-sculpture"
    }
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
    seo: {
      title: "Wing Sculpture - Stainless Steel Installation by Abhinav Goyal | Gurugram 2022",
      metaDescription: "Wing Sculpture: Mirror-polished stainless steel installation symbolizing ambition and freedom. Gurugram 2022 by Abhinav Goyal.",
      keywords: ["wing sculpture", "stainless steel art", "Gurugram sculpture", "modern installation", "Abhinav Goyal", "aspiration art", "reflective sculpture"],
      ogTitle: "Wing Sculpture - Soaring Ambition",
      ogDescription: "Discover the Wing Sculpture, a mirror-polished stainless steel installation symbolizing ambition and freedom, bringing momentum to Gurugram spaces.",
      ogImage: "/wing-sculpture-gurugram-2022.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/wing-sculpture"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "The Wing Sculpture",
      description: "A mirror-polished stainless steel sculpture with a sleek, wing-like form, symbolizing ambition, elevation, and the freedom of flight.",
      image: [
        "/wing-sculpture-gurugram-2022.webp",
        "/Arts/301.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2022",
      artMedium: "Stainless Steel",
      artworkSurface: "Mirror-Polished",
      height: "8 feet",
      width: "6 feet",
      depth: "3.5 feet",
      locationCreated: "Gurugram, India",
      url: "/artwork/wing-sculpture"
    }
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
    seo: {
      title: "Dreaming of Dharma - Stainless Steel Sculpture by Abhinav Goyal | Noida 2024",
      metaDescription: "Dreaming of Dharma: Layered stainless steel sculpture inspired by Buddhist principles, evoking calm and mindfulness. Noida 2024 by Abhinav Goyal.",
      keywords: ["dreaming of dharma", "stainless steel sculpture", "Noida sculpture", "Buddhist art", "Abhinav Goyal", "spiritual sculpture", "mindfulness art"],
      ogTitle: "Dreaming of Dharma - Harmony in Steel",
      ogDescription: "Explore Dreaming of Dharma, a stainless steel sculpture embodying Buddhist principles of calm and mindfulness in Noida’s modern landscape.",
      ogImage: "/dreaming-of-dharma-noida-2024.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/dreaming-of-dharma"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Dreaming Of Dharma",
      description: "A layered stainless steel sculpture inspired by Buddhist principles, evoking inner calm, mindfulness, and the quiet power of stillness.",
      image: [
        "/dreaming-of-dharma-noida-2024.webp",
        "/Arts/Gautam-Buddhaa.webp",
        "/Arts/b08.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2024",
      artMedium: "Stainless Steel",
      artworkSurface: "Satin Finish",
      height: "6.5 feet",
      width: "4 feet",
      depth: "5 feet",
      locationCreated: "Noida, India",
      url: "/artwork/dreaming-of-dharma"
    }
  },
  {
    slug: "Sitting Sculpture",
    images: [{ src: "/Arts/Sitting-Sculpture.webp", alt: "Skyward Bound dynamic steel sculpture in Delhi, India, 2024" }],
    caption: <>Silent Witness</>,
    details: {
      heading: "The Silent Witness",
      location: "",
      description: (
        <>
          This immersive installation features a layered stainless steel human figure seated on a faceted gold bench, blending function and form into a single sculptural experience. The 10 foot bench with a 4 foot figure adds a reflective, human element to the space, encouraging pause and introspection.
          <br /> A unique example of sculptural seating, it brings together public art, contemporary metal sculpture, and custom outdoor furniture design for high end hospitality environments.
        </>
      ),
      details: (
        <>
          Material: Stainless steel
          <br /> Bench: 10ft <br /> Sitting figure: 4ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Crowne Plaza Lucknow By Ihg
        </>
      ),
    },
    seo: {
      title: "Silent Witness - Stainless Steel Sculptural Seating by Abhinav Goyal | Lucknow 2024",
      metaDescription: "Silent Witness: Stainless steel sculptural seating with a human figure on a gold bench, blending art and function. Lucknow 2024 by Abhinav Goyal.",
      keywords: ["silent witness sculpture", "stainless steel seating", "Lucknow sculpture", "public art", "Abhinav Goyal", "sculptural furniture", "hospitality art"],
      ogTitle: "Silent Witness - Artful Seating Experience",
      ogDescription: "Discover Silent Witness, a stainless steel sculptural seating installation with a human figure, encouraging introspection in high-end hospitality spaces.",
      ogImage: "/Arts/Sitting-Sculpture.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Sitting-Sculpture"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "The Silent Witness",
      description: "A stainless steel sculptural seating installation featuring a human figure on a faceted gold bench, blending art and function for introspection.",
      image: ["/Arts/Sitting-Sculpture.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2024",
      artMedium: "Stainless Steel",
      height: "4 feet",
      width: "10 feet",
      locationCreated: "Lucknow, India",
      url: "/artwork/Sitting-Sculpture"
    }
  },
  {
    slug: "seed",
    images: [{ src: "/seed-mumbai-2024.webp", alt: "Seed nature-inspired art sculpture made of corten steel" }],
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
    seo: {
      title: "Seed - Corten Steel Sculpture by Abhinav Goyal | Mumbai 2024",
      metaDescription: "Seed: Corten steel sculpture capturing the essence of potential and growth with organic curves. Mumbai 2024 by Abhinav Goyal.",
      keywords: ["seed sculpture", "corten steel art", "Mumbai sculpture", "nature-inspired art", "Abhinav Goyal", "organic sculpture", "growth art"],
      ogTitle: "Seed - Symbol of New Beginnings",
      ogDescription: "Explore Seed, a corten steel sculpture with organic curves, embodying the potential and quiet strength of new beginnings in Mumbai.",
      ogImage: "/seed-mumbai-2024.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/seed"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Seed",
      description: "A corten steel sculpture with organic curves, capturing the essence of potential, growth, and the origins of life.",
      image: ["/seed-mumbai-2024.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2024",
      artMedium: "Corten Steel",
      artworkSurface: "Polygonal Surface Treatment",
      height: "7.5 feet",
      width: "3.5 feet",
      depth: "3 feet",
      locationCreated: "Mumbai, India",
      url: "/artwork/seed"
    }
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
    seo: {
      title: "Raging Bull - Mild Steel Sculpture by Abhinav Goyal | Goa 2024",
      metaDescription: "Raging Bull: Faceted mild steel sculpture capturing raw energy and resilience, featuring PV Sindhu. Goa 2024 by Abhinav Goyal.",
      keywords: ["raging bull sculpture", "mild steel art", "Goa sculpture", "PV Sindhu", "Abhinav Goyal", "animal sculpture", "coastal art"],
      ogTitle: "Raging Bull - Emblem of Resilience",
      ogDescription: "Discover Raging Bull, a faceted mild steel sculpture embodying raw energy and strength, enhanced by PV Sindhu’s presence in Goa.",
      ogImage: "/raging-bull-goa_2024.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/raging-bull-goa-2024"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Raging Bull",
      description: "A faceted mild steel sculpture of a bull in mid-charge, capturing raw energy and resilience, set against a coastal backdrop with PV Sindhu.",
      image: ["/raging-bull-goa_2024.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2024",
      artMedium: "Mild Steel",
      artworkSurface: "Weathered Patina Finish",
      height: "5 feet",
      width: "7 feet",
      depth: "3 feet",
      locationCreated: "Goa, India",
      url: "/artwork/raging-bull-goa-2024"
    }
  },
  {
    slug: "ganapati",
    images: [
      { src: "/ganapati-dxb-uae-2024.webp", alt: "Ganapati Hindu deity sculpture in Dubai UAE, 2024" },
      { src: "/Arts/Ganeshji-Project.webp", alt: "Ganeshji deity sculpture made of corten steel" },
      { src: "/Arts/Ganeshji.webp", alt: "Ganeshji sculpture artwork, 2018" }
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
    seo: {
      title: "Ganapati - Corten Steel Ganesha Sculpture by Abhinav Goyal | Dubai 2024",
      metaDescription: "Ganapati: Modern corten steel sculpture of Lord Ganesha, blending tradition and innovation. Dubai 2024 by Abhinav Goyal.",
      keywords: ["ganapati sculpture", "corten steel Ganesha", "Dubai sculpture", "spiritual art", "Abhinav Goyal", "modern deity art", "minimalist sculpture"],
      ogTitle: "Ganapati - Modern Ganesha in Steel",
      ogDescription: "Explore Ganapati, a corten steel sculpture reimagining Lord Ganesha with minimalist geometry, honoring wisdom and new beginnings in Dubai.",
      ogImage: "/ganapati-dxb-uae-2024.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/ganapati"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Ganapati",
      description: "A modern corten steel sculpture of Lord Ganesha, blending tradition with minimalist geometry to honor wisdom and new beginnings.",
      image: [
        "/ganapati-dxb-uae-2024.webp",
        "/Arts/Ganeshji-Project.webp",
        "/Arts/Ganeshji.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2024",
      artMedium: "Corten Steel",
      height: "4.5 feet",
      width: "3 feet",
      depth: "2.5 feet",
      locationCreated: "Dubai, UAE",
      url: "/artwork/ganapati"
    }
  },
  {
    slug: "standing sculpture",
    images: [
      { src: "/Arts/Standing-sculpture.webp", alt: "Tata Performer sculpture art project by Formforge" },
      { src: "/images/blog/Tata-project.webp", alt: "Tata Performer sculpture made of corten steel by Formforge" },
    ],
    caption: <>Performer</>,
    details: {
      heading: "Performer",
      location: "",
      description: (
        <>
          This corten steel sculpture captures the essence of human elevation through angular geometry and an open-arm posture. The rusted finish brings natural warmth, creating a striking contrast against the structured modern architecture.
          <br /> A modern symbol of aspiration, this piece reflects the growing demand for geometric corten steel sculptures, <b>corporate art installations,</b> and outdoor contemporary public art in commercial environments.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 7 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Tata Intellion Edge Office, Gurgaon
        </>
      ),
    },
    seo: {
      title: "Performer - Corten Steel Sculpture by Abhinav Goyal | Gurgaon 2025",
      metaDescription: "Performer: Corten steel sculpture with angular geometry, symbolizing human aspiration. Gurgaon 2025 by Abhinav Goyal.",
      keywords: ["performer sculpture", "corten steel art", "Gurgaon sculpture", "corporate art", "Abhinav Goyal", "geometric sculpture", "public art"],
      ogTitle: "Performer - Symbol of Aspiration",
      ogDescription: "Discover Performer, a corten steel sculpture with angular geometry and rusted finish, symbolizing human elevation in Gurgaon’s corporate landscape.",
      ogImage: "/Arts/Standing-sculpture.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/standing-sculpture"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Performer",
      description: "A corten steel sculpture with angular geometry and an open-arm posture, symbolizing human aspiration in a corporate setting.",
      image: [
        "/Arts/Standing-sculpture.webp",
        "/images/blog/Tata-project.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Corten Steel",
      artworkSurface: "Rusted Finish",
      height: "7 feet",
      locationCreated: "Gurgaon, India",
      url: "/artwork/standing-sculpture"
    }
  },
  {
    slug: "parametric table",
    images: [
      { src: "/Arts/birch-wood-seat.webp", alt: "paarmetric table project, India, 2018" },
    ],
    caption: <>Aqua</>,
    details: {
      heading: "Aqua",
      location: "",
      description: (
        <>
          AQUA captures the rhythm, continuity, and adaptive flow of water through its undulating, layered wooden form. Evoking the sculptural elegance of tides and carved sea caves, this installation is both furniture and fluid gesture.
          <br />Crafted using parametric design techniques, it serves as a signature piece for lobbies, art galleries, and experiential commercial interiors, where custom wooden seating, organic design, and functional sculpture meet.
        </>
      ),
      details: (
        <>
          Material: Birch Wood
          <br />Length: 17.4ft | Height: 2.7ft | Depth 4.3ft 
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal  <br /> Commissioned for: KPMG, Mumbai <br /> Photography: KPMG
        </>
      ),
    },
    seo: {
      title: "Aqua - Parametric Wooden Installation by Abhinav Goyal | India 2018",
      metaDescription: "Aqua: Parametric wooden installation capturing the flow of water, blending furniture and art. India 2023 by Abhinav Goyal.",
      keywords: ["aqua sculpture", "parametric design", "wooden installation", "functional art", "Abhinav Goyal", "organic design", "commercial interior art"],
      ogTitle: "Aqua - Fluid Art in Wood",
      ogDescription: "Explore Aqua, a parametric wooden installation evoking the rhythm of water, blending sculptural elegance with functional design.",
      ogImage: "/Arts/birch-wood-seat.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/parametric-table"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Aqua",
      description: "A parametric wooden installation capturing the rhythm and flow of water, blending sculptural elegance with functional design.",
      image: ["/Arts/birch-wood-seat.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2018",
      artMedium: "Wood",
      height: "2 feet",
      width: "12 feet",
      locationCreated: "India",
      url: "/artwork/parametric-table"
    }
  },
  {
    slug: "Crescent sculpture",
    images: [
      { src: "/Arts/Crescent1.webp", alt: "Crescent art project in High Court, Delhi" },
      { src: "/Arts/Crescent-High-Court.webp", alt: "Crescent art project in High Court, Delhi" },
      { src: "/Arts/Crescent-High-Courtt.webp", alt: "Crescent art project in High Court, Delhi" }
    ],
    caption: <>Crescent</>,
    details: {
      heading: "Crescent",
      location: "",
      description: (
        <>
          This monumental crescent form combines the warmth of corten steel with the mirror finish of stainless steel, creating a powerful interplay between solidity and reflection. The intricate perforations on the inner arc allow light to pass through, casting dynamic shadows that evolve throughout the day. <br />
          Commissioned for a public institution, this work exemplifies the intersection of contemporary public art,<br /><b>symbolic sculpture,</b> and architectural integration using mixed metals.
        </>
      ),
      details: (
        <>
          Material: Stainless Steel, Corten Steel
          <br />Height: 12 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Architects: Delhi Forum International (DFI), Delhi<br />Commissioned for: High Court, Delhi
        </>
      ),
    },
    seo: {
      title: "Crescent - Mixed Metal Sculpture by Abhinav Goyal | Delhi 2025",
      metaDescription: "Crescent: Monumental corten and stainless steel sculpture with perforated arcs, casting dynamic shadows. Delhi 2025 by Abhinav Goyal.",
      keywords: ["crescent sculpture", "mixed metal art", "Delhi sculpture", "public art", "Abhinav Goyal", "symbolic sculpture", "architectural integration"],
      ogTitle: "Crescent - Dynamic Mixed Metal Art",
      ogDescription: "Discover Crescent, a monumental corten and stainless steel sculpture with perforated arcs, casting evolving shadows at Delhi’s High Court.",
      ogImage: "/Arts/Crescent1.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Crescent-sculpture"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Crescent",
      description: "A monumental sculpture combining corten and stainless steel with perforated arcs, casting dynamic shadows and integrating with architecture.",
      image: [
        "/Arts/Crescent1.webp",
        "/Arts/Crescent-High-Court.webp",
        "/Arts/Crescent-High-Courtt.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Stainless Steel and Corten Steel",
      height: "12 feet",
      locationCreated: "Delhi, India",
      url: "/artwork/Crescent-sculpture"
    }
  },
  {
    slug: "Wall Art",
    images: [
      { src: "/Arts/Wall-Art.webp", alt: "Wall art project, India, 2018" },
      { src: "/Arts/Wall_art.webp", alt: "Wall art project, India, 2018" },
    ],
    caption: <>Enlightened Wall</>,
    details: {
      heading: "The Enlightened Wall",
      location: "",
      description: (
        <>
          This sculptural wall installation transforms a blank surface into a bold expression of geometry and light. Crafted in folded stainless steel and accentuated with warm backlit LED outlines, the piece adds depth, movement, and a striking focal point to the facade. <br />
          Designed for luxury architecture, it reflects the rising demand for <b>custom stainless steel wall art </b>, 3D facade panels, and architectural lighting features in contemporary residential design.
        </>
      ),
      details: (
        <>
          Material: Stainless Steel
          <br />Length: 21 ft, Height: 6 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br />Commissioned for: Private residence, Meerut
        </>
      ),
    },
    seo: {
      title: "Enlightened Wall - Stainless Steel Wall Art by Abhinav Goyal | Meerut 2018",
      metaDescription: "Enlightened Wall: Stainless steel wall installation with LED lighting, transforming facades with geometry and light. Meerut 2018 by Abhinav Goyal.",
      keywords: ["enlightened wall", "stainless steel wall art", "Meerut sculpture", "architectural lighting", "Abhinav Goyal", "3D facade art", "luxury architecture"],
      ogTitle: "Enlightened Wall - Geometric Light Art",
      ogDescription: "Explore Enlightened Wall, a stainless steel installation with LED lighting, adding depth and movement to luxury residential facades in Meerut.",
      ogImage: "/Arts/Wall-Art.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Wall-Art"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "The Enlightened Wall",
      description: "A stainless steel wall installation with backlit LED outlines, transforming facades with geometric depth and dynamic light.",
      image: [
        "/Arts/Wall-Art.webp",
        "/Arts/Wall_art.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2018",
      artMedium: "Stainless Steel",
      artworkSurface: "Backlit LED",
      height: "6 feet",
      width: "21 feet",
      locationCreated: "Meerut, India",
      url: "/artwork/Wall-Art"
    }
  },
  {
    slug: "solemn",
    images: [
      { src: "/solemn-mumbai-2021.webp", alt: "horse contemporary sculpture in Mumbai, India, 2021" },
      { src: "/Arts/c1.webp", alt: "horse sculpture made of stainless steel" },
      { src: "/Arts/c2.webp", alt: "horse Sculpture in Goa, India, 2018" },
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
          Vanishing sculpture crafted from Stainless steel with a matte black finish. <br /> Dimensions: 1800mm | 1500mm
         | 675mm
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: KPMG, Mumbai <br /> Photography: KPMG
        </>
      ),
    },
    seo: {
      title: "Solemn - Stainless Steel Sculpture by Abhinav Goyal | Mumbai 2021",
      metaDescription: "Solemn: Stainless steel sculpture with matte black finish, playing with light and illusion in KPMG’s Mumbai foyer. 2021 by Abhinav Goyal.",
      keywords: ["solemn sculpture", "stainless steel art", "Mumbai sculpture", "KPMG art", "Abhinav Goyal", "illusion sculpture", "corporate art"],
      ogTitle: "Solemn - Art of Light and Illusion",
      ogDescription: "Discover Solemn, a stainless steel sculpture in KPMG’s Mumbai foyer, shifting with light and angles to evoke strength and mystery.",
      ogImage: "/solemn-mumbai-2021.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/solemn"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Solemn",
      description: "A stainless steel sculpture with a matte black finish, playing with light and illusion to create an ever-shifting experience in KPMG’s Mumbai foyer.",
      image: [
        "/solemn-mumbai-2021.webp",
        "/Arts/c1.webp",
        "/Arts/c2.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2021",
      artMedium: "Stainless Steel",
      artworkSurface: "Matte Black Finish",
      height: "1800mm",
      width: "1500mm",
      depth: "675mm",
      locationCreated: "Mumbai, India",
      url: "/artwork/solemn"
    }
  },
  {
    slug: "Inverted Bull",
    images: [
      { src: "/Arts/bull.webp", alt: "Bull Stainless steel sculpture" },
      { src: "/Arts/Stainless-steel-bull.webp", alt: "Bull Stainless steel sculpture made of corten steel" },
    ],
    caption: <>Toro Inverso</>,
    details: {
      heading: "Toro Inverso",
      location: "",
      description: (
        <>
          Bold and angular, this stainless steel bull sculpture reimagines power through faceted geometry and sharp form. The polygonal surface captures light and shadow in motion, giving the piece a commanding presence from every angle.<br />
          A striking example of <b>contemporary metal animal sculpture,</b> it speaks to strength, momentum, and modernity. Perfect for urban landscapes, and financial institutions seeking iconic visual identity.
        </>
      ),
      details: (
        <>
          Material: Stainless steel
          <br />Height: 7 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Formforge Gallery, Noida
        </>
      ),
    },
    seo: {
      title: "Toro Inverso - Stainless Steel Bull Sculpture by Abhinav Goyal | Noida 2025",
      metaDescription: "Toro Inverso: Angular stainless steel bull sculpture with polygonal form, embodying strength and modernity. Noida 2025 by Abhinav Goyal.",
      keywords: ["toro inverso sculpture", "stainless steel bull", "Noida sculpture", "geometric animal art", "Abhinav Goyal", "modern sculpture", "urban art"],
      ogTitle: "Toro Inverso - Power in Steel",
      ogDescription: "Explore Toro Inverso, a stainless steel bull sculpture with angular geometry, commanding presence in urban landscapes and financial institutions.",
      ogImage: "/Arts/bull.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Inverted-Bull"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Toro Inverso",
      description: "An angular stainless steel bull sculpture with polygonal form, embodying strength and modernity for urban landscapes and financial institutions.",
      image: [
        "/Arts/bull.webp",
        "/Arts/Stainless-steel-bull.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Stainless Steel",
      height: "7 feet",
      locationCreated: "Noida, India",
      url: "/artwork/Inverted-Bull"
    }
  },
  {
    slug: "Metal Lord Shivji",
    images: [
      { src: "/Arts/metal-shivji.webp", alt: "Metal Shivji sculpture" },
    ],
    caption: <>Ekam</>,
    details: {
      heading: "Ekam",
      location: "",
      description: (
        <>
          This contemporary sculpture of <b>Lord Shivji</b> reimagines divinity through sharp geometric planes and a bold architectural form. Crafted in weathered corten steel, the faceted surface conveys strength, stillness, and transcendence qualities long associated with Mahadev. <br />
          Merging spiritual symbolism with modern design language, this work is ideal for luxury homes and meditative spaces looking to integrate sacred sculpture with contemporary metal art. A statement piece that evokes presence and peace in equal measure.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 6 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private residence, Delhi
        </>
      ),
    },
    seo: {
      title: "Ekam - Corten Steel Lord Shivji Sculpture by Abhinav Goyal | Delhi 2025",
      metaDescription: "Ekam: Contemporary corten steel sculpture of Lord Shivji, blending spiritual symbolism with modern design. Delhi 2025 by Abhinav Goyal.",
      keywords: ["ekam sculpture", "corten steel Shivji", "Delhi sculpture", "spiritual art", "Abhinav Goyal", "sacred sculpture", "modern deity art"],
      ogTitle: "Ekam - Divine Strength in Steel",
      ogDescription: "Discover Ekam, a corten steel sculpture of Lord Shivji, merging spiritual symbolism with modern geometric design for meditative spaces.",
      ogImage: "/Arts/metal-shivji.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Meatal-Lord-Shivji"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Ekam",
      description: "A contemporary corten steel sculpture of Lord Shivji, blending spiritual symbolism with sharp geometric planes for meditative spaces.",
      image: ["/Arts/metal-shivji.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Corten Steel",
      height: "6 feet",
      locationCreated: "Delhi, India",
      url: "/artwork/Meatal-Lord-Shivji"
    }
  },
  {
    slug: "Wall Sculpture",
    images: [
      { src: "/Arts/10999.png", alt: "Wall art project, India, 2023" },
    ],
    caption: <>Wall Sculpture</>,
    details: {
      heading: "Wall Sculpture",
      location: "",
      description: (
        <>
          This fluid, bubble-like sculpture clusters convex forms into a unified composition that reflects light and space with dynamic clarity. Suspended against a textured wall, its high-gloss brass finish adds a luxurious focal point to interiors.
          <br />An elegant blend of metal wall art, modern brass sculpture, and organic form design, this piece is ideal for high-end residences, art-centric spaces, and boutique hospitality interiors.
        </>
      ),
      details: (
        <>
          Material: Stainless Steel with Brass finish
          <br />Height: 4.5 ft, Width: 3 ft, Depth: 2.5 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
    seo: {
      title: "Wall Sculpture - Brass Finish Wall Art by Abhinav Goyal | India 2023",
      metaDescription: "Wall Sculpture: Stainless steel with brass finish, featuring fluid, bubble-like forms for luxurious interiors. India 2023 by Abhinav Goyal.",
      keywords: ["wall sculpture", "brass finish art", "India sculpture", "metal wall art", "Abhinav Goyal", "luxury interior art", "organic form design"],
      ogTitle: "Wall Sculpture - Luxurious Brass Art",
      ogDescription: "Explore Wall Sculpture, a stainless steel piece with a brass finish, featuring fluid forms for high-end residences and boutique interiors.",
      ogImage: "/Arts/10999.png",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Wall-Sculpture"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Wall Sculpture",
      description: "A stainless steel wall sculpture with a high-gloss brass finish, featuring fluid, bubble-like forms for luxurious interiors.",
      image: ["/Arts/10999.png"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2023",
      artMedium: "Stainless Steel",
      artworkSurface: "Brass Finish",
      height: "4.5 feet",
      width: "3 feet",
      depth: "2.5 feet",
      locationCreated: "India",
      url: "/artwork/Wall-Sculpture"
    }
  },

  {
    slug: "Butterfly head",
    images: [
      { src: "/Arts/Human-face-corten-steel.webp", alt: "Butterfly human head sculpture art project, India" },
    ],
    caption: <>Papillon</>,
    details: {
      heading: "Papillon",
      location: "",
      description: (
        <>
          Unveiled at<a
            href="https://indiadesignid.com/"
            target="_blank"
            style={{ marginRight: "6px", marginLeft: "6px", fontWeight: "bold" }}
          >
            India Design,
          </a>this sculpture blends human form with natural metamorphosis. A faceted corten steel head serves as the foundation, crowned with a dynamic burst of butterflies crafted in mirror-polished stainless steel. The contrast between rusted texture and reflective surfaces symbolizes inner transformation, freedom, and renewal.
          <br />Celebrated for its powerful visual storytelling, this piece exemplifies the rising demand for contemporary <b>stainless steel sculptures, art for luxury farmhouses, and statement garden installations </b>that merge art, nature, and identity.
        </>
      ),
      details: (
        <>
          Material: Stainless steel, Corten Steel
          <br />Height: 9.84 ft | Width: 6.79 ft | Depth: 8.20 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Farmhouse, Vasant Kunj, Delhi
        </>
      ),
    },
    seo: {
      title: "Papillon - Corten and Stainless Steel Sculpture by Abhinav Goyal | Delhi 2025",
      metaDescription: "Papillon: Corten and stainless steel sculpture blending human form with butterflies, symbolizing transformation. Delhi 2025 by Abhinav Goyal.",
      keywords: ["papillon sculpture", "corten steel art", "stainless steel butterflies", "Delhi sculpture", "Abhinav Goyal", "luxury farmhouse art", "transformation art"],
      ogTitle: "Papillon - Art of Metamorphosis",
      ogDescription: "Discover Papillon, a corten and stainless steel sculpture unveiled at India Design, symbolizing transformation with a human head and butterflies.",
      ogImage: "/Arts/Human-face-corten-steel.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Butterfly-head"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Papillon",
      description: "A corten and stainless steel sculpture blending a faceted human head with butterflies, symbolizing transformation, freedom, and renewal.",
      image: ["/Arts/Human-face-corten-steel.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Stainless Steel and Corten Steel",
      height: "9.84 feet",
      width: "6.79 feet",
      depth: "8.20 feet",
      locationCreated: "Delhi, India",
      url: "/artwork/Butterfly-head"
    }
  },
  {
    slug: "Wall Artwork",
    images: [
      { src: "/Arts/Light-wall-art.webp", alt: "Wall art project, India, 2018" },
      { src: "/images/blog/wall-art-.webp", alt: "Wall art project by formforge" },
    ],
    caption: <>Folded Light</>,
    details: {
      heading: "Folded Light",
      location: "",
      description: (
        <>
          This outdoor mural transforms a residential courtyard into a warm, sculptural space. <br /> Designed in tessellated corten steel panels with subtle lighting accents, the surface plays with shadow and depth, evoking a sense of quiet movement.
          <br />Perfect for high-end homes, this piece highlights the growing trend of architectural wall cladding, weathered steel art panels, and custom garden feature walls that merge function with striking visual form.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 10ft | Length: 16 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private residence, Hyderabad
        </>
      ),
    },
    seo: {
      title: "Folded Light - Corten Steel Wall Art by Abhinav Goyal | Hyderabad 2018",
      metaDescription: "Folded Light: Corten steel outdoor mural with lighting accents, transforming courtyards with depth and movement. Hyderabad 2018 by Abhinav Goyal.",
      keywords: ["folded light sculpture", "corten steel wall art", "Hyderabad art", "architectural cladding", "Abhinav Goyal", "garden feature wall", "outdoor mural"],
      ogTitle: "Folded Light - Sculptural Wall Art",
      ogDescription: "Explore Folded Light, a corten steel outdoor mural with lighting accents, adding depth and quiet movement to residential courtyards in Hyderabad.",
      ogImage: "/Arts/Light-wall-art.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Wall-Artwork"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Folded Light",
      description: "A corten steel outdoor mural with tessellated panels and lighting accents, transforming courtyards with shadow, depth, and quiet movement.",
      image: [
        "/Arts/Light-wall-art.webp",
        "/images/blog/wall-art-.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2018",
      artMedium: "Corten Steel",
      artworkSurface: "Lighting Accents",
      height: "10 feet",
      width: "16 feet",
      locationCreated: "Hyderabad, India",
      url: "/artwork/Wall-Artwork"
    }
  },
  {
    slug: "Corten steel sculpture",
    images: [
      { src: "/Arts/000.webp", alt: "Winged sculpture art project, India" },
    ],
    caption: <>Winged Form</>,
    details: {
      heading: "Winged Form",
      location: "",
      description: (
        <>
          This soaring sculpture evokes the elegance of flight and the energy of uplift. With its sweeping curves and radiant blades, the piece reflects its surroundings while creating an iconic silhouette against the sky. <i>Note: Description mentions stainless steel with mirror finish, but material is listed as Corten Steel.</i>
          <br />A powerful symbol of movement and transformation, it exemplifies the demand for large-scale sculptures, reflective outdoor art, and landmark installations in luxury landscapes and civic spaces.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 8 ft, Width: 3 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
    seo: {
      title: "Winged Form - Corten Steel Sculpture by Abhinav Goyal | India 2025",
      metaDescription: "Winged Form: Corten steel sculpture symbolizing flight and transformation with sweeping curves. India 2025 by Abhinav Goyal.",
      keywords: ["winged form sculpture", "corten steel art", "India sculpture", "outdoor art", "Abhinav Goyal", "large-scale sculpture", "transformation art"],
      ogTitle: "Winged Form - Elegance in Flight",
      ogDescription: "Discover Winged Form, a corten steel sculpture with sweeping curves, symbolizing movement and transformation in luxury landscapes.",
      ogImage: "/Arts/000.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Corten-steel-sculpture"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Winged Form",
      description: "A corten steel sculpture with sweeping curves, evoking the elegance of flight and symbolizing movement and transformation.",
      image: ["/Arts/000.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Corten Steel",
      height: "8 feet",
      width: "3 feet",
      locationCreated: "India",
      url: "/artwork/Corten-steel-sculpture"
    }
  },
  {
    slug: "Corten Steel Triform",
    images: [
      { src: "/Arts/triform-corten-steel.webp", alt: "corten steel art project, India, 2018" },
    ],
    caption: <>Triform</>,
    details: {
      heading: "Triform",
      location: "",
      description: (
        <>
          This biomorphic corten steel sculpture creates a dramatic architectural gesture in the landscape. With its soft, droplet-like volumes and glowing linear inlays, it invites viewers to walk through and engage with the form both visually and physically.
          <br />An iconic example of contemporary corten steel art, it blends natural inspiration with modern geometry, <br />perfect for luxury estates, sculpture gardens, and curated outdoor spaces.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 10 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Farmhouse, Delhi
        </>
      ),
    },
    seo: {
      title: "Triform - Corten Steel Sculpture by Abhinav Goyal | Delhi 2018",
      metaDescription: "Triform: Biomorphic corten steel sculpture with droplet-like forms and glowing inlays. Delhi 2018 by Abhinav Goyal.",
      keywords: ["triform sculpture", "corten steel art", "Delhi sculpture", "biomorphic art", "Abhinav Goyal", "luxury estate art", "sculpture garden"],
      ogTitle: "Triform - Architectural Art in Steel",
      ogDescription: "Explore Triform, a biomorphic corten steel sculpture with droplet-like forms, inviting engagement in luxury estates and sculpture gardens.",
      ogImage: "/Arts/triform-corten-steel.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Corten-Steel-Triform"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Triform",
      description: "A biomorphic corten steel sculpture with soft, droplet-like volumes and glowing linear inlays, creating a dramatic architectural gesture.",
      image: ["/Arts/triform-corten-steel.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2018",
      artMedium: "Corten Steel",
      height: "10 feet",
      locationCreated: "Delhi, India",
      url: "/artwork/Corten-Steel-Triform"
    }
  },
  {
    slug: "Bar Table",
    images: [
      { src: "/Arts/444.webp", alt: "Bar Table project, India, 2018" },
       { src: "/Arts/Metal_Bar_table.webp", alt: "Bar Table project, India, 2018" }
    ],
    caption: <>Cantelever Bar Table</>,
    details: {
      heading: "Cantelever Bar Table",
      location: "",
      description: (
        <>
          This custom-made stainless steel table combines bold geometry with a seamless, reflective finish, turning functional furniture into an artistic statement. Its sharp planes and faceted base create a sculptural silhouette, perfect for outdoor patios or contemporary interiors.
          <br />Ideal for those seeking luxury metal furniture, architectural statement pieces, and custom stainless steel dining tables with a minimalist yet commanding presence.
        </>
      ),
      details: (
        <>
          Material: Stainless steel
          <br />Height: 3.6 ft | Length: 12.6 ft | Depth: 2.6 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Private residence, Meerut
        </>
      ),
    },
    seo: {
      title: "Cantelever Bar Table - Stainless Steel Furniture by Abhinav Goyal | Meerut 2018",
      metaDescription: "Cantelever Bar Table: Stainless steel table with bold geometry and reflective finish, blending art and function. Meerut 2018 by Abhinav Goyal.",
      keywords: ["cantelever bar table", "stainless steel furniture", "Meerut art", "luxury metal furniture", "Abhinav Goyal", "architectural furniture", "minimalist design"],
      ogTitle: "Cantelever Bar Table - Artful Furniture",
      ogDescription: "Discover Cantelever Bar Table, a stainless steel piece with bold geometry, blending sculptural art with functional design for luxury interiors.",
      ogImage: "/Arts/444.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Bar-Table"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Cantelever Bar Table",
      description: "A custom-made stainless steel table with bold geometry and reflective finish, blending functional furniture with sculptural art.",
      image: ["/Arts/444.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2018",
      artMedium: "Stainless Steel",
      height: "3.6 feet",
      width: "12.6 feet",
      depth: "2.6 feet",
      locationCreated: "Meerut, India",
      url: "/artwork/Bar-Table"
    }
  },
  {
    slug: "Cactus sculpture",
    images: [
      { src: "/Arts/555.webp", alt: "Cactus sculpture art project, India" },
    ],
    caption: <>Cactilome</>,
    details: {
      heading: "Cactilome",
      location: "",
      description: (
        <>
          These stylized cactus forms, crafted in weathered corten steel, bring a playful yet architectural presence to the landscape. Their natural patina contrasts beautifully against concrete and greenery, making them ideal for modern garden design.
          <br />Perfect for xeriscape gardens, minimalist outdoor decor, and sculptural landscaping, they highlight the elegance of rusted metal garden art with a contemporary twist.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 6 ft | Width: 3.2 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal
        </>
      ),
    },
    seo: {
      title: "Cactilome - Corten Steel Cactus Sculpture by Abhinav Goyal | India 2025",
      metaDescription: "Cactilome: Weathered corten steel cactus sculpture with playful, architectural form. India 2025 by Abhinav Goyal.",
      keywords: ["cactilome sculpture", "corten steel cactus", "India sculpture", "garden art", "Abhinav Goyal", "rusted metal art", "modern landscaping"],
      ogTitle: "Cactilome - Playful Cactus Art",
      ogDescription: "Explore Cactilome, a corten steel cactus sculpture with a playful, architectural presence, ideal for modern gardens and xeriscape landscapes.",
      ogImage: "/Arts/555.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/Cactus-sculpture"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Cactilome",
      description: "A weathered corten steel cactus sculpture with stylized forms, bringing a playful yet architectural presence to modern garden landscapes.",
      image: ["/Arts/555.webp"],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Corten Steel",
      artworkSurface: "Natural Patina",
      height: "6 feet",
      width: "3.2 feet",
      locationCreated: "India",
      url: "/artwork/Cactus-sculpture"
    }
  },
  {
    slug: "hythmic",
    images: [
      { src: "/Arts/666.webp", alt: "art project made of corten steel" },
      { src: "/Arts/corten-steel-sculpture.webp", alt: "outdoor sculpture art project made of corten steel by formforge" },
    ],
    caption: <>Rhythmic Monolith</>,
    details: {
      heading: "Rhythmic Monolith",
      location: "",
      description: (
        <>
          Inspired by the rhythm of water, this Corten steel sculpture brings a sculptural stillness to the reflecting pool it anchors. <br /> Its folded, origami-like geometry adds a contemporary layer of movement and balance to the landscape.
          <br />A refined addition to hospitality and public spaces, this work speaks to the rising demand for modern corten steel water features, architectural garden sculptures, and custom outdoor installations with organic influence.
        </>
      ),
      details: (
        <>
          Material: Corten Steel
          <br />Height: 4 ft, Length: 6.6 ft
        </>
      ),
      credits: (
        <>
          Artist: Abhinav Goyal <br /> Commissioned for: Crowne Plaza Lucknow By Ihg
        </>
      ),
    },
    seo: {
      title: "Rhythmic Monolith - Corten Steel Sculpture by Abhinav Goyal | Lucknow 2025",
      metaDescription: "Rhythmic Monolith: Corten steel sculpture inspired by water, with origami-like geometry. Lucknow 2025 by Abhinav Goyal.",
      keywords: ["rhythmic monolith", "corten steel sculpture", "Lucknow art", "water feature art", "Abhinav Goyal", "architectural sculpture", "outdoor installation"],
      ogTitle: "Rhythmic Monolith - Art of Water and Steel",
      ogDescription: "Discover Rhythmic Monolith, a corten steel sculpture with origami-like geometry, anchoring reflecting pools in hospitality spaces.",
      ogImage: "/Arts/666.webp",
      twitterCard: "summary_large_image",
      canonicalUrl: "/artwork/rhythmic"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: "Rhythmic Monolith",
      description: "A corten steel sculpture inspired by the rhythm of water, with folded, origami-like geometry, anchoring a reflecting pool with contemporary balance.",
      image: [
        "/Arts/666.webp",
        "/Arts/corten-steel-sculpture.webp"
      ],
      creator: {
        "@type": "Person",
        name: "Abhinav Goyal"
      },
      dateCreated: "2025",
      artMedium: "Corten Steel",
      height: "4 feet",
      width: "6.6 feet",
      locationCreated: "Lucknow, India",
      url: "/artwork/rhythmic"
    }
  },
  {
  slug: "shivaji-bust-birch",
  images: [
    { src: "/Arts/Shivaji-Maharaj.webp", alt: "Shivaji bust sculpture made of birch wood by Abhinav Goyal" },
    { src: "/Arts/Shivaji_Maharaj.webp", alt: "Shivaji bust sculpture made of birch wood by Abhinav Goyal" },
    { src: "/Arts/Shivaji_Maharaj_sculpture.webp", alt: "Shivaji bust sculpture  by formforge" }
  ],
  caption: <>Shivaji Bust</>,
  details: {
    heading: "Shivaji Bust",
    location: "",
    description: (
      <>
        Crafted with flowing contours in birch wood, this contemporary interpretation of <b>Chhatrapati Shivaji Maharaj</b> embodies strength, leadership, and legacy.
        The rhythmic carving lines bring movement to the form, echoing both regality and resilience in a modern design language.
        <br />Ideal for <i>luxury interiors</i>, <i>heritage-inspired decor</i>, and <i>custom wood sculptures</i>, this piece bridges tradition with timeless craftsmanship.
      </>
    ),
    details: (
      <>
        Material: Birch Wood
        <br />Height: 4 ft, Width: 2 ft 8 in
      </>
    ),
    credits: (
      <>
        Artist: Abhinav Goyal  <br /> Commissioned for: Elixa Park, Kolhapur, Maharashtra
      </>
    ),
  },
  seo: {
    title: "Shivaji Bust - Birch Wood Sculpture by Abhinav Goyal | 2025",
    metaDescription: "Shivaji Bust: Birch wood sculpture by Abhinav Goyal. A contemporary take on Chhatrapati Shivaji Maharaj for luxury interiors and heritage-inspired spaces.",
    keywords: ["Shivaji bust sculpture", "birch wood sculpture", "Abhinav Goyal", "wooden art", "heritage sculpture", "luxury interior sculpture"],
    ogTitle: "Shivaji Bust - Contemporary Birch Wood Sculpture",
    ogDescription: "Explore the Shivaji Bust, a handcrafted birch wood sculpture by Abhinav Goyal, merging regal legacy with modern sculptural language.",
    ogImage: "/Arts/shivaji-bust.webp",
    twitterCard: "summary_large_image",
    canonicalUrl: "/artwork/shivaji-bust-birch"
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: "Shivaji Bust",
    description: "A contemporary bust sculpture of Chhatrapati Shivaji Maharaj, handcrafted in birch wood with flowing, rhythmic contours.",
    image: ["/Arts/shivaji-bust.webp"],
    creator: {
      "@type": "Person",
      name: "Abhinav Goyal"
    },
    dateCreated: "2025",
    artMedium: "Birch Wood",
    height: "4 feet",
    width: "2.8 feet",
    locationCreated: "India",
    url: "/artwork/shivaji-bust-birch"
  }
}

];