import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useChangePasswordMutation } from "../../../../redux/Features/User/userApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ICONS } from "../../../../assets";
import Button from "../../../Reusable/Button/Button";

type TFormValues = {
  current_password: string;
  new_password: string;
  confirmPassword: string;
};

const ChangePasswordModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleChangePassword = async (data: TFormValues) => {
    try {
      const payload = {
        ...data,
      };
      const response = await changePassword(payload).unwrap();
      if (response?.message) {
        toast.success(response?.message || "Password updated successfully!");
        setIsModalOpen(false);
        reset();
      }
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div
      className={`${
        isModalOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-neutral-15/90 flex items-center justify-center transition-all duration-300 font-Outfit`}
    >
      <div
        className={`${
          isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] sm:w-[80%] md:w-[30%] border-2 border-neutral-115/20 bg-neutral-140 rounded-2xl p-4 transition-all duration-300 flex flex-col gap-6`}
      >
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl text-white font-medium">
            Change Your Password
          </h1>
          <RxCross1
            className="text-lg text-neutral-40 rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        <form
          onSubmit={handleSubmit(handleChangePassword)}
          className="flex flex-col gap-4"
        >
          {/* Passcode Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-white mb-1">
              Current Passcode
            </label>
            <div className="relative">
              <img
                src={ICONS.passcode}
                alt="passcode"
                className="absolute left-5 top-1/2 -translate-y-1/2 size-5 z-10 pointer-events-none"
              />
              <button
                type="button"
                className="absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <img
                  src={showPassword ? ICONS.eyeClose : ICONS.eyeOpen}
                  alt="toggle password"
                  className="size-5"
                />
              </button>
              <div className="group rounded-[8px] bg-neutral-90 p-[1px] transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:via-green-400 hover:to-cyan-400 group-focus-within:bg-gradient-to-r group-focus-within:from-orange-400 group-focus-within:via-green-400 group-focus-within:to-cyan-400">
                <input
                  id="current_password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Current Passcode"
                  {...register("current_password", {
                    required: "Current passcode is required",
                  })}
                  className={`w-full pl-12 pr-12 py-[15px] rounded-[7px] bg-neutral-140 focus:outline-none transition duration-300 text-neutral-85 ${
                    errors?.current_password ? "ring-2 ring-red-500" : ""
                  }`}
                  style={{
                    boxShadow:
                      "inset 0px 4px 10.5px 0px rgba(255, 255, 255, 0.25)",
                  }}
                />
              </div>
            </div>
            {errors?.current_password?.message && (
              <span className="text-red-500 text-sm">
                {String(errors.current_password.message)}
              </span>
            )}
          </div>

          {/* New Passcode Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm_password" className="text-white mb-1">
              New Passcode
            </label>
            <div className="relative">
              <img
                src={ICONS.passcode}
                alt="passcode"
                className="absolute left-5 top-1/2 -translate-y-1/2 size-5 z-10 pointer-events-none"
              />
              <button
                type="button"
                className="absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                <img
                  src={showConfirmPassword ? ICONS.eyeClose : ICONS.eyeOpen}
                  alt="toggle confirm password"
                  className="size-5"
                />
              </button>
              <div className="group rounded-[8px] bg-neutral-90 p-[1px] transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:via-green-400 hover:to-cyan-400 group-focus-within:bg-gradient-to-r group-focus-within:from-orange-400 group-focus-within:via-green-400 group-focus-within:to-cyan-400">
                <input
                  id="new_password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter New Passcode"
                  {...register("new_password", {
                    required: "New passcode is required",
                  })}
                  className={`w-full pl-12 pr-12 py-[15px] rounded-[7px] bg-neutral-140 focus:outline-none transition duration-300 text-neutral-85 ${
                    errors?.new_password ? "ring-2 ring-red-500" : ""
                  }`}
                  style={{
                    boxShadow:
                      "inset 0px 4px 10.5px 0px rgba(255, 255, 255, 0.25)",
                  }}
                />
              </div>
            </div>
            {errors?.new_password?.message && (
              <span className="text-red-500 text-sm">
                {String(errors.new_password.message)}
              </span>
            )}
          </div>

          <div className="flex justify-end">
            <Button
            label="Save Changes"
            isLoading={isLoading}
            classNames="w-[140px]"
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
