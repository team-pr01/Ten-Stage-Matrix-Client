/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../../assets";
import DashboardCard from "../../../Reusable/DashboardCard/DashboardCard";

const ReferralProgress = ({
  profile,
  earning,
}: {
  profile: any;
  earning: number;
}) => {
  return (
    <div className="mt-7">
      <h1 className="text-white font-medium text-2xl">Your Progress</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-4">
        <DashboardCard
          direction="col"
          icon={ICONS.level}
          title="Current Stage"
          value={profile?.stage || 0}
          isCurrencyVisible={false}
        />
        <DashboardCard
          direction="col"
          icon={ICONS.status}
          title="Status"
          value={profile?.status || "N/A"}
          isCurrencyVisible={false}
        />
        <DashboardCard
          direction="col"
          icon={ICONS.earning}
          title="Earning"
          value={`${earning?.toFixed(5) || 0.0}`}
        />
      </div>
    </div>
  );
};

export default ReferralProgress;
