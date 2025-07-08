import { Link, useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import Hero from "../../HomePage/Hero/Hero";
import { navlinks } from "./navlinks";
import HamburgerMenu from "./HamburgerMenu";
import { logout, useCurrentUser } from "../../../redux/Features/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import Cookies from "js-cookie";

const Navbar = () => {
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
    navigate("/auth/signin");
  };

  return (
    <div className="relative font-Outfit overflow-hidden">
      <div className="bg-primary-15 w-[443px] h-[351px] rounded-[443px] blur-[75px] z-10 absolute top-0 left-0"></div>
      <div className="bg-primary-20 w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute top-0 right-[600px]"></div>
      <div className="bg-primary-15 w-[443px] h-[351px] rounded-[443px] blur-[75px] z-0 absolute top-10 -right-60 opacity-50"></div>

      <div className="bg-neutral-10 py-[15px] z-50 relative">
        <Container>
          <div className="flex items-center justify-between z-50">
            {/* Logo */}
            <Link to={"/"}>
              <img src={IMAGES.logoGif} alt="logo" className="z-10" />
            </Link>

            {/* Navlinks */}
            <div className="hidden lg:flex items-center gap-[42px] z-10">
              {navlinks?.map((navlink) => (
                <Link
                  key={navlink.label}
                  to={navlink.path}
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
              <div className="hidden lg:flex items-center gap-6 z-10">
                <Link
                  to={"/auth/signin"}
                  className="p-2 w-[126px] h-12 rounded-lg border border-secondary-10 text-secondary-10 font-medium flex items-center justify-center"
                >
                  Sign In
                </Link>
                <Link
                  to={"/signup"}
                  className="p-2 w-[126px] h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium flex items-center justify-center"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-6 z-10">
                <button
                  onClick={handleLogout}
                  className="p-2 w-[126px] h-12 rounded-lg border border-secondary-10 text-secondary-10 font-medium flex items-center justify-center cursor-pointer"
                >
                  Logout
                </button>
                <Link
                  to={"/dashboard"}
                  className="p-2 w-[126px] h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium flex items-center justify-center"
                >
                  Dashboard
                </Link>
              </div>
            )}

            <HamburgerMenu />
          </div>
        </Container>
      </div>

      <Hero />
    </div>
  );
};

export default Navbar;
