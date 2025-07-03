import { useForm } from "react-hook-form";
import { ICONS, IMAGES } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/Features/Auth/authApi";
import { toast } from "sonner";
import Loader from "../../components/Shared/Loader/Loader";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/Features/Auth/authSlice";
import { useState } from "react";
import "./AnimatedGradient.css";

type TFormValues = {
  identifier: string;
  password: string;
};
const SignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
          Access Your Account
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
            <form onSubmit={handleSubmit(handleSignin)} className="z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="identifier" className="text-white mb-1">
                  Private key
                </label>

                <div className="relative">
                  <img
                    src={ICONS.privateKey}
                    alt="private key"
                    className="absolute left-5 top-1/2 -translate-y-1/2 size-5 z-10 pointer-events-none"
                  />
                  <div className="group rounded-[8px] bg-neutral-90 p-[1px] transition-all duration-500 hover:bg-gradient-to-r hover:from-orange-400 hover:via-green-400 hover:to-cyan-400">
                    <input
                      id="identifier"
                      type="text"
                      placeholder="Private key"
                      {...register("identifier", {
                        required: "Identifier is required",
                      })}
                      className={`w-full pl-12 pr-6 py-[15px] rounded-[7px] bg-neutral-140 focus:outline-none transition duration-300 focus:border-primary-45/70 text-neutral-85 ${
                        errors?.identifier ? "ring-2 ring-red-500" : ""
                      }`}
                      style={{
                        boxShadow:
                          "inset 0px 4px 10.5px 0px rgba(255, 255, 255, 0.25)",
                      }}
                    />
                  </div>
                </div>
                {errors?.identifier?.message && (
                  <span className="text-red-500 text-sm">
                    {String(errors.identifier.message)}
                  </span>
                )}
              </div>

              {/* Passcode Field */}
              <div className="flex flex-col gap-2 mt-[17px]">
                <label htmlFor="password" className="text-white mb-1">
                  Passcode
                </label>
                <div className="relative">
                  {/* Left Icon (Passcode) */}
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
                =
                {errors?.password?.message && (
                  <span className="text-red-500 text-sm">
                    {String(errors.password.message)}
                  </span>
                )}
              </div>

              <div className="flex justify-end">
                <Link
                  to={"/forgot-password"}
                  className="text-primary-10 text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="px-6 py-3 w-full rounded-xl hover:bg-primary-10 bg-primary-85 transition duration-300 text-white font-medium text-sm text-center cursor-pointer mt-3"
                style={{
                  boxShadow: `
      inset 0px 2px 2px 0px #D26407,
      inset 0px -4px 4px 0px rgba(0, 0, 0, 0.35),
      inset 0px 4px 4px 0px rgba(255, 255, 255, 0.40),
      0px 4px 24px 0px rgba(168, 82, 5, 0.50)
    `,
                }}
              >
                {isLoading ? <Loader size="size-6" /> : "Access Dashboard"}
              </button>

              <div className="flex flex-col gap-2 mt-[17px]">
                <p className="text-neutral-85 text-center">
                  New here?{" "}
                  <Link to={"/signup"} className="font-medium text-white">
                    Create An Account
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

export default SignIn;
