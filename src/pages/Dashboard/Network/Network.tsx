import { useState } from "react";
import ReferralProgress from "../../../components/Dashboard/NetworkPage/ReferralProgress/ReferralProgress";
import {
  useGetUserDetailsQuery,
  useGetUserProfileQuery,
} from "../../../redux/Features/User/userApi";
import ReferralCode from "../../../components/Dashboard/DashboardHomePage/ReferralInfo/ReferralCode";
import ReferralActivity from "../../../components/Dashboard/TransactionsPage/ReferralActivity/ReferralActivity";

const Network = () => {
  const { data } = useGetUserProfileQuery({});
  const { data: userDetails } = useGetUserDetailsQuery({});

  const [activeTab, setActiveTab] =
    useState<"Network Activity">("Network Activity");
  const tabButtons: Array<"Network Activity"> = ["Network Activity"];
  return (
    <div className="font-Outfit">
      {/* Tab buttons */}
      <div className="flex items-center gap-6 relative">
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

      {activeTab === "Network Activity" && (
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
            <div className="w-full xl:w-full 2xl:w-[700px]">
              <ReferralActivity />
            </div>
          </div>
        </div>
      )}
      <ReferralProgress
        profile={data?.data?.profile}
        earning={data?.data?.balances?.balance}
      />
    </div>
  );
};

export default Network;
