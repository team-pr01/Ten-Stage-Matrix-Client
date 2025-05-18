import { useState } from "react";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import { useForm } from "react-hook-form";
import { ICONS } from "../../../assets";

type TFormValues = {
  privateKey: string;
  amount: string;
};

const FundTransfer = () => {
  const [activeTab, setActiveTab] = useState<"Dashboard" | "Fund Transfer"  | "Review">(
    "Dashboard"
  );
  const tabButtons: Array<"Dashboard" | "Fund Transfer" | 'Review'> = [
    "Dashboard",
    "Fund Transfer",
    "Review"
  ];

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<TFormValues>();
  
    const handleSignup = (data:TFormValues) => {
      console.log(data);
    }
  return (
    <div className="font-Outfit">
      <DashboardHeaderTitle
        title={
          activeTab === "Dashboard"
            ? "Dashboard"
            : activeTab === "Fund Transfer"
            ? "Fund Transfer"
            : "Review Transfer"
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

      <p className="max-w-[493px] text-neutral-120 text-lg mt-8">Enter recipient details and amount. Privet key authentications required for security</p>

      <form onSubmit={handleSubmit(handleSignup)} className="mt-[22px]">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-neutral-125 text-lg font-medium">
                  Recipient Privet Key
                </label>
                <input
                  type="text"
                  placeholder="Enter privet Key :"
                  {...register("privateKey", {
                    required: "Name is required",
                  })}
                  className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                    errors?.privateKey ? "border-red-500" : "border-neutral-130"
                  }`}
                />
                {typeof errors === "object" && "message" in errors && (
                  <span className="text-red-500 text-sm">
                    {String(errors.message)}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-[15px]">
                <label htmlFor="" className="text-neutral-125 text-lg font-medium">
                  Amount
                </label>
                <div className="flex items-center justify-between">
                    <input
                  type="text"
                  placeholder="Enter amount :"
                  {...register("amount", {
                    required: "Name is required",
                  })}
                  className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 relative ${
                    errors?.amount ? "border-red-500" : "border-neutral-130"
                  }`}
                />
                <img src={ICONS.currency} alt="" className="size-6 absolute right-7" />
                </div>
                {typeof errors === "object" && "message" in errors && (
                  <span className="text-red-500 text-sm">
                    {String(errors.message)}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="p-[10px] w-[140px] h-10 rounded-[80px] bg-primary-10 text-white font-medium text-center cursor-pointer mt-[34px] flex items-center justify-center"
              >
                Send Funds
              </button>
            </form>
    </div>
  );
};

export default FundTransfer;
