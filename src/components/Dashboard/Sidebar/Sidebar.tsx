import { Link, useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "../../../assets";
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
    navigate("/signin");
  };

  return (
    <div className="w-[323px] bg-neutral-30 border-r border-neutral-25/50 px-10 py-[19px] h-screen overflow-y-auto font-Outfit hidden lg:flex flex-col justify-between sticky top-0 left-0 gap-10">
      <div className="flex flex-col gap-[30px]">
        {/* Logo */}
      <Link to={"/"}>
        <img src={IMAGES.logo} alt="logo" className="z-10" />
      </Link>

      <div className="flex flex-col gap-8">
        {dashboardSidebarLinks?.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-2 text-xl hover:text-primary-10 transition duration-300 ${
              location.pathname === item.path ? "text-primary-10" : "text-white"
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
      </div>

      <button
        onClick={handleLogout}
        className="p-2 w-full h-12 rounded-lg border border-secondary-10 text-secondary-10 font-medium flex items-center justify-center cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
