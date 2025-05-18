import { useState } from "react";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import RecentTransactions from "../../../components/Dashboard/TranactionsPage/RecentTransactions/RecentTransactions";
import ReferralActivity from "../../../components/Dashboard/TranactionsPage/ReferralActivity/ReferralActivity";

const Transactions = () => {
    const [activeTab, setActiveTab] = useState<"Transactions" | "Network Activity">("Transactions");
    const tabButtons = ["Transactions", "Network Activity"];
    return (
        <div className="font-Outfit">
            <DashboardHeaderTitle title="Activity Details" />

            <div className="flex items-center gap-6 mt-8">
                {
                    tabButtons?.map((button:string) => 
                        <button key={button} onClick={() => setActiveTab(button)} className={`text-xl font-medium transition-all cursor-pointer duration-300 border-b-[3px] pb-[9px] ${activeTab === button ? "text-white border-white" : "text-neutral-70 border-transparent"}`}>{button}</button>
                    )
                }
            </div>

            <div className="mt-7 flex gap-4">
                <RecentTransactions/>
                <ReferralActivity/>
            </div>
        </div>
    );
};

export default Transactions;