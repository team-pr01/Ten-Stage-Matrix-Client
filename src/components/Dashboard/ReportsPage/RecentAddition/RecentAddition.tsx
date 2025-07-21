/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetTeamTreeQuery } from "../../../../redux/Features/User/userApi";
import Loader from "../../../Shared/Loader/Loader";

const RecentAddition = () => {
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const { data, isLoading, isFetching } = useGetTeamTreeQuery({
    stage: selectedStage,
    status: selectedStatus,
  });

  const stages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div
      style={{
        boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
        backdropFilter: "blur(5.05px)",
      }}
      className="font-Outfit rounded-[28px] border-2 border-neutral-155 bg-neutral-155 flex flex-col py-7 px-[34px] max-w-full lg:max-w-[1000px] xl:max-w-[920px] 2xl:max-w-full h-full overflow-y-auto custom-scrollbar"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0">
        <h1 className="text-2xl font-medium text-white">Total Team Tree</h1>

        <div className="flex flex-col md:flex-row justify-end items-center gap-4 w-full md:w-fit">
          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value)}
            className="px-5 py-3 rounded-xl bg-neutral-25/10 text-white shadow-custom-dropdown hidden md:flex items-center gap-[14px] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <option value="" className="text-white">
              All Stages
            </option>
            {stages.map((stage) => (
              <option key={stage} value={stage} className="text-black">
                {stage}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-5 py-3 rounded-xl bg-neutral-25/10 text-white shadow-custom-dropdown hidden md:flex items-center gap-[14px] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <option value="" className="text-white">
              All Status
            </option>
            <option value="active" className="text-black">
              Active
            </option>
            <option value="inactive" className="text-black">
              Inactive
            </option>
          </select>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        {isLoading || isFetching ? (
          <Loader size="size-10 mt-5" />
        ) : (
          <div className="overflow-auto max-w-full">
            <table className=" w-full text-white">
              <thead className="z-10 text-nowrap">
                <tr className="border-b border-neutral-110 text-left">
                  <th className="py-3 px-4">Serial No</th>

                  <th className="py-3 px-4">Details</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Referral Code</th>
                  <th className="py-3 px-4">Stage</th>
                  <th className="py-3 px-4">Level</th>
                  <th className="py-3 px-4">Position</th>
                  <th className="py-3 px-4">Referred By</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.length < 1 ? (
                  <tr>
                    <td colSpan={9} className="text-center py-4 text-white">
                      No data found
                    </td>
                  </tr>
                ) : (
                  data?.data?.map((item: any, index: number) => (
                    <tr key={index} className="border-b border-neutral-110/50">
                      <td className="py-3 px-4">{index + 1}</td>

                      <td className="py-3 px-4 capitalize">
                        {item?.name}
                        <br />
                        {item?.email}
                      </td>
                      <td className="py-3 px-4 capitalize">{item?.status}</td>
                      <td className="py-3 px-4">{item?.referral_code}</td>
                      <td className="py-3 px-4 text-nowrap">Stage {item?.stage}</td>
                      <td className="py-3 px-4">{item?.level}</td>
                      <td className="py-3 px-4 capitalize">
                        {item?.position === "left"
                          ? "Line 1"
                          : item?.position === "right"
                          ? "Line 3"
                          : item?.position === "center"
                          ? "Line 2"
                          : item?.position}
                      </td>
                      <td className="py-3 px-4">
                        <span className="capitalize">
                          {item?.referred_by?.name}
                        </span>{" "}
                        <br /> {item?.referred_by?.email}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentAddition;
