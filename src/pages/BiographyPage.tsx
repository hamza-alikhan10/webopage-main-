import React from "react";
import Biography, { BiographySection } from "@/components/Biography";

const biographyData: BiographySection[] = [
  {
    heading: "OUR STORY",
    information: `Our practice focuses on permanent sculpture and spatial art commissions developed in close dialogue with architecture and place. The work is site-specific, long-term in intent, and shaped by material, scale, and context rather than surface expression or trends.

Each project begins with understanding the spatial conditions, architectural framework, and intent behind the commission. Decisions around form, material, and construction emerge from this process, allowing the work to respond meaningfully to its setting rather than being imposed upon it.

Projects typically unfold through a structured yet open process. Early conversations are used to establish orientation and clarify intent before any formal direction is defined. Once alignment is established, form, material, and scale are developed in response to architectural and spatial constraints. Detailed development follows through fabrication logic, material testing, and coordination, leading to execution and installation with long-term presence and durability in mind.

The studio works closely with architects, landscape designers, and consultants, valuing clear roles, early alignment, and shared responsibility. Collaboration is approached as a means of strengthening the work rather than diluting authorship.

This practice is not oriented toward short-term installations, rapid turnarounds, or catalogue-based selections. Each commission requires time, dialogue, and commitment from all parties involved.
`,
    image: "/sir.webp",
    position: "right",
  },
  {
    heading: "ARTIST'S STORY",
    information: `Abhinav Goyal is the founder and creative lead of the practice. With a background in architecture and spatial design, his work operates at the intersection of art, structure, and material intelligence.

His approach is informed by an understanding of scale, fabrication logic, and architectural context, allowing sculptural intent to emerge through process rather than preconceived form. The work reflects an ongoing engagement with material behaviour, digital tools, and the relationship between object, space, and viewer.

The practice has evolved through long-term collaborations with architects, institutions, and private clients, focusing on projects where clarity of intent and permanence of outcome are central. Alongside commissioned work, the studio continues to develop research-driven explorations that inform its broader artistic direction.
`,
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
