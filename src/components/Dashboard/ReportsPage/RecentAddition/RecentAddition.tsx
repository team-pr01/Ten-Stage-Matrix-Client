/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetTeamTreeQuery } from "../../../../redux/Features/User/userApi";
import Loader from "../../../Shared/Loader/Loader";

const RecentAddition = () => {
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedPosition, setSelectedPosition] = useState("All Positions");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const { data, isLoading, isFetching } = useGetTeamTreeQuery({
    stage: selectedStage,
    status: selectedStatus,
    position: selectedPosition,
  });

  const stages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const positions = ["left", "right", "center"];
  return (
    <div className="font-Outfit rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] w-full h-full overflow-y-auto custom-scrollbar">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0">
        <h1 className="text-2xl font-medium text-white">Total Team Tree</h1>

        <div className="flex flex-col md:flex-row justify-end items-center gap-4 w-full md:w-fit">
          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value)}
            className="bg-primary-40 text-white border border-white rounded-full px-5 py-3 w-full md:w-fit"
          >
            <option>All Stages</option>
            {stages.map((stage) => (
              <option key={stage} className="">
                {stage}
              </option>
            ))}
          </select>

          <select
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
            className="bg-primary-40 text-white border border-white rounded-full px-5 py-3 w-full md:w-fit"
          >
            <option>All Positions</option>
            {positions.map((position) => (
              <option key={position} className="capitalize">
                {position}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-primary-40 text-white border border-white rounded-full px-5 py-3 w-full md:w-fit"
          >
            <option>All Status</option>
            <option value={"active"}>Active</option>
            <option value={"inactive"}>Inactive</option>
          </select>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        {isLoading || isFetching ? (
          <Loader size="size-10 mt-5" />
        ) : (
         <div className="overflow-auto max-w-full">
  <table className="min-w-[900px] w-full text-white table-fixed">
    <thead className="z-10">
      <tr className="border-b border-neutral-110 text-left">
        <th className="py-3 px-4 whitespace-nowrap">Serial No</th>
        <th className="py-3 px-4 whitespace-nowrap">Name</th>
        <th className="py-3 px-4 whitespace-nowrap">Email</th>
        <th className="py-3 px-4 whitespace-nowrap">Status</th>
        <th className="py-3 px-4 whitespace-nowrap">Position</th>
        <th className="py-3 px-4 whitespace-nowrap">Referral Code</th>
        <th className="py-3 px-4 whitespace-nowrap">Stage</th>
        <th className="py-3 px-4 whitespace-nowrap">Referred By</th>
        <th className="py-3 px-4 whitespace-nowrap">Joined</th>
      </tr>
    </thead>
    <tbody>
      {data?.data?.all_members?.length < 1 ? (
        <tr>
          <td colSpan={9} className="text-center py-4 text-white">
            No data found
          </td>
        </tr>
      ) : (
        data?.data?.all_members?.map((item: any, index: number) => (
          <tr key={index} className="border-b border-neutral-110/50">
            <td className="py-3 px-4 whitespace-nowrap">{index + 1}</td>
            <td className="py-3 px-4 whitespace-nowrap capitalize">
              {item?.name}
            </td>
            <td className="py-3 px-4 whitespace-nowrap">{item?.email}</td>
            <td className="py-3 px-4 whitespace-nowrap capitalize">
              {item?.status}
            </td>
            <td className="py-3 px-4 whitespace-nowrap capitalize">
              {item?.position}
            </td>
            <td className="py-3 px-4 whitespace-nowrap">
              {item?.referral_code}
            </td>
            <td className="py-3 px-4 whitespace-nowrap">
              Stage {item?.stage}
            </td>
            <td className="py-3 px-4 whitespace-nowrap">
              {item?.referral_by?.name}, {item?.referral_by?.email}
            </td>
            <td className="py-3 px-4 whitespace-nowrap">
              {item?.joined}
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
