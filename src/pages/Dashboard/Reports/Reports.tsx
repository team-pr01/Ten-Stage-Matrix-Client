/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
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
import { TeamTreeGraph } from "../../Home/TeamTreeGraph";
import Tab from "../../../components/Reusable/Tab/Tab";

const Reports = () => {
  const { data } = useGetUserDetailsQuery({});
  const { data: referrals } = useGetReferralListQuery({});
  // const { data: teamTree } = useGetTeamTreeQuery({});

  const activeReferrals = referrals?.data?.referrals?.filter(
    (referral: any) => referral?.status === "active"
  );

  const [activeTab, setActiveTab] = useState<
    | "Direct Referrals"
    | "Earning"
    | "Performance"
    | "Team Tree"
    | "Team Tree Graph"
  >("Direct Referrals");
  const tabButtons: Array<
    | "Direct Referrals"
    | "Earning"
    | "Performance"
    | "Team Tree"
    | "Team Tree Graph"
  > = [
    "Direct Referrals",
    "Earning",
    "Performance",
    "Team Tree",
    "Team Tree Graph",
  ];

  const earningTrends = [
    {
      icon: ICONS.totalReferral,
      title: "Total Referrals",
      description: "Total referrals in your team",
      value: `${data?.data?.team?.total_referrals || 0}`,
    },
    {
      icon: ICONS.activeReferral,
      title: "Active Referrals",
      value: `${activeReferrals?.length || 0}`,
      description: "Currently active downline members.",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Tab buttons */}
      <Tab
        tabs={tabButtons}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

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
      {activeTab === "Team Tree Graph" && (
        <div className="overflow-x-auto mt-10">
          <TeamTreeGraph />
        </div>
      )}
    </div>
  );
};

export default Reports;
