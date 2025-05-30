/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ICONS } from "../../../../assets";
import { useGetStageDataQuery, useGetUserProfileQuery, useMakeDonationMutation } from "../../../../redux/Features/User/userApi";
import { toast } from "sonner";
import Loader from "../../../Shared/Loader/Loader";

type TFormValues = {
  amount: string;
};
const MakeDonation = () => {
  const [makeDonation, {isLoading}] = useMakeDonationMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFormValues>();


   const handleMakeDonation = async (data: TFormValues) => {
  try{
    const payload = {
      amount : Number(data?.amount)
    };

    const response = await makeDonation(payload).unwrap();
    if(response?.success) {
      toast.success(response?.message || "Donation made successfully!");
      reset();
    }
  } catch (error) {
    console.error("Error making donation:", error);
    const errorMessage =
      typeof error === "object" && error !== null && "data" in error && typeof (error as any).data === "object"
        ? (error as any).data?.error
        : "An error occurred while making the donation.";
    toast.error(errorMessage);
  };
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


console.log(stages);
 
  return (
    <div className="font-Outfit">
      <h1 className="text-xl text-white font-medium mt-[57px]">
        Minimum Donation ${matchedStage?.donation_requirement}
      </h1>
      <h1 className="text-xl text-white font-medium mt-6">
        Provide Donation Details
      </h1>
      <form onSubmit={handleSubmit(handleMakeDonation)}>
        <div className="flex flex-col gap-2 mt-[22px]">
          <label htmlFor="" className="text-neutral-125 text-lg font-medium">
            Amount
          </label>
          <div className="flex items-center justify-between max-w-[415px] relative">
            <input
              type="text"
              placeholder="Enter your amount USD"
              {...register("amount", {
                required: "Amount is required",
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
        <button
          type="submit"
          className="p-[10px] w-[119px] h-10 rounded-[80px] bg-primary-10 text-white font-medium text-center cursor-pointer mt-[21px] flex items-center justify-center"
        >
          {isLoading ? <Loader size="size-6" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default MakeDonation;
