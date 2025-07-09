import { useState } from "react";
import Profile from "../../../components/Dashboard/SettingPage/Profile/Profile";
import Security from "../../../components/Dashboard/SettingPage/Security/Security";
import Tab from "../../../components/Reusable/Tab/Tab";

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
      <Tab
        tabs={tabButtons}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "Profile" && <Profile />}
      {activeTab === "Security" && <Security />}
    </div>
  );
};

export default Setting;
