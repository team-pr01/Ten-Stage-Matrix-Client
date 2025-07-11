/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import SendFund from "../../../components/Dashboard/FundTransferPage/SendFund/SendFund";
import TransferSuccess from "../../../components/Dashboard/FundTransferPage/TransferSuccess/TransferSuccess";
import {
  useGetUserProfileQuery,
  useTransferFundMutation,
} from "../../../redux/Features/User/userApi";
import TransferHistory from "../../../components/Dashboard/FundTransferPage/TransferHistory/TransferHistory";
import { toast } from "sonner";
import Tab from "../../../components/Reusable/Tab/Tab";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FundTransfer = () => {
  const { data } = useGetUserProfileQuery({});
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

  const [selectedMethod, setSelectedMethod] = useState<string>(
    "Select transfer method"
  );
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const items = ["From available to withdraw", "From impact balance"];
  useEffect(() => {
    const close = (e: any) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);

  return (
    <div className="font-Outfit min-h-screen">
      {/* Tab buttons */}
      <Tab
        tabs={tabButtons}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <h1 className="text-xl text-green-500 font-medium mt-5">
        Available{" "}
        {selectedMethod === "From available to withdraw"
          ? "withdrawal balance"
          : selectedMethod === "From impact balance"
          ? "impact balance"
          : "balance"}{" "}
        $
        {
          selectedMethod === "From available to withdraw" ?
          <span>
          {data?.data?.balances?.balance
            ? `${data?.data?.balances?.balance.toFixed(5)}`
            : "0.00000"}
        </span>
        :
        selectedMethod === "From impact balance" ?
        <span>
          {data?.data?.balances?.deposit_balance
            ? `${data?.data?.balances?.deposit_balance.toFixed(5)}`
            : "0.00000"}
        </span>
        :
        0.00000
        }
      </h1>

      <div ref={dropDownRef} className="relative w-fit text-white">
        <div className="bg-border-gradient2 p-[1px] rounded-xl w-fit my-8 h-fit">
          <button
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            className="px-5 py-3 rounded-xl bg-neutral-10 text-white shadow-custom-dropdown transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none cursor-pointer flex items-center justify-between gap-3 w-full md:w-[280px]"
          >
            {selectedMethod}
            <MdOutlineKeyboardArrowDown className="text-xl" />
          </button>
        </div>
        <ul
          className={`${
            open ? "visible" : "invisible"
          } absolute top-12 z-50 w-full space-y-2 bg-neutral-10 p-3`}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                setSelectedMethod(item);
                setOpen(false);
              }}
              className={`rounded-sm bg-neutral-25/10 text-white shadow-custom-dropdown p-2 ${
                open ? "opacity-100 duration-500" : "opacity-0 duration-150"
              } hover:bg-primary-10 cursor-pointer`}
              style={{
                transform: `translateY(${open ? 0 : (idx + 1) * 10}px)`,
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

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
