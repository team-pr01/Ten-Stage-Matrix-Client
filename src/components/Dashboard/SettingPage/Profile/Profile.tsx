import { useState } from "react";
import { IMAGES } from "../../../../assets";
import { useForm } from "react-hook-form";
import {
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} from "../../../../redux/Features/User/userApi";
import Loader from "../../../Shared/Loader/Loader";
import { toast } from "sonner";

type TFormValues = {
  name?: string;
  wallet_address?: string;
};
const Profile = () => {
  const { data, isLoading } = useGetUserProfileQuery({});
  const [updateProfile, { isLoading: isProfileUpdating }] =
    useUpdateProfileMutation();

  const [isUpdateFormVisible, setIsUpdateFormVisible] =
    useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleUpdateProfile = async (data: TFormValues) => {
    try {
      const payload = {
        ...data,
      };
      const response = await updateProfile(payload).unwrap();
      if( response?.message) {
        toast.success(response?.message || "Profile updated successfully!");
        reset();
        setIsUpdateFormVisible(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* Profile photo */}
        <div className="flex flex-col gap-6 w-full md:w-[50%] xl:w-[30%] 2xl:w-[20%]">
          <h1 className="text-2xl text-white font-medium mt-6">
            Profile Photo
          </h1>
          <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-6 px-[18px]">
            <img
              src={data?.data?.profile?.image || IMAGES.imagePlaceholder}
              alt=""
              className="rounded-[10px] w-[298px] h-[185px]"
            />
            <div className="flex flex-col mt-2">
              <div>
                <h1 className="text-white text-lg font-medium capitalize">
                  {
                    isLoading ?
                    "Loading..."
                    :
                    data?.data?.profile?.name
                  }
                </h1>
                <p className="text-neutral-110 text-sm mt-[3px] text-center md:text-start">
                  {
                    isLoading
                      ? "Loading..."
                      : data?.data?.profile?.email
                  }
                </p>
              </div>
              <button
                onClick={() => setIsUpdateFormVisible(!isUpdateFormVisible)}
                className="p-[10px] w-[130px] h-10 rounded-[80px] bg-primary-10 text-white font-medium text-center cursor-pointer mt-[21px] flex items-center justify-center"
              >
                Update Details
              </button>
            </div>
          </div>
        </div>

        {/* Profile info */}
        <div className="flex flex-col gap-6 w-full md:w-[50%] xl:w-[70%] 2xl:w-[80%]">
          <h1 className="text-2xl text-white font-medium mt-6">Profile Info</h1>
          <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-6 px-[18px] min-h-[360px]">
            <img
              src={data?.data?.profile?.image || IMAGES.imagePlaceholder}
              alt=""
              className="size-[66px] rounded-full"
            />
            <p className="text-neutral-110 text-lg mt-[3px]">Personal</p>
            <h1 className="text-white text-[30px] font-medium mt-2 capitalize">
              {
                    isLoading ?
                    "Loading..."
                    :
                    data?.data?.profile?.name
                  }
            </h1>
            <p className="text-neutral-110 text-lg mt-[3px]">
              Edit your name and email address.
            </p>
          </div>
        </div>
      </div>

      {isUpdateFormVisible && (
        <div className="mt-9 max-w-[404px]">
          <form
            onSubmit={handleSubmit(handleUpdateProfile)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-neutral-125 text-lg font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name")}
                className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                  errors?.name ? "border-red-500" : "border-neutral-130"
                }`}
              />
              {typeof errors === "object" && "message" in errors && (
                <span className="text-red-500 text-sm">
                  {String(errors.message)}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-neutral-125 text-lg font-medium"
              >
                Wallet Address
              </label>
              <input
                type="text"
                placeholder="Enter your wallet address"
                {...register("wallet_address")}
                className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                  errors?.wallet_address
                    ? "border-red-500"
                    : "border-neutral-130"
                }`}
              />
              {typeof errors === "object" && "message" in errors && (
                <span className="text-red-500 text-sm">
                  {String(errors.message)}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="p-[10px] w-[121px] h-10 rounded-[80px] bg-primary-10 text-white font-medium text-center cursor-pointer mt-[21px] flex items-center justify-center"
            >
              {isProfileUpdating ? (
                <Loader size="size-6" />
              ) : (
                "Save Changes"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
