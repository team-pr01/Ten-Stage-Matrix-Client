/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetLevelProgressPositionQuery } from "../../../../redux/Features/User/userApi";
import ProgressTable from "./ProgressTable";

const Progress = () => {
  const [selectedData, setSelectedData] = useState<any[]>([]);
  const { data, isLoading } = useGetLevelProgressPositionQuery({});
  console.log(data);
  return (
    <div className="font-Outfit min-h-screen">
      <ProgressTable
        data={data?.data?.progress?.stage_counts}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Progress;
