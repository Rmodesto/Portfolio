import { useRouter } from "next/router";

import { useState } from "react";
import Logo from "../../components/Logo";
import ActiveLink from "./ActiveLink";

const navigation = [
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full flex items-center md:px-24 justify-between flex-wrap bg-black-500 p-6 z-10">
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
            className="block mt-4 md:inline-block text-white text-xl tracking-widest cursor-pointer selection:tracking-widest md:mt-0 md:ml-6"
          >
            <ActiveLink
              href={`#${item.id}`}
              activeClassName="border-b-2 border-green-500"
              scroll
              onClick={() => setIsOpen(false)}
            >
              <span>{item.name}</span>
            </ActiveLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
