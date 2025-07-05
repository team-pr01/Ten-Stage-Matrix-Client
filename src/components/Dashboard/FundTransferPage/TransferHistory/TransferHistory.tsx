/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetTransferHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Table from "../../../Reusable/Table/Table";

const TransferHistory = () => {
  const { data, isLoading } = useGetTransferHistoryQuery({});

  const tableHeaders = [
    "Transfer Id",
    "Recipient Name",
    "Recipient Email",
    "Date",
    "Amount",
    "Status",
  ];

  const mappedData =
    data?.data?.transfers?.map((item: any) => ({
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
      />
    </div>
  );
};

export default TransferHistory;
