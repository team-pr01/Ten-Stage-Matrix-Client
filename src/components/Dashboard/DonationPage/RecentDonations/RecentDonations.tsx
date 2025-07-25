/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetDonationHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Table from "../../../Reusable/Table/Table";

const RecentDonations = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { data, isLoading, isFetching } = useGetDonationHistoryQuery({
    page,
    limit,
  });
  return (
    <div className="mt-16 h-fit">
      <Table
        title="Recent Donations"
        tableHeaders={[
          "Serial No",
          "Transaction Id",
          "Date",
          "Amount",
          "Status",
        ]}
        data={
          data?.data?.donations?.map((item: any, index: number) => ({
            serial_no: (page - 1) * limit + index + 1,
            transaction_id: item._id,
            date: formatDate(item?.created_at),
            amount: `$${item?.amount?.toFixed(5)}`,
            status: <p className="capitalize">{item?.status}</p>,
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

export default RecentDonations;
