import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navlinks } from "./navlinks";
import { FaAlignRight } from "react-icons/fa";
import { IMAGES } from "../../../assets";

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
      <FaAlignRight
        onClick={toggleHamburgerMenu}
        className="text-white size-7 cursor-pointer"
      />

      {/* Background Overlay */}
      <div
        onClick={toggleHamburgerMenu}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isHamburgerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 py-5 px-6 bg-primary-70 w-[270px] overflow-y-auto h-screen transition-all duration-300 transform flex flex-col gap-8 ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link to={"/"}>
          <img src={IMAGES.logo} alt="logo" className="z-10" />
        </Link>

        {navlinks?.map((navlink) => (
          <Link
            key={navlink.label}
            to={navlink.path}
            onClick={toggleHamburgerMenu}
            className={`text-lg font-medium ${
              location.pathname === navlink.path
                ? "underline text-primary-10"
                : "text-white"
            }`}
          >
            {navlink.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
