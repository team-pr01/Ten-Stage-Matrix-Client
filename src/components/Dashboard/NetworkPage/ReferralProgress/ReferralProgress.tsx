/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardDataCard from "../../../Reusable/DashboardDataCard/DashboardDataCard";
import { ICONS } from "../../../../assets";

const ReferralProgress = ({profile, earning} : {profile: any, earning: number}) => {
  return (
    <div className="mt-7">
      <h1 className="text-white font-medium text-2xl">Your Progress</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-4">
        <DashboardDataCard
          icon={ICONS.level}
          title="Current Stage"
          value={profile?.stage || 0}
          padding="px-[90px] py-10"
        />
        <DashboardDataCard
          icon={ICONS.status}
          title="Status"
          value={profile?.status || "N/A"}
          padding="px-[90px] py-10"
        />
        <DashboardDataCard
          icon={ICONS.earning}
          title="Earning "
          value={`$${earning?.toFixed(5) || 0.00000}`}
          padding="px-[90px] py-10"
        />
      </div>
    </div>
  );
};

export default ReferralProgress;
