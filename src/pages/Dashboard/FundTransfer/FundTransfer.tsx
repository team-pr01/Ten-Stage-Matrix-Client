import { useState } from "react";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import SendFund from "../../../components/Dashboard/FundTransferPage/SendFund/SendFund";
import VerifyTransfer from "../../../components/Dashboard/FundTransferPage/VerifyTransfer/VerifyTransfer";
import TransferSuccess from "../../../components/Dashboard/FundTransferPage/TransferSuccess/TransferSuccess";

const FundTransfer = () => {
  const [activeTab, setActiveTab] = useState<
    "Dashboard" | "Fund Transfer" | "Success"
  >("Dashboard");
  const tabButtons: Array<"Dashboard" | "Fund Transfer" | "Success"> = [
    "Dashboard",
    "Fund Transfer",
    "Success",
  ];

  return (
    <div className="font-Outfit">
      <DashboardHeaderTitle
        title={activeTab === "Dashboard" ? "Transfer Funds" : "Review Transfer"}
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
        <VerifyTransfer/>
        </>
      )}

      {activeTab === "Success" && (
        <>
        <TransferSuccess/>
        </>
      )}
    </div>
  );
};

export default FundTransfer;
