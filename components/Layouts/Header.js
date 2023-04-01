import Link from "next/link";
import { useState } from "react";
import Logo from "../../components/Logo";

const navigation = [
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    setIsOpen(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center md:px-24 justify-between flex-wrap bg-black-500 p-6">
      <Logo />
      <div className="flex md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>
      <div
        className={`md:flex md:items-center md:w-auto w-full ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {navigation.map((item) => (
          <Link key={item.name} href={`#${item.id}`} passHref>
            <div
              className="block mt-4 md:inline-block text-white font-acumin text-xl tracking-widest cursor-pointer selection:tracking-widest md:mt-0 md:ml-6"
              onClick={() => handleLinkClick(item.id)}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
