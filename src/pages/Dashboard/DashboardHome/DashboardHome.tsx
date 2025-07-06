/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ICONS, IMAGES } from "../../../assets";
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
  const [copied, setCopied] = useState<boolean>(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data?.data?.profile?.referral_code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy referral code", error);
    }
  };

  return (
    <div className="font-Outfit">
      <div className="w-full max-h-[334px] 2xl:max-h-[500px] relative mb-[50px]">
        <img src={IMAGES.referralCodeBg} alt="" className="w-full h-full" />
        <div className="text-white absolute top-2 md:top-0 left-3 md:left-12 xl:left-20 bottom-0 flex flex-col justify-center">
          <h1 className="text-xl md:text-[40px] font-bold leading-0 md:leading-[45px]">
            Your code: {data?.data?.profile?.referral_code || "Loading..."}
          </h1>
          <h1 className="text-[10px] sm:text-xs font-medium leading-0 md:leading-5 mt-6 md:mt-4">
            Share This Code To Invite New Members.
          </h1>

          <button
            onClick={handleCopy}
            className="w-[160px] px-3 md:px-6 py-2 md:py-3 rounded-xl hover:bg-gray-100 bg-white text-neutral-10 font-semibold text-sm text-center cursor-pointer flex justify-center items-center gap-[6px] mt-5 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
            style={{
              boxShadow: `
                              0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 2px 2px 0px #FFF inset, 0px 4px 6px 0px rgba(0, 0, 0, 0.30) inset, 0px 4px 24px 0px rgba(168, 82, 5, 0.30)
                            `,
            }}
          >
            {copied ? "Copied" : "Copy Code"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] mb-[30px]">
        <DashboardCard
          direction="col"
          icon={ICONS.donation}
          title="Total Donation"
          value={
            data?.data?.stats?.total_donation
              ? `${data?.data?.stats?.total_donation.toFixed(5)}`
              : `0.00000`
          }
        />

        <DashboardCard
          direction="col"
          icon={ICONS.earning}
          title="Total Earn"
          value={
            data?.data?.stats?.total_earn
              ? `${data?.data?.stats?.total_earn.toFixed(5)}`
              : "0.00000"
          }
        />

        <DashboardCard
          icon={ICONS.deposit}
          direction="col"
          title="Total Deposit"
          value={
            data?.data?.stats?.total_deposit
              ? `${data?.data?.stats?.total_deposit.toFixed(5)}`
              : "0.00000"
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        <DashboardCard
          direction="row"
          icon={ICONS.withdraw}
          title="Total Withdraw"
          value={
            data?.data?.stats?.total_withdraw
              ? `${data?.data?.stats?.total_withdraw.toFixed(5)}`
              : "0.00000"
          }
        />
        <DashboardCard
          direction="row"
          icon={ICONS.availableToWithdraw}
          title="Available To Withdraw"
          value={
            data?.data?.balances?.balance
              ? `${data?.data?.balances?.balance.toFixed(5)}`
              : "0.00000"
          }
        />
        <DashboardCard
          direction="row"
          icon={ICONS.impactBalance}
          title="Impact Balance"
          value={
            data?.data?.balances?.deposit_balance
              ? `${data?.data?.balances?.deposit_balance.toFixed(5)}`
              : "0.00000"
          }
        />
        <DashboardCard
          direction="row"
          icon={ICONS.earningThreshold}
          title="Earning Threshold"
          value={`${Math.max(
            0,
            data?.data?.profile?.last_donation *
              matchedStage?.earning_multiplier -
              data?.data?.balances?.stage_balance
          ).toFixed(5)}`}
        />
        <DashboardCard
          direction="row"
          icon={ICONS.networkSize}
          title="Network size"
          value={`${teamTree?.data?.length || 0} Members`}
          isCurrencyVisible={false}
        />
        <DashboardCard
          direction="row"
          icon={ICONS.status}
          title="Status"
          value={data?.data?.profile?.status}
          isCurrencyVisible={false}
        />
        <DashboardCard
          direction="row"
          icon={ICONS.level}
          title="Current Stage"
          value={`Stage ${data?.data?.profile?.stage}`}
          isCurrencyVisible={false}
        />
      </div>
    </div>
  );
};

export default DashboardHome;
