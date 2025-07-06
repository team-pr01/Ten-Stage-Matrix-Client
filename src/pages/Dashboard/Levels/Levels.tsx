import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";

const Levels = () => {
  return (
    <div className="font-Outfit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 min-h-screen">
      <Link
        to={`/dashboard/level/${1}`}
        style={{
          boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
          backdropFilter: "blur(5.05px)",
        }}
        className="rounded-[28px] border border-primary-50 bg-neutral-90/10 p-[30px] flex flex-col gap-[30px] items-center text-center h-fit"
      >
        <img src={ICONS.userLevel} alt="" className="size-9" />
        <div className="space-y-[6px]">
          <h1 className="text-xl font-medium text-white">Level 1</h1>
          <h1 className="text-xl text-neutral-160">Network Size: 15</h1>
        </div>
      </Link>
    </div>
  );
};

export default Levels;
