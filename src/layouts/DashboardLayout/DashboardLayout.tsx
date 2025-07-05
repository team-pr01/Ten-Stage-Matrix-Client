import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHamburgerMenu from "../../components/Dashboard/DashboardHamburgerMenu/DashboardHamburgerMenu";
import { Link } from "react-router-dom";
import { IMAGES } from "../../assets";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="bg-primary-40 w-full relative">
      <img
        src={IMAGES.authBg}
        alt=""
        className="w-screen h-full absolute top-0 z-0"
      />
      <div className="xl:hidden flex items-center justify-between w-full p-5 z-10 relative">
        {/* Logo */}
      <Link to={"/"}>
        <img src={IMAGES.logo} alt="logo" className="z-10" />
      </Link>
      <DashboardHamburgerMenu/>
      </div>
      <div className="flex gap-[30px] z-10 relative px-5 py-[30px]">
        <Sidebar />   
      <div className="w-full ">
        <DashboardHeader/>
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
