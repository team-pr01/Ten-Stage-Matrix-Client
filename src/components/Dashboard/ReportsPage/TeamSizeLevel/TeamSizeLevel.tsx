/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetEarningHistoryQuery } from "../../../../redux/Features/User/userApi";
import { formatDate } from "../../../../utile/formatDate";
import Table from "../../../Reusable/Table/Table";

const TeamSizeLevel = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { data, isLoading, isFetching } = useGetEarningHistoryQuery({
    page,
    limit,
  });
  console.log(data);
  return (
    <div className="font-Outfit mt-10">
      <Table
        title="Earning Activity"
        tableHeaders={["Serial No", "Description", "Date", "Amount"]}
        classNames="w-full"
        data={
          data?.data?.activities?.map((item: any, index: number) => ({
            serial_no: (page - 1) * limit + index + 1,
            description: item.description,
            date: formatDate(item?.created_at),
            amount: `$${item?.metadata?.amount?.toFixed(5)}`,
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

export default TeamSizeLevel;
