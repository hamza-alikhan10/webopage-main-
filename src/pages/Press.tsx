import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import '../App.css';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Card } from "@/components/ui/card";
  
  interface Publication {
    name: string;
    logo: string;
    link: string;
  }
  
  const publications: Publication[] = [
    {
      name: "GoodHomes",
      logo: "/goodhomes-magazine.webp",
      link: "https://www.goodhomes.co.in/design-and-style/style-makers/in-conversation-with-artist-abhinav-goyal-6038.html",
    },
    {
      name: "Shalini Passi",
      logo: "/shalini-passi-fashion.webp",
      link: "https://www.hindustantimes.com/htcity/htcity-showstoppers/shalini-passi-says-she-loves-drama-in-fashion-everyones-playing-it-so-safe-that-its-almost-boring-101737026695269.html",
    },
    {
      name: "Architectural Digest",
      logo: "/architectural-digest-magazine.webp",
      link: "https://www.architecturaldigest.in/content/visual-arts-architect-art-installations/",
    },
    {
      name: "CEO Insights",
      logo: "/ceo-insights-art-abhinav-goyal.webp",
      link: "https://www.ceoinsightsindia.com/vendor/-abhinav-goyal-creating-disruptive-art-forms-based-on-the-principles-of-contemporary-asymmetric-design-philosophies--cid-6407.html",
    },
    {
      name: "Love That Design",
      logo: "/love-that-design-magazine.webp",
      link: "https://www.artforum.com/article",
    },
    {
      name: "Surfaces Reporter",
      logo: "/surfaces-reporter-magazine.webp",
      link: "https://surfacesreporter.com/articles/102561/Brizo%20-%20Delta%20Faucet",
    },
    {
      name: "The Design Collective",
      logo: "/the-design-collective-magazine.webp",
      link: "https://www.thedesigncollective.co.in/post/formforge-pavilion",
    },
    {
      name: "India Design ID",
      logo: "/india-design-id-magazine.webp",
      link: "https://indiadesignid.com/id-exhibit/formforge/",
    },
    {
      name: "Rethinking The Future",
      logo: "/rethinking-the-future-magazine.webp",
      link: "https://www.dezeen.com/article",
    },
    {
      name: "Novatr",
      logo: "/novatr-parametric-design.webp",
      link: "https://www.novatr.com/blog/10-respected-parametric-design-firms-in-india-to-look-out-for#7",
    },
  ];
  
  const Press = () => {
    return (
      
      <section className="py-16 px-4 md:px-8" id="Root-padding">
<Navbar/>
        <div className="max-w-7xl mx-auto">
         
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {publications.slice(0, 10).map((pub, index) => (
              <a
                key={index}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <Card className="aspect-square flex items-center justify-center p-0 m-0 border-none">
                  <img
                    src={pub.logo}
                    alt={`${pub.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </Card>


              </a>
            ))}
          </div>
        </div>
        <Footer/>
      </section>
    );
  };
  
  export default Press;