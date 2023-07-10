import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../components/Logo";
import { navVariants } from "../../utils/motion";
import useActiveSection from "./useActiveSection";

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

  const activeSection = useActiveSection(navigation.map((item) => item.id));

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="fixed top-0 w-full flex items-center md:px-24 justify-between flex-wrap bg-black-500 p-6 z-10"
    >
      <div className="absolute inset-0 gradient-01" />
      <Logo className="logo-header" />
      <div className="flex md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
            className="h-6 w-6 text-white"
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
          <div
            key={item.name}
            className="block mt-4 md:inline-block text-white text-2xl tracking-widest cursor-pointer selection:tracking-widest md:mt-0 md:ml-6"
          >
            <Link href={`#${item.id}`}>
              <motion.button
                className={`relative cursor-pointer hover:border-b-2 hover:border-green ${
                  activeSection === item.id ? "border-b-2 border-green" : ""
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.name}
              </motion.button>
            </Link>
          </div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
