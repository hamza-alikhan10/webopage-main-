import React from "react";
import Navbar from "./Navbar";
import Footer from './ui/Footer';

export interface BiographySection {
  heading: string;
  information: string;
  image: string;
  position: "left" | "right";
}

interface BiographyProps {
  sections: BiographySection[];
}

const Biography: React.FC<BiographyProps> = ({ sections }) => {
  return (
    <div className="min-h-screen bg-white page-shell origin-top">
      <div className="max-w-7xl mx-auto ">
        <Navbar />
        
        <div className="responsive-zoom sm:-m-0">
          {sections.map((section, index) => {
            const imageFloatClass =
              section.position === "left"
                ? "float-left sm:mr-4 md:mr-5 mt-[15%] sm:mt-[9%] mr-3"
                : "float-right sm:ml-4 md:ml-5 ml-2";

            return (
              <div
                key={index}
                className="sm:mb-4 md:mb-6 after:clear-both after:block after:content-['']"
              >
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




<h1
  className={`
    ${section.position === "right" ? "mt-0 mb-0" : "mt-4 mb-4"}
    ${section.position === "left" ? "text-right" : "text-left"}
    -ml-4 md:text-4xl sm:text-xl text-lg whitespace-nowrap
  `}
  style={{
    fontFamily: "Montserrat",
    letterSpacing: ".06em",
  }}
>
  {section.heading}
</h1>


                {/* Ensure line breaks are respected + allow selective bold */}
{section.information.split("\n").map((line, i) => {
  const trimmed = line.trim();
  const isBoldLine =
    trimmed.startsWith("**") && trimmed.endsWith("**");

  return (
    <p
      key={i}
      className={`text-left text-xs sm:text-sm md:text-base ${
        isBoldLine ? "font-semibold " : ""
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
            );
          })}
          <Footer />
        </div>
      </div>
    </div>
  );
  
};

export default Biography;
