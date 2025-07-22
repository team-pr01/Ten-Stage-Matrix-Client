/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ICONS, IMAGES } from "../../../assets";
import DashboardCard from "../../../components/Reusable/DashboardCard/DashboardCard";
import {
  useGetPublicSettingsQuery,
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

  const dashboardCardData = [
    {
      icon: ICONS.donation,
      title: "Total Donation",
      value: data?.data?.stats?.total_donation
        ? `${data?.data?.stats?.total_donation.toFixed(5)}`
        : "0.00000",
    },
    {
      icon: ICONS.earning,
      title: "Total Earn",
      value: data?.data?.stats?.total_earn
        ? `${data?.data?.stats?.total_earn.toFixed(5)}`
        : "0.00000",
    },
    {
      icon: ICONS.deposit,
      title: "Total Deposit",
      value: data?.data?.stats?.total_deposit
        ? `${data?.data?.stats?.total_deposit.toFixed(5)}`
        : "0.00000",
    },
    {
      icon: ICONS.withdraw,
      title: "Total Withdraw",
      value: data?.data?.stats?.total_withdraw
        ? `${data?.data?.stats?.total_withdraw.toFixed(5)}`
        : "0.00000",
    },
    {
      icon: ICONS.availableToWithdraw,
      title: "Withdrawable Balance",
      value: data?.data?.balances?.balance
        ? `${data?.data?.balances?.balance.toFixed(5)}`
        : "0.00000",
    },
    {
      icon: ICONS.impactBalance,
      title: "Impact Balance",
      value: data?.data?.balances?.deposit_balance
        ? `${data?.data?.balances?.deposit_balance.toFixed(5)}`
        : "0.00000",
    },
    // {
    //   icon: ICONS.earningThreshold,
    //   title: "Remaining Balance",
    //   value: `${Math.max(
    //     0,
    //     (data?.data?.profile?.last_donation || 0) *
    //       (matchedStage?.earning_multiplier || 0) -
    //       (data?.data?.balances?.stage_balance || 0)
    //   ).toFixed(5)}`,
    // },
  ];

  const dashboardStatsCards = [
    {
      icon: ICONS.networkSize,
      title: "Network size",
      value: `${teamTree?.data?.length || 0} Members`,
      isCurrencyVisible: false,
    },
    {
      icon: ICONS.status,
      title: "Status",
      value: data?.data?.profile?.status,
      isCurrencyVisible: false,
    },
    {
      icon: ICONS.level,
      title: "Current Stage",
      value: `Stage ${data?.data?.profile?.stage}`,
      isCurrencyVisible: false,
    },
  ];

  const { data: settings } = useGetPublicSettingsQuery({});

  const CustomMarquee = "marquee" as any;

  return (
    <div className="font-Outfit">
      {
        settings?.data?.notice?.enabled &&
        <div className="p-[10px] rounded-lg bg-neutral-25/10 shadow-custom-dropdown">
        <CustomMarquee
          className="text-neutral-145 font-medium text-xs leading-5 text-left"
          behavior="scroll"
          direction="left"
        >
          {settings?.data?.notice?.message || "Loading..."}
        </CustomMarquee>
      </div>
      }
      <div className="w-full max-h-[334px] 2xl:max-h-[500px] relative mb-5 xl:mb-[30px] mt-10">
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
            className="w-[160px] px-3 md:px-6 py-2 md:py-3 rounded-xl hover:bg-gray-100 bg-white text-neutral-10 font-semibold text-xs sm:text-sm text-center cursor-pointer flex justify-center items-center gap-[6px] mt-5 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
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

      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-[14px] md:gap-[30px] ">
        {dashboardCardData.map((card, index) => (
          <DashboardCard
            key={index}
            direction="row"
            icon={card.icon}
            title={card.title}
            value={card.value}
          />
        ))}
        <div className="hidden md:grid">
          <DashboardCard
            direction="row"
            icon={ICONS.earningThreshold}
            title={"Remaining Balance"}
            value={`${Math.max(
              0,
              (data?.data?.profile?.last_donation || 0) *
                (matchedStage?.earning_multiplier || 0) -
                (data?.data?.balances?.stage_balance || 0)
            ).toFixed(5)}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:hidden mt-[30px]">
        <DashboardCard
          direction="row"
          icon={ICONS.earningThreshold}
          title={"Remaining Balance"}
          value={`${Math.max(
            0,
            (data?.data?.profile?.last_donation || 0) *
              (matchedStage?.earning_multiplier || 0) -
              (data?.data?.balances?.stage_balance || 0)
          ).toFixed(5)}`}
          // isCurrencyVisible={card?.isCurrencyVisible ?? true}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] mt-[30px]">
        {dashboardStatsCards.map((card, index) => (
          <DashboardCard
            key={index}
            direction="col"
            icon={card.icon}
            title={card.title}
            value={card.value}
            isCurrencyVisible={card?.isCurrencyVisible ?? true}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
