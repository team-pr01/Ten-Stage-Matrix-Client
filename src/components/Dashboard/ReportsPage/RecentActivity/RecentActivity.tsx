import { ICONS } from "../../../../assets";

const RecentActivity = () => {
  const recentActivities = [
    {
      icon: ICONS.deposit,
      date: "2024-06-24",
      event: "Earning",
      amount : "$800",
      info: "Something",
    },
    {
      icon: ICONS.deposit,
      date: "2024-06-25",
      event: "Referral",
      amount : "$800",
      info: "Something",
    },
    {
      icon: ICONS.deposit,
      date: "2024-06-26",
      event: "Withdraw",
      amount : "$800",
      info: "Something",
    },
    {
      icon: ICONS.deposit,
      date: "2024-06-27",
      event: "Bonus",
      amount : "$800",
      info: "Something",
    },
  ];

  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full md:w-[80%] h-full md:h-[300px] overflow-y-auto custom-scrollbar mt-6">
      <h1 className="text-2xl font-medium text-white">Recent Activity</h1>

      <div className="mt-6">
        <table className="w-full text-white">
          <tbody>
            {recentActivities.map((item, index) => (
              <tr key={index} className="border-b border-neutral-110">
                {/* event + Icon */}
                <td className="flex items-center gap-2 py-3">
                  <div className="bg-neutral-105 size-[14px] rounded-full p-[3px] flex items-center justify-center">
                    <img src={item?.icon} alt="" className="size-2" />
                  </div>
                  <span>{item?.date}</span>
                </td>

                {/* Date */}
                <td className="py-3">{item?.event}</td>aad

                {/* Amount */}
                <td className="py-3">{item?.amount}</td>

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

export default RecentActivity;
