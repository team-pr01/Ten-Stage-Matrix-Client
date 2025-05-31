/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../../assets";
import { useGetStageDataQuery, useGetUserProfileQuery } from "../../../../redux/Features/User/userApi";
import EarningTrend from "../EarningTrend/EarningTrend";
import TeamSizeLevel from "../TeamSizeLevel/TeamSizeLevel";

const TeamSummary = () => {
  const { data } = useGetUserProfileQuery({});
  const {data:stages} = useGetStageDataQuery({});
  // console.log(data);
  // console.log(stages);

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

  const earningTrends = [
    {
      icon: ICONS.activeReferral,
      title: "Total Team",
      value: `$${data?.data?.stats?.total_team || 0}`,
      description: "All time earnings from MLM activities.",
    },
    {
      icon: ICONS.earning,
      title: "Active Earning",
      value: `$${(data?.data?.profile?.last_donation - data?.data?.balances?.stage_balance) * matchedStage?.earning_multiplier}`,
      description: "Current active earning",
    }
  ];
  return (
    <div>
      <EarningTrend data={earningTrends} />
      <TeamSizeLevel />
    </div>
  );
};

export default TeamSummary;
