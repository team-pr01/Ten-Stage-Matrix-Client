import { useForm } from "react-hook-form";
import { IMAGES } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../redux/Features/Auth/authApi";
import { toast } from "sonner";
import Loader from "../../components/Shared/Loader/Loader";

type TFormValues = {
  name: string;
  email: string;
  password: string;
  referral_code?: string;
};
const Signup = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleSignup = async (data: TFormValues) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        referral_code: data?.referral_code || null,
      };
      const response = await signup(payload).unwrap();

      const userPrivateKey = response?.user?.user_pk;
      console.log(response);
      if (response?.message) {
        toast.success(response?.message || "Signup successful!");
        navigate("/signup-success", {
          state: { userPrivateKey },
        });
      }
    } catch (error) {
      const err = error as { data?: { error?: string } };
      toast.error(err?.data?.error || "Something went wrong");
      console.log(error);
    }
  };
  return (
    <div className="h-full min-h-screen font-Outfit py-28 relative">
      <div className="bg-primary-30 w-[300px] lg:w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute top-0 left-0"></div>
      <div className="bg-primary-15 w-[300px] lg:w-[443px] h-[351px] rounded-[443px] blur-[75px] z-10 absolute -top-32 right-0"></div>
      <div className="max-w-[1250px] mx-auto px-5 2xl:px-0">
        <div className="w-full max-w-full md:max-w-[600px] mx-auto z-10 relative">
          <div className="z-10 bg-neutral-30 rounded-xl p-5">
            <Link to={"https://tenstagematrix.com"}>
              <img src={IMAGES.logo} alt="logo" className="z-10" />
            </Link>
            <h1 className="text-neutral-80 text-2xl mt-[17px] text-center">
              Create Your Account
            </h1>

            <form onSubmit={handleSubmit(handleSignup)} className="mt-[42px]">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                    errors?.name ? "border-red-500" : "border-neutral-90"
                  }`}
                />
                {typeof errors === "object" && "message" in errors && (
                  <span className="text-red-500 text-sm">
                    {String(errors.message)}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-[17px]">
                <div className="flex items-center justify-between"></div>
                <input
                  type="text"
                  placeholder="Your Email Address"
                  {...register("email", {
                    required: "Name is required",
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

              <div className="flex flex-col gap-2 mt-[17px]">
                <input
                  type="password"
                  placeholder="Enter your passcode"
                  {...register("password", {
                    required: "Passcode is required",
                  })}
                  className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                    errors?.password ? "border-red-500" : "border-neutral-90"
                  }`}
                />
                {typeof errors === "object" && "message" in errors && (
                  <span className="text-red-500 text-sm">
                    {String(errors.message)}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-[17px]">
                <input
                  type="text"
                  placeholder="Enter your referral code"
                  {...register("referral_code", {
                    required: "Referral code is required",
                  })}
                  className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                    errors?.referral_code
                      ? "border-red-500"
                      : "border-neutral-90"
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
                className="p-2 w-full  h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium text-center cursor-pointer text-lg mt-6"
              >
                {isLoading ? <Loader size="size-6" /> : "Create Account"}
              </button>

              <div className="flex flex-col gap-2 mt-[17px]">
                <p className="text-neutral-85 text-center">
                  Already have an account?{" "}
                  <Link to={"/auth/signin"} className="font-bold text-white">
                    Login Here
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

export default Signup;
