import { ICONS } from "../../../../assets";

const ReferralActivity = () => {
  const referralActivity = [
    {
      avatar: ICONS.avatar,
      name: "Thomas Shelvi",
      designation: "Designer",
    },
    {
      avatar: ICONS.avatar,
      name: "Thomas Shelvi",
      designation: "Designer",
    },
    {
      avatar: ICONS.avatar,
      name: "Thomas Shelvi",
      designation: "Designer",
    },
  ];
  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full md:w-[30%]">
      <h1 className="text-2xl font-medium text-white">Referral Activity</h1>

      <div className="flex flex-col gap-[26px] mt-6">
        {referralActivity?.map((item) => (
          <div className="flex items-center justify-between">
            {/* Name and avatar */}
            <div className="flex items-center gap-3">
              <img
                src={item?.avatar}
                alt=""
                className="size-[43px] rounded-full"
              />
              <div>
                <h1 className="text-white text-lg font-medium capitalize">
                  {item?.name}
                </h1>
                <p className="text-neutral-35 text-sm mt-[2px]">
                  {item?.designation}
                </p>
              </div>
            </div>
            <button className="cursor-pointer">
              <img src={ICONS.addUser} alt="" className="size-[30px]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferralActivity;
