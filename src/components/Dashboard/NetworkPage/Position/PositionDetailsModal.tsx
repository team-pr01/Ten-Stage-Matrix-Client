/* eslint-disable @typescript-eslint/no-explicit-any */

import { RxCross1 } from "react-icons/rx";
import Loader from "../../../Shared/Loader/Loader";

const PositionDetailsModal = ({
  isDataModalOpen,
  setIsDataModalOpen,
  data,
  isLoading,
}: {
  isDataModalOpen: boolean;
  setIsDataModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  isLoading: boolean;
}) => {

  return (
    <div
      className={`${
        isDataModalOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#00000066] backdrop-blur-sm flex items-center justify-center transition-all duration-300 font-Outfit`}
    >
      <div
        style={{
          boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
        }}
        className={`${
          isDataModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] sm:w-[80%] md:w-[30%] border-2 border-neutral-115/20 bg-[#ffffff08] rounded-[24px] p-4 transition-all duration-300 flex flex-col gap-6`}
      >
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl text-white font-medium">All Members</h1>
          <RxCross1
            className="text-lg text-neutral-40 rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsDataModalOpen(false)}
          />
        </div>
        <div className="flex flex-col gap-[26px]">
          {isLoading ? (
            <Loader size="size-10 mt-5" />
          ) : (
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-neutral-90 text-left text-white font-semibold">
                    <th className="p-3 w-1/2 whitespace-nowrap capitalize">
                      Name
                    </th>
                    <th className="p-3 w-1/2 whitespace-nowrap capitalize">
                      Stage
                    </th>
                    <th className="p-3 w-1/2 whitespace-nowrap capitalize">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="w-full">
                  {Array.isArray(data) && data.length > 0 ? (
                    data.map((member: any, index: number) => (
                      <tr
                        key={index}
                        className="border-b border-neutral-90 text-neutral-55 hover:bg-white/5 transition-all duration-200"
                      >
                        <td className="p-3 w-1/2 whitespace-nowrap">
                          {member?.name || "N/A"}
                        </td>
                        <td className="p-3 w-1/2 whitespace-nowrap">
                          {member?.stage ?? "N/A"}
                        </td>
                        <td className="p-3 w-1/2 whitespace-nowrap capitalize">
                          {member?.status ?? "N/A"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={3}
                        className="text-white mt-4 p-4 text-center"
                      >
                        No data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PositionDetailsModal;
