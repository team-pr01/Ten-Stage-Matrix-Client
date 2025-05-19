import { useState } from "react";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import EarningTrend from "../../../components/Dashboard/ReportsPage/EarningTrend/EarningTrend";
import ReferralList from "../../../components/Dashboard/ReportsPage/ReferralList/ReferralList";
import TeamSummary from "../../../components/Dashboard/ReportsPage/TeamSummary/TeamSummary";

const Reports = () => {
  const [activeTab, setActiveTab] = useState<
    "Direct Referrals" | "Team Summary" | "Performance" | "Referral Tree"
  >("Direct Referrals");
  const tabButtons: Array<
    "Direct Referrals" | "Team Summary" | "Performance" | "Referral Tree"
  > = ["Direct Referrals", "Team Summary", "Performance", "Referral Tree"];
  return (
    <div>
      <DashboardHeaderTitle title="Reports Overview" />

      {/* Tab buttons */}
      <div className="flex items-center gap-6 mt-8 relative">
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
        <hr className="border border-neutral-115 w-full h-[1px] absolute top-[37.5px]" />
      </div>

      {activeTab === "Direct Referrals" && (
        <>
          <EarningTrend />
          <ReferralList />
        </>
      )}

      {activeTab === "Team Summary" && <TeamSummary />}
    </div>
  );
};

export default Reports;
