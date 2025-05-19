import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navlinks } from "./navlinks";
import { FaAlignRight } from "react-icons/fa";

const HamburgerMenu: React.FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const closestDropdown = target.closest(".hamburgerMenu");
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

  const location = useLocation();

  return (
    <div className="relative hamburgerMenu block lg:hidden">
      <FaAlignRight onClick={toggleHamburgerMenu} className="text-white size-7 cursor-pointer" />

      {/* Background Overlay */}
      <div
        onClick={toggleHamburgerMenu}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isHamburgerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 py-5 px-6 bg-white w-[270px] overflow-y-auto h-screen transition-all duration-300 transform flex flex-col gap-8 ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navlinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`${
              location.pathname === link.path ? "font-semibold" : "font-normal"
            } text-primary-10 text-lg leading-6`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
