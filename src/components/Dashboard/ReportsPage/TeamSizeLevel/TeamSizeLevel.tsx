/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetEarningHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Table from "../../../Reusable/Table/Table";

const TeamSizeLevel = () => {
  const { data, isLoading } = useGetEarningHistoryQuery({});
  console.log(data);
  return (
    <div className="font-Outfit mt-10">
      <Table
        title="Recent Activity"
        tableHeaders={["Serial No", "Description", "Date", "Type", "Amount"]}
        classNames="w-full"
        data={
          data?.data?.activities?.map((item: any, index: number) => ({
            serial_no: index + 1,
            description: item.description,
            date: formatDate(item?.created_at),
            type: item.type,
            amount: `$${item?.metadata?.amount?.toFixed(5)}`,
          })) || []
        }
        isLoading={isLoading}
      />
    </div>
  );
};

export default TeamSizeLevel;
