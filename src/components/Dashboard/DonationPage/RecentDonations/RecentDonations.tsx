/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetDonationHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Table from "../../../Reusable/Table/Table";

const RecentDonations = () => {
  const { data, isLoading } = useGetDonationHistoryQuery({});
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
            serial_no: index + 1,
            transaction_id: item._id,
            date: formatDate(item?.created_at),
            amount: `$${item?.amount?.toFixed(5)}`,
            status: (<p className="capitalize">{item?.status}</p>),
          })) || []
        }
        isLoading={isLoading}
      />
    </div>
  );
};

export default RecentDonations;
