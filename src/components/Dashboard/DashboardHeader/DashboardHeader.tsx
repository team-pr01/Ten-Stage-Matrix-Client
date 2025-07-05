import { ICONS, IMAGES } from "../../../assets";

const DashboardHeader = () => {
  return (
    <div className="font-Outfit flex items-center justify-between">
      <h1 className="text-white font-medium text-2xl lg:text-[32px]">
       Financial Overview
      </h1>

      <button className="p-[10px] rounded-[20px] bg-neutral-25/10 shadow-custom-dropdown flex items-center gap-[14px] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
        <img src={IMAGES.avatar3} alt="" className="size-12 rounded-full" />
        <div>
          <h1 className="text-white font-bold leading-5">
            Rahul Sutradhar
          </h1>
          <p className="text-neutral-145 font-medium text-xs leading-5 text-left">
            rahul@gmail.com
          </p>
        </div>
        <img src={ICONS.leftArrow} alt="" className="size-6 rounded-full" />
      </button>
    </div>
  );
};

export default DashboardHeader;
