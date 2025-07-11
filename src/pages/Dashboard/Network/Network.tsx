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
import Tab from "../../../components/Reusable/Tab/Tab";
import Progress from "../../../components/Dashboard/NetworkPage/Progress/Progress";

const Network = () => {
  const { data } = useGetUserProfileQuery({});
  const { data: userDetails } = useGetUserDetailsQuery({});

  const [activeTab, setActiveTab] = useState<
    "Network Activity" | "Levels" | "Position" | "Progress"
  >("Network Activity");
  const tabButtons: Array<"Network Activity" | "Levels" | "Position" | "Progress"> = [
    "Network Activity",
    "Levels",
    "Position",
    "Progress",
  ];

  return (
    <div className="font-Outfit">
      <Tab
        tabs={tabButtons}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

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

      {activeTab === "Progress" && (
        <div className="mt-7">
          <Progress />
        </div>
      )}
    </div>
  );
};

export default Network;
