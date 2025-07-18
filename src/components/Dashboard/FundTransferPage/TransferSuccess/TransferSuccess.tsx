/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../../assets";

const TransferSuccess = ({data} : {data: any}) => {
  return (
    data ?
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 py-[26px] px-9 flex flex-col mt-6`}
        >
          <img src={ICONS.success} alt="" className="size-[66px]" />
          <h1 className="text-white text-[30px] font-medium capitalize mt-8">
            Transaction Successful
          </h1>
          <h2 className="text-neutral-100 text-lg mt-2">
            {data?.recipient?.name} has received ${data?.amount}{" "}
          </h2>
        </div>
        <div
          className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 py-[26px] px-9 flex flex-col mt-[22px]`}
        >
          <img src={ICONS.reference} alt="" className="size-[66px]" />
          <h1 className="text-white text-[30px] font-medium capitalize mt-8">
            {data?.transfer_id}
          </h1>
          <h2 className="text-neutral-100 text-lg mt-2">Transfer Id</h2>
        </div>
      </div>
    </div>
    :
    <p className="text-white mt-6">Please send funds first</p>
  );
};

export default TransferSuccess;
