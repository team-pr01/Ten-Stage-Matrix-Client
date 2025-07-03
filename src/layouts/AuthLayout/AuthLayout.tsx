import { Outlet } from "react-router-dom";
import { IMAGES } from "../../assets";

const AuthLayout = () => {
  return (
    <div className="bg-neutral-15 min-h-screen font-Outfit relative px-5 py-10 overflow-hidden flex items-center justify-center">
      <img
        src={IMAGES.authBg}
        alt=""
        className="w-screen h-full absolute top-0"
      />
         <Outlet/>
    </div>
  );
};

export default AuthLayout;
