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
      onClick={() => setIsOpen(false)}
    >
      <div className="absolute inset-0 gradient-01" />
      <Logo />
      <div className="flex md:hidden" onClick={toggleMenu}>
        {/* ... */}
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
                className={`relative cursor-pointer hover:border-b-2 hover:border-green-500 ${
                  activeSection === item.id ? "border-b-2 border-green-500" : ""
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
