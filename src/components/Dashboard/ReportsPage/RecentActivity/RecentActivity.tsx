/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../../assets";
import { useGetActivityHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";

const RecentActivity = () => {
  const { data } = useGetActivityHistoryQuery({});

  return (
    <div
    style={{
        boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
        backdropFilter: "blur(5.05px)",
      }}
    className="rounded-[28px] border-2 border-neutral-155 bg-neutral-155 flex flex-col py-7 px-[34px] font-Outfit w-full h-full overflow-y-auto custom-scrollbar mt-6">
      <h1 className="text-2xl font-medium text-white">Recent Activity</h1>

      <div className="mt-6 overflow-x-auto custom-scrollbar">
        <table className="min-w-[600px] w-full text-white">
          <tbody>
            {data?.data?.activities?.length < 1 ? (
              <p className="text-white">No data foud</p>
            ) : (
              data?.data?.activities?.map((item: any, index: number) => (
                <tr key={index} className="border-b border-neutral-110">
                  {/* event + Icon */}
                  <td className="flex items-center gap-2 py-3 whitespace-nowrap">
                      <img src={ICONS.calender} alt="" className="size-6" />
                    <span>{formatDate(item?.created_at)}</span>
                  </td>

                  {/* Description */}
                  <td className="py-3 whitespace-nowrap">
                    {item?.description}
                  </td>
                  {/* Type */}
                  <td className="py-3 whitespace-nowrap capitalize">
                    {item?.type}
                  </td>

                  {/* Status */}
                  <td className="py-3 whitespace-nowrap">
                    ${(item?.metadata?.amount || 0).toFixed(5)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;
