import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

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
    <div className="font-Outfit bg-neutral-10 py-[15px]">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src={IMAGES.logo} alt="logo" className="" />

          {/* Navlinks */}
          <div className="flex items-center gap-[42px]">
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

          <div className="flex items-center gap-6">
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
  );
};

export default Navbar;
