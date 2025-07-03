import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader/Loader";
import { IMAGES } from "../../assets";
import { useResetPasswordMutation } from "../../redux/Features/Auth/authApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type TFormValues = {
  password: string;
  confirm_password: string;
};

const ResetPassword = () => {
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
      const response = await resetPassword({resetPasswordData:payload, token:token}).unwrap();

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
    <div className="h-full min-h-screen font-Outfit py-28 relative">
      <div className="bg-primary-30 w-[300px] lg:w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute top-0 left-0"></div>
      <div className="bg-primary-15 w-[300px] lg:w-[443px] h-[351px] rounded-[443px] blur-[75px] z-10 absolute -top-32 right-0"></div>
      <div className="max-w-[1250px] mx-auto px-5 2xl:px-0">
        <div className="w-full max-w-full md:max-w-[600px] mx-auto z-10">
          <div className="z-10 bg-neutral-30 rounded-xl p-5 relative">
            <Link to={"https://tenstagematrix.com"}>
              <img src={IMAGES.logo} alt="logo" className="z-10" />
            </Link>
            <h1 className="text-neutral-80 text-2xl mt-[17px] text-center">Reset Your Passcode</h1>

            <form onSubmit={handleSubmit(handleSignin)} className="mt-[42px] z-10">
              <div className="flex flex-col gap-2 mt-[17px]">
                <input
                  type="password"
                  placeholder="Passcode"
                  {...register("password", {
                    required: "Passcode is required",
                  })}
                  className={`w-full p-4 rounded-[8px] border focus:outline-none transition duration-300 text-neutral-85 ${
                    errors?.password ? "border-red-500" : "border-neutral-90 focus:border-primary-10/50"
                  }`}
                />
                {errors?.password?.message && (
                  <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-[17px]">
                <input
                  type="password"
                  placeholder="Re-enter your passcode"
                  {...register("confirm_password", {
                    required: "Re-enter your passcode",
                    validate: (value) =>
                      value === passwordValue || "Passwords do not match",
                  })}
                  className={`w-full p-4 rounded-[8px] border focus:outline-none transition duration-300 text-neutral-85 ${
                    errors?.confirm_password ? "border-red-500" : "border-neutral-90 focus:border-primary-10/50"
                  }`}
                />
                {errors?.confirm_password?.message && (
                  <span className="text-red-500 text-sm">{errors.confirm_password.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="p-2 w-full h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium text-center cursor-pointer mt-3"
              >
                {isLoading ? <Loader size="size-6" /> : "Reset"}
              </button>

              <div className="flex flex-col gap-2 mt-[17px]">
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
