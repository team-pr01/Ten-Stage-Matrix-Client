import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHamburgerMenu from "../../components/Dashboard/DashboardHamburgerMenu/DashboardHamburgerMenu";
import { Link } from "react-router-dom";
import { IMAGES } from "../../assets";

const DashboardLayout = () => {
  return (
    <div className="bg-primary-40 w-full">
      <div className="lg:hidden flex items-center justify-between w-full p-5">
        {/* Logo */}
      <Link to={"/"}>
        <img src={IMAGES.logo} alt="logo" className="z-10" />
      </Link>
      <DashboardHamburgerMenu/>
      </div>
      <div className="flex">
        <Sidebar />   
      <div className="w-full px-5 py-[30px]">
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
