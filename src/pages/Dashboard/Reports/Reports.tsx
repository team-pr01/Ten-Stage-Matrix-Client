/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import EarningTrend from "../../../components/Dashboard/ReportsPage/EarningTrend/EarningTrend";
import TeamSummary from "../../../components/Dashboard/ReportsPage/TeamSummary/TeamSummary";
import { ICONS } from "../../../assets";
import PerformanceTab from "../../../components/Dashboard/ReportsPage/PerformanceTab/PerformanceTab";
import ReferralTree from "../../../components/Dashboard/ReportsPage/ReferralTree/ReferralTree";
import ReferralActivity from "../../../components/Dashboard/TransactionsPage/ReferralActivity/ReferralActivity";
import {
  useGetReferralListQuery,
  useGetUserDetailsQuery,
} from "../../../redux/Features/User/userApi";

const Reports = () => {
  const { data } = useGetUserDetailsQuery({});
  const { data: referrals } = useGetReferralListQuery({});

  const activeReferrals = referrals?.data?.referrals?.filter(
    (referral: any) => referral?.status === "active"
  );

  const [activeTab, setActiveTab] = useState<
    "Direct Referrals" | "Earning" | "Performance" | "Team Tree"
  >("Direct Referrals");
  const tabButtons: Array<
    "Direct Referrals" | "Earning" | "Performance" | "Team Tree"
  > = ["Direct Referrals", "Earning", "Performance", "Team Tree"];

  const earningTrends = [
    {
      icon: ICONS.totalReferral,
      title: "Total Referrals",
      value: `${data?.data?.team?.total_referrals}`,
      description: "",
    },
    {
      icon: ICONS.activeReferral,
      title: "Active Referrals",
      value: `${activeReferrals?.length}`,
      description: "Currently active downline members.",
    },
    // {
    //   icon: ICONS.inactiveUser,
    //   title: "Inactive Team member",
    //   value: "3",
    //   description: "Total number of inactive referrals",
    // },
  ];
  return (
    <div className="min-h-screen">
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
        <div className="flex flex-col gap-6">
          <EarningTrend data={earningTrends} />
          <ReferralActivity />
        </div>
      )}
      {/* previously it was team summery */}
      {activeTab === "Earning" && <TeamSummary />}
      {activeTab === "Performance" && <PerformanceTab />}
      {activeTab === "Team Tree" && <ReferralTree />}
    </div>
  );
};

export default Reports;
