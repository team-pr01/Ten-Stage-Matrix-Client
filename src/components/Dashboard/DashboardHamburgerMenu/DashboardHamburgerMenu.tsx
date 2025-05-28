/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { dashboardSidebarLinks } from "../Sidebar/sidebarLinks";
import { IMAGES } from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { logout, useCurrentUser } from "../../../redux/Features/Auth/authSlice";
import { toast } from "sonner";
import Cookies from "js-cookie";

const DashboardHamburgerMenu: React.FC = () => {
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
    navigate("/signin");
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
        className={`fixed inset-y-0 right-0 z-50 py-5 px-6 bg-primary-70 w-[270px] overflow-y-auto h-screen transition-all duration-300 transform flex flex-col justify-between ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8">
          <Link to={"/"}>
          <img src={IMAGES.logo} alt="logo" className="z-10" />
        </Link>

        {dashboardSidebarLinks?.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            onClick={toggleHamburgerMenu}
            className={`flex items-center gap-2 text-xl hover:text-primary-10 transition duration-300 ${
              location.pathname === item.path ? "text-primary-10" : "text-white"
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
        </div>

        {!user ? (
          <div className="flex flex-col items-center gap-6 z-10">
            <Link
              to={"/signin"}
              className="p-2 w-full h-12 rounded-lg border border-secondary-10 text-secondary-10 font-medium flex items-center justify-center"
            >
              Sign In
            </Link>
            <Link
              to={"/signup"}
              className="p-2 w-full h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium flex items-center justify-center"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 z-10 w-full">
            <button
              onClick={handleLogout}
              className="p-2 w-full h-12 rounded-lg border border-secondary-10 text-secondary-10 font-medium flex items-center justify-center cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHamburgerMenu;
