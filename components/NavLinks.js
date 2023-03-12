import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <nav className="items-center space-x-4 cursor-pointer font-acumin tracking-wider">
        <LinkScroll
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}
          onSetActive={() => {
            setActiveLink("projects");
          }}
          className={
            "text-white" +
            (activeLink === "projects"
              ? " text-green-500 animation-active"
              : " text-black-500 hover:text-blue")
          }
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
            setActiveLink("about");
          }}
          className={
            "text-white" +
            (activeLink === "about"
              ? " text-green-500 animation-active"
              : " text-black-500 hover:text-blue")
          }
        >
          About
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-10} // Add an offset of -100
          onSetActive={() => {
            setActiveLink("contact");
          }}
          className={
            "text-white" +
            (activeLink === "contact"
              ? " text-green-500 animation-active"
              : " text-black-500 hover:text-blue")
          }
        >
          Contact
        </LinkScroll>
      </nav>
    </>
  );
};

export default NavLinks;
