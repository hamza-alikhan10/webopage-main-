import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

const processSections = [
  {
    heading: "",
    lines: [
      "We work in phases so the scope stays controlled, timelines stay realistic, and pricing remains predictable. If you're looking for quick concepts and instant quotes, this won't feel exciting. If you want clean delivery and zero chaos, this will feel like relief.",
      "Our process is structured to protect architects. It reduces client confusion, avoids mid-project reversals, and prevents last-minute design changes turning into fabrication delays. Price feels safe when the path is clear.",
    ],
  },
  {
    heading: "Phase 1 — Orientation",
    lines: [
      "The first phase is a working conversation, not a pitch. We understand the space, the client intent, the architectural language, and the real-world constraints—structure, visibility, circulation, installation access, timelines, and budget range.",
      "At this stage we don't give a \"final quote.\" We give a price orientation band based on size, material direction, complexity, and finishing level. This helps you decide fast whether the project is viable before investing time into concept development.",
      "",
      "**What You Get:**",
      "• Broad sculpture/installation direction aligned with the project's design language",
      "• High-level feasibility check (scale, placement, material logic)",
      "• Rough cost band + timeline band",
      "• Clear next-step scope: what happens only after engagement",
    ],
  },
  {
    heading: "Phase 2 — Direction Lock",
    lines: [
      "This phase is where the project becomes real. Once intent and budget range are aligned, we resolve one direction with clarity. No floating options. No open-ended exploration. Because fabrication needs conviction, not ambiguity.",
      "",
      "**Direction Lock Means We Freeze:**",
      "• Form language + silhouette",
      "• Approximate dimensions and orientation",
      "• Material + finish intent",
      "• Mounting logic and how it sits in the space",
      "• Lighting requirements (if any)",
      "• Site coordination requirements",
      "",
      "We also bring client understanding to the finish line. The goal is approval without drama—clear visuals, simple language, and enough clarity that the client can say \"yes\" without needing a 2-hour explanation from you.",
      "",
      
    ],
  },
  {
    heading: "Phase 3 — Fabrication & Installation",
    lines: [
      "Once scope is frozen, we move into engineering, fabrication, and execution. This is where timelines and cost control become non-negotiable because material ordering, structure, manpower, finishing, transport, and installation planning are all locked to the approved direction.",
      "We handle production with workshop discipline. That means clean coordination, predictable milestones and proactive updates,  so you don't have to chase us for progress or keep patching gaps between design and site reality.",
      "",
      "**Outputs:**",
      "• Structural detailing + internal engineering alignment",
      "• Fabrication drawings / build-ready specifications",
      "• Finish sampling and approvals (where required)",
      "• Packing + transport planning",
      "• Site execution plan + installation supervision",
      "• Final handover and care instructions",
      "",
      "**Any changes after fabrication begins are treated as scope changes, not \"small tweaks.\" Because every change affects engineering, rework, finishing, and site execution time.**",
    ],
  },
];

const Process = () => {
  return (
    <div className="min-h-screen bg-white page-shell origin-top ">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        
        <div className="responsive-zoom sm:-m-0">
          {processSections.map((section, index) => (
            <div
              key={index}
              className="sm:mb-4 md:mb-6 after:clear-both after:block after:content-['']"
            >
              <h1
                className={`
                  ${index === 0 ? "mt-0 mb-0" : "mt-4 mb-4"}
                  text-left -ml-4 md:text-4xl sm:text-xl text-lg
                `}
                style={{
                  fontFamily: "Montserrat",
                  letterSpacing: ".06em",
                }}
              >
                {section.heading}
              </h1>

              {section.lines.map((line, i) => {
                const trimmed = line.trim();
                
                if (trimmed === "") {
                  return <div key={i} className="h-2" />;
                }

                const isBoldLine = trimmed.startsWith("**") && trimmed.endsWith("**");

                return (
                  <p
                    key={i}
                    className={`text-left text-xs sm:text-sm md:text-base ${
                      isBoldLine ? "font-semibold" : ""
                    }`}
                    style={{
                      fontFamily: "Montserrat, Poppins, sans-serif",
                      lineHeight: "1.5em",
                      color: "rgb(87, 87, 87)",
                    }}
                  >
                    {isBoldLine ? trimmed.replace(/\*\*/g, "") : trimmed}
                  </p>
                );
              })}
            </div>
          ))}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Process;