import { useState } from "react";
import RecentTransactions from "../../../components/Dashboard/TransactionsPage/RecentTransactions/RecentTransactions";
import ReferralActivity from "../../../components/Dashboard/TransactionsPage/ReferralActivity/ReferralActivity";
import ActivityLog from "../../../components/Dashboard/NetworkPage/ActivityLog/ActivityLog";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState<
    "Transactions"
  >("Transactions");
  const tabButtons: Array<"Transactions"> = [
    "Transactions",
  ];

  return (
    <div className="font-Outfit">
      {/* Tab buttons */}
      <div className="flex items-center gap-6 relative">
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
