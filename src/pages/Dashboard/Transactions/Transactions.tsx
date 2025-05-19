import { useState } from "react";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import RecentTransactions from "../../../components/Dashboard/TransactionsPage/RecentTransactions/RecentTransactions";
import ReferralActivity from "../../../components/Dashboard/TransactionsPage/ReferralActivity/ReferralActivity";
import ReferralCode from "../../../components/Dashboard/DashboardHomePage/ReferralInfo/ReferralCode";
import ReferralStats from "../../../components/Dashboard/TransactionsPage/ReferralStats/ReferralStats";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState<
    "Transactions" | "Network Activity"
  >("Transactions");
  const tabButtons: Array<"Transactions" | "Network Activity"> = [
    "Transactions",
    "Network Activity",
  ];

  return (
    <div className="font-Outfit">
      <DashboardHeaderTitle
        title={
          activeTab === "Transactions"
            ? "Activity Details"
            : "Referral Overview"
        }
      />

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

      {activeTab === "Transactions" && (
        <div className="mt-7 flex flex-col xl:flex-row gap-4">
          <RecentTransactions />
          <div className="w-full xl:w-[30%]">
            <ReferralActivity />
          </div>
        </div>
      )}

      {activeTab === "Network Activity" && (
        <div className="mt-7">
          <h1 className="text-white font-medium text-2xl mb-5">
            Referral Code
          </h1>
          <div className="flex lex flex-col xl:flex-row gap-5">
            <div className="w-full">
              <ReferralCode />
            </div>
            <ReferralActivity />
          </div>
        </div>
      )}

      <ReferralStats />
    </div>
  );
};

export default Transactions;
