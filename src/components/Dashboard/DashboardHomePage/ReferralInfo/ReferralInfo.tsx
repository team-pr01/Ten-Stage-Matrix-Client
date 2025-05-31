/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../../assets";
import DashboardDataCard from "../../../Reusable/DashboardDataCard/DashboardDataCard";
import ReferralCode from "./ReferralCode";

const ReferralInfo = ({ data, totalTeamMembers } : {data: any, totalTeamMembers: number}) => {
  return (
    <div className="mt-6">
      <h1 className="text-white font-medium text-2xl">Referral Code</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 mt-4">
        <ReferralCode referralCode={data?.referral_code} />

        <DashboardDataCard
          icon={ICONS.networkSize}
          title="Network size"
          value={`${totalTeamMembers} Members`}
          valueFontSize="text-2xl"
          padding="px-[10px] py-[53px]"
        />
        <DashboardDataCard
          icon={ICONS.level}
          title="Current Stage"
          value={`Stage ${data?.stage}`}
          valueFontSize="text-2xl"
          padding="px-[10px] py-[53px]"
        />
        <DashboardDataCard
          icon={ICONS.activeReferrals}
          title="Status"
          value={data?.status}
          valueFontSize="text-2xl"
          padding="px-[10px] py-[53px]"
        />
      </div>
    </div>
  );
};

export default ReferralInfo;
