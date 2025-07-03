import { Link, useNavigate, useParams } from "react-router-dom";
import { ICONS, IMAGES } from "../../assets";
import { useResetPasswordMutation } from "../../redux/Features/Auth/authApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import Button from "../../components/Reusable/Button/Button";

type TFormValues = {
  password: string;
  confirm_password: string;
};

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const { token } = useParams();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormValues>();

  const passwordValue = watch("password");

  const handleSignin = async (data: TFormValues) => {
    try {
      const payload = {
        password: data.password,
        confirm_password: data.confirm_password,
      };
      const response = await resetPassword({
        resetPasswordData: payload,
        token: token,
      }).unwrap();

      if (response?.message) {
        toast.success(response?.message || "Password reset successfully");
        navigate("/auth/signin");
      }
    } catch (error) {
      const err = error as { data?: { error?: string } };
      toast.error(err?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col gap-[60px] items-center justify-center w-full">
      <div className="relative flex flex-col gap-3 justify-center w-full">
        <Link to={"https://tenstagematrix.com"} className="mx-auto">
          <img
            src={IMAGES.logo}
            alt="logo"
            className="z-10 w-[208px] h-[52px]"
          />
        </Link>
        <h1 className="text-neutral-80 text-[32px] text-center">
          Reset Your Passcode
        </h1>
      </div>

      <div className="max-w-[580px] mx-auto px-5 2xl:px-0 flex items-center justify-center w-full">
        <div className="animated-border rounded-[28px]">
          <div
            className="z-10 bg-[#0e092a] border-[#ffffff1a] border-2 rounded-[28px] p-6 relative w-full h-full backdrop-blur-sm"
            style={{
              boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
            }}
          >
            <form onSubmit={handleSubmit(handleSignin)} className="flex flex-col gap-5">
              {/* Passcode Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-white mb-1">Passcode</label>
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
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Passcode"
                      {...register("password", {
                        required: "Passcode is required",
                      })}
                      className={`w-full pl-12 pr-12 py-[15px] rounded-[7px] bg-neutral-140 focus:outline-none transition duration-300 text-neutral-85 ${
                        errors?.password ? "ring-2 ring-red-500" : ""
                      }`}
                      style={{
                        boxShadow:
                          "inset 0px 4px 10.5px 0px rgba(255, 255, 255, 0.25)",
                      }}
                    />
                  </div>
                </div>
                {errors?.password?.message && (
                  <span className="text-red-500 text-sm">
                    {String(errors.password.message)}
                  </span>
                )}
              </div>

              {/* Confirm Passcode Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="confirm_password" className="text-white mb-1">Confirm Passcode</label>
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
                      id="confirm_password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter Passcode"
                      {...register("confirm_password", {
                        required: "Re-enter your passcode",
                        validate: (value) =>
                          value === passwordValue || "Passcodes do not match",
                      })}
                      className={`w-full pl-12 pr-12 py-[15px] rounded-[7px] bg-neutral-140 focus:outline-none transition duration-300 text-neutral-85 ${
                        errors?.confirm_password ? "ring-2 ring-red-500" : ""
                      }`}
                      style={{
                        boxShadow:
                          "inset 0px 4px 10.5px 0px rgba(255, 255, 255, 0.25)",
                      }}
                    />
                  </div>
                </div>
                {errors?.confirm_password?.message && (
                  <span className="text-red-500 text-sm">
                    {String(errors.confirm_password.message)}
                  </span>
                )}
              </div>

              <Button label="Reset" isLoading={isLoading} />

              <div className="flex flex-col gap-2">
                <p className="text-neutral-85 text-center">
                  Back to{" "}
                  <Link to={"/auth/signin"} className="text-white underline">
                    Signin
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
