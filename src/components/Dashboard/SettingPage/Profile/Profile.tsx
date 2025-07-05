import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} from "../../../../redux/Features/User/userApi";
import { toast } from "sonner";
import Button from "../../../Reusable/Button/Button";
import TextInput from "../../../Reusable/TextInput/TextInput";
import { ICONS } from "../../../../assets";

type TFormValues = {
  name?: string;
  wallet_address?: string;
};
const Profile = () => {
  const { data, isLoading } = useGetUserProfileQuery({});
  console.log(data);
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
      if (response?.message) {
        toast.success(response?.message || "Profile updated successfully!");
        reset();
        setIsUpdateFormVisible(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* Profile info */}
        <div className="flex flex-col gap-6 w-full md:w-[50%] xl:w-[70%] 2xl:w-[80%]">
          <h1 className="text-2xl text-white font-medium mt-6">Profile Info</h1>
          <div
            style={{
              boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
              backdropFilter: "blur(5.05px)",
            }}
            className="rounded-[28px] border-2 border-neutral-155 bg-neutral-155 flex flex-col py-6 px-[18px]"
          >
            <p className="text-neutral-110 text-sm mt-[3px]">Personal</p>

            <h1 className="text-white text-[30px] font-medium mt-2 capitalize">
              {isLoading ? "Loading..." : data?.data?.profile?.name}
            </h1>
            <p className="text-neutral-110 text-sm mt-[3px]">
              {isLoading ? "Loading..." : data?.data?.profile?.email}
            </p>
            <p className="text-neutral-110 text-sm mt-[30px]">Private Key</p>
            <p className="text-[9px] md:text-lg font-medium text-white mt-2">
              {isLoading ? "Loading..." : data?.data?.profile?.user_pk}
            </p>
            <Button
              label="Update Details"
              isLoading={isLoading}
              classNames="w-[176px] mt-5"
              onClick={() => setIsUpdateFormVisible(!isUpdateFormVisible)}
            />
          </div>
        </div>
      </div>

      {isUpdateFormVisible && (
        <div className="mt-9 max-w-[404px]">
          <form
            onSubmit={handleSubmit(handleUpdateProfile)}
            className="flex flex-col gap-4"
          >
            <TextInput
              label="Name"
              placeholder="Enter Name"
              icon={ICONS.userName}
              error={errors.name}
              {...register("name", {
                required: "Name is required",
              })}
            />
            <TextInput
              label=" Wallet Address"
              placeholder="Enter  Wallet Address"
              icon={ICONS.privateKey}
              error={errors.wallet_address}
              {...register("wallet_address", {
                required: " Wallet address is required",
              })}
            />
            <Button
              label="Save Changes"
              isLoading={isProfileUpdating}
              classNames="w-[176px]"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
