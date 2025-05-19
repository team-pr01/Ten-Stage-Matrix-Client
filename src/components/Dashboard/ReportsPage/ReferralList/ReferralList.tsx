import { ICONS } from "../../../../assets";

const ReferralList = () => {
  const recentTransactions = [
    {
      avatar: ICONS.avatar2,
      name: "Tohidul Islam Rony",
      amount: "$2,000",
      info: "Something",
      type: "Deposit",
    },
    {
      avatar: ICONS.avatar2,
      name: "Tohidul Islam Rony",
      amount: "$2,000",
      info: "Something",
      type: "Deposit",
    },
    {
      avatar: ICONS.avatar2,
      name: "Tohidul Islam Rony",
      amount: "$2,000",
      info: "Something",
      type: "Deposit",
    },
    {
      avatar: ICONS.avatar2,
      name: "Tohidul Islam Rony",
      amount: "$2,000",
      info: "Something",
      type: "Deposit",
    },
  ];
  return (
    <div className="font-Outfit mt-[22px]">
      <h1 className="text-2xl text-white font-medium mt-6">Referral List</h1>

      <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] mt-[27px]">
        <h1 className="text-2xl font-medium text-white">Recent Activity</h1>
        <div className=" mt-6">
          <table className="w-full text-white">
            <tbody>
              {recentTransactions.map((transaction, index) => (
                <tr key={index} className="border-b border-neutral-110">
                  {/* Type + Icon */}
                  <td className="flex items-center gap-2 py-3">
                    <div className="bg-neutral-105 size-[14px] rounded-full p-[3px] flex items-center justify-center">
                      <img
                        src={transaction?.avatar}
                        alt=""
                        className="size-2"
                      />
                    </div>
                    <span>{transaction?.name}</span>
                  </td>

                  {/* Type */}
                  <td className="py-3">{transaction?.type}</td>

                  {/* Amount */}
                  <td className="py-3">{transaction?.amount}</td>

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
    </div>
  );
};

export default ReferralList;
