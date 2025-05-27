import { ICONS } from "../../../assets";
import ReferralInfo from "../../../components/Dashboard/DashboardHomePage/ReferralInfo/ReferralInfo";
import TotalWithdrawnAndBalance from "../../../components/Dashboard/DashboardHomePage/TotalWithdrawnAndBalance/TotalWithdrawnAndBalance";
import DashboardDataCard from "../../../components/Reusable/DashboardDataCard/DashboardDataCard";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import { useGetUserProfileQuery } from "../../../redux/Features/User/userApi";

const DashboardHome = () => {
  const { data } = useGetUserProfileQuery({});
  console.log(data?.data?.stats);
  return (
    <div className="font-Outfit">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-start md:items-center justify-between">
        <DashboardHeaderTitle title="Financial Overview" />
        <button className="p-2 w-[165px] h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium flex items-center justify-center cursor-pointer">
          Connect wallet
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[18px]">
        <DashboardDataCard
          icon={ICONS.totalDonation}
          title="Total Donation"
          value={
            data?.data?.stats?.total_donation
              ? `$${data?.data?.stats?.total_donation}`
              : "$0"
          }
        />

        <DashboardDataCard
          icon={ICONS.totalEarn}
          title="Total Earn"
          value={
            data?.data?.stats?.total_earn
              ? `$${data?.data?.stats?.total_earn}`
              : "$0"
          }
        />

        <DashboardDataCard
          icon={ICONS.withdraw}
          title="Total Deposit"
          value={
            data?.data?.stats?.total_deposit
              ? `$${data?.data?.stats?.total_deposit}`
              : "$0"
          }
        />
      </div>

      {/* Total Withdraw and Current Balance */}
      <TotalWithdrawnAndBalance
        totalWithdraw={data?.data?.stats?.total_withdraw}
        balance={data?.data?.balances?.balance}
      />

      {/* Referral info */}
      <ReferralInfo
        data={data?.data?.profile}
        totalTeamMembers={data?.data?.stats?.total_team_members}
      />
    </div>
  );
};

export default DashboardHome;
