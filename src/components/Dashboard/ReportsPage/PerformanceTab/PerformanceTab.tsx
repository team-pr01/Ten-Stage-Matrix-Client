import { ICONS } from "../../../../assets";
import { useGetReportsQuery } from "../../../../redux/Features/User/userApi";
import EarningTrend from "../EarningTrend/EarningTrend";

const PerformanceTab = () => {
  const { data } = useGetReportsQuery({});
  console.log(data);
  const earningTrends = [
    {
      icon: ICONS.activeMembers,
      title: "Active Members",
      value: data?.data?.active_users || 0,
      description: "All active members ",
    },
    // {
    //   icon: ICONS.topEarner,
    //   title: "Top Earner",
    //   value: `$${data?.data?.top_earner?.balance.toFixed(5) || 0}`,
    //   description: "Current top earner ",
    // },
    {
      icon: ICONS.growth,
      title: "Top Referrers",
      value: data?.data?.top_referrers?.length || 0,
      description: "To referrers overview",
    },
  ];
  return (
    <div>
      <EarningTrend data={earningTrends} />
      {/* <TeamSizeLevel /> */}
    </div>
  );
};

export default PerformanceTab;
