/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../assets";
import { useGetLevelProgressPositionQuery } from "../../../redux/Features/User/userApi";
import { useState } from "react";
import LevelDataModal from "./LevelDataModal";
import Loader from "../../../components/Shared/Loader/Loader";

const Levels = () => {
  const [isDataModalOpen, setIsDataModalOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<any[]>([]);
  const { data, isLoading } = useGetLevelProgressPositionQuery({});
  return (
    <div>
      {isLoading ? (
        <Loader size="size-10" />
      ) : data?.data?.level_chain?.length > 0 ? (
        <div className="font-Outfit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 min-h-screen">
          {data?.data?.level_chain?.map((level: any) => (
            <button
              key={level?.level}
              onClick={() => {
                setSelectedData(level?.team);
                setIsDataModalOpen(true);
              }}
              className="p-[2px] rounded-[28px] hover:scale-105 transition-all duration-300 ease-in-out bg-border-gradient2 h-fit cursor-pointer"
            >
              <div className="bg-neutral-10 rounded-[28px]">
                <div
                  style={{
                    boxShadow:
                      "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
                    backdropFilter: "blur(5.05px)",
                  }}
                  className="rounded-[28px] border border-primary-50 bg-neutral-90/10 p-[30px] flex flex-col items-center text-center h-fit"
                >
                  <img src={ICONS.userLevel} alt="" className="size-[60px]" />
                  <div className="space-y-[6px] mt-3">
                    <h1 className="text-xl font-medium text-white">
                      Level {level?.level}
                    </h1>
                    <h1 className="text-neutral-160">
                      Network Size: {level?.team?.length}
                    </h1>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center text-white font-Outfit text-xl mt-10">
          No data found
        </div>
      )}

      <LevelDataModal
        isDataModalOpen={isDataModalOpen}
        setIsDataModalOpen={setIsDataModalOpen}
        data={selectedData}
      />
    </div>
  );
};

export default Levels;
