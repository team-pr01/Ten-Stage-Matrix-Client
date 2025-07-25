/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetTransferHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Table from "../../../Reusable/Table/Table";

const TransferHistory = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { data, isLoading, isFetching } = useGetTransferHistoryQuery({
    page,
    limit,
  });

  const tableHeaders = [
    "Serial No",
    "Transfer Id",
    "Recipient Name",
    "Recipient Email",
    "Date",
    "Amount",
    "Status",
  ];

  const mappedData =
    data?.data?.transfers?.map((item: any, index: number) => ({
      serial_no: (page - 1) * limit + index + 1,
      transfer_id: item?.counterpart?.id,
      recipient_name: item?.counterpart?.name,
      recipient_email: item?.counterpart?.email,
      date: formatDate(item?.created_at),
      amount: `$${item?.amount}`,
      status: item?.status,
    })) || [];

  return (
    <div className="mt-6">
      <Table
        title="Transfer History"
        tableHeaders={tableHeaders}
        data={mappedData}
        isLoading={isLoading}
        isFetching={isFetching}
        page={page}
        setPage={setPage}
        AllData={data}
      />
    </div>
  );
};

export default TransferHistory;
