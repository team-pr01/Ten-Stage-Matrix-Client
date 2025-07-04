import { useState } from "react";
import Profile from "../../../components/Dashboard/SettingPage/Profile/Profile";
import Security from "../../../components/Dashboard/SettingPage/Security/Security";

const Setting = () => {
  const [activeTab, setActiveTab] = useState<
    "Profile" | "Security"
  >("Profile");
  const tabButtons: Array<"Profile" | "Security"> = [
    "Profile",
    "Security",
  ];
  return (
    <div>
      {/* Tab buttons */}
      <div className="relative mt-8 overflow-x-auto">
        <div className="flex items-center gap-6 flex-nowrap min-w-max">
          {tabButtons?.map((button) => (
            <button
              key={button}
              onClick={() => setActiveTab(button)}
              className={`text-xl font-medium transition-all cursor-pointer duration-300 border-b-[3px] pb-[9px] whitespace-nowrap ${
                activeTab === button
                  ? "text-white border-white"
                  : "text-neutral-70 border-transparent"
              }`}
            >
              {button}
            </button>
          ))}
        </div>
        <hr className="border border-neutral-115 w-full h-[1px] absolute top-[37.5px] left-0" />
      </div>

      {activeTab === "Profile" && <Profile />}
      {activeTab === "Security" && <Security />}
    </div>
  );
};

export default Setting;
