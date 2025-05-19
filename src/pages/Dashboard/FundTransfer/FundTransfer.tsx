import { useState } from "react";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import SendFund from "../../../components/Dashboard/FundTransferPage/SendFund/SendFund";
import VerifyTransfer from "../../../components/Dashboard/FundTransferPage/VerifyTransfer/VerifyTransfer";
import TransferSuccess from "../../../components/Dashboard/FundTransferPage/TransferSuccess/TransferSuccess";
import ReviewTransfer from "../../../components/Dashboard/FundTransferPage/ReviewTransfer/ReviewTransfer";

const FundTransfer = () => {
  const [activeTab, setActiveTab] = useState<
    "Dashboard" | "Fund Transfer" | "Success" | "Review"
  >("Dashboard");
  const tabButtons: Array<
    "Dashboard" | "Fund Transfer" | "Success" | "Review"
  > = ["Dashboard", "Fund Transfer", "Success", "Review"];

  return (
    <div className="font-Outfit">
      <DashboardHeaderTitle
        title={activeTab === "Dashboard" ? "Transfer Funds" : "Review Transfer"}
      />

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

      {activeTab === "Dashboard" && (
        <div>
          <p className="max-w-[493px] text-neutral-120 text-lg mt-8">
            Enter recipient details and amount. Privet key authentications
            required for security
          </p>
          <SendFund />
        </div>
      )}

      {activeTab === "Fund Transfer" && (
        <>
          <VerifyTransfer />
        </>
      )}

      {activeTab === "Success" && (
        <>
          <TransferSuccess />
        </>
      )}

      {activeTab === "Review" && (
        <>
          <ReviewTransfer />
        </>
      )}
    </div>
  );
};

export default FundTransfer;
