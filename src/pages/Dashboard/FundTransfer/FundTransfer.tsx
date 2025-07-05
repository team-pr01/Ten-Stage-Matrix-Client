/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import SendFund from "../../../components/Dashboard/FundTransferPage/SendFund/SendFund";
// import VerifyTransfer from "../../../components/Dashboard/FundTransferPage/VerifyTransfer/VerifyTransfer";
import TransferSuccess from "../../../components/Dashboard/FundTransferPage/TransferSuccess/TransferSuccess";
// import ReviewTransfer from "../../../components/Dashboard/FundTransferPage/ReviewTransfer/ReviewTransfer";
import { useTransferFundMutation } from "../../../redux/Features/User/userApi";
import TransferHistory from "../../../components/Dashboard/FundTransferPage/TransferHistory/TransferHistory";
import { toast } from "sonner";

const FundTransfer = () => {
  const [activeTab, setActiveTab] = useState<
    "Dashboard" | "Fund Transfer" | "Success" | "Transfer History" | "Review"
  >("Dashboard");
  const tabButtons: Array<
    "Dashboard"  | "Success" | "Transfer History" 
  > = ["Dashboard", "Success", "Transfer History"];
  // const tabButtons: Array<
  //   "Dashboard" | "Fund Transfer" | "Success" | "Review"
  // > = ["Dashboard", "Fund Transfer", "Success", "Review"];

  const [transferData, setTransferData] = useState<string>("");
const [transferFund, {isLoading}] = useTransferFundMutation();

  const handleSendFund = async (data: any) => {
    try{
      const payload = {
        amount : Number(data.amount),
        recipient_id : data.recipient_id
      }
      const response = await transferFund(payload).unwrap();
      if(response?.success) {
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
            Enter recipient details and amount.
          </p>
          <SendFund handleSendFund={handleSendFund} isLoading={isLoading} />
        </div>
      )}

      {/* {activeTab === "Fund Transfer" && (
        <>
          <VerifyTransfer />
        </>
      )} */}

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

      {/* {activeTab === "Review" && (
        <>
          <ReviewTransfer />
        </>
      )} */}
    </div>
  );
};

export default FundTransfer;
