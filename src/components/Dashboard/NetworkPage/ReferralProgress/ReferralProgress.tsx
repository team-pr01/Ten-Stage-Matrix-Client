import DashboardDataCard from "../../../Reusable/DashboardDataCard/DashboardDataCard";
import { ICONS } from "../../../../assets";

const ReferralProgress = () => {
  return (
    <div className="mt-7">
      <h1 className="text-white font-medium text-2xl">Referral Stats</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
        <DashboardDataCard
          icon={ICONS.level}
          title="Level"
          value="12"
          padding="px-[90px] py-10"
        />
        <DashboardDataCard
          icon={ICONS.status}
          title="Status"
          value="15"
          padding="px-[90px] py-10"
        />
        <DashboardDataCard
          icon={ICONS.earning}
          title="Earning "
          value="06"
          padding="px-[90px] py-10"
        />
      </div>
    </div>
  );
};

export default ReferralProgress;
