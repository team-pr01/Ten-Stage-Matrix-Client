import { ICONS } from "../../../../assets";
import DashboardDataCard from "../../../Reusable/DashboardDataCard/DashboardDataCard";
import ReferralCode from "./ReferralCode";

const ReferralInfo = () => {
  return (
    <div className="mt-6">
      <h1 className="text-white font-medium text-2xl">Referral Code</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-4">
       <ReferralCode/>

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
