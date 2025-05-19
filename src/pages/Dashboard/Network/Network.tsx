import { useState } from "react";
import ActivityLog from "../../../components/Dashboard/NetworkPage/ActivityLog/ActivityLog";
import { IMAGES } from "../../../assets";
import ReferralProgress from "../../../components/Dashboard/NetworkPage/ReferralProgress/ReferralProgress";

const Network = () => {
  const [activeTab, setActiveTab] = useState<
    "Network"
  >("Network");
  const tabButtons: Array<"Network"> = ["Network"];
  return (
    <div className="font-Outfit">
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

      {activeTab === "Network" && (
        <div className="mt-7">
          <h1 className="text-white font-medium text-2xl mb-5">
            Referral Details
          </h1>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-6 px-[18px] h-fit w-full md:w-[40%] xl:w-[20%]">
                <img src={IMAGES.dummyProfileImg} alt="" className="rounded-[10px] w-[298px] h-[185px]" />
                <h1 className="text-white text-lg font-medium mt-2">Thomas Shelvi</h1>
                <p className="text-neutral-110 text-sm mt-[3px]">Actor</p>
           </div>
            <ActivityLog />
          </div>
          <ReferralProgress/>
        </div>
      )}

    </div>
  );
};

export default Network;
