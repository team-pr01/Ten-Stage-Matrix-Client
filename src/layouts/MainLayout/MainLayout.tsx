import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-neutral-15 min-h-screen">
      <Outlet />
    </div>
  );
};

export default MainLayout;
