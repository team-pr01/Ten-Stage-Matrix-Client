/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type TabSwitcherProps = {
  tabs: string[];
  activeTab: string;
  setActiveTab: any;
};

const Tab: React.FC<TabSwitcherProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="font-Outfit w-full">
      {/* Scrollable tab buttons */}
      <div className="relative overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-6 whitespace-nowrap min-w-max px-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-nowrap text-xl font-medium transition-all cursor-pointer duration-300 pb-[9px] ${
                activeTab === tab ? "text-white" : "text-neutral-70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Gradient Line */}
      <div className="w-full">
        <div className="h-[1px] w-full bg-[linear-gradient(to_right,transparent_0%,#f97316_25%,#22c55e_75%,transparent_100%)]"></div>
      </div>
    </div>
  );
};

export default Tab;
