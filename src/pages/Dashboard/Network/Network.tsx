import { useState } from "react";
import ReferralProgress from "../../../components/Dashboard/NetworkPage/ReferralProgress/ReferralProgress";
import {
  useGetUserDetailsQuery,
  useGetUserProfileQuery,
} from "../../../redux/Features/User/userApi";
import ReferralCode from "../../../components/Dashboard/DashboardHomePage/ReferralInfo/ReferralCode";
import ReferralActivity from "../../../components/Dashboard/TransactionsPage/ReferralActivity/ReferralActivity";
import Levels from "../Levels/Levels";
import Position from "../../../components/Dashboard/NetworkPage/Position/Position";

const Network = () => {
  const { data } = useGetUserProfileQuery({});
  const { data: userDetails } = useGetUserDetailsQuery({});

  const [activeTab, setActiveTab] = useState<
    "Network Activity" | "Levels" | "Position"
  >("Network Activity");
  const tabButtons: Array<"Network Activity" | "Levels" | "Position"> = [
    "Network Activity",
    "Levels",
    "Position",
  ];
  return (
    <div className="font-Outfit">
      {/* Tab buttons */}
      <div className="flex items-center gap-6 relative">
        {tabButtons?.map((button) => (
          <button
            key={button}
            onClick={() => setActiveTab(button)}
            className={`text-xl font-medium transition-all cursor-pointer duration-300 pb-[9px] ${
              activeTab === button ? "text-white" : "text-neutral-70 "
            }`}
          >
            {button}
          </button>
        ))}
        {/* <hr className="border border-neutral-115 w-full h-[1px] absolute top-[37.5px]" /> */}
      </div>
      <div className=" w-full">
        <div className="h-[1px] w-full bg-[linear-gradient(to_right,transparent_0%,#f97316_25%,#22c55e_75%,transparent_100%)]"></div>
      </div>

      {activeTab === "Network Activity" && (
        <>
          <div className="mt-7">
            <h1 className="text-white font-medium text-2xl mb-5">
              Referral Code
            </h1>
            <div className="flex flex-col 2xl:flex-row gap-5">
              <div className="w-full md:w-[355px]">
                <ReferralCode
                  referralCode={userDetails?.data?.profile?.referral_code}
                />
              </div>
              <div className="w-full xl:w-full 2xl:w-[700px] max-h-[500px]">
                <ReferralActivity />
              </div>
            </div>
          </div>
          <ReferralProgress
            profile={data?.data?.profile}
            earning={data?.data?.balances?.balance}
          />
        </>
      )}

      {activeTab === "Levels" && (
        <div className="mt-7">
          <Levels />
        </div>
      )}

      {activeTab === "Position" && (
        <div className="mt-7">
          <Position />
        </div>
      )}
    </div>
  );
};

export default Network;
