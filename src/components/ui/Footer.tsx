import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiNewspaper } from "react-icons/hi";
import { BiNews } from "react-icons/bi";

const Footer = () => {
  const socialLinks = [

    {
      icon: FaInstagram,
      href: "https://www.instagram.com/formforge/",
      label: "Insta",
      external: true,
    },
    {
      icon: HiNewspaper,
      href: "/blog",
      label: "Blog",
      external: false,
    },
    {
      icon: BiNews,
      href: "/press",
      label: "Press",
      external: false,
    },
  ];

  return (
    <footer className="bg-transparent py-8">
      <div className="flex justify-center items-center flex-wrap md:space-x-4 space-x-2 px-4">
        {socialLinks.map(({ icon: Icon, href, label, external }) => (
          <div key={label} className="group relative">
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex justify-center items-center w-10 h-10 bg-black rounded-[20%] text-white text-base transition ease-in-out duration-300 cursor-pointer hover:scale-110 hover:bg-[rgb(86,84,81)]"
            >
              <Icon />
            </a>
            <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
              {label}
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;