/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetActivityHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Table from "../../../Reusable/Table/Table";

const ActivityLog = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { data, isLoading, isFetching } = useGetActivityHistoryQuery({
    page,
    limit,
  });

  return (
    <div>
      <Table
        title="Activity Log"
        tableHeaders={["Serial No", "Date", "Description", "Amount"]}
        data={
          data?.data?.activities?.map((item: any, index: number) => ({
            serial_no: (page - 1) * limit + index + 1,
            date: formatDate(item?.created_at),
            description: (
              <td className="w-[200px]">
                <p className="break-words line-clamp-none xl:line-clamp-2">
                  {item.description}
                </p>
              </td>
            ),
            amount: `$${Number(item?.metadata?.amount || 0).toFixed(5)}`,
          })) || []
        }
        isLoading={isLoading}
        isFetching={isFetching}
        AllData={data}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default ActivityLog;
