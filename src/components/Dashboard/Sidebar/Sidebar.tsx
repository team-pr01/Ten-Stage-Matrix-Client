import { Link, useLocation, useNavigate } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";
import { dashboardSidebarLinks } from "./sidebarLinks";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../../../redux/Features/Auth/authSlice";
import { toast } from "sonner";

const Sidebar = () => {
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
    <div
      style={{
        boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
        backdropFilter: "blur(5.05px)",
      }}
      className="w-[329px] bg-neutral-90/10 py-8 px-6 border border-primary-50 h-fit rounded-[28px] font-Outfit hidden xl:flex flex-col justify-between sticky top-0 left-0 gap-10"
    >
      <div className="flex flex-col gap-[30px]">
        {/* Logo */}
        <Link to={"/"}>
          <img src={IMAGES.logo} alt="logo" className="z-10" />
        </Link>

        <div className="bg-gradient-line h-[1px] w-full" />

        <div className="flex flex-col h-full max-h-[460px] overflow-y-auto custom-scrollbar">
          {dashboardSidebarLinks?.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-2 text-xl hover:text-primary-10 px-5 py-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-100 active:scale-95 ${
                location.pathname === item.path
                  ? "bg-gradient-navlink text-white"
                  : "text-neutral-145"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border border-primary-50 bg-neutral-150 shadow-custom rounded-[28px] px-4 py-7 text-center">
        <h1 className="font-semibold leading-6 text-white">
          Earn crypto flexibly!
        </h1>
        <p className="font-medium text-xs leading-5 mt-[6px] text-neutral-145">
          Creating or adding new tasks couldn't be easier
        </p>
        <button
          onClick={handleLogout}
          className="px-6 py-3 w-full rounded-xl hover:bg-primary-10 bg-primary-85 text-white font-semibold text-sm text-center cursor-pointer flex justify-center items-center gap-[6px] mt-5 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
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
      </div>
    </div>
  );
};

export default Sidebar;
