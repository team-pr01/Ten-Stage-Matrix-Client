import { ICONS } from "../../../../assets";

const EarningTrend = () => {
  const earningTrends = [
    {
      icon: ICONS.totalReferral,
      title: "Total Referrals",
      value: "3",
      description: "All time earnings from MLM activities.",
    },
    {
      icon: ICONS.activeReferral,
      title: "Active Referrals",
      value: "18",
      description: "Currently active downline members.",
    },
    {
      icon: ICONS.inactiveUser,
      title: "Inactive Team member",
      value: "3",
      description: "Total number of inactive referrals",
    },
  ];
  return (
    <div className="font-Outfit">
      <h1 className="text-2xl text-white font-medium mt-6">Earning Trend</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {earningTrends?.map((trend, index) => (
          <div
            key={index}
            className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col items-center justify-center py-[37px] px-[100px]"
          >
            <img
              src={trend?.icon}
              alt={trend?.title || "icon"}
              className="size-[90px]"
            />
            <h2 className="text-white text-xl font-medium capitalize mt-[26px] text-center">
              {trend?.title || "N/A"}
            </h2>
            <h1 className="text-white font-medium capitalize mt-[7px] text-center text-[34px]">
              {trend?.value || "0"}
            </h1>
            {trend?.description && (
              <p className="text-neutral-135 text-sm mt-2 text-center max-w-[150px] mx-auto">
                {trend.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningTrend;
