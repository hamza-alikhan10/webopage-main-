import React from "react";
import Navbar from "./Navbar";
import Footer from './ui/Footer';

export interface BiographySection {
  heading: string;
  information: string;
  image: string;
  position: "left" | "right";
  headingAlign?: "left" | "right";
  featuredWorks?: boolean;
  contactButton?: boolean;
}

interface BiographyProps {
  sections: BiographySection[];
  FeaturedWorksGrid?: React.FC;
}

const Biography: React.FC<BiographyProps> = ({ sections, FeaturedWorksGrid }) => {
  return (
    <div className="min-h-screen bg-white page-shell origin-top">
      <div className="max-w-7xl mx-auto">
        <Navbar />

        <div className="responsive-zoom sm:-m-0">
          {sections.map((section, index) => {
            // headingAlign overrides position-based alignment if provided
            const alignClass = (section.headingAlign ?? (section.position === "left" ? "right" : "left")) === "right"
              ? "text-right"
              : "text-left";

            return (
              <div
                key={index}
                className="sm:mb-4 md:mb-6 after:clear-both after:block after:content-['']"
              >
                {/* Right-floated image */}
                {section.position === "right" && section.image && (
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="float-right ml-3 sm:ml-4 md:ml-5
                      w-[47%] h-[310px] sm:w-[40%] sm:h-[220px]
                      md:h-[250px] lg:h-[500px]
                      object-fill mt-5 mb-2"
                  />
                )}

                {/* Left-floated image */}
                {section.position === "left" && section.image && (
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="float-left mr-3 sm:mr-4 md:mr-5
                      w-[47%] h-[310px] sm:w-[40%] sm:h-[220px]
                      md:h-[250px] lg:h-[500px]
                      object-fill mt-5 mb-2"
                  />
                )}

                <h1
                  className={` ${alignClass} text-base sm:text-lg md:text-xl whitespace-nowrap`}
                  style={{
                    fontFamily: "Montserrat",
                    letterSpacing: ".06em",
                    fontWeight: 400,
                    color: "rgb(34,34,34)",
                  }}
                >
                  {section.heading}
                </h1>

                {section.information.split("\n").map((line, i) => {
                  const trimmed = line.trim();
                  const isBoldLine = trimmed.startsWith("**") && trimmed.endsWith("**");
                  return (
                    <p
                      key={i}
                      className={`text-left text-xs sm:text-sm md:text-base ${isBoldLine ? "font-semibold" : ""}`}
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

                {/* Featured works grid */}
                {section.featuredWorks && FeaturedWorksGrid && (
                  <FeaturedWorksGrid />
                )}

                {/* Contact button */}
                {section.contactButton && (
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => window.location.href = '/contact'}
                      className="relative cursor-pointer py-3 px-8 text-center inline-flex
                                 justify-center text-sm uppercase rounded-lg transition-transform
                                 duration-300 ease-in-out group outline-offset-4 overflow-hidden text-black"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        letterSpacing: "0.2em",
                        background: "transparent",
                        border: "1px solid black",
                      }}
                    >
                      <span className="relative z-20">Get In Touch</span>
                      <span className="absolute left-[-75%] top-0 h-full w-[50%] rotate-12 z-10 blur-lg
                                       group-hover:left-[125%] transition-all duration-1000 ease-in-out bg-black/10" />
                      <span className="w-1/2 transition-all duration-300 block absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0 border-black" />
                      <span className="w-1/2 transition-all duration-300 block absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0 border-black" />
                      <span className="w-1/2 transition-all duration-300 block absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0 border-black" />
                      <span className="w-1/2 transition-all duration-300 block absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0 border-black" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Biography;