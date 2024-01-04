import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const HamburgerMenu = () => {
  const [activeLink, setActiveLink] = useState("projects");
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    closeMobileMenu();
  };

  return (
    <div className="relative md:hidden">
      <button
        className="absolute -top-4 left-0 z-50 cursor-pointer focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <div
        className={`absolute inset-x-0 z-50 ${
          mobileMenuOpen ? "mt-2" : "hidden md:flex"
        }`}
      >
        <nav
          className="flex flex-col items-center space-x-4 cursor-pointer 
          font-acumin tracking-wider bg-white"
          aria-label="Mobile navigation menu"
        >
          <LinkScroll
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              handleSetActiveLink("projects");
            }}
            className={`text-gray-500 ${
              activeLink === "projects"
                ? "text-green-500 animation-active"
                : "hover:text-blue"
            }`}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </LinkScroll>

          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              handleSetActiveLink("about");
            }}
            className={`text-gray-500 ${
              activeLink === "about"
                ? "text-green-500 animation-active"
                : "hover:text-blue"
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </LinkScroll>

          <LinkScroll
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              handleSetActiveLink("contact");
            }}
            className={`text-gray-500 ${
              activeLink === "contact"
                ? "text-green-500 animation-active"
                : "hover:text-blue"
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </LinkScroll>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
