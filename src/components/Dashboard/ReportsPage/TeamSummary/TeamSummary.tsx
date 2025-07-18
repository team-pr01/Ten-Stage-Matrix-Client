/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../../assets";
import {
  useGetStageDataQuery,
  useGetUserProfileQuery,
} from "../../../../redux/Features/User/userApi";
import EarningTrend from "../EarningTrend/EarningTrend";
import TeamSizeLevel from "../TeamSizeLevel/TeamSizeLevel";

const TeamSummary = () => {
  const { data } = useGetUserProfileQuery({});
  const { data: stages } = useGetStageDataQuery({});

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
      icon: ICONS.earning,
      title: "Remaining Balance",
      value: `$${Math.max(
        0,
        data?.data?.profile?.last_donation * matchedStage?.earning_multiplier -
          data?.data?.balances?.stage_balance
      ).toFixed(5)}`,
      description: "Current active earning",
    },
  ];
  return (
    <div>
      <EarningTrend data={earningTrends} />
      <TeamSizeLevel />
    </div>
  );
};

export default TeamSummary;
