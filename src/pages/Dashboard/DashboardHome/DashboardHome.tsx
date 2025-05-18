import { ICONS } from "../../../assets";
import ReferralInfo from "../../../components/Dashboard/DashboardHomePage/ReferralInfo/ReferralInfo";
import TotalWithdrawnAndBalance from "../../../components/Dashboard/DashboardHomePage/TotalWithdrawnAndBalance/TotalWithdrawnAndBalance";
import DashboardDataCard from "../../../components/Reusable/DashboardDataCard/DashboardDataCard";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";

const DashboardHome = () => {
  return (
    <div className="font-Outfit">
      {/* Header */}
      <div className="flex items-center justify-between">
        <DashboardHeaderTitle title="Financial Overview" />
        <button className="p-2 w-[165px] h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium flex items-center justify-center cursor-pointer">
          Connect wallet
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[18px]">
        <DashboardDataCard
          icon={ICONS.totalDonation}
          title="Total Donation"
          value="$50,869"
        />

        <DashboardDataCard
          icon={ICONS.totalEarn}
          title="Total Earn"
          value="$12,869"
        />

        <DashboardDataCard
          icon={ICONS.withdraw}
          title="Total Deposit"
          value="$35,869"
        />
      </div>

      {/* Total Withdraw and Current Balance */}
      <TotalWithdrawnAndBalance/>

      {/* Referral info */}
      <ReferralInfo/>
    </div>
  );
};

export default DashboardHome;
