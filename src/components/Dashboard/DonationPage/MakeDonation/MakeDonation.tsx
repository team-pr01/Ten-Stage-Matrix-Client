/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ICONS } from "../../../../assets";
import {
  useGetStageDataQuery,
  useGetUserProfileQuery,
  useMakeDonationMutation,
} from "../../../../redux/Features/User/userApi";
import { toast } from "sonner";
import TextInput from "../../../Reusable/TextInput/TextInput";
import Button from "../../../Reusable/Button/Button";
import SuccessModal from "../../../Reusable/SuccessModal/SuccessModal";
import { useState } from "react";

type TFormValues = {
  amount: string;
};
const MakeDonation = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [makeDonation, { isLoading }] = useMakeDonationMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFormValues>();

  const handleMakeDonation = async (data: TFormValues) => {
    try {
      const payload = {
        amount: Number(data?.amount),
      };

      const response = await makeDonation(payload).unwrap();
      if (response?.success) {
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.error("Error making donation:", error);
      const errorMessage =
        typeof error === "object" &&
        error !== null &&
        "data" in error &&
        typeof (error as any).data === "object"
          ? (error as any).data?.message
          : "An error occurred while making the donation.";
      toast.error(errorMessage);
    }
  };

  const { data: stages } = useGetStageDataQuery({});
  const { data: userProfile } = useGetUserProfileQuery({});

  const userStage = userProfile?.data?.profile?.stage;
  console.log(userStage);

  // Find the matching stage object
  const matchedStage = stages?.find((stage: any) => {
    const currentStageNumber = stage?.stage_number;

    if (userStage === 0) {
      return stages?.some((s: any) => s?.stage_number === 1);
    } else {
      return currentStageNumber === userStage;
    }
  });

  return (
    <div className="font-Outfit flex flex-col gap-6 xl:gap-10">
      <h1 className="text-xl text-white font-medium">
        Minimum Donation ${matchedStage?.donation_requirement}
      </h1>
      <form onSubmit={handleSubmit(handleMakeDonation)} className="flex flex-col gap-5">
        <TextInput
          label="Amount"
          placeholder="Enter Amount"
          icon={ICONS.dollar}
          error={errors.amount}
          {...register("amount", {
            required: "Amount is required",
          })}
        />
        <Button label="Submit" isLoading={isLoading} classNames="w-[176px]" />
      </form>

       {isSuccess && (
              <SuccessModal
                title="Donation Successful!"
                isOpenModal={isSuccess}
                setIsModalOpen={setIsSuccess}
              />
            )}
    </div>
  );
};

export default MakeDonation;
