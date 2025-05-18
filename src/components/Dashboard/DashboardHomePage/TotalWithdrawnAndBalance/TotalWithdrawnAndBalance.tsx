import { ICONS } from "../../../../assets";

const TotalWithdrawnAndBalance = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
      <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 px-[25px] py-11 flex items-center gap-[33px]">
        <img src={ICONS.withdraw} alt="" className="size-[90px]" />
        <div className="w-full">
          <h2 className="text-white text-xl font-medium capitalize">
            Total Withdraw
          </h2>
          <h1 className="text-white text-[34px] font-medium capitalize">
            $16,869
          </h1>
        </div>
      </div>

      <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 px-[25px] py-11 flex items-center gap-[33px]">
        <img src={ICONS.currentBalance} alt="" className="size-[90px]" />
        <div className="w-full">
          <h2 className="text-white text-xl font-medium capitalize">
            Current Balance
          </h2>
          <h1 className="text-white text-[34px] font-medium capitalize">
            $12,869
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TotalWithdrawnAndBalance;
