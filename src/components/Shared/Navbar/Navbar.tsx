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
    <div className="font-Outfit overflow-hidden">
      <img
        src={IMAGES.heroGradient}
        alt=""
        className="absolute top-0 mx-auto w-full"
      />

      <div className="py-[15px] z-50 relative">
        <div className="block lg:hidden xl:block absolute top-0 right-[750px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="153"
            height="89"
            viewBox="0 0 153 89"
            fill="none"
          >
            <mask
              id="mask0_113_37"
              maskUnits="userSpaceOnUse"
              x="17"
              y="-47"
              width="118"
              height="118"
            >
              <circle
                cx="76.0944"
                cy="12.0939"
                r="58.3842"
                transform="rotate(22.16 76.0944 12.0939)"
                fill="url(#paint0_linear_113_37)"
              />
            </mask>
            <g mask="url(#mask0_113_37)">
              <g filter="url(#filter0_i_113_37)">
                <circle
                  cx="76.0944"
                  cy="12.0939"
                  r="58.3842"
                  transform="rotate(22.16 76.0944 12.0939)"
                  fill="#15072B"
                />
              </g>
              <g filter="url(#filter1_f_113_37)">
                <path
                  d="M43.376 -54.3385C30.9838 -25.6849 26.9652 -5.86501 95.1228 15.7003C119.146 25.4844 135.776 16.2939 149.593 -7.88459C155.487 10.6231 155.073 31.6697 146.953 51.6087C129.357 94.8121 82.2384 116.454 41.7101 99.9482C1.18184 83.4419 -17.4091 35.0375 0.186697 -8.16594C8.85607 -29.452 24.6925 -45.5041 43.376 -54.3385Z"
                  fill="#5EEDD0"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_i_113_37"
                x="17.6947"
                y="-52.6538"
                width="116.799"
                height="123.147"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3.96745"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_innerShadow_113_37"
                />
                <feOffset dy="-6.34792" />
                <feGaussianBlur stdDeviation="7.14141" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_113_37"
                />
              </filter>
              <filter
                id="filter1_f_113_37"
                x="-104.765"
                y="-152.652"
                width="356.669"
                height="356.451"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="49.1567"
                  result="effect1_foregroundBlur_113_37"
                />
              </filter>
              <linearGradient
                id="paint0_linear_113_37"
                x1="69.3356"
                y1="-24.8637"
                x2="76.0944"
                y2="88.885"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Container>
          <div className="flex items-center justify-between z-50">
            {/* Logo */}
            <Link to={"/"}>
              <img src={IMAGES.logoGif} alt="logo" className="z-10 w-[200px]" />
            </Link>

            {!user ? (
              <div className="hidden lg:flex items-center gap-6 z-10">
                <Link
                  to={"/auth/signin"}
                  style={{
                    boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(8.050000190734863px)",
                  }}
                  className="rounded-xl border border-neutral-90 bg-primary-50 text-white px-10 py-3 font-semibold hover:bg-primary-10 transition duration-300 w-[200px] ease-in-out transform hover:scale-105 active:scale-95"
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
              <div className="hidden lg:flex items-center gap-6 z-10">
                <button
                  onClick={handleLogout}
                  style={{
                    boxShadow: "0px 4px 24px 0px rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(8.050000190734863px)",
                  }}
                  className="rounded-xl border border-neutral-90 bg-primary-50 text-white px-10 py-3 font-semibold hover:bg-primary-10 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer"
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
