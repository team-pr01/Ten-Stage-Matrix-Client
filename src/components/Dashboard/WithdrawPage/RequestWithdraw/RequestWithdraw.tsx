/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ICONS } from "../../../../assets";
import {
  useGetPublicSettingsQuery,
  useGetUserProfileQuery,
  useRequestWithdrawMutation,
} from "../../../../redux/Features/User/userApi";
import { toast } from "sonner";
import Loader from "../../../Shared/Loader/Loader";

type TFormValues = {
  amount: string;
  withdrawal_address: string;
};
const RequestWithdraw = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();
  // const {data:profile} = useGetUserProfileQuery({});
  // console.log(data);

  const [requestWithdraw, { isLoading }] = useRequestWithdrawMutation();

  const { data: settings } = useGetPublicSettingsQuery({});
  const { data } = useGetUserProfileQuery({});

  // Function to deposit
  const handleRequestWithdraw = async (data: TFormValues) => {
    try {
      const payload = {
        amount: Number(data.amount),
        // wallet_address: data?.wallet_address,
        withdrawal_address: data?.withdrawal_address,
        network: "BSC",
        payment_method: "blockchain",
        type: "Withdrawal",
      };

      const response = await requestWithdraw(payload).unwrap();
      if (response?.message) {
        toast.success(response?.message || "Withdraw successful!");
      }
    } catch (error: any) {
      toast.error(error?.data?.error || "An error occurred");
      console.log(error);
    }
  };
  return (
    <div className="font-Outfit">
      <h1 className="text-xl text-white font-medium mt-[57px]">
        Minimum withdraw ${settings?.data?.limits?.min_withdrawal}
      </h1>
      <h1 className="text-xl text-green-500 font-medium mt-3">
        Available to withdraw $
        {data?.data?.balances?.balance
          ? `${data?.data?.balances?.balance.toFixed(5)}`
          : "0.00000"}
      </h1>
      <form onSubmit={handleSubmit(handleRequestWithdraw)}>
        <div className="flex flex-col gap-2 mt-[22px]">
          <label htmlFor="" className="text-neutral-125 text-lg font-medium">
            Amount
          </label>
          <div className="flex items-center justify-between max-w-[415px] relative">
            <input
              type="text"
              placeholder="Enter your amount USD"
              {...register("amount", {
                required: "Name is required",
              })}
              className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                errors?.amount ? "border-red-500" : "border-neutral-130"
              }`}
            />
            <img
              src={ICONS.currency}
              alt=""
              className="size-6 absolute right-3"
            />
          </div>
          {typeof errors === "object" && "message" in errors && (
            <span className="text-red-500 text-sm">
              {String(errors.message)}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 mt-[22px]">
          <label htmlFor="" className="text-neutral-125 text-lg font-medium">
            Wallet Address
          </label>
          <div className="flex items-center justify-between max-w-[415px] relative">
            <input
              type="text"
              placeholder="Enter your withdraw wallet address"
              {...register("withdrawal_address", {
                required: "Name is required",
              })}
              className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                errors?.withdrawal_address
                  ? "border-red-500"
                  : "border-neutral-130"
              }`}
            />
          </div>
          {typeof errors === "object" && "message" in errors && (
            <span className="text-red-500 text-sm">
              {String(errors.message)}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="p-[10px] w-[119px] h-10 rounded-[80px] bg-primary-10 text-white font-medium text-center cursor-pointer mt-[21px] flex items-center justify-center"
        >
          {isLoading ? <Loader size="size-5" /> : "Confirm"}
        </button>
      </form>
    </div>
  );
};

export default RequestWithdraw;
