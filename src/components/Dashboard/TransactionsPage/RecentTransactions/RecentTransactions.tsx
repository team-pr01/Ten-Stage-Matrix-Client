/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetTransactionHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Table from "../../../Reusable/Table/Table";

const RecentTransactions = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { data, isLoading, isFetching } = useGetTransactionHistoryQuery({
    page,
    limit,
  });

  return (
    <div>
      <Table
        title="Recent Transaction"
        tableHeaders={["Transaction Type", "Date", "Amount", "Status"]}
        data={
          data?.data?.transactions?.map((item: any) => ({
            transaction_type: item.type,
            date: formatDate(item?.created_at),
            amount: `$${item?.amount.toFixed(5)}`,
            status:
              item?.status === 1
                ? "Completed"
                : item?.status === 2
                ? "Pending"
                : item?.status === 3
                ? "Rejected"
                : item?.status === 4
                ? "Processing"
                : "",
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

export default RecentTransactions;
