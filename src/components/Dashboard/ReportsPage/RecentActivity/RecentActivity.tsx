/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetActivityHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";

const RecentActivity = () => {
  const { data } = useGetActivityHistoryQuery({});
  console.log( data);

  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full h-full md:h-[300px] overflow-y-auto custom-scrollbar mt-6">
      <h1 className="text-2xl font-medium text-white">Recent Activity</h1>

      <div className="mt-6 overflow-x-auto custom-scrollbar">
        <table className="min-w-[600px] w-full text-white">
          <tbody>
            {
            data?.data?.activities?.length < 1 ? <p className="text-white">No data foud</p> :
            data?.data?.activities?.map((item: any, index: number) => (
              <tr key={index} className="border-b border-neutral-110">
                {/* event + Icon */}
                <td className="flex items-center gap-2 py-3 whitespace-nowrap">
                  <div className="bg-neutral-105 size-[14px] rounded-full p-[3px] flex items-center justify-center">
                    <img src={item?.icon} alt="" className="size-2" />
                  </div>
                  <span>{formatDate(item?.created_at)}</span>
                </td>

                {/* Description */}
                <td className="py-3 whitespace-nowrap">{item?.description}</td>
                {/* Type */}
                <td className="py-3 whitespace-nowrap capitalize">
                  {item?.type}
                </td>

                {/* Status */}
                <td className="py-3 whitespace-nowrap">
                  ${item?.metadata?.amount}
                </td>

                {/* Info Icon */}
                {/* <td className="py-3 text-right whitespace-nowrap">
                    <button className="cursor-pointer">
                      <img src={ICONS.info} alt="Info" className="size-6" />
                    </button>
                  </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;
