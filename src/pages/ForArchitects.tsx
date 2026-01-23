import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

const sections = [
  {
    heading: "",
    lines: [
      "A reliable art + fabrication partner who won't make your project harder. We collaborate with architects who need strong, site-specific work—with clean scope control, predictable execution, and minimal coordination load.",
      "The objective is simple: the work should sit inside the architecture naturally, get approved without friction, and get installed without surprises.",
    ],
  },
  {
    heading: "Why Architects Choose This Collaboration",
    lines: [],
  },
  {
    heading: "Clarity From Day One",
    lines: [
      "We understand proportion, material language, and architectural intent quickly. You won't get vague \"art talk\" or random visual clutter. You'll get direction that respects scale, geometry, and the project's design discipline.",
    ],
  },
  {
    heading: "Scope Stays Protected",
    lines: [
      "We don't keep work open-ended. We work with defined stages, defined outputs, and controlled iteration rounds—so timelines and budgets don't drift quietly.",
    ],
  },
  {
    heading: "Client Approvals Become Easier",
    lines: [
      "Architects often lose time explaining artwork to clients. Our presentations are built to reduce that. Visual clarity + minimal narrative + confident direction = approvals without confusion.",
    ],
  },
  {
    heading: "Fabrication Discipline",
    lines: [
      "We build what we propose. Engineering and fabrication constraints are part of design thinking from the start—so the handover to execution is smooth, not painful.",
    ],
  },
  {
    heading: "Zero Chaos On-Site",
    lines: [
      "Installation is planned like a construction activity—not a last-minute event. Site access, anchoring, crane plans, sequencing, and finishes are coordinated properly.",
    ],
  },
  {
    heading: "What We Deliver",
    lines: [
      "• Outdoor landmark works for plazas, entries, and courtyards",
      "• Lobby and atrium statement pieces",
      "• Landscape-integrated installations",
      "• Feature walls and architectural inserts",
      "• Custom site-specific objects tied to the building narrative",
    ],
  },
  {
    heading: "Deliverables Architects Actually Need",
    lines: [
      "• Resolved concept direction + form language",
      "• Material + finish intent (buildable, realistic)",
      "• Scale and placement logic (context-aware)",
      "• Drawings / specs for approvals and execution",
      "• Engineering coordination inputs (as required)",
      "• Installation planning + supervision support",
      "• Maintenance notes for handover (optional)",
    ],
  },
  {
    heading: "How The Collaboration Runs",
    lines: [
      "Lean communication — Single point of contact, clear decision checkpoints, fast turnaround on required inputs, predictable updates without follow-ups.",
      "Scope clarity — We protect you from \"silent scope creep\"—where the client keeps changing the outcome while expecting the same timeline and budget.",
      "Accountability — If something is not possible within structure, finish, safety, or timeline—we say it early. No surprises at fabrication stage.",
    ],
  },
  {
    heading: "Who This Works Best For",
    lines: [
      "This collaboration is a strong fit if you want:",
      "• A dependable partner who understands design discipline",
      "• Clean timelines with fewer client disruptions",
      "• Work that looks high-end without being noisy",
      "• A workshop-backed team that can actually execute",
      "",
      "This is not a fit if the expectation is:",
      "• Unlimited options before commitment",
      "• Endless client-driven iterations",
      "• \"Just send ideas first\" without context or scope",
    ],
  },
];

const ForArchitects = () => {
  return (
    <div className="min-h-screen bg-white page-shell origin-top">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        
        <div className="responsive-zoom sm:-m-0">
          {sections.map((section, index) => (
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
                if (line === "") {
                  return <div key={i} className="h-2" />;
                }

                return (
                  <p
                    key={i}
                    className="text-left text-xs sm:text-sm md:text-base"
                    style={{
                      fontFamily: "Montserrat, Poppins, sans-serif",
                      lineHeight: "1.5em",
                      color: "rgb(87, 87, 87)",
                    }}
                  >
                    {line}
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

export default ForArchitects;