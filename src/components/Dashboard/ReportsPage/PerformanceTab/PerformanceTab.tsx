import { ICONS } from "../../../../assets";
import EarningTrend from "../EarningTrend/EarningTrend";
import TeamSizeLevel from "../TeamSizeLevel/TeamSizeLevel";


const PerformanceTab = () => {
    const earningTrends = [
            {
              icon: ICONS.activeMembers,
              title: "Active Members",
              value: "960",
              description: "All active members ",
            },
            {
              icon: ICONS.topEarner,
              title: "Top Earner",
              value: "$12,869",
              description: "Current top earner ",
            },
            {
              icon: ICONS.growth,
              title: "Fastest Growth",
              value: "Level 06",
              description: "Fastest growth level",
            },
          ];
    return (
         <div>
            <EarningTrend data={earningTrends} />
            <TeamSizeLevel/>
        </div>
    );
};

export default PerformanceTab;