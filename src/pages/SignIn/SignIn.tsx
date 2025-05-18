import { useForm } from "react-hook-form";
import { IMAGES } from "../../assets";
import { Link } from "react-router-dom";

type TFormValues = {
  privateKey: string;
  password: string;
};
const SignIn = () => {
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
      <div className="max-w-full lg:max-w-[1250px] mx-auto px-5 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 items-center justify-between">
          <div className="z-10">
            <Link to={"/"}>
            <img src={IMAGES.logo} alt="logo" className="z-10" /></Link>
            <h1 className="text-neutral-80 text-xl mt-[17px]">Sign in</h1>
            <p className="text-neutral-85 mt-[10px] max-w-[434px]">
              Access the TEN STAGE MATRIX Using your username and passcode
            </p>

            <form onSubmit={handleSubmit(handleSignup)} className="mt-[42px]">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-neutral-85">
                  Privet Key
                </label>
                <input
                  type="text"
                  placeholder="Enter your private key"
                  {...register("privateKey", {
                    required: "Name is required",
                  })}
                  className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                    errors?.privateKey ? "border-red-500" : "border-neutral-90"
                  }`}
                />
                {typeof errors === "object" && "message" in errors && (
                  <span className="text-red-500 text-sm">
                    {String(errors.message)}
                  </span>
                )}
              </div>

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
                Access Dashboard
              </button>

              <div className="flex items-center gap-[9px] mt-[65px]">
                <div className="h-[1px] w-[171px] bg-neutral-90"></div>
                <p className="text-neutral-85">or</p>
                <div className="h-[1px] w-[171px] bg-neutral-90"></div>
              </div>

              <div className="flex flex-col gap-2 mt-8">
                <label htmlFor="" className="text-neutral-85">
                  New on our platform?
                </label>
                <Link
                  to={"/signup"}
                  className="p-2 w-full h-12 rounded-lg bg-primary-60 text-white font-medium text-center cursor-pointer flex items-center justify-center"
                >
                  Create an account
                </Link>
              </div>

              <p className="text-neutral-85 mt-[90px]">
                @ 2025 TEN STAGE MATRIX All Rights Reserved
              </p>
            </form>
          </div>
          <img src={IMAGES.signin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
