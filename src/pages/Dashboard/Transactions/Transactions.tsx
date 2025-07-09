import { useState } from "react";
import RecentTransactions from "../../../components/Dashboard/TransactionsPage/RecentTransactions/RecentTransactions";
import ReferralActivity from "../../../components/Dashboard/TransactionsPage/ReferralActivity/ReferralActivity";
import ActivityLog from "../../../components/Dashboard/NetworkPage/ActivityLog/ActivityLog";
import Tab from "../../../components/Reusable/Tab/Tab";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState<"Transactions">("Transactions");
  const tabButtons: Array<"Transactions"> = ["Transactions"];

  return (
    <div className="font-Outfit">
      {/* Tab buttons */}
      <Tab
        tabs={tabButtons}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "Transactions" && (
        <div className="mt-7 flex flex-col gap-4">
          <RecentTransactions />
          <div className="w-full">
            <ReferralActivity />
          </div>
        </div>
      )}

      <div className="mt-7">
        <ActivityLog />
      </div>

      {/* <ReferralStats data={data?.data?.team} /> */}
    </div>
  );
};

export default Transactions;
