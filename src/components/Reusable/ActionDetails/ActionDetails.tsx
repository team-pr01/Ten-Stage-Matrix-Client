/* eslint-disable @typescript-eslint/no-explicit-any */

import { useLocation } from "react-router-dom";
import { useGetTransactionHistoryQuery } from "../../../redux/Features/User/userApi";
import { formatDate } from "../../../utile/formatDate";
import Loader from "../../Shared/Loader/Loader";

const ActionDetails = () => {
  const { data, isLoading } = useGetTransactionHistoryQuery({});
  const location = useLocation();

  const filterType =
    location.pathname === "/dashboard/deposit" ? "Deposit" : "Withdrawal";
  const filteredData = data?.data?.transactions?.filter(
    (item: any) => item?.type === filterType
  );
  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full md:w-[70%] overflow-y-auto custom-scrollbar">
      <h1 className="text-2xl font-medium text-white">Recent Transaction</h1>

      <div className=" mt-6">
        <table className="min-w-[600px] w-full text-white">
          {isLoading ? (
            <Loader size="size-10" />
          ) : (
            <tbody>
              {filteredData?.length < 1 ? (
                <p className="text-white">No data found.</p>
              ) : (
                filteredData?.map((item: any, index: number) => (
                  <tr key={index} className="border-b border-neutral-110">
                    <td className="py-3 whitespace-nowrap">{item?._id}</td>
                    {/* Type + Icon */}
                    <td className="flex items-center gap-2 py-3 whitespace-nowrap">
                      {item?.icon && (
                        <div className="bg-neutral-105 size-[14px] rounded-full p-[3px] flex items-center justify-center">
                          <img src={item?.icon} alt="" className="size-2" />
                        </div>
                      )}
                      {item?.type && <span>{item?.type}</span>}
                    </td>

                    {/* Date */}
                    <td className="py-3 whitespace-nowrap">{formatDate(item?.created_at)}</td>

                    {/* Amount */}
                    <td className="py-3 whitespace-nowrap">${item?.amount}</td>

                    {/* Status */}
                    {/* <td className="py-3 whitespace-nowrap">
                      {item?.status === 1
                        ? "Completed"
                        : item?.status === 2
                        ? "Pending"
                        : item?.status === 3
                        ? "Rejected"
                        : "Processing"}
                    </td> */}

                    {/* Info Icon */}
                    {/* <td className="py-3 text-right">
                  <button className="cursor-pointer">
                    <img src={ICONS.info} alt="Info" className="size-6" />
                  </button>
                </td> */}
                  </tr>
                ))
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ActionDetails;
