/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../assets";

const ActionDetails = ({data} : {data : any}) => {
  

  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full md:w-[70%]">
      <h1 className="text-2xl font-medium text-white">Recent Transaction</h1>

      <div className=" mt-6">
        <table className="w-full text-white">
          <tbody>
            {data?.map((item: any, index: number) => (
              <tr key={index} className="border-b border-neutral-110">
                {/* Type + Icon */}
                <td className="flex items-center gap-2 py-3">
                  {item?.icon && (
                    <div className="bg-neutral-105 size-[14px] rounded-full p-[3px] flex items-center justify-center">
                      <img src={item?.icon} alt="" className="size-2" />
                    </div>
                  )}
                  {
                    item?.type &&
                    <span>{item?.type}</span>
                  }
                </td>

                {/* Date */}
                <td className="py-3">{item?.date}</td>

                {/* Amount */}
                <td className="py-3">{item?.amount}</td>

                {/* Status */}
                <td className="py-3">{item?.status}</td>

                {/* Info Icon */}
                <td className="py-3 text-right">
                  <button className="cursor-pointer">
                    <img src={ICONS.info} alt="Info" className="size-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActionDetails;
