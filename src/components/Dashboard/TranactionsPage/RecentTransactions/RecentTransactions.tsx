import { ICONS } from "../../../../assets";

const RecentTransactions = () => {
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
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full md:w-[70%]">
      <h1 className="text-2xl font-medium text-white">Recent Transaction</h1>

      <div className="flex flex-col gap-[19px] mt-6">
        {recentTransactions?.map((transaction) => (
          <div className="flex items-center justify-between border-b-[1px] border-neutral-110 pb-[7px]">
            <div className="flex items-center gap-[9px]">
              <div className="bg-neutral-105 size-[14px] rounded-full p-[3px] flex items-center justify-center">
                <img src={transaction?.icon} alt="" className="size-2" />
              </div>
              <p className="text-white">{transaction?.type}</p>
            </div>
            <p className="text-white">{transaction?.date}</p>
            <p className="text-white">{transaction?.amount}</p>
            <p className="text-white">{transaction?.status}</p>
            <button className="cursor-pointer">
              <img src={ICONS.info} alt="" className="size-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
