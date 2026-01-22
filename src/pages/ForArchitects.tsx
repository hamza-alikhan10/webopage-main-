import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import "../App.css";
import { Helmet } from "react-helmet";

const sections = [
  {
    heading: "FOR ARCHITECTS",
    lines: [
      "A reliable art + fabrication partner who won't make your project harder. We collaborate with architects who need strong, site-specific work—with clean scope control, predictable execution, and minimal coordination load.",
      "The objective is simple: the work should sit inside the architecture naturally, get approved without friction, and get installed without surprises.",
    ],
  },
  {
    heading: "Why Architects Choose This Collaboration",
    subheading: true,
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
    subheading: true,
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
    subheading: true,
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
    subheading: true,
    lines: [
      "Lean communication — Single point of contact, clear decision checkpoints, fast turnaround on required inputs, predictable updates without follow-ups.",
      "Scope clarity — We protect you from \"silent scope creep\"—where the client keeps changing the outcome while expecting the same timeline and budget.",
      "Accountability — If something is not possible within structure, finish, safety, or timeline—we say it early. No surprises at fabrication stage.",
    ],
  },
  {
    heading: "Who This Works Best For",
    subheading: true,
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
    <section className="min-h-screen bg-white page-shell origin-top">
      <Helmet>
        <title>FormForge | For Architects</title>
        <meta
          name="description"
          content="A reliable art + fabrication partner supporting architects with clarity, scope control, and predictable timelines."
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="responsive-zoom py-8">
          {sections.map((section, sectionIndex) => (
            <div key={section.heading} className="mb-10">
              <h1
                className={`${
                  sectionIndex === 0 
                    ? "text-2xl sm:text-3xl md:text-5xl mb-6" 
                    : section.subheading
                    ? "text-xl sm:text-2xl md:text-3xl mb-4 mt-12"
                    : "text-lg sm:text-xl md:text-2xl mb-3 mt-8"
                } text-left font-semibold`}
                style={{
                  fontFamily: "Montserrat",
                  letterSpacing: ".04em",
                  color: "#1a1a1a",
                }}
              >
                {section.heading}
              </h1>
              <div className="space-y-4">
                {section.lines.map((line, index) => (
                  line === "" ? (
                    <div key={`${section.heading}-${index}`} className="h-2" />
                  ) : (
                    <p
                      key={`${section.heading}-${index}`}
                      className="text-left text-sm sm:text-base md:text-lg"
                      style={{
                        fontFamily: "Montserrat, Poppins, sans-serif",
                        lineHeight: "1.7em",
                        color: "rgb(60, 60, 60)",
                      }}
                    >
                      {line}
                    </p>
                  )
                ))}
              </div>
            </div>
          ))}
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ForArchitects;