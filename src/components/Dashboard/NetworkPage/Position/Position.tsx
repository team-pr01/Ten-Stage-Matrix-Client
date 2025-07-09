import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";

const Position = () => {
  return (
    <div className="min-h-screen">
        <div className="font-Outfit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-center">
      <Link
        to={`/dashboard/level/${1}`}
        className="p-[2px] rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient2 h-[180px]"
      >
        <div className="bg-neutral-10 rounded-[28px] h-full">
          <div
            style={{
              boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
              backdropFilter: "blur(5.05px)",
            }}
            className="rounded-[28px] border border-primary-50 bg-neutral-90/10 p-[30px] flex flex-col gap-3 items-center text-center h-full"
          >
            <img src={ICONS.position} alt="" className="size-10" />
            <div className="space-y-[6px]">
              <h1 className="text-xl font-medium text-white">Line 1</h1>
              <h1 className="text-neutral-160">Network Size: 15</h1>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={`/dashboard/level/${1}`}
        className="p-[2px] rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient2 h-[210px]"
      >
        <div className="bg-neutral-10 rounded-[28px] h-full">
          <div
            style={{
              boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
              backdropFilter: "blur(5.05px)",
            }}
            className="rounded-[28px] border border-primary-50 bg-neutral-90/10 p-[30px] flex flex-col gap-3 items-center text-center h-full"
          >
            <img src={ICONS.position} alt="" className="size-10" />
            <div className="space-y-[6px]">
              <h1 className="text-xl font-medium text-white">Line 2</h1>
              <p className="text-neutral-160">Network Size: 15</p>
              <p className="text-neutral-160">Active members: 15</p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={`/dashboard/level/${1}`}
        className="p-[2px] rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient2 h-[180px]"
      >
        <div className="bg-neutral-10 rounded-[28px] h-full">
          <div
            style={{
              boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
              backdropFilter: "blur(5.05px)",
            }}
            className="rounded-[28px] border border-primary-50 bg-neutral-90/10 p-[30px] flex flex-col gap-3 items-center text-center h-full"
          >
            <img src={ICONS.position} alt="" className="size-10" />
            <div className="space-y-[6px]">
              <h1 className="text-xl font-medium text-white">Line 3</h1>
              <p className="text-neutral-160">Network Size: 15</p>
              
            </div>
          </div>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default Position;
