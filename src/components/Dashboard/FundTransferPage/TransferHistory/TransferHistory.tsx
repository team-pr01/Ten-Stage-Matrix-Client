/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetTransferHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Loader from "../../../Shared/Loader/Loader";

const TransferHistory = () => {
  const { data, isLoading } = useGetTransferHistoryQuery({});

  console.log(data);

  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full min-h-[350px] max-h-auto overflow-y-auto mt-6">
      <h1 className="text-2xl font-medium text-white">Transfer History</h1>

      <div className="mt-5 overflow-x-auto">
        {isLoading ? (
          <Loader size="size-10 mt-5" />
        ) : (
          <table className="min-w-[600px] w-full text-white">
            <thead>
              <tr className="border-b border-neutral-110 text-left">
                <th className="py-3 whitespace-nowrap">Transfer Id</th>
                <th className="py-3 whitespace-nowrap">Recipient Name</th>
                <th className="py-3 whitespace-nowrap">Recipient Email</th>
                <th className="py-3 whitespace-nowrap">Date</th>
                <th className="py-3 whitespace-nowrap">Amount</th>
                <th className="py-3 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.transfers?.map((item: any, index: number) => (
                <tr key={index} className="border-b border-neutral-110">
                  {/* Name + Avatar */}
                  <td className="flex items-center gap-2 py-3 whitespace-nowrap">
                    {/* <img
                    src={item?.children?.avatar}
                    alt=""
                    className="size-6 rounded-full"
                  /> */}
                    <span className="capitalize">{item?.counterpart?.id}</span>
                  </td>

                  {/* Level */}
                  <td className="py-3 whitespace-nowrap">
                    {item?.counterpart?.name}
                  </td>
                  <td className="py-3 whitespace-nowrap">
                    {item?.counterpart?.email}
                  </td>
                  <td className="py-3 whitespace-nowrap">
                    {formatDate(item?.created_at)}
                  </td>
                  <td className="py-3 whitespace-nowrap">${item?.amount}</td>
                  <td className="py-3 whitespace-nowrap capitalize">
                    {item?.status}
                  </td>

                  {/* Joined */}
                  <td className="py-3 whitespace-nowrap">{item?.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TransferHistory;
