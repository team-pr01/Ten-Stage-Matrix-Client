/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../../assets";
import { useGetUserProfileQuery } from "../../../../redux/Features/User/userApi";

const ReferralAddition = () => {
  const { data } = useGetUserProfileQuery({});
  const recentAddition = [
    {
      icon: ICONS.level,
      title: "Total Member/Referrals",
      value: data?.data?.stats?.total_referrals || "0",
    },
    {
      icon: ICONS.topEarner,
      title: "Active Referrals",
      value: data?.data?.stats?.active_referrals || "0",
    },
    {
      icon: ICONS.level,
      title: "Stage",
      value: data?.data?.profile?.stage || "0",
    },
  ];

  return (
    <div className="font-Outfit mt-7">
      <h1 className="text-2xl font-medium text-white">Recent Addition</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {recentAddition?.map((item: any, index: number) => (
          <div
            key={index}
            className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col items-center justify-center py-5 md:py-[37px] px-12 xl:px-[100px]"
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
