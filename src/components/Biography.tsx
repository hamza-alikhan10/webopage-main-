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
    <div className="origin-top">
      <div className="max-w-[90%] mx-auto sm:px-6 lg:px-8 py-12">
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
               <img
  src={section.image}
  alt={section.heading}
  className={`${imageFloatClass} block object-fill ${
    section.position === "left" 
      ? "w-[55%] h-[170px] sm:w-[50%] sm:h-[250px] md:h-[300px] lg:h-[260px]" 
      : "w-[47%] h-[310px] sm:w-[40%] sm:h-[220px] md:h-[250px] lg:h-[500px]"
  }  mr-2 mt-5 mb-1`}
/>


<h1
  className={`text-left ${
    section.position === "left" ? "text-right" : "text-left"
  } -ml-4 md:text-4xl sm:text-xl text-lg whitespace-nowrap`}
  style={{
    fontFamily: "Montserrat",
    letterSpacing: ".06em",
  }}
>
  {section.heading}
</h1>

                {/* Ensure line breaks are respected */}
                {section.information.split('\n').map((line, i) => (
                  <p
                    key={i}
                    className="text-left sm: text-xs sm:text-sm md:text-base"
                    style={{
                      fontFamily: "Montserrat, Poppins, sans-serif",
                      lineHeight: "1.6em",
                      color: "rgb(87, 87, 87)",
                    }}
                  >
                    {line.trim()}
                  </p>
                ))}
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