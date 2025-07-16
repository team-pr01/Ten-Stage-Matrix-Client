import { useState } from "react";
import Loader from "../../../Shared/Loader/Loader";
import ProgressDataModal from "./ProgressDataModal";

const ProgressTable = () => {
  const [isDataModalOpen, setIsDataModalOpen] = useState<boolean>(false);
  const isLoading = false;
  const data = [6];
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
                      Upgrade Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data?.length < 1 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="text-white mt-4 p-4 text-center"
                      >
                        No data found
                      </td>
                    </tr>
                  ) : (
                    <>
                      <tr className="border-b border-neutral-90 text-neutral-55">
                        <td className="p-3 whitespace-nowrap">Stage 1</td>
                        <td
                          onClick={() => {
                            setIsDataModalOpen(true);
                          }}
                          className="p-3 whitespace-nowrap cursor-pointer"
                        >
                          2
                        </td>
                        <td
                          onClick={() => {
                            setIsDataModalOpen(true);
                          }}
                          className="p-3 whitespace-nowrap cursor-pointer"
                        >
                          3
                        </td>
                        <td
                          onClick={() => {
                            setIsDataModalOpen(true);
                          }}
                          className="p-3 whitespace-nowrap cursor-pointer"
                        >
                          0
                        </td>
                        <td
                          onClick={() => {
                            setIsDataModalOpen(true);
                          }}
                          className="p-3 whitespace-nowrap cursor-pointer"
                        >
                          5
                        </td>
                        <td className="p-3 whitespace-nowrap">Pending</td>
                      </tr>
                    </>
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
        data={data}
      />
    </div>
  );
};

export default ProgressTable;
