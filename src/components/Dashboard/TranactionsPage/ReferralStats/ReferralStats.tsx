import DashboardDataCard from "../../../Reusable/DashboardDataCard/DashboardDataCard";
import { ICONS } from "../../../../assets";

const ReferralStats = () => {
  return (
    <div className="mt-7">
      <h1 className="text-white font-medium text-2xl">Referral Stats</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
        <DashboardDataCard
          icon={ICONS.totalReferrals}
          title="Total Invite"
          value="12"
        />
        <DashboardDataCard
          icon={ICONS.activeReferral}
          title="Active Referrals"
          value="15"
        />
        <DashboardDataCard
          icon={ICONS.pendingReferrals}
          title="Pending"
          value="6"
        />
      </div>
    </div>
  );
};

export default ReferralStats;
