import Link from "next/link";
import { useState } from "react";
import Logo from "../../components/Logo";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black-500 p-6">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
            stroke="currentColor"
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
          <Link
            key={item.name}
            href={item.href}
            id={item.name}
            onClick={handleLinkClick}
            className="block mt-4 md:inline-block text-white font-acumin tracking-widest md:mt-0 md:ml-6"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;