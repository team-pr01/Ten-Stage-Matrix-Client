import { useForm } from "react-hook-form";
import { IMAGES } from "../../assets";
import { Link } from "react-router-dom";
import { useState } from "react";

type TFormValues = {
  userName: string;
  email: string;
  password: string;
};
const Signup = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleSignup = (data:TFormValues) => {
    console.log(data);
  }
  return (
    <div className="h-full font-Outfit py-28 relative">
      <div className="bg-primary-30 w-[300px] lg:w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute top-0 left-0"></div>
      <div className="bg-primary-15 w-[300px] lg:w-[443px] h-[351px] rounded-[443px] blur-[75px] z-10 absolute -top-32 right-0"></div>
      <div className="max-w-[1250px] mx-auto px-5 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 items-center justify-between">
          <div className="z-10">
            <img src={IMAGES.logo} alt="logo" className="z-10" />
            <h1 className="text-neutral-80 text-xl mt-[17px]">Sign Up</h1>
            <p className="text-neutral-85 mt-[10px]">
              Create New TEN STAGE MATRIX Account
            </p>

            <form onSubmit={handleSubmit(handleSignup)} className="mt-[42px]">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-neutral-85">
                  Referral's Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  {...register("userName", {
                    required: "Name is required",
                  })}
                  className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                    errors?.userName ? "border-red-500" : "border-neutral-90"
                  }`}
                />
                {typeof errors === "object" && "message" in errors && (
                  <span className="text-red-500 text-sm">
                    {String(errors.message)}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-[17px]">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-neutral-85">
                    Your Email
                  </label>
                  <Link
                    to={"/"}
                    className="text-primary-55 text-xs hover:underline"
                  >
                    Need Help?
                  </Link>
                </div>
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

              <label className="flex items-center gap-3 text-neutral-85 mt-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="accent-orange-500  w-4 h-4"
                />
                <span>
                  I agree to{" "}
                  <span className="font-semibold">TEN STAGE MATRIX</span>{" "}
                  <span className="text-primary-55">Policy</span> &{" "}
                  <span className="text-primary-55">terms</span>
                </span>
              </label>

              <div className="flex flex-col gap-2 mt-[17px]">
                <label htmlFor="" className="text-neutral-85">
                  Passcode
                </label>
                <input
                  type="text"
                  placeholder="Enter your Password"
                  {...register("password", {
                    required: "Name is required",
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

              <button
                type="submit"
                className="p-2 w-full  h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium text-center cursor-pointer mt-6"
              >
                Sign Up
              </button>

              <div className="flex items-center gap-[9px] mt-[30px]">
                <div className="h-[1px] w-[171px] bg-neutral-90"></div>
                <p className="text-neutral-85">or</p>
                <div className="h-[1px] w-[171px] bg-neutral-90"></div>
              </div>

              <div className="flex flex-col gap-2 mt-[17px]">
                <label htmlFor="" className="text-neutral-85">
                  Already account on platform?
                </label>
                <Link
                  to={"/signin"}
                  className="p-2 w-full h-12 rounded-lg bg-primary-60 text-white font-medium text-center cursor-pointer mt-6 flex items-center justify-center"
                >
                  Sign In
                </Link>
              </div>

              <p className="text-neutral-85 mt-8">
                @ 2025 TEN STAGE MATRIX All Rights Reserved
              </p>
            </form>
          </div>
          <img src={IMAGES.signupSigninImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
