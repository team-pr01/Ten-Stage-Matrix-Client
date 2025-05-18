import { ICONS } from "../../../../assets";

const ActivityLog = () => {
  const activityLog = [
    {
      icon: ICONS.deposit,
      date: "2024-06-24",
      event: "Joined",
      status: "Referral accepted",
      info: "Something",
    },
    {
      icon: ICONS.deposit,
      date: "2024-06-25",
      event: "Bonus",
      status: "+$50",
      info: "Something",
    },
    {
      icon: ICONS.deposit,
      date: "2024-06-26",
      event: "Invite",
      status: "Jhonsina",
      info: "Something",
    },
    {
      icon: ICONS.deposit,
      date: "2024-06-27",
      event: "Bonus",
      status: "Complete",
      info: "Something",
    },
  ];

  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full md:w-[80%] h-full md:h-[300px] overflow-y-auto custom-scrollbar">
      <h1 className="text-2xl font-medium text-white">Activity Log</h1>

      <div className="mt-6">
        <table className="w-full text-white">
          <tbody>
            {activityLog.map((item, index) => (
              <tr key={index} className="border-b border-neutral-110">
                {/* event + Icon */}
                <td className="flex items-center gap-2 py-3">
                  <div className="bg-neutral-105 size-[14px] rounded-full p-[3px] flex items-center justify-center">
                    <img src={item?.icon} alt="" className="size-2" />
                  </div>
                  <span>{item?.date}</span>
                </td>

                {/* Date */}
                <td className="py-3">{item?.event}</td>

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

export default ActivityLog;
