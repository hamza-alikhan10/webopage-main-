import { useNavigate } from "react-router-dom";
import "../App.css";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: "GALLERY", href: "/", hasDropdown: true },
    { name: "ABOUT", href: "/about" },
    { name: "PRESS", href: "/press" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  const gallerySubLinks = [
    { name: "Available Art", href: "/shop" },
    { name: "God Idols", href: "/god-idols" },
  ];

  const handleNavigation = (path: string, linkName: string) => {
    console.log(`Navigating to: ${path}`); // Debug log
    navigate(path, { replace: true });
    setActiveLink(linkName);
    if (linkName !== "GALLERY") {
      setIsGalleryOpen(false);
    }
    // Fallback: Force reload if navigate fails (remove in production)
    setTimeout(() => {
      if (window.location.pathname !== path) {
        window.location.href = path;
      }
    }, 100);
  };

  const handleGalleryClick = () => {
    console.log("Navigating to: /"); // Debug log
    navigate("/", { replace: true });
    setIsGalleryOpen(true);
    setActiveLink("GALLERY");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsGalleryOpen(false);
    }
  };

  useEffect(() => {
    if (isGalleryOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isGalleryOpen]);

  useEffect(() => {
    if (isGalleryOpen && activeLink !== "GALLERY") {
      timeoutRef.current = setTimeout(() => {
        setIsGalleryOpen(false);
      }, 2000); // 2 seconds timeout on hover
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isGalleryOpen, activeLink]);

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-center font-normal text-4xl sm:text-4xl md:text-4xl lg:text-7xl"
          style={{
            fontFamily: '"Poppins", "Montserrat"',
            textDecorationLine: "none",
            letterSpacing: "0.2em",
            lineHeight: "1.2",
          }}
        >
          FORMFORGE
        </a>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center space-x-2.5 sm:space-x-6 md:space-x-7 mt-4 mb-8 sm:mb-11 relative">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <div
                  onMouseEnter={() => {
                    setIsGalleryOpen(true);
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                    }
                  }}
                  onMouseLeave={() => {
                    if (activeLink !== "GALLERY") {
                      timeoutRef.current = setTimeout(() => {
                        setIsGalleryOpen(false);
                      }, 2000);
                    }
                  }}
                  onClick={handleGalleryClick}
                >
                  <button
                    className={`nav-link text-gray-500 hover:text-black text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide transition-colors duration-300 relative`}
                  >
                    {link.name}
                  </button>
                  {isGalleryOpen && (
                    <div ref={dropdownRef} className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-50 w-48">
                      {gallerySubLinks.map((subLink) => (
                        <button
                          key={subLink.name}
                          onClick={() => handleNavigation(subLink.href, subLink.name)}
                          onMouseEnter={() => {
                            if (timeoutRef.current) {
                              clearTimeout(timeoutRef.current);
                            }
                          }}
                          onMouseLeave={() => {
                            if (activeLink !== "GALLERY") {
                              timeoutRef.current = setTimeout(() => {
                                setIsGalleryOpen(false);
                              }, 2000);
                            }
                          }}
                          className={`block w-full text-left px-4 py-2 text-gray-500 hover:text-black hover:bg-gray-100 text-base sm:text-lg md:text-xl transition-colors duration-300 relative`}
                        >
                          {subLink.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleNavigation(link.href, link.name)}
                  className={`nav-link text-gray-500 hover:text-black text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide transition-colors duration-300 relative`}
                >
                  {link.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .nav-link {
          transition: color 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .nav-link:hover::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: black;
          animation: underlineLeftToRight 0.3s ease forwards;
        }
        @keyframes underlineLeftToRight {
          to {
            left: 0;
          }
        }

        @media (max-width: 640px) {
          .text-4xl {
            font-size: 2.4rem;
          }
          .nav-link {
            font-size: 0.875rem;
          }
          .dropdown-menu {
            width: 120px;
            font-size: 0.875rem;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .nav-link {
            font-size: 1rem;
          }
          .dropdown-menu {
            width: 160px;
            font-size: 1rem;
          }
        }

        @media (min-width: 1025px) {
          .nav-link {
            font-size: 1.25rem;
          }
          .dropdown-menu {
            width: 200px;
            font-size: 1.25rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;