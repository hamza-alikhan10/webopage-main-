import React from "react";
import Biography, { BiographySection } from "@/components/Biography";

const featuredWorks = [
  {
    id: 1,
    title: "Urban Metamorphosis",
    image: "/images/blog/Corten_Steel_Face.jpg",
    year: "2025",
    location: "New Delhi",
  },
  {
    id: 2,
    title: "Waves of Infinity",
    image: "/images/blog/AD_Elephant.jpg",
    year: "2024",
    location: "Mumbai",
  },
  {
    id: 3,
    title: "Geometric Dreams",
    image: "/images/blog/Stainless_Steel_dolphin.jpg",
    year: "2024",
    location: "Bangalore",
  },
  {
    id: 4,
    title: "Eternal Forms",
    image: "/images/blog/Stainless_Steel_Flower.jpg",
    year: "2024",
    location: "Chennai",
  },
  {
    id: 5,
    title: "Bonsai",
    image: "/images/blog/bonsai_metal.jpg",
    year: "2024",
    location: "Pune",
  },
  {
    id: 6,
    title: "Stainless Steel Lotus",
    image: "/images/blog/Stainless_Steel_Lotus.jpg",
    year: "2024",
    location: "Hyderabad",
  },
];

const FeaturedWorksGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 clear-both">
    {featuredWorks.map((work) => (
      <div
        key={work.id}
        onClick={() => window.location.href = '/gallery'}
        className="cursor-pointer group"
      >
        <div className="relative overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-[350px] sm:h-[420px] md:h-[500px] lg:h-[580px]
                       object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-6 left-6 right-6">
            <span
              className="text-white/90 text-sm tracking-widest bg-black/50 px-3 py-1 rounded"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {work.year} • {work.location}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const biographyData: BiographySection[] = [
  {
    heading: "",
    information: `Abhinav Goyal is a Delhi-based artist and designer creating sculpture, spatial objects, and site-specific installations defined by material precision, structural clarity, and sculptural tension. Working primarily in metal, his practice moves between the collectible and the monumental, developing works that respond to architecture, atmosphere, and human encounter.

His work engages private residences, public spaces, hospitality environments, and architectural settings, with each piece conceived as more than an object as a constructed presence within space. 
Across scales, the intent remains consistent: to create forms that feel restrained yet alive, resolved yet slightly unsettled, carrying both formal discipline and emotional charge.`,
    image: "/sir.webp",
    position: "right",
    headingAlign: "left",
  },
  {
    heading: "TYPES OF SPATIAL WORK",
    information: `Each project begins with context: site, scale, light, movement, and intended experience. From there, the work is developed through sketching, digital modelling, material exploration, and fabrication-led refinement, allowing concept and structure to evolve together. The methodology is iterative, treating making not as a final stage, but as an integral part of the thinking process.`,
    image: "",
    position: "right",
    headingAlign: "left",
  },
  {
    heading: "MATERIAL LANGUAGE",
    information: `Metal is central to the studio's language not only as structure, but as surface, weight, memory, and tension. Materials such as corten steel, stainless steel, brass, and bronze are used for their ability to hold precision while also carrying tactility, depth, reflection, and age. Seams, folds, welds, perforations, and layered construction are approached as expressive decisions that remain visible within the finished work.`,
    image: "",
    position: "right",
    headingAlign: "left",
  },
  {
    heading: "COMMISSIONS",
    information: `The studio undertakes commissions across residential, public, commercial, hospitality, and institutional contexts. Each work is developed in close response to its architectural setting, functional conditions, and emotional atmosphere, with equal emphasis on originality, technical rigour, and permanence. Every commission is approached as both an artistic proposition and a built reality.`,
    image: "",
    position: "right",
    headingAlign: "left",
    featuredWorks: true,
  },
  {
    heading: "",
    information: `For commissions, collaborations, and project enquiries, the studio welcomes conversations that involve strong architectural integration, material depth, and a clear sense of intent. Each project is approached with close attention to context, process, and long-term presence.`,
    image: "",
    position: "right",
    headingAlign: "left",
    contactButton: true,
  },
];

const BiographyPage: React.FC = () => {
  return <Biography sections={biographyData} FeaturedWorksGrid={FeaturedWorksGrid} />;
};

export default BiographyPage;