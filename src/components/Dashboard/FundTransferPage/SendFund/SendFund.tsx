import { useForm } from "react-hook-form";
import { ICONS } from "../../../../assets";
import { useTransferFundMutation } from "../../../../redux/Features/User/userApi";

type TFormValues = {
  recipient_id: string;
  amount: string;
};
const SendFund = () => {
  const [transferFund] = useTransferFundMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleSendFund = async (data: TFormValues) => {
    try{
      const payload = {
        ...data
      }
      const response = await transferFund(payload).unwrap();
      console.log(response);
    } catch (error) {
      console.error("Error sending funds:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleSendFund)} className="mt-[22px]">
      <div className="flex flex-col gap-2 mt-[15px]">
        <label htmlFor="" className="text-neutral-125 text-lg font-medium">
          Recipient Id
        </label>
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Enter recipient id :"
            {...register("recipient_id", {
              required: "Name is required",
            })}
            className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 relative ${
              errors?.recipient_id ? "border-red-500" : "border-neutral-130"
            }`}
          />
        </div>
        {typeof errors === "object" && "message" in errors && (
          <span className="text-red-500 text-sm">{String(errors.message)}</span>
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
          <img
            src={ICONS.currency}
            alt=""
            className="size-6 absolute right-7"
          />
        </div>
        {typeof errors === "object" && "message" in errors && (
          <span className="text-red-500 text-sm">{String(errors.message)}</span>
        )}
      </div>

      <button
        type="submit"
        className="p-[10px] w-[140px] h-10 rounded-[80px] bg-primary-10 text-white font-medium text-center cursor-pointer mt-[34px] flex items-center justify-center"
      >
        Send Funds
      </button>
    </form>
  );
};

export default SendFund;
