/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../../assets";
import { useGetLevelProgressPositionQuery } from "../../../../redux/Features/User/userApi";
import PositionDetailsModal from "./PositionDetailsModal";
import { useState } from "react";

const Position = () => {
  const [isDataModalOpen, setIsDataModalOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<any[]>([]);
  const { data, isLoading } = useGetLevelProgressPositionQuery({});

  return (
    <div className="min-h-screen">
      <div className="font-Outfit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-center">
        <button
          onClick={() => {
            setSelectedData(data?.data?.position?.left?.team);
            setIsDataModalOpen(true);
          }}
          className="p-[2px] rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient2 h-[210px] cursor-pointer"
        >
          <div className="bg-neutral-10 rounded-[28px] h-full">
            <div
              style={{
                boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
                backdropFilter: "blur(5.05px)",
              }}
              className="rounded-[28px] border border-primary-50 bg-neutral-90/10 p-[30px] flex flex-col gap-3 items-center text-center h-full"
            >
              <img src={ICONS.position} alt="" className="size-10" />
              <div className="space-y-[6px]">
                <h1 className="text-xl font-medium text-white">Line 1</h1>
                <h1 className="text-neutral-160">
                  Network Size: {data?.data?.position?.left?.team_count}
                </h1>
                <p className="text-neutral-160">
                  Active members:{" "}
                  {data?.data?.position?.left?.active_referral_count}
                </p>
              </div>
            </div>
          </div>
        </button>
        <button
          onClick={() => {
            setSelectedData(data?.data?.position?.center?.team);
            setIsDataModalOpen(true);
          }}
          className="p-[2px] rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient2 h-[210px] cursor-pointer"
        >
          <div className="bg-neutral-10 rounded-[28px] h-full">
            <div
              style={{
                boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
                backdropFilter: "blur(5.05px)",
              }}
              className="rounded-[28px] border border-primary-50 bg-neutral-90/10 p-[30px] flex flex-col gap-3 items-center text-center h-full"
            >
              <img src={ICONS.position} alt="" className="size-10" />
              <div className="space-y-[6px]">
                <h1 className="text-xl font-medium text-white">Line 2</h1>
                <h1 className="text-neutral-160">
                  Network Size: {data?.data?.position?.center?.team_count}
                </h1>
                <p className="text-neutral-160">
                  Active members:{" "}
                  {data?.data?.position?.center?.active_referral_count}
                </p>
              </div>
            </div>
          </div>
        </button>
        <button
          onClick={() => {
            setSelectedData(data?.data?.position?.right?.team);
            setIsDataModalOpen(true);
          }}
          className="p-[2px] rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient2 h-[210px] cursor-pointer"
        >
          <div className="bg-neutral-10 rounded-[28px] h-full">
            <div
              style={{
                boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
                backdropFilter: "blur(5.05px)",
              }}
              className="rounded-[28px] border border-primary-50 bg-neutral-90/10 p-[30px] flex flex-col gap-3 items-center text-center h-full"
            >
              <img src={ICONS.position} alt="" className="size-10" />
              <div className="space-y-[6px]">
                <h1 className="text-xl font-medium text-white">Line 3</h1>
                <h1 className="text-neutral-160">
                  Network Size: {data?.data?.position?.right?.team_count}
                </h1>
                <p className="text-neutral-160">
                  Active members:{" "}
                  {data?.data?.position?.right?.active_referral_count}
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
      <PositionDetailsModal
        isDataModalOpen={isDataModalOpen}
        setIsDataModalOpen={setIsDataModalOpen}
        data={selectedData}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Position;
