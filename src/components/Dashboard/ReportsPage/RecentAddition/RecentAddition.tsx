import { ICONS } from "../../../../assets";

const RecentAddition = () => {
  const referralList = [
    {
      avatar: ICONS.avatar2,
      name: "Tohidul Islam Rony",
      label: "01",
      joined: "2024-06-25",
    },
    {
      avatar: ICONS.avatar2,
      name: "Tohidul Islam Rony",
      label: "01",
      joined: "2024-06-25",
    },
    {
      avatar: ICONS.avatar2,
      name: "Tohidul Islam Rony",
      label: "01",
      joined: "2024-06-25",
    },
    {
      avatar: ICONS.avatar2,
      name: "Tohidul Islam Rony",
      label: "01",
      joined: "2024-06-25",
    },
  ];
  return (
    <div className="font-Outfit rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] w-full md:w-[60%] xl:w-[80%] h-full md:h-[300px] overflow-y-auto custom-scrollbar">
      <h1 className="text-2xl font-medium text-white">Recent Addition</h1>
      <div className="mt-5 overflow-x-auto">
        <table className="min-w-[600px] w-full text-white">
          <thead>
            <tr className="border-b border-neutral-110 text-left">
              <th className="py-3 whitespace-nowrap">Name</th>
              <th className="py-3 whitespace-nowrap">Level</th>
              <th className="py-3 whitespace-nowrap">Joined</th>
            </tr>
          </thead>
          <tbody>
            {referralList?.map((transaction, index) => (
              <tr key={index} className="border-b border-neutral-110">
                {/* Name + Avatar */}
                <td className="flex items-center gap-2 py-3 whitespace-nowrap">
                  <img
                    src={transaction?.avatar}
                    alt=""
                    className="size-6 rounded-full"
                  />
                  <span>{transaction?.name}</span>
                </td>

                {/* Level */}
                <td className="py-3 whitespace-nowrap">{transaction?.label}</td>

                {/* Joined */}
                <td className="py-3 whitespace-nowrap">
                  {transaction?.joined}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentAddition;
