/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../assets";
import ReferralInfo from "../../../components/Dashboard/DashboardHomePage/ReferralInfo/ReferralInfo";
// import TotalWithdrawnAndBalance from "../../../components/Dashboard/DashboardHomePage/TotalWithdrawnAndBalance/TotalWithdrawnAndBalance";
// import DashboardDataCard from "../../../components/Reusable/DashboardDataCard/DashboardDataCard";
import DashboardCard from "../../../components/Reusable/DashboardCard/DashboardCard";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import {
  useGetStageDataQuery,
  useGetTeamTreeQuery,
  useGetUserProfileQuery,
} from "../../../redux/Features/User/userApi";
declare global {
  interface Window {
    ethereum: any;
  }
}

const DashboardHome = () => {
  const { data } = useGetUserProfileQuery({});
  const { data: stages } = useGetStageDataQuery({});
  const { data: teamTree } = useGetTeamTreeQuery({});

  const userStage = data?.data?.profile?.stage;

  // Find the matching stage object
  const matchedStage = stages?.find((stage: any) => {
    const currentStageNumber = stage?.stage_number;

    if (userStage === 0) {
      return stages?.some((s: any) => s?.stage_number === 1);
    } else {
      return currentStageNumber === userStage;
    }
  });

  return (
    <div className="font-Outfit">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-start md:items-center justify-between">
        <DashboardHeaderTitle title="Financial Overview" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 mt-[18px]">
        <DashboardCard
          icon={ICONS.totalDonation}
          title="Total Donation"
          value={
            data?.data?.stats?.total_donation
              ? `${data?.data?.stats?.total_donation.toFixed(5)}`
              : `0.00000`
          }
        />

        <DashboardCard
          icon={ICONS.totalEarn}
          title="Total Earn"
          value={
            data?.data?.stats?.total_earn
              ? `${data?.data?.stats?.total_earn.toFixed(5)}`
              : "0.00000"
          }
        />

        <DashboardCard
          icon={ICONS.withdraw}
          title="Total Deposit"
          value={
            data?.data?.stats?.total_deposit
              ? `${data?.data?.stats?.total_deposit.toFixed(5)}`
              : "0"
          }
        />

        <DashboardCard
          icon={ICONS.withdraw}
          title="Total Withdraw"
          value={
            data?.data?.stats?.total_withdraw
              ? `${data?.data?.stats?.total_withdraw.toFixed(5)}`
              : "0.00000"
          }
        />
        <DashboardCard
          icon={ICONS.currentBalance}
          title="Available To Withdraw"
          value={
            data?.data?.balances?.balance
              ? `${data?.data?.balances?.balance.toFixed(5)}`
              : "0.00000"
          }
        />
        <DashboardCard
          icon={ICONS.currentBalance}
          title="Impact Balance"
          value={
            data?.data?.balances?.deposit_balance
              ? `${data?.data?.balances?.deposit_balance.toFixed(5)}`
              : "0.00000"
          }
        />
        <DashboardCard
          icon={ICONS.currentBalance}
          title="Earning Threshold"
          value={`${Math.max(
            0,
            (data?.data?.profile?.last_donation ?? 0) *
              (matchedStage?.earning_multiplier ?? 0) -
              (data?.data?.balances?.stage_balance ?? 0)
          ).toFixed(5)}`}
        />
      </div>

      {/* Total Withdraw and Current Balance */}
      {/* <TotalWithdrawnAndBalance
        totalWithdraw={data?.data?.stats?.total_withdraw.toFixed(5)}
        balance={data?.data?.balances?.balance.toFixed(5)}
        depositBalance={data?.data?.balances?.deposit_balance.toFixed(5)}
        activeEarning={
          data?.data?.profile?.last_donation *
            matchedStage?.earning_multiplier -
            data?.data?.balances?.stage_balance.toFixed(5) || 0
        }
      /> */}

      {/* Referral info */}
      <ReferralInfo
        data={data?.data?.profile}
        totalTeamMembers={teamTree?.data?.total_members || 0}
      />
    </div>
  );
};

export default DashboardHome;
