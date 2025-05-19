import { useState } from "react";
import DashboardHeaderTitle from "../../../components/Reusable/DashboardHeaderTitle/DashboardHeaderTitle";
import Profile from "../../../components/Dashboard/SettingPage/Profile/Profile";
import Security from "../../../components/Dashboard/SettingPage/Security/Security";
import Notification from "./../../../components/Dashboard/SettingPage/Notification/Notification";

const Setting = () => {
  const [activeTab, setActiveTab] = useState<
    "Profile" | "Security" | "Notification"
  >("Profile");
  const tabButtons: Array<"Profile" | "Security" | "Notification"> = [
    "Profile",
    "Security",
    "Notification",
  ];
  return (
    <div>
      <DashboardHeaderTitle title="Account Settings" />

      {/* Tab buttons */}
      <div className="flex items-center gap-6 mt-8 relative">
        {tabButtons?.map((button) => (
          <button
            key={button}
            onClick={() => setActiveTab(button)}
            className={`text-xl font-medium transition-all cursor-pointer duration-300 border-b-[3px] pb-[9px] ${
              activeTab === button
                ? "text-white border-white"
                : "text-neutral-70 border-transparent"
            }`}
          >
            {button}
          </button>
        ))}
        <hr className="border border-neutral-115 w-full h-[1px] absolute top-[37.5px]" />
      </div>

      {activeTab === "Profile" && <Profile />}
      {activeTab === "Security" && <Security />}
      {activeTab === "Notification" && <Notification />}
    </div>
  );
};

export default Setting;
