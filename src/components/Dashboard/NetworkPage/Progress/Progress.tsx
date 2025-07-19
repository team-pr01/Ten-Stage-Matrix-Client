/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetLevelProgressPositionQuery } from "../../../../redux/Features/User/userApi";
import ProgressTable from "./ProgressTable";

const Progress = () => {
  const { data, isLoading } = useGetLevelProgressPositionQuery({});
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
