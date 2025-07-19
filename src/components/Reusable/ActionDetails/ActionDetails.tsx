/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import { useGetTransactionHistoryQuery } from "../../../redux/Features/User/userApi";
import { formatDate } from "../../../utile/formatDate";
import Table from "../Table/Table";

const ActionDetails = ({title} : {title: string}) => {
  const { data, isLoading } = useGetTransactionHistoryQuery({});
  const location = useLocation();

  const filterType =
    location.pathname === "/dashboard/deposit" ? "Deposit" : "Withdrawal";
  const filteredData = data?.data?.transactions?.filter(
    (item: any) => item?.type === filterType
  );

  return (
    <div>
      <Table
        title={title}
        tableHeaders={[
          "Serial No",
          "Transaction Id",
          "Type",
          "Date",
          "Amount",
          "Status",
        ]}
        data={
          filteredData?.map((item: any, index: number) => ({
            serial_no: index + 1,
            transaction_id: item._id,
            type: item.type,
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
      />
    </div>
  );
};

export default ActionDetails;
