/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../assets";
import ReferralInfo from "../../../components/Dashboard/DashboardHomePage/ReferralInfo/ReferralInfo";
// import TotalWithdrawnAndBalance from "../../../components/Dashboard/DashboardHomePage/TotalWithdrawnAndBalance/TotalWithdrawnAndBalance";
// import DashboardDataCard from "../../../components/Reusable/DashboardDataCard/DashboardDataCard";
import DashboardCard from "../../../components/Reusable/DashboardCard/DashboardCard";
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

  // const limitUpCommission = data?.data?.profile?.limit_up_commission;
  // const stageBalance = data?.data?.balances?.stage_balance
  // const lastDonation = data?.data?.profile?.last_donation;
  // const earningMultiplier = matchedStage?.earning_multiplier;

  // const multipliedValue = lastDonation * earningMultiplier;

  // const earningThreshold = stageBalance > 0 && stageBalance >  multipliedValue ? limitUpCommission : multipliedValue + limitUpCommission

  return (
    <div className="font-Outfit">

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
              : "0.00000"
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
            data?.data?.profile?.last_donation *
              matchedStage?.earning_multiplier -
              data?.data?.balances?.stage_balance
          ).toFixed(5)}`}
        />
      </div>
      {/* Referral info */}
      <ReferralInfo
        data={data?.data?.profile}
        totalTeamMembers={teamTree?.data?.length || 0}
      />
    </div>
  );
};

export default DashboardHome;
