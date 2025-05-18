import { ICONS } from "../../../../assets";

const VerifyTransfer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 py-[26px] px-9 flex flex-col mt-[22px]`}
        >
          <img src={ICONS.recipient} alt="" className="size-[66px]" />
          <h2 className="text-neutral-100 text-lg mt-[15px]">Recipient</h2>
          <h1 className="text-white text-[30px] font-medium capitalize mt-2">
            Private Key: 12345678
          </h1>
          <h2 className="text-neutral-100 text-lg mt-2">Alex Lee</h2>
        </div>
        <div
          className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 py-[26px] px-9 flex flex-col mt-[22px]`}
        >
          <img src={ICONS.amount} alt="" className="size-[66px]" />
          <h2 className="text-neutral-100 text-lg mt-[15px]">Amount </h2>
          <h1 className="text-white text-[30px] font-medium capitalize mt-2">
            $500,00
          </h1>
          <h2 className="text-neutral-100 text-lg mt-2">Transfer Amount</h2>
        </div>
        <div
          className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 py-[26px] px-9 flex flex-col mt-[22px]`}
        >
          <img src={ICONS.authentication} alt="" className="size-[66px]" />
          <h2 className="text-neutral-100 text-lg mt-[15px]">Authentication</h2>
          <h1 className="text-white text-[30px] font-medium capitalize mt-2">
            Private Key Verifide
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-[13px] mt-[31px]">
        <button className="w-[145px] h-[38px] bg-primary-10 rounded-[80px] text-white text-sm font-medium p-[10px] flex items-center justify-center">
          Confirm & Send
        </button>
        <button className="w-[132px] h-[38px] bg-primary-80 rounded-[80px] text-white text-sm font-medium p-[10px] flex items-center justify-center">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default VerifyTransfer;
