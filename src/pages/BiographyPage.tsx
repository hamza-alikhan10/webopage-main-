import React from "react";
import Biography, { BiographySection } from "@/components/Biography";

const biographyData: BiographySection[] = [
  {
    heading: "PRACTICE",
    information: `FormForge is the spatial design practice of Abhinav Goyal.
Working at the intersection of art, architecture, and permanent construction, the practice develops site-specific spatial interventions that operate as part of the built environment rather than as discrete objects.
The work is not concerned with producing sculptures to occupy space, but with re-authoring spatial conditions, thresholds, and ground relationships through constructed form.
Space is treated as a material in itself. Architecture becomes a framework within which circulation, proportion, material behaviour, light, and long-term presence are composed.
The intent is not visual emphasis, but spatial consequence.  
Form is not applied. It is derived.
Projects are conceived as permanent insertions into their environments, authored to belong to a specific location and to mature with time rather than age out of relevance.`,
    image: "/sir.webp",
    position: "right",
  },
  {
    heading: "Types of spatial work",
    information: `The practice engages with spatial work across four recurring conditions:
**Threshold Interventions**
Works situated at points of arrival, entry, transition, or pause. These redefine
 orientation and prepare the body for spatial change.
**Spatial Anchors**
Central or vertical constructs that stabilise open volumes and establish hierarchy within a space.
**Functional Constructs** 
Structures that integrate seating, water, light, or shade, where function emerges 
as a consequence of spatial intent rather than its origin.
**Landscape Interventions**
Ground conditions, terrain modifications, and constructed land forms that become inseparable from their sites.
**These categories describe spatial behaviour, not object type.**`,
    image: "/don3.webp",
    position: "left",
  },
  {
  heading: "Method",
  information: `Every project begins with spatial diagnosis.
The site is read for its geometry, boundaries, movement patterns, architectural language,
 climatic conditions, and material lifespan. Only then is an intervention proposed.
Structure, material, and construction logic emerge from this reading.
The work develops through close coordination with clients, architects, engineers, landscape designers,
 and our expert fabricators, ensuring that spatial intent and built reality remain aligned.
Authorship is maintained through the entire process, from conceptual strategy to on-site execution.
`,
  image: "", // intentionally empty
  position: "right",
},
{
  heading: "Principles",
  information: `A project is only considered complete when it becomes inseparable from its site.
When it resists relocation.
When it alters how the body moves, pauses, or orients itself.
When it feels structurally inevitable rather than visually added.
If an element can be removed without consequence, it does not belong.`,
image: "", // intentionally empty
  position: "right",
},
{
  heading: "Position",
  information: `Formforge is not an art studio.
It is not a catalogue-based practice.
It does not place objects into space.
It authors spatial conditions through constructed form.`,
image: "", // intentionally empty
  position: "right",
},
{
  heading: "Engagement",
  information: `The practice undertakes a limited number of long-term commissions each year, working with architects, institutions, and private clients where spatial intent and permanence are central to the project.
Initial conversations focus on spatial potential rather than predefined forms or typologies.
Spatial interventions authored in dialogue with architecture, landscape, and material intelligence.`,
  image: "",
  position: "right",
}

];

const BiographyPage: React.FC = () => {
  return (
    <div className="sm:p-4">
      <Biography sections={biographyData} />
    </div>
    
  );
};

export default BiographyPage;
