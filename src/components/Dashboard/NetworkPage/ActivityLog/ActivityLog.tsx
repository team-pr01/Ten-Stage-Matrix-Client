/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetActivityHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Table from "../../../Reusable/Table/Table";

const ActivityLog = () => {
  const { data, isLoading } = useGetActivityHistoryQuery({});

  return (
    <div>
      <Table
        title="Activity Log"
        tableHeaders={["Date", "Description", "Amount"]}
        data={
          data?.data?.activities?.map((item: any) => ({
            date: formatDate(item?.created_at),
            description: item.description,
            amount: `$${(item?.metadata?.amount || 0).toFixed(5)}`,
          })) || []
        }
        isLoading={isLoading}
      />
    </div>
  );
};

export default ActivityLog;
