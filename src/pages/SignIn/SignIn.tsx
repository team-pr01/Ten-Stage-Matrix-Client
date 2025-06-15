import { useForm } from "react-hook-form";
import { IMAGES } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/Features/Auth/authApi";
import { toast } from "sonner";
import Loader from "../../components/Shared/Loader/Loader";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/Features/Auth/authSlice";

type TFormValues = {
  identifier: string;
  password: string;
};
const SignIn = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleSignin = async (data: TFormValues) => {
    try {
      const payload = {
        identifier: data.identifier,
        password: data.password,
      };
      const response = await login(payload).unwrap();
      const user = response?.user;
      const accessToken = response.token;
      const userRole = response?.user?.role;
      if (accessToken) {
        Cookies.set("accessToken", accessToken, {
          expires: 7,
          secure:
            typeof window !== "undefined" &&
            window.location.protocol === "https:",
          sameSite: "strict",
        });
        Cookies.set("role", userRole, {
          expires: 7,
          secure: window.location.protocol === "https:",
          sameSite: "strict",
        });
      }

      if (response?.message) {
        dispatch(setUser({ user, token: accessToken }));
        navigate("/dashboard");
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
        <div className="w-full max-w-full md:max-w-[600px] mx-auto z-10">
          <div className="z-10 bg-neutral-30 rounded-xl p-5 relative">
            <Link to={"https://tenstagematrix.com"}>
              <img src={IMAGES.logo} alt="logo" className="z-10" />
            </Link>
            <h1 className="text-neutral-80 text-2xl mt-[17px] text-center">Access Your Account</h1>

            <form onSubmit={handleSubmit(handleSignin)} className="mt-[42px] z-10">
              <div className="flex flex-col gap-2 z-10">
                <input
                  type="text"
                  placeholder="Private key"
                  {...register("identifier", {
                    required: "identifier is required",
                  })}
                  className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                    errors?.identifier ? "border-red-500" : "border-neutral-90"
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
                  placeholder="Passcode"
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

              <div className="flex justify-end mt-3">
                <Link to={"/forgot-password"} className="text-primary-10 text-sm hover:underline">Forgot Password?</Link>
              </div>

              <button
                type="submit"
                className="p-2 w-full  h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium text-center cursor-pointer mt-3"
              >
                {isLoading ? <Loader size="size-6" /> : "Access Dashboard"}
              </button>

              <div className="flex flex-col gap-2 mt-[17px]">
                <p className="text-neutral-85 text-center">
                  New here? <Link to={"/signup"} className="font-bold text-white">Create An Account</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
