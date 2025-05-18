import { useState } from "react";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import SendFund from "../../../components/Dashboard/FundTransferPage/SendFund/SendFund";
import { ICONS } from "../../../assets";

const FundTransfer = () => {
  const [activeTab, setActiveTab] = useState<
    "Dashboard" | "Fund Transfer" | "Review"
  >("Dashboard");
  const tabButtons: Array<"Dashboard" | "Fund Transfer" | "Review"> = [
    "Dashboard",
    "Fund Transfer",
    "Review",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 py-[26px] px-9 flex flex-col mt-[22px]`}
          >
            <img src={ICONS.recipient} alt="" className="size-[66px]" />
            <h2 className="text-neutral-100 text-lg mt-[15px]">Recipient</h2>
            <h1 className="text-white text-[30px] font-medium capitalize mt-2">
              Private Key: 12345678
            </h1>
            <h2 className="text-neutral-100 text-lg mt-2">Alex Lee</h2>
          </div>
          <div
            className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 py-[26px] px-9 flex flex-col mt-[22px]`}
          >
            <img src={ICONS.amount} alt="" className="size-[66px]" />
            <h2 className="text-neutral-100 text-lg mt-[15px]">Amount </h2>
            <h1 className="text-white text-[30px] font-medium capitalize mt-2">
              $500,00
            </h1>
            <h2 className="text-neutral-100 text-lg mt-2">Transfer Amount</h2>
          </div>
          <div
            className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 py-[26px] px-9 flex flex-col mt-[22px]`}
          >
            <img src={ICONS.authentication} alt="" className="size-[66px]" />
            <h2 className="text-neutral-100 text-lg mt-[15px]">
              Authentication
            </h2>
            <h1 className="text-white text-[30px] font-medium capitalize mt-2">
              Private Key Verifide
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default FundTransfer;
