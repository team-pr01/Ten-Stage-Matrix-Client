import { ICONS } from "../../../../assets";
import { useGetTransactionHistoryQuery } from "../../../../redux/Features/User/userApi";
import Loader from "../../../Shared/Loader/Loader";

const RecentTransactions = () => {
  const {data, isLoading} = useGetTransactionHistoryQuery({});
  console.log(data);
  const recentTransactions = [
    {
      icon: ICONS.deposit,
      date: "2024-06-24",
      amount: "$2,000",
      status: "Complete",
      info: "Something",
      type: "Deposit",
    },
    {
      icon: ICONS.withdraw1,
      date: "2024-06-24",
      amount: "$2,600",
      status: "Pending",
      info: "Something",
      type: "Withdrawal",
    },
    {
      icon: ICONS.donation,
      date: "2024-06-24",
      amount: "$2,033",
      status: "Complete",
      info: "Something",
      type: "Donation",
    },
    {
      icon: ICONS.deposit,
      date: "2024-06-24",
      amount: "$200",
      status: "Complete",
      info: "Something",
      type: "Deposit",
    },
  ];

  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full xl:w-[70%] min-h-[350px] max-h-auto overflow-y-auto">
  <h1 className="text-2xl font-medium text-white">Recent Transaction</h1>

  <div className="mt-6 overflow-x-auto">
    <table className="min-w-[600px] w-full text-white">
      <tbody>
        {
        isLoading ?
        <Loader size="size-10" />
        :
        recentTransactions.map((transaction, index) => (
          <tr key={index} className="border-b border-neutral-110">
            {/* Type + Icon */}
            <td className="flex items-center gap-2 py-3 whitespace-nowrap">
              <div className="bg-neutral-105 size-[14px] rounded-full p-[3px] flex items-center justify-center">
                <img src={transaction?.icon} alt="" className="size-2" />
              </div>
              <span>{transaction?.type}</span>
            </td>

            {/* Date */}
            <td className="py-3 whitespace-nowrap">{transaction?.date}</td>

            {/* Amount */}
            <td className="py-3 whitespace-nowrap">{transaction?.amount}</td>

            {/* Status */}
            <td className="py-3 whitespace-nowrap">{transaction?.status}</td>

            {/* Info Icon */}
            <td className="py-3 text-right whitespace-nowrap">
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

export default RecentTransactions;
