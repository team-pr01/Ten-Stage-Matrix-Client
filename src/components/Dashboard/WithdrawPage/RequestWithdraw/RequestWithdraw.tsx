import { useForm } from "react-hook-form";
import { ICONS } from "../../../../assets";

type TFormValues = {
  amount: string;
};
const RequestWithdraw = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleRequestWithdraw = (data: TFormValues) => {
    console.log(data);
  };
  return (
    <div className="font-Outfit">
      <h1 className="text-xl text-white font-medium mt-[57px]">
        Minimum withdraw $5
      </h1>
      <form onSubmit={handleSubmit(handleRequestWithdraw)}>
        <div className="flex flex-col gap-2 mt-[22px]">
          <label htmlFor="" className="text-neutral-125 text-lg font-medium">
            Amount
          </label>
          <div className="flex items-center justify-between max-w-[415px] relative">
            <input
              type="text"
              placeholder="Enter your amount USD"
              {...register("amount", {
                required: "Name is required",
              })}
              className={`w-full p-3 rounded-[8px] border border-neutral-130 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                errors?.amount ? "border-red-500" : "border-neutral-130"
              }`}
            />
            <img
              src={ICONS.currency}
              alt=""
              className="size-6 absolute right-3"
            />
          </div>
          {typeof errors === "object" && "message" in errors && (
            <span className="text-red-500 text-sm">
              {String(errors.message)}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="p-[10px] w-[119px] h-10 rounded-[80px] bg-primary-10 text-white font-medium text-center cursor-pointer mt-[21px] flex items-center justify-center"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default RequestWithdraw;
