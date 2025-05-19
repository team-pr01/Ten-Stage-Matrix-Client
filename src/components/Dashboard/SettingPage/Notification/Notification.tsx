
import { useState } from "react";
import { ICONS } from "../../../../assets";
const Notification = () => {
  const [isOn, setIsOn] = useState(false);

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

  const referralActivity2 = [
    {
      avatar: ICONS.avatar,
      name: "Thomas Shelvi",
      designation: "Designer",
    },
  ];

  return (
    <div className="font-Outfit">
      <div className="flex flex-col lg:flex-row items-center gap-5">
        {/* Notification Preference */}
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-2xl text-white font-medium mt-6">Notification Preference</h1>
          <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-6 px-[18px] min-h-[270px]">
            <img
              src={ICONS.emailAlert}
              alt=""
              className="size-[66px] rounded-full"
            />
            <p className="text-neutral-110 text-lg mt-[3px]">Email Alerts</p>
            <h1 className="text-white text-[30px] font-medium mt-2">
              Receive Email Updates
            </h1>
            <p className="text-neutral-110 text-lg mt-[3px]">
              Get notified about important account activity and announcement
            </p>
          </div>
        </div>

        {/* Push Notification */}
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-2xl text-white font-medium mt-6">Push Notification</h1>
          <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-6 px-[18px] min-h-[270px]">
            <img
              src={ICONS.notification}
              alt=""
              className="size-[66px] rounded-full"
            />
            <p className="text-neutral-110 text-lg mt-[3px]">Mobile & Web</p>
            <h1 className="text-white text-[30px] font-medium mt-2">
              Enable Push Alerts
            </h1>
            <p className="text-neutral-110 text-lg mt-[3px]">
              Stay Update in real time with push notificationon your device
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mt-9">
        <div className="flex flex-col gap-[26px] rounded-[15px] border-[3px] bg-neutral-30 border-neutral-25/20 bg-neutral-3 py-6 px-[18px] w-full h-fit">
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
              <div
                onClick={() => setIsOn(!isOn)}
                className={`w-16 h-9 rounded-full cursor-pointer transition-colors duration-300 px-1 flex items-center ${
                  isOn
                    ? "bg-primary-10 justify-end"
                    : "bg-gray-300 justify-start"
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-[#2E2552] transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

       <div className="w-full">
         <div className="flex flex-col gap-[26px] rounded-[15px] border-[3px] bg-neutral-30 border-neutral-25/20 bg-neutral-3 py-6 px-[18px] w-full h-fit">
          {referralActivity2?.map((item) => (
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
              <div
                onClick={() => setIsOn(!isOn)}
                className={`w-16 h-9 rounded-full cursor-pointer transition-colors duration-300 px-1 flex items-center ${
                  isOn
                    ? "bg-primary-10 justify-end"
                    : "bg-gray-300 justify-start"
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-[#2E2552] transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        <button
              className="p-[10px] w-[150px] h-10 rounded-[80px] bg-primary-10 text-white font-medium text-center cursor-pointer mt-[23px] flex items-center justify-center"
            >
              Save Preference
            </button>
       </div>
      </div>
    </div>
  );
};

export default Notification;