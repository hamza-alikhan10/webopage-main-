import React from "react";
import Biography, { BiographySection } from "@/components/Biography";

const biographyData: BiographySection[] = [
  {
    heading: "OUR STORY",
    information: `FormForge is about exploring how design, technology, and craftsmanship come together in unexpected ways. It started as a pursuit of pushing material boundaries, experimenting with metal, understanding its possibilities, and finding innovative ways to shape it into functional and artistic forms.
    
    Over time, the journey has been about problem solving, refining digital fabrication techniques, and constantly challenging conventional approaches to design.

Every piece is an exploration of structure, balance, and expression, where technology isn’t just a tool but an enabler of creativity. The process is always evolving, driven by curiosity and the desire to create work that feels both timeless and forward thinking.

We operate at the intersection of art, architecture, and engineering, where sculptural intent meets digital precision. Rooted in material truth, our work moves fluidly across disciplines. Whether for interiors or public spaces, every piece becomes a dialogue between surface and void, weight and lightness, control and chance.

Using tools that range from CNC routers to sketchbooks, and materials that span corten steel, stainless, and wood, our practice merges old-world craft with algorithmic thinking. What emerges are works that are not just seen, but felt, where form invites interaction, and design becomes experience.

Inspired by nature, architecture, and the urban condition, FormForge aims to shape environments, not just objects. We’re not bound by categories. We’re driven by the potential of the unexpected.
`,
    image: "/sir.webp",
    position: "right",
  },
  {
    heading: "ARTIST'S STORY",
    information: `Abhinav Goyal, Founder and Creative Director of FormForge, is a visionary designer and contemporary artist whose creations seamlessly blend art, technology, and craftsmanship. With a foundation in architecture and interior design, he specializes in bespoke sculptures and artistic furniture that balance functionality with a profound sense of storytelling.

Based in Delhi, Abhinav’s work resonates with a global audience, characterized by its modern minimalism and innovative use of materials like steel and wood. His creations, ranging from site-specific sculptures to intricate design pieces, are celebrated for their precision, originality, and bold narratives that evoke emotional connections.

Under Abhinav’s leadership, FormForge has become synonymous with pioneering luxury design. Beyond his creative practice, he actively mentors aspiring designers, sharing his insights on the evolving intersection of digital technology and traditional craftsmanship. Through his artistry and dedication to pushing boundaries, Abhinav Goyal is making a lasting impact on the contemporary art and design landscape, inspiring audiences worldwide.`,
    image: "/don3.webp",
    position: "left",
  },
];

const BiographyPage: React.FC = () => {
  return (
    <div className="sm:p-4">
      <Biography sections={biographyData} />
    </div>
  );
};

export default BiographyPage;
