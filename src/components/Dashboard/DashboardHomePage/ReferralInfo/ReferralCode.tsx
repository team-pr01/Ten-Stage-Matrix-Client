import { ICONS } from "../../../../assets";

const ReferralCode = ({ cardHeight = "h-full" }: { cardHeight?: string }) => {
  return (
    <div
      className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 py-[27px] px-9 flex flex-col col-span-2 ${cardHeight}`}
    >
      <img src={ICONS.referralCode} alt="" className="size-[90px]" />
      <h1 className="text-white text-[34px] font-medium capitalize mt-[10px]">
        Your Code: X7Y9ZQ
      </h1>
      <h2 className="text-neutral-100 text-xl font-medium capitalize mt-[13px]">
        Share this code to invite new members.
      </h2>

      <div className="flex items-center gap-[11px] mt-[15px]">
        <button className="w-[132px] h-[38px] bg-primary-10 rounded-[80px] border border-primary-10 text-white text-sm font-medium p-[10px] flex items-center justify-center">
          Copy Code
        </button>
        <button className="w-[132px] h-[38px] bg-primary-70 rounded-[80px] border border-primary-65 text-white text-sm font-medium p-[10px] flex items-center justify-center">
          How it works
        </button>
      </div>
    </div>
  );
};

export default ReferralCode;
