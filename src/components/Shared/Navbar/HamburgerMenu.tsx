import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navlinks } from "./navlinks";
import { FaAlignRight } from "react-icons/fa";
import { IMAGES } from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { logout, useCurrentUser } from "../../../redux/Features/Auth/authSlice";
import Cookies from "js-cookie";
import { toast } from "sonner";

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

  const user = useSelector(useCurrentUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Remove cookies
    Cookies.remove("accessToken");
    Cookies.remove("role");

    // Dispatch logout and navigate
    dispatch(logout());
    toast.success("Logged out successfully.");
    localStorage.clear();
    navigate("/auth/signin");
  };

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
        className={`fixed inset-y-0 right-0 z-50 bg-neutral-20 py-8 px-6 border border-primary-50 w-[270px] overflow-y-auto transition-all duration-300 transform flex flex-col items-start justify-between ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 z-10">
          <Link to={"/"}>
            <img src={IMAGES.logoGif} alt="logo" className="z-10" />
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

        {!user ? (
          <div className="flex flex-col items-center gap-6 z-10">
            <Link
              to={"/auth/signin"}
              style={{
                boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(8.050000190734863px)",
              }}
              className="rounded-xl border border-neutral-90 bg-primary-50 text-white px-10 py-3 font-semibold hover:bg-primary-10 transition duration-300 w-[200px] ease-in-out transform hover:scale-105 active:scale-95 text-center"
            >
              Sign In
            </Link>
            <Link
              to={"/auth/signup"}
              className="px-8 py-[15px] w-full rounded-xl hover:bg-primary-10 bg-primary-85 text-white font-semibold text-center cursor-pointer flex justify-center items-center gap-[6px] transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              style={{
                boxShadow: `
                    inset 0px 2px 2px 0px #D26407,
                    inset 0px -4px 4px 0px rgba(0, 0, 0, 0.35),
                    inset 0px 4px 4px 0px rgba(255, 255, 255, 0.40),
                    0px 4px 24px 0px rgba(168, 82, 5, 0.50)
                  `,
              }}
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 z-10 w-full">
            <button
              onClick={handleLogout}
              style={{
                boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(8.050000190734863px)",
              }}
              className="rounded-xl border border-neutral-90 bg-primary-50 text-white px-10 py-3 font-semibold hover:bg-primary-10 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 w-full"
            >
              Logout
            </button>
            <Link
              to={"/dashboard"}
              className="px-10 py-[15px] w-full rounded-xl hover:bg-primary-10 bg-primary-85 text-white font-semibold text-sm text-center cursor-pointer flex justify-center items-center gap-[6px] transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              style={{
                boxShadow: `
                    inset 0px 2px 2px 0px #D26407,
                    inset 0px -4px 4px 0px rgba(0, 0, 0, 0.35),
                    inset 0px 4px 4px 0px rgba(255, 255, 255, 0.40),
                    0px 4px 24px 0px rgba(168, 82, 5, 0.50)
                  `,
              }}
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
