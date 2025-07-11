/* eslint-disable @typescript-eslint/no-explicit-any */
import { RxCross1 } from "react-icons/rx";
import { useUpdateProfileMutation } from "../../../../redux/Features/User/userApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ICONS } from "../../../../assets";
import Button from "../../../Reusable/Button/Button";
import TextInput from "../../../Reusable/TextInput/TextInput";
import { useEffect } from "react";

type TFormValues = {
  name?: string;
  email?: string;
  wallet_address?: string;
};

const UpdateProfileModal = ({
  isUpdateProfileModalOpen,
  setIsUpdateProfileModalOpen,
  defaultValues,
}: {
  isUpdateProfileModalOpen: boolean;
  setIsUpdateProfileModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  defaultValues?: any;
}) => {
  const [updateProfile, { isLoading: isProfileUpdating }] =
    useUpdateProfileMutation();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TFormValues>();

  useEffect(() => {
    setValue("name", defaultValues?.name);
    setValue("email", defaultValues?.email);
    setValue("wallet_address", defaultValues?.user_pk);
  }, [defaultValues, setValue]);

  const handleUpdateProfile = async (data: TFormValues) => {
    try {
      const payload = {
        ...data,
      };
      const response = await updateProfile(payload).unwrap();
      if (response?.message) {
        toast.success(response?.message || "Profile updated successfully!");
        reset();
        setIsUpdateProfileModalOpen(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div
      className={`${
        isUpdateProfileModalOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-neutral-15/90 flex items-center justify-center transition-all duration-300 font-Outfit`}
    >
      <div
        className={`${
          isUpdateProfileModalOpen
            ? " scale-[1] opacity-100"
            : " scale-[0] opacity-0"
        } w-[90%] sm:w-[80%] md:w-[30%] border-2 border-neutral-115/20 bg-neutral-140 rounded-2xl p-4 transition-all duration-300 flex flex-col gap-6`}
      >
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl text-white font-medium">
            Update Profile Info
          </h1>
          <RxCross1
            className="text-lg text-neutral-40 rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsUpdateProfileModalOpen(false)}
          />
        </div>

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
            label="Email"
            placeholder="Enter Email"
            icon={ICONS.emailIcon}
            error={errors.email}
            {...register("email", {
              required: "Email is required",
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

          <div className="flex justify-end">
            <Button
              label="Save Changes"
              isLoading={isProfileUpdating}
              classNames="w-[140px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
