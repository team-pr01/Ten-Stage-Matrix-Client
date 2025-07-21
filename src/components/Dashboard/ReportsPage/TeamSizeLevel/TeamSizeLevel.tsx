/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetEarningHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Table from "../../../Reusable/Table/Table";

const TeamSizeLevel = () => {
  const { data, isLoading } = useGetEarningHistoryQuery({});
  return (
    <div className="font-Outfit mt-10">
      <Table
        title="Earning Activity"
        tableHeaders={["Serial No", "Description", "Date", "Amount"]}
        classNames="w-full"
        data={
          data?.data?.activities?.map((item: any, index: number) => ({
            serial_no: index + 1,
            description: item.description,
            date: formatDate(item?.created_at),
            amount: `$${item?.metadata?.amount?.toFixed(5)}`,
          })) || []
        }
        isLoading={isLoading}
      />
    </div>
  );
};

export default TeamSizeLevel;
