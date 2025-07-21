import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../assets";
import { useForgotPasswordMutation } from "../../redux/Features/Auth/authApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import TextInput from "../../components/Reusable/TextInput/TextInput";
import Button from "../../components/Reusable/Button/Button";

type TFormValues = {
  user_pk: string;
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
        user_pk: data.user_pk,
      };
      const response = await forgotPassword(payload).unwrap();

      if (response?.message) {
        toast.success(
          response?.message || "Reset credentials set to your email."
        );
      }
    } catch (error) {
      const err = error as { data?: { error?: string } };
      toast.error(err?.data?.error || "Something went wrong");
    }
  };
  return (
    <div className="flex flex-col gap-[60px] items-center justify-center w-full">
      <div className="relative flex flex-col gap-3 justify-center w-full">
        <Link to={"/"} className="mx-auto">
          <img
            src={IMAGES.logoGif}
            alt="logo"
            className="z-10 w-[280px]"
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
            <form
              onSubmit={handleSubmit(handleSignin)}
              className="flex flex-col gap-5"
            >
              <TextInput
                label="Private Key"
                placeholder="Enter Private Key"
                icon={ICONS.privateKey}
                error={errors.user_pk}
                {...register("user_pk", {
                  required: "Private key is required",
                })}
              />

              <Button label="Submit" isLoading={isLoading} />

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

export default ForgotPassword;
