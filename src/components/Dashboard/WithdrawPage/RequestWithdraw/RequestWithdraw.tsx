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
import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SuccessModal from "../../../Reusable/SuccessModal/SuccessModal";

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
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [requestWithdraw, { isLoading }] = useRequestWithdrawMutation();

  const { data: settings } = useGetPublicSettingsQuery({});
  const { data } = useGetUserProfileQuery({});

  const [selectedMethod, setSelectedMethod] = useState<string>("Select Wallet");
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const items = ["Withdrawable Balance", "Impact Balance"];
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

  // Function to withdraw
  const handleRequestWithdraw = async (data: TFormValues) => {
    try {
      if (selectedMethod === "Select Wallet") {
        return toast.error("Please select a wallet");
      }
      const payload = {
        amount: Number(data.amount),
        // wallet_address: data?.wallet_address,
        withdrawal_address: data?.withdrawal_address,
        network: "BSC",
        payment_method: "blockchain",
        type: "Withdrawal",
        balance_type:
          selectedMethod === "Withdrawable Balance" ? "balance" : "deposit",
      };

      const response = await requestWithdraw(payload).unwrap();
      if (response?.message) {
        setIsSuccess(true);
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
      <h1 className="text-base sm:text-xl text-green-500 font-medium mt-5">
        Available{" "}
        {selectedMethod === "Withdrawable Balance"
          ? "withdrawal balance"
          : selectedMethod === "Impact Balance"
          ? "impact balance"
          : "balance"}{" "}
        $
        {selectedMethod === "Withdrawable Balance" ? (
          <span>
            {data?.data?.balances?.balance
              ? `${data?.data?.balances?.balance.toFixed(5)}`
              : "0.00000"}
          </span>
        ) : selectedMethod === "Impact Balance" ? (
          <span>
            {data?.data?.balances?.deposit_balance
              ? `${data?.data?.balances?.deposit_balance.toFixed(5)}`
              : "0.00000"}
          </span>
        ) : (
          0.0
        )}
      </h1>

      <div ref={dropDownRef} className="relative w-fit text-white">
        <div className="bg-border-gradient2 p-[1px] rounded-xl w-fit my-8 h-fit">
          <button
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            className="px-5 py-3 rounded-xl bg-neutral-10 text-white shadow-custom-dropdown transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none cursor-pointer flex items-center justify-between gap-3 w-[250px] md:w-[280px]"
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
            <div
              key={idx}
              onClick={() => {
                setSelectedMethod(item);
                setOpen(false);
              }}
              className={`bg-border-gradient2 p-[1px] rounded-sm ${
                open ? "opacity-100 duration-500" : "opacity-0 duration-150"
              }`}
            >
              <li
                className={`rounded-sm bg-neutral-10 text-white shadow-custom-dropdown p-2 text-nowrap  hover:bg-primary-10 cursor-pointer`}
                style={{
                  transform: `translateY(${open ? 0 : (idx + 1) * 10}px)`,
                }}
              >
                {item}
              </li>
            </div>
          ))}
        </ul>
      </div>

      <form
        onSubmit={handleSubmit(handleRequestWithdraw)}
        className="flex flex-col gap-5 mt-12"
      >
        <TextInput
          label="Amount"
          placeholder="Enter Amount"
          icon={ICONS.dollar}
          error={errors.amount?.message}
          {...register("amount", {
            required: "Amount is required",
          })}
        />
        <TextInput
          label="USDT BEP-20 Wallet Address."
          placeholder="Enter USDT BEP-20 Wallet Address."
          icon={ICONS.privateKey}
          error={errors.withdrawal_address?.message}
          {...register("withdrawal_address", {
            required: "Your USDT BEP-20 Wallet Address is required",
          })}
        />
        <Button label="Confirm" isLoading={isLoading} classNames="w-[176px]" />
      </form>

      {isSuccess && (
        <SuccessModal
          title="Withdraw Request Successful"
          isOpenModal={isSuccess}
          setIsModalOpen={setIsSuccess}
        />
      )}
    </div>
  );
};

export default RequestWithdraw;
