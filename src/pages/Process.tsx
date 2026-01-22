import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";


const processSections = [
  {
    heading: null,
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
    ],
    outputs: [
      "Broad sculpture/installation direction aligned with the project's design language",
      "High-level feasibility check (scale, placement, material logic)",
      "Rough cost band + timeline band",
      "Clear next-step scope: what happens only after engagement",
    ],
  },
  {
    heading: "Phase 2 — Direction Lock",
    lines: [
      "This phase is where the project becomes real. Once intent and budget range are aligned, we resolve one direction with clarity. No floating options. No open-ended exploration. Because fabrication needs conviction, not ambiguity.",
    ],
    freeze: [
      "Form language + silhouette",
      "Approximate dimensions and orientation",
      "Material + finish intent",
      "Mounting logic and how it sits in the space",
      "Lighting requirements (if any)",
      "Site coordination requirements",
    ],
    additionalLines: [
      "We also bring client understanding to the finish line. The goal is approval without drama—clear visuals, simple language, and enough clarity that the client can say \"yes\" without needing a 2-hour explanation from you.",
    ],
    prevents: [
      "\"Can we see 5 more options?\"",
      "\"Let's change the material last minute\"",
      "\"My spouse wants it softer / taller / shinier\"",
      "\"We love it but can we reduce cost by 40%?\"",
    ],
  },
  {
    heading: "Phase 3 — Fabrication & Installation",
    lines: [
      "Once scope is frozen, we move into engineering, fabrication, and execution. This is where timelines and cost control become non-negotiable—because material ordering, structure, manpower, finishing, transport, and installation planning are all locked to the approved direction.",
      "We handle production with workshop discipline. That means clean coordination, predictable milestones, and proactive updates—so you don't have to chase us for progress or keep patching gaps between design and site reality.",
    ],
    outputs: [
      "Structural detailing + internal engineering alignment",
      "Fabrication drawings / build-ready specifications",
      "Finish sampling and approvals (where required)",
      "Packing + transport planning",
      "Site execution plan + installation supervision",
      "Final handover and care instructions",
    ],
    note: "Any changes after fabrication begins are treated as scope changes, not \"small tweaks.\" Because every change affects engineering, rework, finishing, and site execution time.",
  },
];

const Process = () => {
  return (
    <section className="min-h-screen bg-white page-shell">
      <div className="max-w-7xl mx-auto ">
        <Navbar />
        
        <div className="responsive-zoom">
         

          {/* Content Sections */}
          <div className="space-y-12">
            {processSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-5">
                
                {/* Section Heading */}
                {section.heading && (
                  <h2 
                    className="text-2xl md:text-3xl tracking-wide  border-b"
                    style={{ 
                      fontFamily: "Montserrat",
                      color: "rgb(34, 34, 34)",
                      letterSpacing: ".06em",
                      borderColor: "rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    {section.heading}
                  </h2>
                )}

                {/* Main Content Lines */}
                <div className="space-y-4">
                  {section.lines.map((line, index) => (
                    <p
                      key={index}
                      className="text-xs sm:text-sm md:text-base"
                      style={{ 
                        fontFamily: "Montserrat, Poppins, sans-serif",
                        lineHeight: "1.8em",
                        color: "rgb(87, 87, 87)",
                        
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Freeze Items (Phase 2) */}
                {section.freeze && (
                  <div className="mt-6">
                    <h3 
                      className="text-sm font-semibold tracking-wide mb-4"
                      style={{ 
                        fontFamily: "Montserrat",
                        color: "rgb(34, 34, 34)",
                        letterSpacing: ".06em"
                      }}
                    >
                      DIRECTION LOCK MEANS WE FREEZE
                    </h3>
                    <ul className="space-y-3">
                      {section.freeze.map((item, index) => (
                        <li
                          key={index}
                          className="text-xs sm:text-sm md:text-base pl-4"
                          style={{ 
                            fontFamily: "Montserrat, Poppins, sans-serif",
                            lineHeight: "1.8em",
                            color: "rgb(87, 87, 87)",
                            borderLeft: "2px solid rgba(0, 0, 0, 0.2)"
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Additional Lines */}
                {section.additionalLines && (
                  <div className="space-y-4 mt-6">
                    {section.additionalLines.map((line, index) => (
                      <p
                        key={index}
                        className="text-xs sm:text-sm md:text-base"
                        style={{ 
                          fontFamily: "Montserrat, Poppins, sans-serif",
                          lineHeight: "1.8em",
                          color: "rgb(87, 87, 87)",
                         
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                )}

               

                {/* Important Note */}
                {section.note && (
                  <div className="mt-6 p-6 rounded" style={{ backgroundColor: "rgba(0, 0, 0, 0.03)", borderLeft: "3px solid rgba(0, 0, 0, 0.4)" }}>
                    <p
                      className="text-xs sm:text-sm md:text-base"
                      style={{ 
                        fontFamily: "Montserrat, Poppins, sans-serif",
                        lineHeight: "1.8em",
                        color: "rgb(34, 34, 34)"
                      }}
                    >
                      <span style={{ fontWeight: "600" }}>Important: </span>
                      {section.note}
                    </p>
                  </div>
                )}

              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Process;