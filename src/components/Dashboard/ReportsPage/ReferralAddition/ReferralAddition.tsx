/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../../assets";

const ReferralAddition = () => {
  const data = [
    {
      icon: ICONS.level,
      title: "Total Member",
      value: "12",
    },
    {
      icon: ICONS.topEarner,
      title: "Direct referrals",
      value: "150",
    },
    {
      icon: ICONS.earning,
      title: "Deepest Level",
      value: "Level 08",
    },
  ];

  return (
    <div className="font-Outfit mt-7">
      <h1 className="text-2xl font-medium text-white">Recent Addition</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {data?.map((item: any, index: number) => (
          <div
            key={index}
            className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col items-center justify-center py-[37px] px-[100px]"
          >
            <img
              src={item?.icon}
              alt={item?.title || "icon"}
              className="size-[90px]"
            />
            <h2 className="text-white text-xl font-medium capitalize mt-[26px] text-center">
              {item?.title || "N/A"}
            </h2>
            <h1 className="text-white font-medium capitalize mt-[7px] text-center text-[34px]">
              {item?.value || "0"}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferralAddition;
