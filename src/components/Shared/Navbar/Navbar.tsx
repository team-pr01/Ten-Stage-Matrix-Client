import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import Hero from "../../HomePage/Hero/Hero";

const Navbar = () => {
  const location = useLocation();
  const navlinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about-us",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <div className="relative font-Outfit overflow-hidden">
      <div className="bg-primary-15 w-[443px] h-[351px] rounded-[443px] blur-[75px] z-10 absolute top-0 left-0"></div>
      <div className="bg-primary-20 w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute top-0 right-[600px]"></div>
      <div className="bg-primary-15 w-[443px] h-[351px] rounded-[443px] blur-[75px] z-0 absolute top-10 -right-60 opacity-50"></div>

      <div className="bg-neutral-10 py-[15px] z-50 relative">
        <Container>
          <div className="flex items-center justify-between z-50">
            {/* Logo */}
            <img src={IMAGES.logo} alt="logo" className="z-10" />

            {/* Navlinks */}
            <div className="flex items-center gap-[42px] z-10">
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

            <div className="flex items-center gap-6 z-10">
              <button className="p-2 w-[126px] h-12 rounded-lg border border-secondary-10 text-secondary-10 font-medium">
                Sign In
              </button>
              <button className="p-2 w-[126px] h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </Container>
      </div>

      <Hero />
    </div>
  );
};

export default Navbar;
