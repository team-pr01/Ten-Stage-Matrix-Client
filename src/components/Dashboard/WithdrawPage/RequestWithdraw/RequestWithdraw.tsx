/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ICONS } from "../../../../assets";
import {
  useGetPublicSettingsQuery,
  useGetUserProfileQuery,
  useRequestWithdrawMutation,
} from "../../../../redux/Features/User/userApi";
import { toast } from "sonner";
import TextInput from "../../../Reusable/TextInput/TextInput";
import Button from "../../../Reusable/Button/Button";

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
      <h1 className="text-xl text-white font-medium">
        Minimum withdraw ${settings?.data?.limits?.min_withdrawal}
      </h1>
      <h1 className="text-xl text-green-500 font-medium mt-3">
        Available to withdraw $
        {data?.data?.balances?.balance
          ? `${data?.data?.balances?.balance.toFixed(5)}`
          : "0.00000"}
      </h1>
      <form
        onSubmit={handleSubmit(handleRequestWithdraw)}
        className="flex flex-col gap-5 mt-12"
      >
        <TextInput
          label="Amount"
          placeholder="Enter Amount"
          icon={ICONS.dollar}
          error={errors.amount}
          {...register("amount", {
            required: "Amount is required",
          })}
        />
        <TextInput
          label="Wallet Address"
          placeholder="Enter Wallet Address"
          icon={ICONS.privateKey}
          error={errors.withdrawal_address}
          {...register("withdrawal_address", {
            required: "Wallet address is required",
          })}
        />
        <Button label="Confirm" isLoading={isLoading} classNames="w-[176px]" />
      </form>
    </div>
  );
};

export default RequestWithdraw;
