import { Link, useNavigate } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import Hero from "../../HomePage/Hero/Hero";
import HamburgerMenu from "./HamburgerMenu";
import { logout, useCurrentUser } from "../../../redux/Features/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import Cookies from "js-cookie";

const Navbar = () => {
  const user = useSelector(useCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Remove cookies
    Cookies.remove("accessToken");
    Cookies.remove("role");
    dispatch(logout());
    toast.success("Logged out successfully.");
    navigate("/auth/signin");
  };

  return (
    <div className="font-Outfit">
      <div className="bg-neutral-10 py-[15px] z-50 relative">
        <Container>
          <div className="flex items-center justify-between z-50">
            {/* Logo */}
            <Link to={"/"}>
              <img src={IMAGES.logoGif} alt="logo" className="z-10 w-[200px]" />
            </Link>

            {!user ? (
              <div className="hidden lg:flex items-center gap-6 z-10">
                <Link
                  to={"/signin"}
                  style={{
                    boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(8.050000190734863px)",
                  }}
                  className="rounded-xl border border-neutral-90 bg-primary-50 text-white px-10 py-3 font-semibold hover:bg-primary-10 transition duration-300"
                >
                  Sign In
                </Link>
                <Link
                  to={"/signup"}
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
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-6 z-10">
                <button
                  onClick={handleLogout}
                  style={{
                    boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(8.050000190734863px)",
                  }}
                  className="rounded-xl border border-neutral-90 bg-primary-50 text-white px-10 py-3 font-semibold hover:bg-primary-10 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
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

            <HamburgerMenu />
          </div>
        </Container>
      </div>

      <Hero />
    </div>
  );
};

export default Navbar;
