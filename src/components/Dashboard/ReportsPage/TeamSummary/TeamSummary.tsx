import { ICONS } from "../../../../assets";
import EarningTrend from "../EarningTrend/EarningTrend";
import TeamSizeLevel from "../TeamSizeLevel/TeamSizeLevel";

const TeamSummary = () => {
    const earningTrends = [
        {
          icon: ICONS.activeReferral,
          title: "Total Team",
          value: "1,256",
          description: "All time earnings from MLM activities.",
        },
        {
          icon: ICONS.earning,
          title: "Active Earning",
          value: "18",
          description: "Current active earning",
        },
        {
          icon: ICONS.totalDonation,
          title: "Total donation",
          value: "$35,869",
          description: "Total amount of donation",
        },
      ];
    return (
        <div>
            <EarningTrend data={earningTrends} />
            <TeamSizeLevel/>
        </div>
    );
};

export default TeamSummary;