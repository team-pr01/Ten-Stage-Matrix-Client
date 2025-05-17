import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="bg-primary-40">
      <Sidebar />   
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
