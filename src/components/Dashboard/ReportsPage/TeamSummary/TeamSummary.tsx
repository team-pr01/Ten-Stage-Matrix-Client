import { ICONS } from "../../../../assets";
import { useGetUserProfileQuery } from "../../../../redux/Features/User/userApi";
import EarningTrend from "../EarningTrend/EarningTrend";
import TeamSizeLevel from "../TeamSizeLevel/TeamSizeLevel";

const TeamSummary = () => {
  const { data } = useGetUserProfileQuery({});
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
      value: `$${data?.data?.stats?.total_team_earnings || 0}`,
      description: "Current active earning",
    },
    {
      icon: ICONS.totalDonation,
      title: "Total donation",
      value: `$${data?.data?.stats?.total_donation || 0}`,
      description: "Total amount of donation",
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
