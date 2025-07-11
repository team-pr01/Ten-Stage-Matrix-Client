import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHamburgerMenu from "../../components/Dashboard/DashboardHamburgerMenu/DashboardHamburgerMenu";
import { Link } from "react-router-dom";
import { IMAGES } from "../../assets";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="bg-primary-40 relative">
      <img
        src={IMAGES.authBg}
        alt=""
        className="w-screen h-full absolute top-0 z-0"
      />
      <div className="w-full relative max-w-full 2xl:max-w-[1440px] mx-auto">
        <div className="xl:hidden flex items-center justify-between w-full p-5 z-50 relative">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src={IMAGES.logoGif}
              alt="logo"
              className="z-10 w-[220px] md:w-[300px]"
            />
          </Link>
          <DashboardHamburgerMenu />
        </div>
        <div className="flex gap-[30px] z-10 relative px-5 py-[30px]">
          <Sidebar />
          <div className="w-full flex flex-col gap-8">
            <DashboardHeader />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
