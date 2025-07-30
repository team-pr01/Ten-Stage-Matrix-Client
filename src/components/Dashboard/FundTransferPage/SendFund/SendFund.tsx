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
    <form
      onSubmit={handleSubmit(handleSendFund)}
      className="mt-6 flex flex-col gap-5">
      <TextInput
        label="Private Key"
        placeholder="Enter Private key"
        icon={ICONS.privateKey}
        error={errors.recipient_id?.message}
        {...register("recipient_id", {
          required: "Private key is required",
        })}
      />

      <TextInput
        label="Amount"
        placeholder="Enter Amount"
        icon={ICONS.dollar}
        error={errors.amount?.message}
        {...register("amount", {
          required: "Amount is required",
        })}
      />

      <Button label="Send Fund" isLoading={isLoading} classNames="w-[176px]" />
    </form>
  );
};

export default SendFund;
