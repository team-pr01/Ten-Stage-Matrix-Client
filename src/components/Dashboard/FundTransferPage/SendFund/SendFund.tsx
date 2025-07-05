/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ICONS } from "../../../../assets";
import TextInput from "../../../Reusable/TextInput/TextInput";
import Button from "../../../Reusable/Button/Button";

type TFormValues = {
  recipient_id: string;
  amount: string;
};
const SendFund = ({
  handleSendFund,
  isLoading,
}: {
  handleSendFund: (data: any) => void;
  isLoading: boolean;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  return (
    <form onSubmit={handleSubmit(handleSendFund)} className="mt-6 flex flex-col gap-5">
      {/* <div className="flex flex-col gap-2 mt-[15px]">
        <label htmlFor="" className="text-neutral-125 text-lg font-medium">
          Private Key
        </label>
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Enter recipient private key :"
            {...register("recipient_id", {
              required: "Private key is required",
            })}
            className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 relative ${
              errors?.recipient_id ? "border-red-500" : "border-neutral-130"
            }`}
          />
        </div>
        {typeof errors === "object" && "message" in errors && (
          <span className="text-red-500 text-sm">{String(errors.message)}</span>
        )}
      </div> */}

      <TextInput
        label="Private Key"
        placeholder="Enter Private key"
        icon={ICONS.privateKey}
        error={errors.recipient_id}
        {...register("recipient_id", {
          required: "Private key is required",
        })}
      />

      <TextInput
        label="Amount"
        placeholder="Enter Amount"
        icon={ICONS.dollar}
        error={errors.amount}
        {...register("amount", {
          required: "Amount is required",
        })}
      />

      {/* <div className="flex flex-col gap-2 mt-[15px]">
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
      </div> */}

      <Button label="Send Fund" isLoading={isLoading} classNames="w-[176px]" />
    </form>
  );
};

export default SendFund;
