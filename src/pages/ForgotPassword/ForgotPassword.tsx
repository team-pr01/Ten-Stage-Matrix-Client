import { Link } from "react-router-dom";
import Loader from "../../components/Shared/Loader/Loader";
import { IMAGES } from "../../assets";
import { useForgotPasswordMutation } from "../../redux/Features/Auth/authApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type TFormValues = {
  email: string;
};

const ForgotPassword = () => {
     const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TFormValues>();
    
      const handleSignin = async (data: TFormValues) => {
        try {
          const payload = {
            email: data.email,
          };
          const response = await forgotPassword(payload).unwrap();
    
          if (response?.message) {
            toast.success(response?.message || "Reset credentials set to your email.");
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
              <div className="flex flex-col gap-2 z-10">
                <input
                  type="text"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "email is required",
                  })}
                  className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                    errors?.email ? "border-red-500" : "border-neutral-90"
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
                className="p-2 w-full  h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium text-center cursor-pointer mt-3"
              >
                {isLoading ? <Loader size="size-6" /> : "Submit"}
              </button>

              <div className="flex flex-col gap-2 mt-[17px]">
                <p className="text-neutral-85 text-center">
                  Back to <Link to={"/auth/signin"} className="text-white underline">Signin</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ForgotPassword;