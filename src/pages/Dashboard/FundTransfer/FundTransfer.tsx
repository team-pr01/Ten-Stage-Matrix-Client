/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import SendFund from "../../../components/Dashboard/FundTransferPage/SendFund/SendFund";
import TransferSuccess from "../../../components/Dashboard/FundTransferPage/TransferSuccess/TransferSuccess";
import { useTransferFundMutation } from "../../../redux/Features/User/userApi";
import TransferHistory from "../../../components/Dashboard/FundTransferPage/TransferHistory/TransferHistory";
import { toast } from "sonner";
import Tab from "../../../components/Reusable/Tab/Tab";

const FundTransfer = () => {
  const [activeTab, setActiveTab] = useState<
    "Dashboard" | "Fund Transfer" | "Success" | "Transfer History" | "Review"
  >("Dashboard");
  const tabButtons: Array<"Dashboard" | "Success" | "Transfer History"> = [
    "Dashboard",
    "Success",
    "Transfer History",
  ];

  const [transferData, setTransferData] = useState<string>("");
  const [transferFund, { isLoading }] = useTransferFundMutation();

  const handleSendFund = async (data: any) => {
    try {
      const payload = {
        amount: Number(data.amount),
        recipient_id: data.recipient_id,
      };
      const response = await transferFund(payload).unwrap();
      if (response?.success) {
        setTransferData(response?.data);
        setActiveTab("Success");
      }
      console.log(response);
    } catch (error) {
      toast.error((error as any)?.data?.message || "Something went wrong");
      console.error("Error sending funds:", error);
    }
  };

  return (
    <div className="font-Outfit min-h-screen">
       {/* Tab buttons */}
      <Tab
        tabs={tabButtons}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "Dashboard" && (
        <div>
          <p className="max-w-[493px] text-neutral-120 text-lg mt-8">
            Enter recipient details and amount.
          </p>
          <SendFund handleSendFund={handleSendFund} isLoading={isLoading} />
        </div>
      )}

      {activeTab === "Success" && (
        <>
          <TransferSuccess data={transferData} />
        </>
      )}

      {activeTab === "Transfer History" && (
        <>
          <TransferHistory />
        </>
      )}
    </div>
  );
};

export default FundTransfer;
