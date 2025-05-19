import { useState } from "react";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import EarningTrend from "../../../components/Dashboard/ReportsPage/EarningTrend/EarningTrend";
import ReferralList from "../../../components/Dashboard/ReportsPage/ReferralList/ReferralList";
import TeamSummary from "../../../components/Dashboard/ReportsPage/TeamSummary/TeamSummary";
import { ICONS } from "../../../assets";
import PerformanceTab from "../../../components/Dashboard/ReportsPage/PerformanceTab/PerformanceTab";
import ReferralTree from "../../../components/Dashboard/ReportsPage/ReferralTree/ReferralTree";

const Reports = () => {
  const [activeTab, setActiveTab] = useState<
    "Direct Referrals" | "Team Summary" | "Performance" | "Referral Tree"
  >("Direct Referrals");
  const tabButtons: Array<
    "Direct Referrals" | "Team Summary" | "Performance" | "Referral Tree"
  > = ["Direct Referrals", "Team Summary", "Performance", "Referral Tree"];

  const earningTrends = [
    {
      icon: ICONS.totalReferral,
      title: "Total Referrals",
      value: "3",
      description: "All time earnings from MLM activities.",
    },
    {
      icon: ICONS.activeReferral,
      title: "Active Referrals",
      value: "18",
      description: "Currently active downline members.",
    },
    {
      icon: ICONS.inactiveUser,
      title: "Inactive Team member",
      value: "3",
      description: "Total number of inactive referrals",
    },
  ];
  return (
    <div>
      <DashboardHeaderTitle title="Reports Overview" />

      {/* Tab buttons */}
      <div className="mt-8 relative overflow-x-auto">
        <div className="flex items-center gap-6 whitespace-nowrap">
          {tabButtons?.map((button) => (
            <button
              key={button}
              onClick={() => setActiveTab(button)}
              className={`text-xl font-medium transition-all cursor-pointer duration-300 border-b-[3px] pb-[9px] ${
                activeTab === button
                  ? "text-white border-white"
                  : "text-neutral-70 border-transparent"
              }`}
            >
              {button}
            </button>
          ))}
        </div>
        <hr className="border border-neutral-115 w-full h-[1px] absolute top-[37.5px]" />
      </div>

      {activeTab === "Direct Referrals" && (
        <>
          <EarningTrend data={earningTrends} />
          <ReferralList />
        </>
      )}

      {activeTab === "Team Summary" && <TeamSummary />}
      {activeTab === "Performance" && <PerformanceTab />}
      {activeTab === "Referral Tree" && <ReferralTree />}
    </div>
  );
};

export default Reports;
