import React, { useState } from "react";
import logo from "./assets/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-zinc-100 fixed w-full top-0 left-0 shadow-md z-20">
      <div className="container mx-auto px-8 md:px-32 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="">
          <img src={logo} alt="carbonless logo" className="h-16" />
        </a>

        {/* Menu desktop */}
        <ul className="hidden xl:flex gap-12 text-zinc-900">
          <li className="text-base">
            <a href="about" className="hover:text-orange-400">
              O projekcie
            </a>
          </li>
          <li className="text-base flex items-center">
            <a href="cfg" className="hover:text-orange-400">
              CFG
            </a>
            <a
              href="configurator"
              className="ml-2 text-xs text-orange-400 hover:text-orange-600"
            >
              [konfigurator]
            </a>
          </li>
          <li className="text-base">
            <a href="#products" className="hover:text-orange-400">
              Nasze produkty
            </a>
          </li>
        </ul>

        {/* Ikonka hamburgera dla urządzeń mobilnych */}
        <button
          onClick={handleToggle}
          className="xl:hidden text-5xl focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className="bx bx-menu"></i>
        </button>
      </div>

      {/* Rozwijane menu mobilne */}
      {isMenuOpen && (
        <div className="xl:hidden bg-zinc-100 px-8 py-4">
          <ul className="flex flex-col gap-4 text-zinc-900 text-center">
            <li className="text-base ">
              <a
                href="about"
                className="block hover:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                O projekcie
              </a>
            </li>
            <li className="text-base">
              <a
                href="cfg"
                className="block hover:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                CFG
              </a>
              <a
                href="configurator"
                className="block text-xs text-orange-400 hover:text-orange-600"
                onClick={() => setIsMenuOpen(false)}
              >
                [konfigurator]
              </a>
            </li>
            <li className="text-base">
              <a
                href="products"
                className="block hover:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Nasze produkty
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
