import { ICONS } from "../../../../assets";
import {
  useGetReportsQuery,
  useGetTeamTreeQuery,
} from "../../../../redux/Features/User/userApi";
import EarningTrend from "../EarningTrend/EarningTrend";

const PerformanceTab = () => {
  const { data } = useGetReportsQuery({});
  const { data: teamTree } = useGetTeamTreeQuery({});

  const earningTrends = [
    {
      icon: ICONS.activeMembers,
      title: "Active Members",
      value: teamTree?.stats?.active_members || 0,
      description: "All active members ",
    },
    {
      icon: ICONS.level,
      title: "Top Referrers",
      value: data?.data?.top_referrers?.length || 0,
      description: "To referrers overview",
    },
  ];
  return (
    <div>
      <EarningTrend data={earningTrends} />
    </div>
  );
};

export default PerformanceTab;
