import { useState } from "react";
import { ICONS } from "../../../../assets";
import { useForm } from "react-hook-form";

type TFormValues = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
const Security = () => {
  const [isOn, setIsOn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleChangePassword = (data: TFormValues) => {
    console.log(data);
  };

  const referralActivity = [
    {
      avatar: ICONS.avatar,
      name: "Thomas Shelvi",
      designation: "Designer",
    },
    {
      avatar: ICONS.avatar,
      name: "Thomas Shelvi",
      designation: "Designer",
    },
  ];

  return (
    <div className="font-Outfit">
      <div className="flex flex-col lg:flex-row items-center gap-5">
        {/* Profile photo */}
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-2xl text-white font-medium mt-6">Profile Info</h1>
          <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-6 px-[18px] min-h-[270px]">
            <img
              src={ICONS.changePassword}
              alt=""
              className="size-[66px] rounded-full"
            />
            <p className="text-neutral-110 text-lg mt-[3px]">Change Password</p>
            <h1 className="text-white text-[30px] font-medium mt-2">
              Update Password
            </h1>
            <p className="text-neutral-110 text-lg mt-[3px]">
              Set a strong password to keep your Account secure.
            </p>
          </div>
        </div>

        {/* Profile info */}
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-2xl text-white font-medium mt-6">Profile Info</h1>
          <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-6 px-[18px] min-h-[270px]">
            <img
              src={ICONS.twoFA}
              alt=""
              className="size-[66px] rounded-full"
            />
            <p className="text-neutral-110 text-lg mt-[3px]">2FA</p>
            <h1 className="text-white text-[30px] font-medium mt-2">
              Enhance Security
            </h1>
            <p className="text-neutral-110 text-lg mt-[3px]">
              Add an extra layrr of protection to your account.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mt-9">
        {/* Change password form */}
        <div className="w-full">
          <form
            onSubmit={handleSubmit(handleChangePassword)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-neutral-125 text-lg font-medium"
              >
                Current Password
              </label>
              <input
                type="password"
                placeholder="Enter your current password"
                {...register("currentPassword", {
                  required: "Name is required",
                })}
                className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                  errors?.currentPassword
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
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-neutral-125 text-lg font-medium"
              >
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter your full name"
                {...register("newPassword", {
                  required: "Password is required",
                })}
                className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                  errors?.newPassword ? "border-red-500" : "border-neutral-130"
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
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter your full name"
                {...register("confirmPassword", {
                  required: "Password is required",
                })}
                className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                  errors?.confirmPassword
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
              Save Changes
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-[26px] rounded-[15px] border-[3px] bg-neutral-30 border-neutral-25/20 bg-neutral-3 py-6 px-[18px] w-full h-fit">
          {referralActivity?.map((item) => (
            <div className="flex items-center justify-between">
              {/* Name and avatar */}
              <div className="flex items-center gap-3">
                <img
                  src={item?.avatar}
                  alt=""
                  className="size-[43px] rounded-full"
                />
                <div>
                  <h1 className="text-white text-lg font-medium capitalize">
                    {item?.name}
                  </h1>
                  <p className="text-neutral-35 text-sm mt-[2px]">
                    {item?.designation}
                  </p>
                </div>
              </div>
              <div
                onClick={() => setIsOn(!isOn)}
                className={`w-16 h-9 rounded-full cursor-pointer transition-colors duration-300 px-1 flex items-center ${
                  isOn
                    ? "bg-primary-10 justify-end"
                    : "bg-gray-300 justify-start"
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-[#2E2552] transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
