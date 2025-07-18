import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { dashboardSidebarLinks } from "../Sidebar/sidebarLinks";
import { ICONS, IMAGES } from "../../../assets";
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
    localStorage.clear();
    navigate("/auth/signin");
  };

  return (
    <div className="relative hamburgerMenu block xl:hidden">
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
        className={`bg-neutral-20 py-8 px-6 border border-primary-50 fixed inset-y-0 right-0 z-50 w-[270px] overflow-y-auto transition-all duration-300 transform flex flex-col gap-8 ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8">
          <Link to={"/dashboard"}>
            <img src={IMAGES.logoGif} alt="logo" className="z-10" />
          </Link>

          {dashboardSidebarLinks?.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={toggleHamburgerMenu}
              className={`flex items-center gap-2 text-xl hover:text-primary-10 transition duration-300 ${
                location.pathname === item.path
                  ? "text-primary-10"
                  : "text-white"
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
              to={"/auth/signin"}
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
          <button
            onClick={handleLogout}
            className="px-6 py-3 w-full rounded-xl hover:bg-primary-10 bg-primary-85 text-white font-semibold text-sm text-center cursor-pointer flex justify-center items-center gap-[6px] transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
            style={{
              boxShadow: `
                    inset 0px 2px 2px 0px #D26407,
                    inset 0px -4px 4px 0px rgba(0, 0, 0, 0.35),
                    inset 0px 4px 4px 0px rgba(255, 255, 255, 0.40),
                    0px 4px 24px 0px rgba(168, 82, 5, 0.50)
                  `,
            }}
          >
            <img src={ICONS.logout} alt="" className="size-6" />
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardHamburgerMenu;
