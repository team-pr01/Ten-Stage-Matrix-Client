/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../../assets";
import { useGetTransactionHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Loader from "../../../Shared/Loader/Loader";

const RecentTransactions = () => {
  const {data, isLoading} = useGetTransactionHistoryQuery({});

  return (
    <div style={{
    boxShadow: 'inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)',
    backdropFilter: 'blur(5.05px)',
  }} className="rounded-[28px] border-2 border-neutral-155 bg-neutral-30 flex flex-col p-5 xl:p-[30px] font-Outfit w-full h-full overflow-y-auto custom-scrollbar min-h-[350px] max-h-auto">
  <h1 className="text-2xl font-medium text-white">Recent Transaction</h1>

  <div className="mt-6 overflow-x-auto custom-scrollbar">
    <table className="min-w-[600px] w-full text-white">
      <tbody>
        {
        isLoading ?
        <Loader size="size-10" />
        :
        data?.data?.transactions?.length < 1?
        "No transactions found."
        :
        data?.data?.transactions?.map((transaction:any, index:number) => (
          <tr key={index} className="border-b border-neutral-90 text-neutral-55">
            {/* Type + Icon */}
            <td className="flex items-center gap-2 p-3 whitespace-nowrap">
              <div className="bg-neutral-105 size-[14px] rounded-full p-[3px] flex items-center justify-center">
                <img src={transaction?.status === "Deposit" ? ICONS.deposit : transaction?.status === "Withdrawal" ? ICONS.withdraw1 : ICONS.donation} alt="" className="size-2" />
              </div>
              <span>{transaction?.type}</span>
            </td>

            {/* Date */}
            <td className="p-3 whitespace-nowrap">{formatDate(transaction?.created_at)}</td>

            {/* Amount */}
            <td className="p-3 whitespace-nowrap">${transaction?.amount}</td>

            {/* Status */}
            <td className="p-3 whitespace-nowrap">
              {
                transaction?.status === 1 ? "Completed" 
                :
                transaction?.status === 2 ? "Pending" 
                :
                transaction?.status === 3 ? "Rejected" 
                :
                transaction?.status === 4 ? "Processing"
                :
                ""
              }
              </td>

            {/* Info Icon */}
            {/* <td className="p-3 text-right whitespace-nowrap">
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

export default RecentTransactions;
