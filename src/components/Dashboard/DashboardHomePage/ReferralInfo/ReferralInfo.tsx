import { ICONS } from "../../../../assets";
import DashboardDataCard from "../../../Reusable/DashboardDataCard/DashboardDataCard";

const ReferralInfo = () => {
  return (
    <div className="mt-6">
      <h1 className="text-white font-medium text-2xl">Referral Code</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-4">
        <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 py-[27px] px-9 flex flex-col col-span-2">
          <img src={ICONS.referralCode} alt="" className="size-[90px]" />
          <h1 className="text-white text-[34px] font-medium capitalize mt-[5px]">
            Your Code: X7Y9ZQ
          </h1>
          <h2 className="text-neutral-100 text-xl font-medium capitalize mt-[13px]">
            Share this code to invite new members.
          </h2>

          <div className="flex items-center gap-[11px] mt-[15px]">
            <button className="w-[132px] h-[38px] bg-primary-10 rounded-[80px] border border-primary-10 text-white text-sm font-medium p-[10px] flex items-center justify-center">
              Copy Code
            </button>
            <button className="w-[132px] h-[38px] bg-primary-70 rounded-[80px] border border-primary-65 text-white text-sm font-medium p-[10px] flex items-center justify-center">
              How it works
            </button>
          </div>
        </div>

        <DashboardDataCard
          icon={ICONS.networkSize}
          title="Network size"
          value="128 Members"
          valueFontSize="text-2xl"
          padding="px-[10px] py-[53px]"
        />
        <DashboardDataCard
          icon={ICONS.currentStage}
          title="Current Stage"
          value="Stage 5"
          valueFontSize="text-2xl"
          padding="px-[10px] py-[53px]"
        />
        <DashboardDataCard
          icon={ICONS.activeReferrals}
          title="Status"
          value="Active"
          valueFontSize="text-2xl"
          padding="px-[10px] py-[53px]"
        />
      </div>
    </div>
  );
};

export default ReferralInfo;
