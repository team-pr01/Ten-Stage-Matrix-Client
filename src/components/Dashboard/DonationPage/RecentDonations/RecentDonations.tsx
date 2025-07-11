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
          "Type",
          "Date",
          "Amount",
          "Status",
        ]}
        data={
          data?.data?.donations?.map((item: any, index: number) => ({
            serial_no: index + 1,
            transaction_id: item._id,
            type: item.type,
            date: formatDate(item?.created_at),
            amount: `$${item?.amount?.toFixed(5)}`,
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
      />
      </div>
  );
};

export default RecentDonations;
