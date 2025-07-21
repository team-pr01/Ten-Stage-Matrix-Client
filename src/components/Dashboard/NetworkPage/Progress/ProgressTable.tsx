/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Loader from "../../../Shared/Loader/Loader";
import ProgressDataModal from "./ProgressDataModal";

const ProgressTable = ({ data, isLoading }: { data: any, isLoading: boolean }) => {
  const [selectedTeamData, setSelectedTeamData] = useState<any[]>([]);
  const [isDataModalOpen, setIsDataModalOpen] = useState<boolean>(false);
  return (
    <div>
      <div
        style={{
          boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
          backdropFilter: "blur(5.05px)",
        }}
        className={`min-h-[350px] rounded-[28px] border-2 border-neutral-155 bg-neutral-155 flex flex-col p-5 xl:p-[30px] font-Outfit w-full h-full overflow-y-auto custom-scrollbar `}
      >
        <h1 className="text-2xl font-medium text-white">Your Progress</h1>
        <div className="flex flex-col gap-[26px] mt-6">
          {isLoading ? (
            <Loader size="size-10 mt-5" />
          ) : (
            <div className="overflow-x-auto custom-scrollbar">
              <table className="min-w-[600px] w-full text-white">
                <thead>
                  <tr className="border-b border-neutral-90 text-left">
                    <th className="p-3 whitespace-nowrap capitalize">Stage</th>
                    <th className="p-3 whitespace-nowrap capitalize">Line 1</th>
                    <th className="p-3 whitespace-nowrap capitalize">Line 2</th>
                    <th className="p-3 whitespace-nowrap capitalize">Line 3</th>
                    <th className="p-3 whitespace-nowrap capitalize">
                      Active Referrals
                    </th>
                    <th className="p-3 whitespace-nowrap capitalize">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {Object.keys(data || {}).length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-white mt-4 p-4 text-center"
                      >
                        No data found
                      </td>
                    </tr>
                  ) : (
                    Object.entries(data).map(
                      ([stage, stageData]: [string, any]) => {

                        return (
                          <tr
                            key={stage}
                            className="border-b border-neutral-90 text-neutral-55 hover:bg-white/5 transition-all duration-200"
                          >
                            <td className="p-3 whitespace-nowrap">{`Stage ${stage}`}</td>
                            <td
                              onClick={() => {
                                setIsDataModalOpen(true);
                                setSelectedTeamData(stageData?.left?.users);
                              }}
                              className="p-3 whitespace-nowrap cursor-pointer"
                            >
                              {stageData?.left?.count}
                            </td>
                            <td
                              onClick={() => {
                                setIsDataModalOpen(true);
                                setSelectedTeamData(stageData?.center?.users);
                              }}
                              className="p-3 whitespace-nowrap cursor-pointer"
                            >
                              {stageData?.center?.count}
                            </td>
                            <td
                              onClick={() => {
                                setIsDataModalOpen(true);
                                setSelectedTeamData(stageData?.right?.users);
                              }}
                              className="p-3 whitespace-nowrap cursor-pointer"
                            >
                              {stageData?.right?.count}
                            </td>
                            <td
                              onClick={() => {
                                setIsDataModalOpen(true);
                                setSelectedTeamData(stageData?.active_referral_list);
                              }}
                              className="p-3 whitespace-nowrap cursor-pointer"
                            >
                              {stageData?.active_referral_count}
                            </td>
                            <td
                              onClick={() => {
                                setIsDataModalOpen(true);
                                setSelectedTeamData(stageData?.active_referral_list);
                              }}
                              className="p-3 whitespace-nowrap cursor-pointer"
                            >
                              {stageData?.progressing_msg}
                            </td>
                          </tr>
                        );
                      }
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <ProgressDataModal
        isDataModalOpen={isDataModalOpen}
        setIsDataModalOpen={setIsDataModalOpen}
        data={selectedTeamData}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ProgressTable;
